import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher } from 'carbon-components-react';
import { productiveHeading03 } from '@carbon/type';
import _ from 'lodash';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';
import NonPathologicalHistory from '../components/forms/NonPathologicalHistory';
import MedicalConsultations from '../components/commons/Table/MedicalConsultations';
import RestServices from '../services/rest';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Footer from '../components/commons/Footer/Footer';
import { printData } from "../utils/print";

class ClinicHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      patient: {
        values: {},
        errors: {},
      },
      pathologicalHistory: {
        values: {},
        errors: {},
      },
      nonPathologicalHistory: {
        values: {},
        errors: {},
      },
    };
  }

  componentDidMount = async () => {
    try {
      const {query:{uuid}} = this.props;
      if(uuid){
        const {data: {
          patient,
          pathologicalHistory,
          nonPathologicalHistory,
          medicalConsultations,
        }} = await RestServices.clinicHistory.get(uuid);
        this.setState({
          patient:{
            values:{
              ...patient,
            },
            errors:{

            },
          },
          pathologicalHistory:{
            values:{
              ...pathologicalHistory,
            },
            errors:{

            },
          },
          nonPathologicalHistory:{
            values:{
              ...nonPathologicalHistory,
            },
            errors:{

            },
          },
          medicalConsultations: medicalConsultations.map(medicalConsultation => ({
            uuid: medicalConsultation._id,
            ...medicalConsultation,
          }))
        })
      }

    } catch (e) {

    }
  };

  static getInitialProps({query}) {
    return {query}
  }

  setSelectedIndex = ({index}) =>{
    this.setState({ selectedIndex:index });
  };

  setPatientValues = ({values, errors}) => {
    const {patient} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(patient) && !_.isEmpty(values))
    this.setState({
      patient:{
        values,
        errors,
      }
    })
  };

  setPathologicalHistoryValues = ({values, errors}) => {
    const {pathologicalHistory} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(pathologicalHistory) && !_.isEmpty(values))
      this.setState({
        pathologicalHistory:{
          values,
          errors,
        }
      })
  };

  setNonPathologicalHistoryValues = ({values, errors}) => {
    const {nonPathologicalHistory} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(nonPathologicalHistory) && !_.isEmpty(values))
      this.setState({
        nonPathologicalHistory:{
          values,
          errors,
        }
      })
  };

  handlePrint = () => {
    const {
      patient: {values: patient},
      pathologicalHistory: {values: pathologicalHistory},
      nonPathologicalHistory: {values: nonPathologicalHistory},
    } = this.state;
    printData("Clinic History", {
      patient,
      pathologicalHistory,
      nonPathologicalHistory,
    })
  }

  handleSave = async () => {
    const {
      patient: {values: patient},
      pathologicalHistory: {values: pathologicalHistory},
      nonPathologicalHistory: {values: nonPathologicalHistory},
    } = this.state;
    const {query:{uuid}} = this.props;
    try {
      if(uuid){
        await RestServices.clinicHistory.update(uuid, {
          patient,
          pathologicalHistory,
          nonPathologicalHistory,
        });
      }else{
        await RestServices.clinicHistory.create({
          patient,
          pathologicalHistory,
          nonPathologicalHistory,
        });
      }

      toast.success('History Clinic created');
      Router.push('/dashboard');
    }catch (e) {
      toast.error(e.toString());
    }

  };

  renderCurrentStep = () => {
    const { selectedIndex, patient, nonPathologicalHistory, pathologicalHistory  } = this.state;
    switch (selectedIndex) {
      case 0: {
        return (
          <FormContainer>
            <Patient onChange={this.setPatientValues} initialValues={{...patient.values}}/>
          </FormContainer>
        )
      }
      case 1: {
        return (
          <FormContainer>
            <PathologicalHistory onChange={this.setPathologicalHistoryValues} initialValues={{...pathologicalHistory.values}}/>
          </FormContainer>
        )
      }
      case 2: {
        return (
          <FormContainer>
            <NonPathologicalHistory onChange={this.setNonPathologicalHistoryValues} initialValues={{...nonPathologicalHistory.values}}/>
          </FormContainer>
        )
      }
    }
  };


  render() {
    const { selectedIndex, medicalConsultations} = this.state;
    const {query:{uuid}} = this.props;
    return (
      <Page title="Clinic History" id="clinic-history">
        <ContentSwitcherContainer className={'bx--grid'}>
          <ContentSwitcher onChange={this.setSelectedIndex} selectedIndex={selectedIndex}>
            <Switch
              name="one"
              text="Patient Information"
              disabled={false}
            />
            <Switch
              name="two"
              text="Pathological History"
              disabled={false}
            />
            <Switch
              name="three"
              text="Non-Pathological History"
              disabled={false}
            />
          </ContentSwitcher>
        </ContentSwitcherContainer>
        {this.renderCurrentStep()}
        {
          uuid &&
          <MedicalConsultationsContainer className={'bx--grid'}>
            <MedicalHeaderContainter>
              <div style={{...productiveHeading03}}>
                Medical Consultations
              </div>
              <Button onClick={() => Router.push(`/medical-consultation?clinic-history-uuid=${uuid}`)}>
                New Medical Consultation
              </Button>

            </MedicalHeaderContainter>

            <MedicalConsultations
              medicalConsultations={medicalConsultations}
            />
          </MedicalConsultationsContainer>
        }
        <Footer
          secondaryAction={{
            label:'Print',
            onClick: this.handlePrint

          }}
          primaryAction={{
            label: 'Save',
            onClick: this.handleSave,
          }}
        />
      </Page>
    );
  }
}

ClinicHistory.propTypes = {};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const ContentSwitcherContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
`;

const MedicalConsultationsContainer = styled.div`
  margin-bottom: 8rem;
`;

const MedicalHeaderContainter = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default ClinicHistory;
