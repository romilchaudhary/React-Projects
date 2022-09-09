import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartIcon.module.css";
import { HeaderModalContext } from "../../store/HeaderModalContext";
import { CartContext } from "../../store/CartContext";

const HeaderCartIcon = (props) => {
    const [btnShouldHighlighted, setBtnShouldHighlighted] = useState(false);

    const onShowCart = useContext(HeaderModalContext);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberCartsItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);    

    const btnClasses = `${classes.button} ${btnShouldHighlighted ? classes.bump: ""}`;
    useEffect(() => {        
        if (items.length === 0){
            return;
        }
        setBtnShouldHighlighted(true);
        const timer = setTimeout(() => {
            setBtnShouldHighlighted(false);
        }, 300);  
        
        return () => {
            clearTimeout(timer);
        }
        
    }, [items]);

    return (        
            <button className={btnClasses} onClick={onShowCart}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>{props.children}</span>
                <span className={classes.badge}>{numberCartsItems}</span>                
            </button>       
    )
}

export default HeaderCartIcon;