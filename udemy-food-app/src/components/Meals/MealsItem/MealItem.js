import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../store/CartContext";

const MealItem = (props) => {
    const ctx = useContext(CartContext);

    const addToCartHandler = (amount, id) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    const mealsList = <li key={props.id} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddCart={addToCartHandler}/>
            </div>
        </li>
    return (
        <>
            {
                mealsList
            }
        </>
    )
}

export default MealItem;