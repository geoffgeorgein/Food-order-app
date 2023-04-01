import React,{Fragment,useState} from "react";
import Header from './Components/Layout/Header'
import Meals from './Components/Layout/Cart/Meals/Meals';
import Cart from './Components/Layout/Cart/Meals/Cart';
import CartProvider from "./store/CartProvider";
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
    <CartProvider>
      {showcart && <Cart  OnClose={HideCartHandler}/>}

      <Header ShowCart={ShowCartHandler}/>\
      <Meals/>
    </CartProvider>
  );
}

export default App;
