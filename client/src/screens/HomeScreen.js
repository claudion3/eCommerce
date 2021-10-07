import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import './HomeScreen.css';
//actions
import { getProducts as listProducts } from '../redux/actions/ProductActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const getProducts = useSelector(state => state.getProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className='home'>
			<div className='homeScreen'>
				<h2 className='homeScreen_title'>Latest Products </h2>
				<div className='homeScreen_products'>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h2>{error}</h2>
					) : (
						products.map(product => (
							<Product
								key={product._id}
								productId={product._id}
								name={product.name}
								imageUrl={product.imageUrl}
								description={product.description}
								price={product.price}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
