import React from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartIcon from "./HeaderCartIcon";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                {/* Here we are not using onShowHandler but we are again passing this to header's child (props chaining) */}
                <HeaderCartIcon>Your Cart</HeaderCartIcon>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food!" />
            </div>
        </>
    )
}

export default Header;