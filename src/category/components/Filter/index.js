import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@sandika_components/commons/Button';
import Modal from '@sandika_components/commons/Modal';
import { FormRow, FormGroup } from '@sandika_components/commons/Form';
import { RadioButton } from '@sandika_components/commons/Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as theme from './filter.module.scss';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const styles = {
    filter__toggle: theme['filter__toggle'],
    filter__form: theme['filter__form'],
    filter__formdelimiter: theme['filter__formdelimiter']
  };

  const formik = useFormik({
    initialValues: {
      category: '',
      merk: '',
      sort: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
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
            <FormRow title={'Urutkan'}>
              <FormGroup>
                <RadioButton
                  id="asc"
                  label="Urutkan secara Ascending (A-Z)"
                  value="asc"
                  name="sort"
                  onChange={formik.handleChange}
                />
                <RadioButton
                  id="desc"
                  label="Urutkan secara Descending (Z-A)"
                  value="desc"
                  name="sort"
                  onChange={formik.handleChange}
                />
              </FormGroup>
            </FormRow>
            <FormRow title={'Lokasi'}>
              <FormGroup>
                <RadioButton
                  id="01"
                  label="Jakarta"
                  value="Jakarta"
                  name="location"
                  onChange={formik.handleChange}
                />
                <RadioButton
                  id="02"
                  label="Yogyakarta"
                  value="Yogyakarta"
                  name="location"
                  onChange={formik.handleChange}
                />
                <RadioButton
                  id="03"
                  label="Bali"
                  value="Bali"
                  name="location"
                  onChange={formik.handleChange}
                />
              </FormGroup>
            </FormRow>
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
