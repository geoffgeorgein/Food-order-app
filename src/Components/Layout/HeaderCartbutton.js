
import CartIcon  from "./Cart/Meals/CartIcon";
import classes from './HeaderCartbutton.module.css';
import { useContext} from "react";
import CartContext from "../../store/cart-context";

const CartButton=props=>{

    const cartctx=useContext(CartContext);

    const numberofCartItems=cartctx.items.reduce((curnumber,item)=>{
        return curnumber+item.amount;
    },0);

    console.log("Number of Cart Items");
    console.log(numberofCartItems);

    return <button className={classes.button} onClick={props.displayCart}>

        <span className={classes.icon}>
        <CartIcon/>
        </span> 
        <span>  Cart </span>
        <span className="pl-2"> <span></span>{numberofCartItems}
        </span>
    </button>
}

export default CartButton;