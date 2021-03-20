import { useContext } from 'react';
import { PageContext } from '@sandika_environment/context/page';

import Drawer from '@sandika_components/commons/Drawer';
import Button from '@sandika_components/commons/Button';
import { InputField } from '@sandika_components/commons/Utilities';
import Block from '@sandika_components/core/Block';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './searchdrawer.module.scss';

const SearchDrawer = ({ open, handleClose }) => {
  const styles = {
    searchDrawer__header: theme['searchDrawer__header'],
    searchDrawer__header_content: theme['searchDrawer__header_content'],
    searchDrawer__navigation: theme['searchDrawer__navigation'],
    searchDrawer__body: theme['searchDrawer__body'],
    searchDrawer__item: theme['searchDrawer__item'],
    drawer__search_form: theme['drawer__search_form']
  };

  const { popularSearch } = useContext(PageContext)

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Drawer blank isOpen={open}>
        <div className={styles.searchDrawer__header}>
          <div className={styles.searchDrawer__header_content}>
            {/* Back Button */}
            <div className={styles.searchDrawer__navigation}>
              <Button btnWhite onClick={handleClose}>
                <ArrowBackIcon className={'close__icon'} />
              </Button>
            </div>

            {/* Search Form */}
            <div className={styles.drawer__search_form}>
              <form>
                <InputField
                  type={'text'}
                  placeholder={'Cari Produk Yang Kamu Sukai'}
                  id={'search'}
                  name={'search'}
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
        </div>

        {/* Search Result */}
        <div className={styles.searchDrawer__body}>
          <Block title={'Produk Populer'} additional={'Lihat Semua'} nopadding>
            {popularSearch.map((item, i) => <span key={i} className={styles.searchDrawer__item}>{item.text}</span>)}
          </Block>
        </div>
      </Drawer>
    </>
  );
};

export default React.memo(SearchDrawer);
