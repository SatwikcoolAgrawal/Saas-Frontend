import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useEffect, useState } from 'react';
import api from '../api/axios';
import { decodeToken } from 'react-jwt';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NSxugSCZn81mFB2wStinhtyHRJ8B8Vi20Nd8OepJisXhwSsFaX9J3s9VeDlyYGH6d3MIUhwBnGe5uZYCYyXbSuE0072fSRdEH');

export default function PreCheckout() {

  const [options, setOption] = useState({
    // passing the client secret obtained from the server
    clientSecret: null,
  });
  useCallback(useEffect(() => {

    const fetchClient = async () => {

      const AccessToken = decodeToken(sessionStorage.getItem('access-token'));
      console.log(AccessToken);

      const customer = await api.post('/api/payment/create-customer', { email: AccessToken.email, name: AccessToken.name });
      if (!customer) {

        return;

      }
      console.log(customer);


      const res = await api.post('/api/payment/create-subscriptions', { customerId: customer.data.customerId, priceId: 'price_1ODR9gSCZn81mFB2HKKpzgQ7' });

      console.log(res);

      if (!res) {
        return;

      }

      setOption({ clientSecret: res.data.clientSecret });


    }

    fetchClient();


  }, [setOption]), []);



  return (<>
    {options.clientSecret ? <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements> : <></>}
  </>

  );
};