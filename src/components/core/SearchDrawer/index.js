import Drawer from '@components/commons/Drawer';
import theme from './searchdrawer.module.scss';

const SearchDrawer = ({ open, handleClose }) => {

  return (
    <>
      <Drawer
        // blank
        isOpen={open}
        handleClose={handleClose}>
        <div className={"header"}></div>
        <div className={"body"}></div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
