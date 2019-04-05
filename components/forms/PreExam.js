import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextArea,
} from 'carbon-components-react';
import './styles.css';

const PreExamSchema = Yup.object().shape({
  reason: Yup.string(),
  currentIllness: Yup.string(),
});

class PreExam extends Component {
  render() {
    const { initialValues, onChange } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PreExamSchema}
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
            {onChange({ errors, values })}
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Reason"
                  id="reason"
                  invalid={errors.reason}
                  invalidText={errors.reason}
                  value={values.reason}
                  onChange={(e) => {
                    setFieldValue('reason', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Current Illness"
                  id="currentIllness"
                  invalid={errors.currentIllness}
                  invalidText={errors.currentIllness}
                  value={values.currentIllness}
                  onChange={(e) => {
                    setFieldValue('currentIllness', e.target.value);
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

PreExam.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

PreExam.defaultProps = {
  initialValues: {
    reason: '',
    currentIllness: '',
  },
  onSubmit: () => {},
  onChange: () => {},
};

export default PreExam;
