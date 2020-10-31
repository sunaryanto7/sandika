import Button from '@sandika_components/commons/Button';
import theme from './productform.module.scss';

const ProductForm = () => {
	const styles = {
		'product__form': theme['product__form'],
		'product__form__qty': theme['product__form--qty'],
		'product__form__action': theme['product__form--action'],
		'qty__minus': theme['qty__minus'],
		'qty__plus': theme['qty__plus'],
	};
	return (
		<>
			<div className={styles.product__form}>
				<div className={styles.product__form__qty}>
					<div className={styles.qty__minus}>-</div>
					<input placeholder="1" />
					<div className={styles.qty__plus}>+</div>
				</div>
				<div className={styles.product__form__action}>
					<Button
						fullWidth
						btnDanger>
						Tambahkan Ke Keranjang
						</Button>
				</div>
			</div>
		</>
	)
}

export default ProductForm;