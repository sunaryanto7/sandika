import Button from '@components/commons/Button';
import theme from './filternavigation.module.scss';

const FilterNavigation = () => {
    return (
        <>
            <div className={theme.filterNavigation}>
                <Button
                    label={"Filter"}
                    fullWidth
                    btnDanger
                />
            </div>
        </>
    );
};

export default FilterNavigation;