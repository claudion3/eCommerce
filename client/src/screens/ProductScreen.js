import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ProductScreen.css';

//Actions
import { getProductDetails } from '../redux/actions/ProductActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({ match, history }) => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.getProductDetails);

	const { product, loading, error } = productDetails;

	useEffect(() => {
		if (product && match.params.id !== product._id) {
			dispatch(getProductDetails(match.params.id));
		}
	}, [dispatch, product, match]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		history.push('/cart');
	};
	return (
		<div className='productScreen'>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<div className='productScreen_left'>
						<div className='left_image'>
							<img src={product.imageUrl} alt={product.name} />
						</div>
						<div className='left_info'>
							<p className='left_name'>{product.name}</p>
							<p>{product.price}kr</p>
							<p>{product.description}</p>
						</div>
					</div>
					<div className='productScreen_right'>
						<div className='right_info'>
							<p>
								Price:<span>{product.price}kr</span>
							</p>
							<p>
								Status:
								<span>
									{product.countInStock > 0 ? 'In Stock' : 'Out Stock'}
								</span>
							</p>
							<p>
								Qty
								<select value={qty} onChange={e => setQty(e.target.value)}>
									{[...Array(product.countInStock).keys()].map(e => (
										<option key={e + 1} value={e + 1}>
											{e + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button type='button' onClick={addToCartHandler}>
									Add To Cart
								</button>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductScreen;
