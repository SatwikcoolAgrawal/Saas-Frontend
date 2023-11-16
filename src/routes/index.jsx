
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Plans';
import Product from '../pages/Product';
import Login from '../pages/LoginSignup';

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <UserLayout>
                    <Outlet />
                </UserLayout>
            ),
            children: [
                { element: <Navigate to="/home" />, index: true },
                { path: "/home", element: <Home /> },
                { path: '/plans/:service', element: <Product /> },

                // {path:"/cart",element:<Cart/>},
            ]
        },
        { path: "/login", element: <Login /> },
        // {path:"/signup",element:<Signup/>},
        // {path:"/checkout",element:<Checkout/>},
        // {
        //   element: (
        //     <DashboardLayout>
        //       <Suspense>
        //         <Outlet />
        //       </Suspense>
        //     </DashboardLayout>
        //   ),
        //   children: [
        //     { element: <IndexPage />, index: true },
        //     { path: 'user', element: <UserPage /> },
        //     { path: 'products', element: <ProductsPage /> },
        //     { path: 'blog', element: <BlogPage /> },
        //   ],
        // },
        // {
        //   path: '/404',
        //   element: <Page404 />,
        // },
        // {
        //   path: '*',
        //   element: <Navigate to="/home" replace />,
        // },
    ]);

    return routes;
}