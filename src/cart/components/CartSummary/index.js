import Button from '@sandika_components/commons/Button';
import * as theme from './cartsummary.module.scss';

const CartSummary = ({ data, style }) => {
  const styles = {
    cart__summary: [theme['cart__summary'], style].filter(Boolean).join(' ')
  };

  const summary = () => {
    var result = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].selected) {
        result += data[i].qty * data[i].price;
      }
    }
    return result;
  };

  return (
    <>
      <div className={styles.cart__summary}>
        {`$ ${summary()}`}
        <Button fullWidth btnDanger>
          Go To Checkout
          </Button>
      </div>
    </>
  );
};

export default CartSummary;
