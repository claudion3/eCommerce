import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};
	return (
		<nav className='navbar'>
			<div className='navbar_logo'>
				<h2>Copenhagen Sport Supplements</h2>
			</div>
			<ul className='navbar_links'>
				<li>
					<Link to='/cart' className='cart_link'>
						<i className='fas fa-shopping-cart'></i>
						Cart
						<span className='cartLogo_badge'>{getCartCount()}</span>
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
			<div className='hamburger_menu' onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
