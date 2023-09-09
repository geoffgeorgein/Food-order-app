import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartbutton";
import { Link } from "react-router-dom";
import { UserAuth } from "../../store/AuthContext";

import meals from "../../Assets/meals.jpg";

const Header = (props) => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment className="flex">
      <header className={classes.header}>
        <Link to={"/"} className="text-white">
          <h1 className="text-sm  md:font-bold md:text-2xl">React Meals</h1>
        </Link>

        <div className="flex items-center justify-between">
          <HeaderCartButton displayCart={props.ShowCart} className="mr-2"/>
          {user?.displayName ? (
            <button  className="text-sm md:border-0 md:rounded-lg px-1 p-1 md:font-bold" onClick={handleSignOut}>Logout</button>
          ) : (
            <Link to="/signin" className="px-2 p-1 font-bold">Sign in</Link>
          )}

          {/* <div className={classes["main-image"]}>
            <img src={meals} alt="images" />
          </div> */}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
