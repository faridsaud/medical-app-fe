import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher, Footer } from 'carbon-components-react';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';
import MedicalConsultation from '../components/forms/MedicalConsultation';
import NonPathologicalHistory from '../components/forms/NonPathologicalHistory';

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
            <NonPathologicalHistory />
          </FormContainer>
        )
      }
    }
  };


  render() {
    const { selectedIndex } = this.state;
    return (
      <Page title="Clinic History" id="clinic-history">
        <ContentSwitchetContainer className={'bx--grid'}>
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
        </ContentSwitchetContainer>
        {this.renderCurrentStep()}
        <Footer

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
  margin-bottom: 8rem;
`;

const ContentSwitchetContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
`;


export default ClinicHistory;
