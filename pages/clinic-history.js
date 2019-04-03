import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher, Footer } from 'carbon-components-react';
import { productiveHeading03 } from '@carbon/type';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';
import NonPathologicalHistory from '../components/forms/NonPathologicalHistory';
import MedicalConsultations from '../components/commons/Table/MedicalConsultations';
import withAuth from '../hoc/withAuth';

class ClinicHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  setSelectedIndex = ({index}) =>{
    this.setState({ selectedIndex:index });
  };

  renderCurrentStep = () => {
    const { selectedIndex } = this.state;
    switch (selectedIndex) {
      case 0: {
        return (
          <FormContainer>
            <Patient />
          </FormContainer>
        )
      }
      case 1: {
        return (
          <FormContainer>
            <PathologicalHistory />
          </FormContainer>
        )
      }
      case 2: {
        return (
          <FormContainer>
            <NonPathologicalHistory onChange={({values, errors})=>{ console.log({values, errors})}}/>
          </FormContainer>
        )
      }
    }
  };


  render() {
    const { selectedIndex } = this.state;
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


export default withAuth(ClinicHistory);
