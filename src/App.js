import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar'
// import Plans from './pages/Plans'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import LoginSignup from './pages/LoginSignup'
import Router from "./routes";

import theme from "./theme";


function App() {
  return (
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
        {/* <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
        <Routes>         
        <Route path='/home' element={<Plans/>}/>
        <Route path="/plan/:service" element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/> 
          </Routes>
        </Suspense> */}
        <Router/>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
  );
}

export default App;
