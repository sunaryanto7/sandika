import Drawer from '@components/commons/Drawer';
import Button from '@components/commons/Button';
import { Input } from '@components/commons/Form';
import ArrowBackIcon from '@public/media/icons/back.svg';
import theme from './searchdrawer.module.scss';

const SearchDrawer = ({ open, handleClose }) => {

  return (
    <>
      <Drawer blank isOpen={open}>
        <div className={theme.search_drawer__header}>
          <div className={theme.search_drawer__navigation}>
            <Button
              btnWhite
              onClick={handleClose}>
              <ArrowBackIcon className={theme.menu__icon} />
            </Button>
          </div>

          <div className={theme.drawer__search_form}>
            <form>
              <Input type={"text"} placeholder={"Cari Produk Yang Kamu Sukai"} />
            </form>
          </div>
        </div>
        <div className={"body"}></div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
