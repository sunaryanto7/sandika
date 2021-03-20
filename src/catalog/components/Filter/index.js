import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { PageContext } from '@sandika_environment/context/page';

import Button from '@sandika_components/commons/Button';
import Modal from '@sandika_components/commons/Modal';
import { FormRow, FormGroup } from '@sandika_components/commons/Form';
import { RadioButton } from '@sandika_components/commons/Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as theme from './filter.module.scss';

const Filter = () => {
  const styles = {
    filter__toggle: theme['filter__toggle'],
    filter__form: theme['filter__form'],
    filter__formdelimiter: theme['filter__formdelimiter']
  };

  const [showFilter, setShowFilter] = useState(false);
  const { filterData } = useContext(PageContext);

  const initialValuesSearch = {}
  filterData.forEach(_ => {
    initialValuesSearch[_.attribute_code] = '';
  })

  const formik = useFormik({
    initialValues: initialValuesSearch,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleCloseModal = () => { setShowFilter(!showFilter); };

  return (
    <>
      <Modal
        active={showFilter}
        onClose={() => { handleCloseModal() }}
        title={'Filter Pencarian'}
        caption={'Cari Barang Sesuai Kebutuhanmu'}>

        <form onSubmit={formik.handleSubmit} className={styles.filter__form}>
          <div className={styles.filter__formdelimiter}>
            {filterData.map((_, i) => {
              return (
                <FormRow title={_.label}>
                  <div className="filter__key">
                    {(_.attribute_code !== "color" && _.attribute_code !== "price") && <>
                      {_.options.map((option, j) => {
                        return (
                          <RadioButton
                            label={option.label}
                            value={option.value}
                            name={_.attribute_code}
                            onChange={formik.handleChange}
                            id={`${_.attribute_code}_${j}`}
                            key={j}
                          />
                        )
                      })}
                    </>}

                    {(_.attribute_code === "color") && <>
                      {_.options.map((option, j) => {
                        return (
                          <RadioButton
                            label={option.label}
                            value={option.value}
                            name={_.attribute_code}
                            onChange={formik.handleChange}
                            id={`${_.attribute_code}${j}`}
                            key={j}
                          />
                        )
                      })}
                    </>}

                    {(_.attribute_code === "price") && <>
                      {_.options.map((option, j) => {
                        return (
                          <RadioButton
                            label={option.label}
                            value={option.value}
                            name={_.attribute_code}
                            onChange={formik.handleChange}
                            id={`${_.attribute_code}${j}`}
                            key={j}
                          />
                        )
                      })}
                    </>}
                  </div>
                </FormRow>
              )
            })}
          </div>
          <div className={styles.filter__formdelimiter}>
            <Button fullWidth type={'submit'}>
              Filter
            </Button>
          </div>
        </form>
      </Modal>

      <div className={styles.filter__toggle}>
        <Button
          onClick={() => {
            setShowFilter(!showFilter);
          }}>
          <FontAwesomeIcon icon="filter" color="white" />
          Filter
        </Button>
        <Button>Pria</Button>
        <Button>Wanita</Button>
        <Button>Kebutuhan Harian</Button>
        <Button>Anti Covid</Button>
        <Button>Backpack</Button>
        <Button>Face Shield</Button>
      </div>
    </>
  );
};

export default React.memo(Filter);
