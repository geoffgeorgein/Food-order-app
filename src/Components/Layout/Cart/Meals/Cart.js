
import classes from "./Cart.module.css";
// import MealItemForm from "./MealItemForm";
import Modal from './Modal';
import { useContext, useRef } from "react";
import CartContext from "../../../../store/cart-context";
import CartItem from "./CartItem";

const Cart=props=>{

    const cartctx=useContext(CartContext);
    const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`;
    // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const CartItemRemoveHandler=(id)=>{
        cartctx.removeItem(id);
    }
    const CartItemAddHandler=(item)=>{
        cartctx.addItem({...item,amount:1});
    }

    const cartItems=(


        <ul className={classes['cart-items']}>

        {cartctx.items.map(item=> (<CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={CartItemAddHandler.bind(null,item)} onRemove={CartItemRemoveHandler.bind(null,item.id)} >{item.name}</CartItem>))}
        </ul>
        );

    // const Items=[{id:'c1',name:"Sushi" , amount:2,price :30}].map((item)=>(item.name));
    // console.log(Items);
    // console.log(cartItems);
    return (
        <Modal onClose={props.OnClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>

            <button className={classes['button--alt']} onClick={props.OnClose}>
                Close
            </button>
            <button className={classes.button}>
                Order
            </button>
        </div>



        </Modal>
    )
}

export default Cart;