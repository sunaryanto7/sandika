import * as theme from './cartiteminfo.module.scss';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';

const CartItemInfo = ({ item }) => {
  const styles = {
    'item_info': theme['item_info'],
    'item_detail': theme['item_detail'],
    'item_detailimage': theme['item_detailimage'],
    'item_detailbody': theme['item_detailbody']
  };

  return (
    <div className={styles.item_info}>
      <Media style={styles.item_detail}>
        <MediaImage style={styles.item_detailimage}>
          <img src={item.image} />
        </MediaImage>
        <MediaBody style={styles.item_detailbody}>
          <p>{item.title}</p>
          <strong>{`$ ${item.price}`}</strong>
        </MediaBody>
      </Media>
    </div>
  );
}

export default React.memo(CartItemInfo);