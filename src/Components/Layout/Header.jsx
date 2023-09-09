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
          <HeaderCartButton displayCart={props.ShowCart} className="mr-2" />
          {user?.displayName ? (
            <div className="flex items-center">
            <Link to={'/account'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer mx-1"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              </Link>
              <button
                className="text-sm md:border-0 md:rounded-lg px-1 p-1 md:font-bold"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin" className="px-2 p-1 font-bold">
              Sign in
            </Link>
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
