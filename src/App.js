import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar'
import Plans from './pages/Plans'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'


import theme from "./theme";
import SignUp from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {/* <Pace color={theme.palette.primary.light} /> */}
          <Suspense fallback={<Fragment />}>
            <Routes>

              <Route path='/' element={<Plans />} />
              <Route path="product" element={<Product />}>
                <Route path='productid' element={<Product />} />
              </Route>
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<LoginSignup />} />
              <Route path='/signup' element={<SignUp />} />

            </Routes>
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
