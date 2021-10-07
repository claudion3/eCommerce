import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

	const sideDrawerClass = ['sideDrawer'];
	if (show) {
		sideDrawerClass.push('show');
	}

	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className='sideDrawer_links' onClick={click}>
				<li>
					<Link>
						<i className='fas fa-shopping-cart'></i>
						<span>
							Cart<span className='sideDrawer_cartBadge'>{getCartCount()}</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
