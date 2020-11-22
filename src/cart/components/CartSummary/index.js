import Block from '@sandika_components/core/Block';
import Button from '@sandika_components/commons/Button';
import * as theme from './cartsummary.module.scss';

const CartSummary = ({ data, style }) => {
  const styles = {
    cart__summary: [theme['cart__summary'], style].filter(Boolean).join(' ')
  };

  const summary = () => {
    var result = 0;
    for (var i = 0; i < data.length; i++) {
      result += data[i].qty * data[i].price;
    }
    return result;
  };

  return (
    <>
      <Block>
        <div className={styles.cart__summary}>
          {`$ ${summary()}`}
          <Button fullWidth btnDanger>
            Go To Checkout
          </Button>
        </div>
      </Block>
    </>
  );
};

export default CartSummary;
