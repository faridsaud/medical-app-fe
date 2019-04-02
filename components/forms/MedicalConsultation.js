import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form, TextArea,
} from 'carbon-components-react';
import './styles.css';

const MedicalConsultationSchema = Yup.object().shape({
  diagnosis: Yup.string().required('Required'),
  treatmentPlan: Yup.string().required('Required'),
  indications: Yup.string().required('Required'),
  complementaryExam: Yup.string().required('Required'),
  observations: Yup.string().required('Required'),
});

class MedicalConsultation extends Component {
  render() {
    const { initialValues } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={MedicalConsultationSchema}
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
            {console.log({ errors, values })}
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="Diagnosis"
                  id="diagnosis"
                  invalid={errors.diagnosis}
                  invalidText={errors.diagnosis}
                  onChange={(e) => {
                    setFieldValue('diagnosis', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="TreatmentPlan"
                  id="treatmentPlan"
                  invalid={errors.treatmentPlan}
                  invalidText={errors.treatmentPlan}
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
                  onChange={(e) => {
                    setFieldValue('indications', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <TextArea
                  labelText="ComplementaryExam"
                  id="complementaryExam"
                  invalid={errors.complementaryExam}
                  invalidText={errors.complementaryExam}
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

MedicalConsultation.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

MedicalConsultation.defaultProps = {
  initialValues: {
    diagnosis: '',
    treatmentPlan: '',
    indications: '',
    complementaryExam: '',
    observations: '',
  },
  onSubmit: () => {},
};

export default MedicalConsultation;
