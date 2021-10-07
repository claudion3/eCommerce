import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
	return (
		<div className='cartItem'>
			<div className='cartItem_image'>
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<Link to={`/product/${item.product}`} className='cartItem_name'>
				<p>{item.name}</p>
			</Link>
			<p className='cartItem_price'>{item.price}kr</p>
			<select
				className='cartItem_select'
				value={item.qty}
				onChange={e => qtyChangeHandler(item.product, e.target.value)}>
				{[...Array(item.countInStock).keys()].map(e => (
					<option key={e + 1} value={e + 1}>
						{e + 1}
					</option>
				))}
			</select>
			<button
				className='cartItem_deleteBtn'
				onClick={() => removeFromCart(item.product)}>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	);
};

export default CartItem;
