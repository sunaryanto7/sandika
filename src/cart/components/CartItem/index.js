import { useState, useEffect } from 'react';
import Checkbox from '@sandika_components/commons/Form/Checkbox';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import * as theme from './cartitem.module.scss';

const CartItem = ({ item, index, handleQtyData, handleSelectData }) => {
  const [qty, setQty] = useState(item.qty);

  const styles = {
    cart__item: theme['cart__item'],
    cart__detail: theme['cart__item--detail'],
    cart__item_checklist: theme['cart__item--checklist'],
    cart__item_info: theme['cart__item--info'],
    cart__item_detail: theme['cart__item--detail'],
    cart__item_detail_image: theme['cart__item--detail-image'],
    cart__item_detail_body: theme['cart__item--detail-body'],
    cart__item_additional: theme['cart__item--additional'],
    cart__item_qty: theme['cart__item--qty'],
    cart__item_subtotal: theme['cart__item--subtotal'],
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
      <div className={styles.cart__item}>
        <div className={styles.cart__detail}>
          <div className={styles.cart__item_checklist}>
            <Checkbox
              name={`${'item-' + index}`}
              id={`${'item-' + index}`}
              checked={item.selected}
              value={JSON.stringify(item)}
              onChange={() => {
                handleSelectData(index);
              }}
            />
          </div>
          <div className={styles.cart__item_info}>
            <Media style={styles.cart__item_detail}>
              <MediaImage style={styles.cart__item_detail_image}>
                <img src={item.image} />
              </MediaImage>
              <MediaBody style={styles.cart__item_detail_body}>
                <p>{item.title}</p>
                <strong>{`$ ${item.price}`}</strong>
              </MediaBody>
            </Media>
          </div>
        </div>
        <div className={styles.cart__item_additional}>
          <div className={styles.cart__item_qty}>
            <div
              className={qty === 1 ? styles.qty__minus_disabled : styles.qty__minus}
              onClick={() => {
                handleMinus();
              }}>
              -
            </div>
            <input placeholder={qty} readOnly value={qty} />
            <div
              className={styles.qty__plus}
              onClick={() => {
                handlePlus();
              }}>
              +
            </div>
          </div>
          <div className={styles.cart__item_subtotal}>
            <p>
              <strong>Subtotal: $ {qty * item.price}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
