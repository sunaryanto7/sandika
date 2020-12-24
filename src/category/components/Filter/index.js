import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@sandika_components/commons/Button';
import { Modal, ModalBody, ModalHeader } from '@sandika_components/commons/Modal';
import { Form, FormRow, FormGroup, Radio } from '@sandika_components/commons/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as theme from './filter.module.scss';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const styles = {
    filter__toggle: theme['filter__toggle']
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

  return (
    <>
      <Modal
        active={showFilter}
        close={() => {
          setShowFilter(!showFilter);
        }}
        title={'Filter Pencarian'}
        caption={'Cari Barang Sesuai Kebutuhanmu'}>
        <ModalHeader>
          <h3>
            Filter Produk
            <br />
            <small>Cari Produk Sesuai Yang Kamu Inginkan</small>
          </h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <FormGroup title={'Kategori'}>
                <Radio
                  type={'radio'}
                  name={'category'}
                  id={'category_1'}
                  onClick={formik.handleChange}
                  value={'Roti'}
                  label={'Roti'}
                />
                <Radio
                  type={'radio'}
                  name={'category'}
                  id={'category_2'}
                  onClick={formik.handleChange}
                  value={'Kue'}
                  label={'Kue'}
                />
                <Radio
                  type={'radio'}
                  name={'category'}
                  id={'category_3'}
                  onClick={formik.handleChange}
                  value={'Kerpipik Singkong'}
                  label={'Kerpipik Singkong'}
                />
                <Radio
                  type={'radio'}
                  name={'category'}
                  id={'category_4'}
                  onClick={formik.handleChange}
                  value={'Kerpipik Bakso'}
                  label={'Kerpipik Bakso'}
                />
                <Radio
                  type={'radio'}
                  name={'category'}
                  id={'category_5'}
                  onClick={formik.handleChange}
                  value={'Hiasan Bunga'}
                  label={'Hiasan Bunga'}
                />
              </FormGroup>
              <FormGroup title={'Merk'}>
                <Radio
                  type={'radio'}
                  name={'merk'}
                  id={'merk_1'}
                  onClick={formik.handleChange}
                  value={'Hushpuppies'}
                  label={'Hushpuppies'}
                />
                <Radio
                  type={'radio'}
                  name={'merk'}
                  id={'merk_2'}
                  onClick={formik.handleChange}
                  value={'Ordinair'}
                  label={'Ordinair'}
                />
                <Radio
                  type={'radio'}
                  name={'merk'}
                  id={'merk_3'}
                  onClick={formik.handleChange}
                  value={'Kay'}
                  label={'Kay'}
                />
                <Radio
                  type={'radio'}
                  name={'merk'}
                  id={'merk_4'}
                  onClick={formik.handleChange}
                  value={'Sketchers'}
                  label={'Sketchers'}
                />
              </FormGroup>
              <FormGroup title={'Sortir'}>
                <Radio
                  type={'radio'}
                  name={'sort'}
                  id={'sort_1'}
                  onClick={formik.handleChange}
                  value={'Ascending'}
                  label={'Ascending'}
                />
                <Radio
                  type={'radio'}
                  name={'sort'}
                  id={'sort_2'}
                  onClick={formik.handleChange}
                  value={'Descending'}
                  label={'Descending'}
                />
                <Radio
                  type={'radio'}
                  name={'sort'}
                  id={'sort_3'}
                  onClick={formik.handleChange}
                  value={'Harga Termurah'}
                  label={'Harga Termurah'}
                />
                <Radio
                  type={'radio'}
                  name={'sort'}
                  id={'sort_4'}
                  onClick={formik.handleChange}
                  value={'Harga Termahal'}
                  label={'Harga Termahal'}
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <Button btnDanger fullWidth type={'submit'}>
                Submit
              </Button>
            </FormRow>
          </Form>
        </ModalBody>
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

export default Filter;
