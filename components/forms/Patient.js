import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Form, FormGroup, FormItem, TextInput} from 'carbon-components-react';

const PatientSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  birthDate: Yup.date().required('Required'),
  civilStatus: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  documentNumber: Yup.string().required('Required'),
  occupation: Yup.string().required('Required'),
  placeOfResidence: Yup.object().shape({
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
  }),
});

class Patient extends Component {
  render() {
    const {initialValues} = this.props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={PatientSchema}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
        >
          {({errors, touched, setFieldValue, handleChange}) => (
              <Form className={'bx--grid'}>
                <div className={'bx--row'}>
                  <div className={'bx--col'} >
                    <TextInput
                        labelText={'First Name'}
                        id={'firstName'}
                        invalid={errors.firstName}
                        invalidText={errors.firstName}
                        onChange={(e)=>{
                          setFieldValue('firstName', e.target.value);
                        }}
                    />
                  </div>
                  <div className={'bx--col'} >
                    <TextInput
                        labelText={'Last Name'}
                        id={'lastName'}
                        invalid={errors.lastName}
                        invalidText={errors.lastName}
                        onChange={(e)=>{
                          setFieldValue('lastName', e.target.value);
                        }}
                    />
                  </div>
                </div>
              </Form>
          )}
        </Formik>
    );
  }
}

Patient.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Patient.defaultProps = {
  initialValues: {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    civilStatus: 'single',
    email: '',
    phoneNumber: '',
    documentNumber: '',
    occupation: '',
    placeOfResidence: {
      city: '',
      country: '',
      address: '',
    },
  },
  onSubmit: () => {},
};

export default Patient;
