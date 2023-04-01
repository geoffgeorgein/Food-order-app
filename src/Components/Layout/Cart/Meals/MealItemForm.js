
import classes from './MealItemForm.module.css';
import Input from './Input';
import { useRef } from 'react';

const MealItemForm=props=>{

    const amountInputRef=useRef();

    const submithandler=(event)=>{
        event.preventDefault();

        const enteredamount=amountInputRef.current.value;
        const enteredamountnumber=+enteredamount;
         console.log(enteredamount);
        if(enteredamount.trim().length===0 || enteredamountnumber<1){
            return;

        }
        // console.log(enteredamount);
        props.onAddtoCart(enteredamountnumber);


    }
    
    return (
        <form className={classes.form} onSubmit={submithandler}>

        <Input label='Amount'
            ref={amountInputRef}
            input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                defaultValue:'1'

            }}
        />
        <button> + Add </button>
        </form>
    )

}
export default MealItemForm;