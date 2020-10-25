import { useState } from 'react';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import theme from './cartitem.module.scss';

const CartItem = ({ item, index }) => {

	const [checked, setChecked] = useState(false)
	const styles = {
		'cart__item': theme['cart__item'],
		'cart__item_checklist': theme['cart__item--checklist'],
		'cart__item_detail': theme['cart__item--detail'],
		'cart__item_info': theme['cart__item--info']
	};

	return (
		<>
			<div className={styles.cart__item}>
				<div className={styles.cart__item_checklist}>
					<input
						type="checkbox"
						name={`${'item-' + index}`}
						id={`${'item-' + index}`}
						checked={checked}
						onChange={() => { setChecked(!checked) }}
					/>
				</div>
				<div className={styles.cart__item_info}>
					<Media style={styles.cart__item_detail}>
						<MediaImage>
							<img src={item.image} />
						</MediaImage>
						<MediaBody>
							<p>{item.title}</p>
							<strong>{item.price}</strong>
						</MediaBody>
					</Media>
					<div className=""></div>
				</div>
			</div>
		</>
	);
};

export default CartItem;