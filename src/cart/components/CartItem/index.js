import { useState, useEffect } from 'react';
import CheckBox from '@sandika_components/commons/Utilities/CheckBox';
import CartItemInfo from '@sandika_src/cart/components/CartItemInfo';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';

import * as theme from './cartitem.module.scss';

const CartItem = ({ item, index, handleQtyData, handleSelectData }) => {
  const [qty, setQty] = useState(item.qty);

  const styles = {
    cart_item: theme['cart-item'],
    item_checklist: theme['item-checklist'],
    item_additional: theme['item-additional'],
    item_subtotal: theme['item-subtotal'],
    item_qty: theme['item-qty'],
    qty__minus: theme['qty__minus'],
    qty__minus_disabled: [theme['qty__minus'], theme['qty__minus--disabled']]
      .filter(Boolean)
      .join(' '),
    qty__plus: theme['qty__plus']
  };

  const handlePlus = () => {
    setQty(qty + 1);
  };

  const handleMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    var temp = item;
    temp.qty = qty;
    handleQtyData(index, temp);
  }, [qty]);

  return (
    <>
      <div className={styles.cart_item}>
        <div className={styles.item_checklist}>
          <CheckBox
            name={`${'item-' + index}`}
            id={`${'item-' + index}`}
            checked={item.selected}
            value={JSON.stringify(item)}
            onChange={() => { handleSelectData(index); }}
            label={<CartItemInfo item={item} />}
          />
        </div>
        <div className={styles.item_additional}>
          <div className={styles.item_qty}>
            <div
              className={qty === 1 ? styles.qty__minus_disabled : styles.qty__minus}
              onClick={() => { handleMinus(); }}>
              -
            </div>
            <input placeholder={qty} readOnly value={qty} />
            <div
              className={styles.qty__plus}
              onClick={() => { handlePlus(); }}>
              +
            </div>
          </div>
          <div className={styles.item_subtotal}>
            <p><strong>Subtotal: $ {qty * item.price}</strong></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CartItem);
