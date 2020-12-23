import { useEffect, useState } from 'react';
import Drawer from '@sandika_components/commons/Drawer';
import Button from '@sandika_components/commons/Button';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import { Input } from '@sandika_components/commons/Form';
import Block from '@sandika_components/core/Block';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './searchdrawer.module.scss';

const SearchDrawer = ({ open, handleClose }) => {
  const [searchSugesstionsItems, setSearchSugesstionsItems] = useState([]);

  const styles = {
    search_drawer__header: theme['search_drawer__header'],
    search_drawer__header_content: theme['search_drawer__header_content'],
    search_drawer__navigation: theme['search_drawer__navigation'],
    search_drawer__body: theme['search_drawer__body'],
    drawer__search_form: theme['drawer__search_form']
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((Response) => {
        return Response.json();
      })
      .then((Result) => {
        return setSearchSugesstionsItems(Result);
      });
  }, []);

  return (
    <>
      <Drawer blank isOpen={open}>
        <div className={styles.search_drawer__header}>
          <div className={styles.search_drawer__header_content}>
            {/* Back Button */}
            <div className={styles.search_drawer__navigation}>
              <Button btnWhite onClick={handleClose}>
                <ArrowBackIcon className={'close__icon'} />
              </Button>
            </div>

            {/* Search Form */}
            <div className={styles.drawer__search_form}>
              <form>
                <Input
                  type={'text'}
                  placeholder={'Cari Produk Yang Kamu Sukai'}
                  id={'search'}
                  name={'search'}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Search Result */}
        <div className={styles.search_drawer__body}>
          <Block title={'Pencarian'} nopadding>
            <Media>
              <MediaBody>Payung</MediaBody>
            </Media>
            <Media>
              <MediaBody>Keripik Singkong</MediaBody>
            </Media>
            <Media>
              <MediaBody>Kertas Manila</MediaBody>
            </Media>
          </Block>
          <Block title={'Produk Populer'} additional={'Lihat Semua'} nopadding>
            {searchSugesstionsItems.map((item, i) => {
              return (
                <Media key={i}>
                  <MediaImage>
                    <img src={item.image} />
                  </MediaImage>
                  <MediaBody>{item.title}</MediaBody>
                </Media>
              );
            })}
          </Block>
        </div>
      </Drawer>
    </>
  );
};

export default React.memo(SearchDrawer);
