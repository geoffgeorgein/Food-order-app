import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../../store/cart-context';

const MealItem=(props)=>{

    const Cartctx=useContext(CartContext);

    const CartSubmitHandler=amount=>{
        console.log("Amount",amount);
        Cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })

    }

    return (
        <li className={classes.meal}>

        <div>
            <h3>{props.name} </h3>
            <div className={classes.description}>{props.description} </div>
            <div className={classes.price} >{props.price} </div>
        </div>

        <div>
            <MealItemForm onAddtoCart={CartSubmitHandler}/>
        </div>


        
        </li>
    );
}

export default MealItem;