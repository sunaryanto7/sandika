import Drawer from '@components/commons/Drawer';
import theme from './searchdrawer.module.scss';

const SearchDrawer = ({ isOpen, handleClose }) => {
    console.log(isOpen);
    return (
        <>
            <Drawer isOpen={isOpen} direction={'right'} handleClose={handleClose} >
                hai
            </Drawer>
        </>
    )
}

export default SearchDrawer;