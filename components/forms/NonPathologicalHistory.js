import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Accordion, AccordionItem,
  Form, TextArea,
} from 'carbon-components-react';
import './styles.css';

const NonPathologicalHistorySchema = Yup.object().shape({
  feedingHabits: Yup.object().shape({
    breakfast: Yup.string(),
    midMorning: Yup.string(),
    launch: Yup.string(),
    midAfternoon: Yup.string(),
    dinner: Yup.string(),
  }),
  exercise: Yup.string(),
  dreamQuality: Yup.string(),
  medications: Yup.string(),
  facialCare: Yup.string(),
  toxic: Yup.string(),
});

class NonPathologicalHistory extends Component {
  render() {
    const { initialValues, onChange } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={NonPathologicalHistorySchema}
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
            {onChange({ values, errors })}
            <div className="bx--row">
              <div className="bx--col">
                <Accordion>
                  <AccordionItem
                    title="Feeding Habits"
                  >
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Breakfast"
                          id="feedingHabits.breakfast"
                          invalid={errors.feedingHabits && errors.feedingHabits.breakfast}
                          invalidText={errors.feedingHabits && errors.feedingHabits.breakfast}
                          value={values.feedingHabits && values.feedingHabits.breakfast}
                          onChange={(e) => {
                            setFieldValue('feedingHabits.breakfast', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Mid Morning"
                          id="feedingHabits.midMorning"
                          invalid={errors.feedingHabits && errors.feedingHabits.midMorning}
                          invalidText={errors.feedingHabits && errors.feedingHabits.midMorning}
                          value={values.feedingHabits && values.feedingHabits.midMorning}
                          onChange={(e) => {
                            setFieldValue('feedingHabits.midMorning', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Launch"
                          id="feedingHabits.launch"
                          invalid={errors.feedingHabits && errors.feedingHabits.launch}
                          invalidText={errors.feedingHabits && errors.feedingHabits.launch}
                          value={values.feedingHabits && values.feedingHabits.launch}
                          onChange={(e) => {
                            setFieldValue('feedingHabits.launch', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Mid Afternoon"
                          id="feedingHabits.midAfternoon"
                          invalid={errors.feedingHabits && errors.feedingHabits.midAfternoon}
                          invalidText={errors.feedingHabits && errors.feedingHabits.midAfternoon}
                          value={values.feedingHabits && values.feedingHabits.midAfternoon}
                          onChange={(e) => {
                            setFieldValue('feedingHabits.midAfternoon', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Dinner"
                          id="feedingHabits.dinner"
                          invalid={errors.feedingHabits && errors.feedingHabits.dinner}
                          invalidText={errors.feedingHabits && errors.feedingHabits.dinner}
                          value={values.feedingHabits && values.feedingHabits.dinner}
                          onChange={(e) => {
                            setFieldValue('feedingHabits.dinner', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="bx--col">
                <Accordion>
                  <AccordionItem
                    title="Non-Feeding Habits"
                  >

                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Exercise"
                          id="exercise"
                          invalid={errors.exercise}
                          invalidText={errors.exercise}
                          value={values.exercise}
                          onChange={(e) => {
                            setFieldValue('exercise', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Dream Quality"
                          id="dreamQuality"
                          invalid={errors.dreamQuality}
                          invalidText={errors.dreamQuality}
                          value={values.dreamQuality}
                          onChange={(e) => {
                            setFieldValue('dreamQuality', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Medications"
                          id="medications"
                          invalid={errors.medications}
                          invalidText={errors.medications}
                          value={values.medications}
                          onChange={(e) => {
                            setFieldValue('medications', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Facial Care"
                          id="facialCare"
                          invalid={errors.facialCare}
                          invalidText={errors.facialCare}
                          value={values.facialCare}
                          onChange={(e) => {
                            setFieldValue('facialCare', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Toxic"
                          id="toxic"
                          invalid={errors.toxic}
                          invalidText={errors.toxic}
                          value={values.toxic}
                          onChange={(e) => {
                            setFieldValue('toxic', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>


          </Form>
        )}
      </Formik>
    );
  }
}

NonPathologicalHistory.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

NonPathologicalHistory.defaultProps = {
  initialValues: {
    feedingHabits: {
      breakfast: '',
      midMorning: '',
      launch: '',
      midAfternoon: '',
      dinner: '',
    },
    exercise: '',
    dreamQuality: '',
    medications: '',
    facialCare: '',
    toxic: '',
  },
  onSubmit: () => {},
  onChange: () => {},
};

export default NonPathologicalHistory;
