import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCarts, removeItemFromCart } from '../../features/CartSlice';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();
  const onAddCartItemHandler = () => {
    dispatch(addItemToCarts(
      {
        id: id,
        name: title,
        price: price
      }
    ));
  };

  const onRemoveItemsHandler = () => {
    dispatch(removeItemFromCart(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItemsHandler}>-</button>
          <button onClick={onAddCartItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
