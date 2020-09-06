import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@components/commons/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@components/commons/Modal';
import { Form, FormRow, FormGroup, Radio } from '@components/commons/Form';
import theme from './filter.module.scss';


const Filter = () => {
    const [showFilter, setShowFilter] = useState(false);
    const formik = useFormik({
        initialValues: {
            category: '',
            merk: '',
            lastName: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });


    return (
        <>
            <Modal
                active={showFilter}
                close={() => { setShowFilter(!showFilter) }}
                title={"Filter Pencarian"}
                caption={"Cari Barang Sesuai Kebutuhanmu"}
            >

                <ModalHeader>
                    <h3>Filter Produk<br />
                        <small>Cari Produk Sesuai Yang Kamu Inginkan</small>
                    </h3>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <FormGroup title={"Kategori"}>
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_1"}
                                    onClick={formik.handleChange}
                                    value={"Roti"}
                                    label={"Roti"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_2"}
                                    onClick={formik.handleChange}
                                    value={"Kue"}
                                    label={"Kue"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_3"}
                                    onClick={formik.handleChange}
                                    value={"Kerpipik Singkong"}
                                    label={"Kerpipik Singkong"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_4"}
                                    onClick={formik.handleChange}
                                    value={"Kerpipik Bakso"}
                                    label={"Kerpipik Bakso"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_5"}
                                    onClick={formik.handleChange}
                                    value={"Hiasan Bunga"}
                                    label={"Hiasan Bunga"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_6"}
                                    onClick={formik.handleChange}
                                    value={"Olahan Tahu"}
                                    label={"Olahan Tahu"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_7"}
                                    onClick={formik.handleChange}
                                    value={"Olahan Tempe"}
                                    label={"Olahan Tempe"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_8"}
                                    onClick={formik.handleChange}
                                    value={"Kaos Dagadu"}
                                    label={"Kaos Dagadu"}
                                />
                            </FormGroup>
                            <FormGroup title={"Merk"}>
                                <Radio
                                    type={"radio"}
                                    name={"merk"}
                                    id={"merk_1"}
                                    onClick={formik.handleChange}
                                    value={"Hushpuppies"}
                                    label={"Hushpuppies"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"merk"}
                                    id={"merk_2"}
                                    onClick={formik.handleChange}
                                    value={"Ordinair"}
                                    label={"Ordinair"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"merk"}
                                    id={"merk_3"}
                                    onClick={formik.handleChange}
                                    value={"Kay"}
                                    label={"Kay"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"merk"}
                                    id={"merk_4"}
                                    onClick={formik.handleChange}
                                    value={"Sketchers"}
                                    label={"Sketchers"}
                                />
                            </FormGroup>
                            <FormGroup title={"Sortir"}>
                                <Radio
                                    type={"radio"}
                                    name={"sort"}
                                    id={"sort_1"}
                                    onClick={formik.handleChange}
                                    value={"Ascending"}
                                    label={"Ascending"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"sort"}
                                    id={"sort_2"}
                                    onClick={formik.handleChange}
                                    value={"Descending"}
                                    label={"Descending"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"sort"}
                                    id={"sort_3"}
                                    onClick={formik.handleChange}
                                    value={"Harga Termurah"}
                                    label={"Harga Termurah"}
                                />
                                <Radio
                                    type={"radio"}
                                    name={"sort"}
                                    id={"sort_4"}
                                    onClick={formik.handleChange}
                                    value={"Harga Termahal"}
                                    label={"Harga Termahal"}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    btnDanger
                                    fullWidth
                                    type={"submit"}>
                                    Submit
                                </Button>
                            </FormGroup>
                        </FormRow>
                    </Form>
                </ModalBody>
            </Modal>

            <div className={theme.filter__navigation}>
                <Button
                    fullWidth
                    btnDanger
                    onClick={() => { setShowFilter(!showFilter) }}>
                    Filter
                </Button>
            </div>
        </>
    );
};

export default Filter;
