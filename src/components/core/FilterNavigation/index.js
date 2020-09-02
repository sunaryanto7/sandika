import Button from '@components/commons/Button';
import theme from './filternavigation.module.scss';

const FilterNavigation = () => {
    return (
        <>
            <div className={theme.filterNavigation}>
                <Button fullWidth btnDanger>Filter</Button>
            </div>
        </>
    );
};

export default FilterNavigation;
