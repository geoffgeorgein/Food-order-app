
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

    return <button className="flex items-center bg-[#4d1601] p-1 px-2 rounded-2xl hover:bg-[#2c0d00]" onClick={props.displayCart}>
        <span>  Cart </span>
        <span className={classes.icon}>
        <CartIcon/>
        </span> 
        
        <span className="pl-2"> <span></span>{numberofCartItems >0 ? numberofCartItems :""}
        </span>
    </button>
}

export default CartButton;