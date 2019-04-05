import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Accordion, AccordionItem,
  Form, TextArea, NumberInput, TextInput,
  Toggle,
} from 'carbon-components-react';
import './styles.css';

const PhysicalExamSchema = Yup.object().shape({
  hair: Yup.string(),
  implantationLine: Yup.string(),
  faceExam: Yup.object().shape({
    wrinkles: Yup.string(),
    volume: Yup.string(),
    dyschromias: Yup.string(),
    vascular: Yup.string(),
    flaccidity: Yup.string(),
    scars: Yup.string(),
    skin: Yup.string(),
    others: Yup.string(),
  }),
  bodyExam: Yup.object().shape({
    weight: Yup.number(),
    size: Yup.number(),
    bodyMassIndex: Yup.number(),
    bodyFatPercentage: Yup.number(),
    bodyMusclePercentage: Yup.number(),
    waistCircumference: Yup.number(),
    hipCircumference: Yup.number(),
    bicepsCircumference: Yup.number(),
    quadricepsCircumference: Yup.number(),
    cellulitis: Yup.string(),
    stretchMarks: Yup.boolean(),
    reticularVeins: Yup.boolean(),
    telangiectasia: Yup.boolean(),
    others: Yup.string(),
  }),
});

class PhysicalExam extends Component {
  render() {
    const { initialValues, onChange } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PhysicalExamSchema}
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
                    title="Others"
                  >
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Hair"
                          id="hair"
                          invalid={errors.hair}
                          invalidText={errors.hair}
                          value={values.hair}
                          onChange={(e) => {
                            setFieldValue('hair', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Implantation Line"
                          id="implantationLine"
                          invalid={errors.implantationLine}
                          invalidText={errors.implantationLine}
                          value={values.implantationLine}
                          onChange={(e) => {
                            setFieldValue('implantationLine', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>

                  </AccordionItem>
                  <AccordionItem
                    title="Face Exam"
                  >
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Wrinkles"
                          id="wrinkles"
                          invalid={errors.wrinkles}
                          invalidText={errors.wrinkles}
                          value={values.wrinkles}
                          onChange={(e) => {
                            setFieldValue('wrinkles', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Volume"
                          id="volume"
                          invalid={errors.volume}
                          invalidText={errors.volume}
                          value={values.volume}
                          onChange={(e) => {
                            setFieldValue('volume', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Dyschromias"
                          id="dyschromias"
                          invalid={errors.dyschromias}
                          invalidText={errors.dyschromias}
                          value={values.dyschromias}
                          onChange={(e) => {
                            setFieldValue('dyschromias', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Vascular"
                          id="vascular"
                          invalid={errors.vascular}
                          invalidText={errors.vascular}
                          value={values.vascular}
                          onChange={(e) => {
                            setFieldValue('vascular', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Flaccidity"
                          id="flaccidity"
                          invalid={errors.flaccidity}
                          invalidText={errors.flaccidity}
                          value={values.flaccidity}
                          onChange={(e) => {
                            setFieldValue('flaccidity', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Scars"
                          id="scars"
                          invalid={errors.scars}
                          invalidText={errors.scars}
                          value={values.scars}
                          onChange={(e) => {
                            setFieldValue('scars', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Skin"
                          id="skin"
                          invalid={errors.skin}
                          invalidText={errors.skin}
                          value={values.skin}
                          onChange={(e) => {
                            setFieldValue('skin', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Others"
                          id="others"
                          invalid={errors.others}
                          invalidText={errors.others}
                          value={values.others}
                          onChange={(e) => {
                            setFieldValue('others', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    title="Body Exam"
                  >
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Weight"
                          id="bodyExam.weight"
                          invalid={errors.bodyExam && errors.bodyExam.weight}
                          invalidText={errors.bodyExam && errors.bodyExam.weight}
                          value={values.bodyExam && values.bodyExam.weight}
                          onChange={(e) => {
                            setFieldValue('bodyExam.weight', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Size"
                          id="bodyExam.size"
                          invalid={errors.bodyExam && errors.bodyExam.size}
                          invalidText={errors.bodyExam && errors.bodyExam.size}
                          value={values.bodyExam && values.bodyExam.size}
                          onChange={(e) => {
                            setFieldValue('bodyExam.size', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Body Mass Index"
                          id="bodyExam.bodyMassIndex"
                          invalid={errors.bodyExam && errors.bodyExam.bodyMassIndex}
                          invalidText={errors.bodyExam && errors.bodyExam.bodyMassIndex}
                          value={values.bodyExam && values.bodyExam.bodyMassIndex}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyMassIndex', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Body Fat Percentage"
                          id="bodyExam.bodyFatPercentage"
                          invalid={errors.bodyExam && errors.bodyExam.bodyFatPercentage}
                          invalidText={errors.bodyExam && errors.bodyExam.bodyFatPercentage}
                          value={values.bodyExam && values.bodyExam.bodyFatPercentage}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyFatPercentage', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Body Muscle Percentage"
                          id="bodyExam.bodyMusclePercentage"
                          invalid={errors.bodyExam && errors.bodyExam.bodyMusclePercentage}
                          invalidText={errors.bodyExam && errors.bodyExam.bodyMusclePercentage}
                          value={values.bodyExam && values.bodyExam.bodyMusclePercentage}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyMusclePercentage', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Hip Circumference"
                          id="bodyExam.hipCircumference"
                          invalid={errors.bodyExam && errors.bodyExam.hipCircumference}
                          invalidText={errors.bodyExam && errors.bodyExam.hipCircumference}
                          value={values.bodyExam && values.bodyExam.hipCircumference}
                          onChange={(e) => {
                            setFieldValue('bodyExam.hipCircumference', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Biceps Circumference"
                          id="bodyExam.bicepsCircumference"
                          invalid={errors.bodyExam && errors.bodyExam.bicepsCircumference}
                          invalidText={errors.bodyExam && errors.bodyExam.bicepsCircumference}
                          value={values.bodyExam && values.bodyExam.bicepsCircumference}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bicepsCircumference', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Quadriceps Circumference"
                          id="bodyExam.quadricepsCircumference"
                          invalid={errors.bodyExam && errors.bodyExam.quadricepsCircumference}
                          invalidText={errors.bodyExam && errors.bodyExam.quadricepsCircumference}
                          value={values.bodyExam && values.bodyExam.quadricepsCircumference}
                          onChange={(e) => {
                            setFieldValue('bodyExam.quadricepsCircumference', parseFloat(e.target.value) || 0);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <TextInput
                          labelText="Cellulitis"
                          id="bodyExam.cellulitis"
                          invalid={errors.bodyExam && errors.bodyExam.cellulitis}
                          invalidText={errors.bodyExam && errors.bodyExam.cellulitis}
                          value={values.bodyExam && values.bodyExam.cellulitis}
                          onChange={(e) => {
                            setFieldValue('bodyExam.cellulitis', e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <Toggle
                          labelA="No"
                          labelB="Yes"
                          labelText="Stretch Marks"
                          id="bodyExam.stretchMarks"
                          invalid={errors.bodyExam && errors.bodyExam.stretchMarks}
                          invalidText={errors.bodyExam && errors.bodyExam.stretchMarks}
                          toggled={values.bodyExam && values.bodyExam.stretchMarks}
                          onToggle={() => {
                            setFieldValue('bodyExam.stretchMarks', values.bodyExam && !values.bodyExam.stretchMarks);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <Toggle
                          labelA="No"
                          labelB="Yes"
                          labelText="Reticular Veins"
                          id="bodyExam.reticularVeins"
                          invalid={errors.bodyExam && errors.bodyExam.reticularVeins}
                          invalidText={errors.bodyExam && errors.bodyExam.reticularVeins}
                          toggled={values.bodyExam && values.bodyExam.reticularVeins}
                          onToggle={() => {
                            setFieldValue('bodyExam.reticularVeins', values.bodyExam && !values.bodyExam.reticularVeins);
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <Toggle
                          labelA="No"
                          labelB="Yes"
                          labelText="Telangiectasia"
                          id="bodyExam.telangiectasia"
                          invalid={errors.bodyExam && errors.bodyExam.telangiectasia}
                          invalidText={errors.bodyExam && errors.bodyExam.telangiectasia}
                          toggled={values.bodyExam && values.bodyExam.telangiectasia}
                          onToggle={() => {
                            setFieldValue('bodyExam.telangiectasia', values.bodyExam && !values.bodyExam.telangiectasia);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <TextInput
                          labelText="Others"
                          id="bodyExam.others"
                          invalid={errors.bodyExam && errors.bodyExam.others}
                          invalidText={errors.bodyExam && errors.bodyExam.others}
                          value={values.bodyExam && values.bodyExam.others}
                          onChange={(e) => {
                            setFieldValue('bodyExam.others', e.target.value);
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

PhysicalExam.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

PhysicalExam.defaultProps = {
  initialValues: {
    bodyExam: {
      weight: 0,
      size: 0,
      bodyMassIndex: 0,
      bodyFatPercentage: 0,
      bodyMusclePercentage: 0,
      waistCircumference: 0,
      hipCircumference: 0,
      bicepsCircumference: 0,
      quadricepsCircumference: 0,
      cellulitis: '',
      stretchMarks: false,
      reticularVeins: false,
      telangiectasia: false,
      others: '',
    },
    faceExam: {
      wrinkles: '',
      volume: '',
      dyschromias: '',
      vascular: '',
      flaccidity: '',
      scars: '',
      skin: '',
      others: '',
    },
    hair: '',
    implantationLine: '',
  },
  onSubmit: () => {},
  onChange: () => {},
};

export default PhysicalExam;
