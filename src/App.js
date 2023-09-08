import React,{Fragment,useState} from "react";
import Header from './Components/Layout/Header'
import Meals from './Components/Layout/Cart/Meals/Meals';
import Cart from './Components/Layout/Cart/Meals/Cart';
import CartProvider from "./store/CartProvider";
import { AuthContextProvider } from "./store/AuthContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signIn";
import Account from "./pages/account";
import Protected from "./Components/protected";
// C:\Users\geoff\OneDrive\Desktop\JS\React\Food_order_app\src\Components\Layout\Cart\Meals\Meals.js
// C:\Users\geoff\OneDrive\Desktop\JS\React\Food_order_app\src\Components\Layout\Cart\Meals\Cart.js

function App() {

  const [showcart,setshowcart]=useState(false);

  const ShowCartHandler=()=>{
    setshowcart(true);
  }

  const HideCartHandler=()=>{
    setshowcart(false);
  }


  return (

    <AuthContextProvider>
      <CartProvider>

        {showcart && <Cart  OnClose={HideCartHandler}/>}

        <Header ShowCart={ShowCartHandler}/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
        />
        </Routes>
        
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
