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
  hair: Yup.string().required('Required'),
  implantationLine: Yup.string().required('Required'),
  faceExam: Yup.object().shape({
    wrinkles: Yup.string().required('Required'),
    volume: Yup.string().required('Required'),
    dyschromias: Yup.string().required('Required'),
    vascular: Yup.string().required('Required'),
    flaccidity: Yup.string().required('Required'),
    scars: Yup.string().required('Required'),
    skin: Yup.string().required('Required'),
    others: Yup.string().required('Required'),
  }),
  bodyExam: Yup.object().shape({
    weight: Yup.number().required('Required'),
    size: Yup.number().required('Required'),
    bodyMassIndex: Yup.number().required('Required'),
    bodyFatPercentage: Yup.number().required('Required'),
    bodyMusclePercentage: Yup.number().required('Required'),
    waistCircumference: Yup.number().required('Required'),
    hipCircumference: Yup.number().required('Required'),
    bicepsCircumference: Yup.number().required('Required'),
    quadricepsCircumference: Yup.number().required('Required'),
    cellulitis: Yup.string().required('Required'),
    stretchMarks: Yup.boolean().required('Required'),
    reticularVeins: Yup.boolean().required('Required'),
    telangiectasia: Yup.boolean().required('Required'),
    others: Yup.string().required('Required'),
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
            {console.log({ values, errors })}
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
                          onChange={(e) => {
                            setFieldValue('bodyExam.weight', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Size"
                          id="bodyExam.size"
                          invalid={errors.bodyExam && errors.bodyExam.size}
                          invalidText={errors.bodyExam && errors.bodyExam.size}
                          onChange={(e) => {
                            setFieldValue('bodyExam.size', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Body Mass Index"
                          id="bodyExam.bodyMassIndex"
                          invalid={errors.bodyExam && errors.bodyExam.bodyMassIndex}
                          invalidText={errors.bodyExam && errors.bodyExam.bodyMassIndex}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyMassIndex', parseFloat(e.target.value));
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
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyFatPercentage', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Body Muscle Percentage"
                          id="bodyExam.bodyMusclePercentage"
                          invalid={errors.bodyExam && errors.bodyExam.bodyMusclePercentage}
                          invalidText={errors.bodyExam && errors.bodyExam.bodyMusclePercentage}
                          onChange={(e) => {
                            setFieldValue('bodyExam.bodyMusclePercentage', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Hip Circumference"
                          id="bodyExam.hipCircumference"
                          invalid={errors.bodyExam && errors.bodyExam.hipCircumference}
                          invalidText={errors.bodyExam && errors.bodyExam.hipCircumference}
                          onChange={(e) => {
                            setFieldValue('bodyExam.hipCircumference', parseFloat(e.target.value));
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
                          onChange={(e) => {
                            setFieldValue('bodyExam.bicepsCircumference', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <NumberInput
                          label="Quadriceps Circumference"
                          id="bodyExam.quadricepsCircumference"
                          invalid={errors.bodyExam && errors.bodyExam.quadricepsCircumference}
                          invalidText={errors.bodyExam && errors.bodyExam.quadricepsCircumference}
                          onChange={(e) => {
                            setFieldValue('bodyExam.quadricepsCircumference', parseFloat(e.target.value));
                          }}
                        />
                      </div>
                      <div className="bx--col bx--col-sm-4">
                        <TextInput
                          labelText="Cellulitis"
                          id="bodyExam.cellulitis"
                          invalid={errors.bodyExam && errors.bodyExam.cellulitis}
                          invalidText={errors.bodyExam && errors.bodyExam.cellulitis}
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
                          onToggle={() => {
                            setFieldValue('bodyExam.stretchMarks', !values.bodyExam.stretchMarks);
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
                          onToggle={() => {
                            setFieldValue('bodyExam.reticularVeins', !values.bodyExam.reticularVeins);
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
                          onToggle={() => {
                            setFieldValue('bodyExam.telangiectasia', !values.bodyExam.telangiectasia);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bx--row">
                      <div className="bx--col bx--col-sm-4">
                        <TextInput
                          labelText="Others"
                          id="others"
                          invalid={errors.bodyExam && errors.bodyExam.others}
                          invalidText={errors.bodyExam && errors.bodyExam.others}
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
