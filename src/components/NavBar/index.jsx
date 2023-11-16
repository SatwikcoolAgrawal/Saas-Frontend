import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>SUBSCRIPTIONIZER</h2>
      <h1><Link style={{textDecoration: 'none'}} to='/'>Our Plans</Link></h1>
      <Link to='/Login'><button>Login</button></Link>
      <Link to='/Cart'><button>Cart</button></Link>
    </div>
  )
}

export default Navbar