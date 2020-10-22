import Button from '@sandika_components/commons/Button';
import './productform.module.scss';

const ProductForm = () => {
    return (
        <>
            <div className={"product__form--action"}>
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