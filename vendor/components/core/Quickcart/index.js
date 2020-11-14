import BasketIcon from '@public/media/icons/supermarket.svg';
import * as theme from './quickcart.module.scss';

const Quickcart = ({ style }) => {
	const styles = {
		'quickcart': [theme['quickcart'], style].filter(Boolean).join(' '),
		'shop__icon': theme['shop__icon']
	};

	return (
		<>
			<div className={styles.quickcart}>
				<BasketIcon className={styles.shop__icon} />
			</div>
		</>
	);
};

export default Quickcart;