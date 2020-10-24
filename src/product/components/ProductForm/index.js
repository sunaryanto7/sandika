import Button from '@sandika_components/commons/Button';
import theme from './productform.module.scss';

const ProductForm = () => {
    const styles = {
        'product__form__action': theme['product__form--action']
    };
    return (
        <>
            <div className={styles.product__form__action}>
                <Button
                    fullWidth
                    btnDanger>
                    Tambahkan Ke Keranjang
                </Button>
            </div>
        </>
    )
}

export default ProductForm;