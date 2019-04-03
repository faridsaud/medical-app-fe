import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextArea,
} from 'carbon-components-react';
import './styles.css';

const PathologicalHistorySchema = Yup.object().shape({
  personal: Yup.string().required('Required'),
  family: Yup.string().required('Required'),
  allergic: Yup.string().required('Required'),
  surgical: Yup.string().required('Required'),
  hospital: Yup.string().required('Required'),
});

class PathologicalHistory extends Component {
  render() {
    const { initialValues } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PathologicalHistorySchema}
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
              <div className="bx--col">
                <TextArea
                  labelText="Personal"
                  id="personal"
                  invalid={errors.personal}
                  invalidText={errors.personal}
                  onChange={(e) => {
                    setFieldValue('personal', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Family"
                  id="family"
                  invalid={errors.family}
                  invalidText={errors.family}
                  onChange={(e) => {
                    setFieldValue('family', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Allergic"
                  id="allergic"
                  invalid={errors.allergic}
                  invalidText={errors.allergic}
                  onChange={(e) => {
                    setFieldValue('allergic', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Surgical"
                  id="surgical"
                  invalid={errors.surgical}
                  invalidText={errors.surgical}
                  onChange={(e) => {
                    setFieldValue('surgical', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Hospital"
                  id="hospital"
                  invalid={errors.hospital}
                  invalidText={errors.hospital}
                  onChange={(e) => {
                    setFieldValue('hospital', e.target.value);
                  }}
                  rows={2}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

PathologicalHistory.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

PathologicalHistory.defaultProps = {
  initialValues: {
    personal: '',
    family: '',
    allergic: '',
    surgical: '',
    hospital: '',
  },
  onSubmit: () => {},
};

export default PathologicalHistory;
