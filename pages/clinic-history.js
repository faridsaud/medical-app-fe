import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher, Footer } from 'carbon-components-react';
import { productiveHeading03 } from '@carbon/type';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';
import NonPathologicalHistory from '../components/forms/NonPathologicalHistory';
import MedicalConsultations from '../components/commons/Table/MedicalConsultations';
import RestServices from '../services/rest';
import Router from 'next/router';
import { toast } from 'react-toastify';

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

  setSelectedIndex = ({index}) =>{
    this.setState({ selectedIndex:index });
  };

  setPatientValues = ({values, errors}) => {
    const {patient} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(patient))
    this.setState({
      patient:{
        values,
        errors,
      }
    })
  };

  setPathologicalHistoryValues = ({values, errors}) => {
    const {pathologicalHistory} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(pathologicalHistory))
      this.setState({
        pathologicalHistory:{
          values,
          errors,
        }
      })
  };

  setNonPathologicalHistoryValues = ({values, errors}) => {
    const {nonPathologicalHistory} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(nonPathologicalHistory))
      this.setState({
        nonPathologicalHistory:{
          values,
          errors,
        }
      })
  };

  handleSave = async () => {
    const {
      patient: {values: patient},
      pathologicalHistory: {values: pathologicalHistory},
      nonPathologicalHistory: {values: nonPathologicalHistory},
    } = this.state;
    try {
      await RestServices.clinicHistory.create({
        patient,
        pathologicalHistory,
        nonPathologicalHistory,
      })
      toast.success('History Clinic created');
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
    const { selectedIndex} = this.state;
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
        <MedicalConsultationsContainer className={'bx--grid'}>
          <div style={{...productiveHeading03}}>
            Medical Consultations
          </div>
          <MedicalConsultations
          medicalConsultations={[{uuid: '1', illness: 'Love Sick', date: new Date().toISOString()}]}
          />
        </MedicalConsultationsContainer>
        <Footer
          labelOne={""}
          linkTextOne={""}
          linkHrefOne={""}
          labelTwo={""}
          linkTextTwo={""}
          linkHrefTwo={""}
          buttonText={'Save'}
          onClick={this.handleSave}
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


export default ClinicHistory;
