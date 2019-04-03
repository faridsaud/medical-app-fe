import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextInput,
  DatePicker, DatePickerInput, Select, SelectItem,
} from 'carbon-components-react';
import './styles.css';

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
    const { initialValues } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PatientSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          errors, touched, setFieldValue, handleChange, values,
        }) => (
          <Form className="bx--grid">
            <div className="bx--row">
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="First Name"
                  id="firstName"
                  invalid={errors.firstName}
                  invalidText={errors.firstName}
                  onChange={(e) => {
                    setFieldValue('firstName', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Last Name"
                  id="lastName"
                  invalid={errors.lastName}
                  invalidText={errors.lastName}
                  onChange={(e) => {
                    setFieldValue('lastName', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <DatePicker datePickerType="single" maxDate={new Date()}>
                  <DatePickerInput
                    id="birthDate"
                    labelText="Date of Birth"
                    pattern="d{1,2}/d{4}"
                    placeholder="mm/dd/yyyy"
                    invalid={errors.birthDate}
                    invalidText={errors.birthDate}
                    onChange={(e) => {
                      setFieldValue('birthDate', e.target.value);
                    }}
                  />
                </DatePicker>
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Email"
                  id="email"
                  invalid={errors.email}
                  invalidText={errors.email}
                  type="email"
                  onChange={(e) => {
                    setFieldValue('email', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <Select
                  id="civilStatus"
                  defaultValue="single"
                  onChange={(e) => {
                    setFieldValue('civilStatus', e.target.value);
                  }}
                  invalid={errors.civilStatus}
                  invalidText={errors.civilStatus}
                  labelText="Civil Status"
                >
                  <SelectItem value="single" text="Single" />
                  <SelectItem value="married" text="Married" />
                </Select>
              </div>
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Document Number"
                  id="documentNumber"
                  invalid={errors.documentNumber}
                  invalidText={errors.documentNumber}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('documentNumber', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Occupation"
                  id="occupation"
                  invalid={errors.occupation}
                  invalidText={errors.occupation}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('occupation', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Country"
                  id="country"
                  invalid={errors.country}
                  invalidText={errors.country}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('placeOfResidence.country', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="City"
                  id="city"
                  invalid={errors.city}
                  invalidText={errors.city}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('placeOfResidence.city', e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="bx--row">
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="Address"
                  id="address"
                  invalid={errors.address}
                  invalidText={errors.address}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('placeOfResidence.address', e.target.value);
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
