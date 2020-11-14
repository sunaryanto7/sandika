import * as theme from './cartsummary.module.scss';

const CartSummary = ({ style }) => {
	const styles = {
		'cart__summary': [theme['cart__summary'], style].filter(Boolean).join(' '),
	};

	return (
		<>
			<div className={styles.cart__summary}>
				Cart Summary Goes Here
			</div>
		</>
	);
};

export default CartSummary;