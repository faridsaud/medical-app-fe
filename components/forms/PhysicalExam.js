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
                          id="faceExam.wrinkles"
                          invalid={errors.faceExam && errors.faceExam.wrinkles}
                          invalidText={errors.faceExam && errors.faceExam.wrinkles}
                          value={values.faceExam && values.faceExam.wrinkles}
                          onChange={(e) => {
                            setFieldValue('faceExam.wrinkles', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Volume"
                          id="faceExam.volume"
                          invalid={errors.faceExam && errors.faceExam.volume}
                          invalidText={errors.faceExam && errors.faceExam.volume}
                          value={values.faceExam && values.faceExam.volume}
                          onChange={(e) => {
                            setFieldValue('faceExam.volume', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Dyschromias"
                          id="faceExam.dyschromias"
                          invalid={errors.faceExam && errors.faceExam.dyschromias}
                          invalidText={errors.faceExam && errors.faceExam.dyschromias}
                          value={values.faceExam && values.faceExam.dyschromias}
                          onChange={(e) => {
                            setFieldValue('faceExam.dyschromias', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Vascular"
                          id="faceExam.vascular"
                          invalid={errors.faceExam && errors.faceExam.vascular}
                          invalidText={errors.faceExam && errors.faceExam.vascular}
                          value={values.faceExam && values.faceExam.vascular}
                          onChange={(e) => {
                            setFieldValue('faceExam.vascular', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Flaccidity"
                          id="faceExam.flaccidity"
                          invalid={errors.faceExam && errors.faceExam.flaccidity}
                          invalidText={errors.faceExam && errors.faceExam.flaccidity}
                          value={values.faceExam && values.faceExam.flaccidity}
                          onChange={(e) => {
                            setFieldValue('faceExam.flaccidity', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Scars"
                          id="faceExam.scars"
                          invalid={errors.faceExam && errors.faceExam.scars}
                          invalidText={errors.faceExam && errors.faceExam.scars}
                          value={values.faceExam && values.faceExam.scars}
                          onChange={(e) => {
                            setFieldValue('faceExam.scars', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Skin"
                          id="faceExam.skin"
                          invalid={errors.faceExam && errors.faceExam.skin}
                          invalidText={errors.faceExam && errors.faceExam.skin}
                          value={values.faceExam && values.faceExam.skin}
                          onChange={(e) => {
                            setFieldValue('faceExam.skin', e.target.value);
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col">
                        <TextArea
                          labelText="Others"
                          id="faceExam.others"
                          invalid={errors.faceExam && errors.faceExam.others}
                          invalidText={errors.faceExam && errors.faceExam.others}
                          value={values.faceExam && values.faceExam.others}
                          onChange={(e) => {
                            setFieldValue('faceExam.others', e.target.value);
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
