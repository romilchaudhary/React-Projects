import classes from './CartButton.module.css';
import { toggle } from '../../features/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch(state => state.ui.showCart);
  const totalCartItems = useSelector(state => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(toggle());
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
