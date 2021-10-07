import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import './CartScreen.css';

export const CartScreen = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};
	const removeHandler = id => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};
	const getCartSubTotal = () => {
		return cartItems
			.reduce((price, item) => price + item.price * item.qty, 0)
			.toFixed(2);
	};

	return (
		<div className='cartScreen'>
			<div className='cartScreen_left'>
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty <Link to='/'>Go Back</Link>
					</div>
				) : (
					cartItems.map(item => (
						<CartItem
							key={item.product}
							item={item}
							qtyChangeHandler={qtyChangeHandler}
							removeFromCart={removeHandler}
						/>
					))
				)}
			</div>

			<div className='cartScreen_right'>
				<div className='cartScreen_info'>
					<p> Subtotal({getCartCount()}) items</p>
					<p>{getCartSubTotal()}kr</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};
