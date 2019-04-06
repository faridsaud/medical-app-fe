import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextInput,
  DatePicker, DatePickerInput, Select, SelectItem, TextArea,
} from 'carbon-components-react';
import './styles.css';

const PatientSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email('Invalid email'),
  birthDate: Yup.date(),
  civilStatus: Yup.string(),
  phoneNumber: Yup.string(),
  documentNumber: Yup.string(),
  occupation: Yup.string(),
  placeOfResidence: Yup.object().shape({
    city: Yup.string(),
    country: Yup.string(),
    address: Yup.string(),
  }),
});

class Patient extends Component {
  render() {
    const { initialValues, onChange } = this.props;
    return (
      <Formik
        enableReinitialize
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
          errors, touched, setFieldValue, values,
        }) => (
          <Form className="bx--grid">
            {onChange({ values, errors })}
            <div className="bx--row">
              <div className="bx--col bx--col-sm-4">
                <TextInput
                  labelText="First Name"
                  id="firstName"
                  invalid={errors.firstName}
                  invalidText={errors.firstName}
                  value={values.firstName}
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
                  value={values.lastName}
                  onChange={(e) => {
                    setFieldValue('lastName', e.target.value);
                  }}
                />
              </div>
              <div className="bx--col bx--col-sm-4">
                <DatePicker
                  datePickerType="single"
                  maxDate={new Date()}
                  onChange={(dates) => {
                    setFieldValue('birthDate', dates[0]);
                  }}

                  value={values.birthDate}
                >
                  <DatePickerInput
                    id="birthDate"
                    labelText="Date of Birth"
                    pattern="d{1,2}/d{4}"
                    placeholder="mm/dd/yyyy"
                    invalid={errors.birthDate}
                    invalidText={errors.birthDate}
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
                  value={values.email}
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
                  value={values.civilStatus}
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
                  value={values.documentNumber}
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
                  value={values.occupation}
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
                  invalid={errors.placeOfResidence && errors.placeOfResidence.country}
                  invalidText={errors.placeOfResidence && errors.placeOfResidence.country}
                  value={values.placeOfResidence && values.placeOfResidence.country}
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
                  invalid={errors.placeOfResidence && errors.placeOfResidence.city}
                  invalidText={errors.placeOfResidence && errors.placeOfResidence.city}
                  value={values.placeOfResidence && values.placeOfResidence.city}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('placeOfResidence.city', e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="bx--row">
              <div className="bx--col bx--col-sm-12">
                <TextArea
                  labelText="Address"
                  id="address"
                  invalid={errors.placeOfResidence && errors.placeOfResidence.address}
                  invalidText={errors.placeOfResidence && errors.placeOfResidence.address}
                  value={values.placeOfResidence && values.placeOfResidence.address}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('placeOfResidence.address', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
            <style jsx>
              {`
                .bx--text-area__wrapper {
                  width: 100% !important;
                }
              `}
            </style>
          </Form>
        )}
      </Formik>
    );
  }
}

Patient.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
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
  onChange: () => {},
};

export default Patient;
