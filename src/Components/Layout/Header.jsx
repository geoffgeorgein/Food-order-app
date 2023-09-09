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
        <Link to={"/"} className="text-black">
          <h1 className="font-bold text-2xl">React Meals</h1>
        </Link>

        <div className="flex items-center justify-between">
          <HeaderCartButton displayCart={props.ShowCart} className="mr-2"/>
          {user?.displayName ? (
            <button  className="border-0 rounded-lg px-2 p-1 font-bold" onClick={handleSignOut}>Logout</button>
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
