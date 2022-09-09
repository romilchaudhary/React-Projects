import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import { CartContext } from "../../store/CartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    };

    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const onOrderHandler = () => {
        setIsCheckout(true);
    }

    const onOrderCancelHandler = () => {
        setIsCheckout(false);
    }

    const onConfirmOrder = (userData) => {
        console.log({
            user: userData,
            orderedItems: cartCtx.items
        });
        cartCtx.clearItems();
        setIsSubmitted(true);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modelCheckoutData = <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        {isCheckout && <CheckoutForm onConfirm={onConfirmOrder} onCancel={onOrderCancelHandler} />}
        {
            !isCheckout && <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideHandler}>Cancel</button>
                {hasItem && <button className={classes.button} onClick={onOrderHandler}>Order</button>}
            </div>
        }
    </React.Fragment>

    return (
        <React.Fragment>
            <Model onBackdropClose={props.onHideHandler}>
                {isSubmitted
                    &&
                    <>
                        <p>Successfully Submitted.</p>
                        <div className={classes.actions}>
                            <button className={classes.button} onClick={props.onHideHandler}>Close</button>
                        </div>
                    </>
                }
                {!isSubmitted && modelCheckoutData}

            </Model>
        </React.Fragment>
    )
}

export default Cart;