import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({
	name,
	imageUrl,
	description,
	price,
	countInStock,
	productId,
}) => {
	return (
		<div className='product'>
			<img src={imageUrl} alt={name} />
			<div className='product_info'>
				<p className='info_name'>{name}</p>
				<p className='info_description'>{description.substring(0, 100)}...</p>
				<p className='info_price'>{price}kr</p>
				<Link to={`/product/${productId}`} className='info_button'>
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;
