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
    breakfast: Yup.string().required('Required'),
    midMorning: Yup.string().required('Required'),
    launch: Yup.string().required('Required'),
    midAfternoon: Yup.string().required('Required'),
    dinner: Yup.string().required('Required'),
  }),
  exercise: Yup.string().required('Required'),
  dreamQuality: Yup.string().required('Required'),
  medications: Yup.string().required('Required'),
  facialCare: Yup.string().required('Required'),
  toxic: Yup.string().required('Required'),
});

class NonPathologicalHistory extends Component {
  render() {
    const { initialValues } = this.props;
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
            {console.log({errors, values})}
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
                          id="launch"
                          invalid={errors.feedingHabits && errors.feedingHabits.launch}
                          invalidText={errors.feedingHabits && errors.feedingHabits.launch}
                          onChange={(e) => {
                            setFieldValue('launch', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Mid Afternoon"
                          id="midAfternoon"
                          invalid={errors.feedingHabits && errors.feedingHabits.midAfternoon}
                          invalidText={errors.feedingHabits && errors.feedingHabits.midAfternoon}
                          onChange={(e) => {
                            setFieldValue('midAfternoon', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Dinner"
                          id="dinner"
                          invalid={errors.feedingHabits && errors.feedingHabits.dinner}
                          invalidText={errors.feedingHabits && errors.feedingHabits.dinner}
                          onChange={(e) => {
                            setFieldValue('dinner', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                  </AccordionItem>
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
};

export default NonPathologicalHistory;
