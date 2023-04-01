
import classes from "./Header.module.css";
import {Fragment} from "react";
import HeaderCartButton from './HeaderCartbutton';

import meals from "../../Assets/meals.jpg";

const Header = (props)=>{

    return (
        <Fragment>
            <header className={classes.header}>

                <h1>
                    React Meals
                </h1>
                <HeaderCartButton displayCart={props.ShowCart}/>
            </header>

            <div className={classes['main-image']}>
                <img src={meals} alt='images'/>
            </div>
        
        </Fragment>

    );
}

export default Header;