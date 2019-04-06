import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextArea,
} from 'carbon-components-react';
import './styles.css';

const PostExamSchema = Yup.object().shape({
  diagnosis: Yup.string(),
  treatmentPlan: Yup.string(),
  indications: Yup.string(),
  complementaryExam: Yup.string(),
  observations: Yup.string(),
});

class PostExam extends Component {
  render() {
    const { initialValues, onChange } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PostExamSchema}
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
                  labelText="Diagnosis"
                  id="diagnosis"
                  invalid={errors.diagnosis}
                  invalidText={errors.diagnosis}
                  value={values.diagnosis}
                  onChange={(e) => {
                    setFieldValue('diagnosis', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Treatment Plan"
                  id="treatmentPlan"
                  invalid={errors.treatmentPlan}
                  invalidText={errors.treatmentPlan}
                  value={values.treatmentPlan}
                  onChange={(e) => {
                    setFieldValue('treatmentPlan', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Indications"
                  id="indications"
                  invalid={errors.indications}
                  invalidText={errors.indications}
                  value={values.indications}
                  onChange={(e) => {
                    setFieldValue('indications', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Complementary Exam"
                  id="complementaryExam"
                  invalid={errors.complementaryExam}
                  invalidText={errors.complementaryExam}
                  value={values.complementaryExam}
                  onChange={(e) => {
                    setFieldValue('complementaryExam', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Observations"
                  id="observations"
                  invalid={errors.observations}
                  invalidText={errors.observations}
                  value={values.observations}
                  onChange={(e) => {
                    setFieldValue('observations', e.target.value);
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

PostExam.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

PostExam.defaultProps = {
  initialValues: {
    diagnosis: '',
    treatmentPlan: '',
    indications: '',
    complementaryExam: '',
    observations: '',
  },
  onSubmit: () => {},
  onChange: () => {},
};

export default PostExam;
