import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@components/commons/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@components/commons/Modal';
import { Form, FormRow, FormGroup, InputGroup } from '@components/commons/Form';
import theme from './filternavigation.module.scss';


const FilterNavigation = () => {
    const [showFilter, setShowFilter] = useState(false);
    const formik = useFormik({
        initialValues: {
            category: '',
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
                <Form onSubmit={formik.handleSubmit}>
                    <ModalHeader>
                        <h3>Filter Produk<br />
                            <small>Cari Produk Sesuai Yang Kamu Inginkan</small>
                        </h3>
                    </ModalHeader>
                    <ModalBody>
                        <FormRow>
                            <FormGroup title={"Kategori"}>
                                <InputGroup
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_1"}
                                    onClick={formik.handleChange}
                                    value={"Roti"}
                                    label={"Roti"}
                                />
                                <InputGroup
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_2"}
                                    onClick={formik.handleChange}
                                    value={"Kue"}
                                    label={"Kue"}
                                />
                                <InputGroup
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_3"}
                                    onClick={formik.handleChange}
                                    value={"Kerpipik Singkong"}
                                    label={"Kerpipik Singkong"}
                                />
                                <InputGroup
                                    type={"radio"}
                                    name={"category"}
                                    id={"category_4"}
                                    onClick={formik.handleChange}
                                    value={"Kerpipik Bakso"}
                                    label={"Kerpipik Bakso"}
                                />
                            </FormGroup>
                        </FormRow>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            btnDanger
                            fullWidth
                            type={"submit"}>
                            Submit
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <div className={theme.filterNavigation}>
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

export default FilterNavigation;
