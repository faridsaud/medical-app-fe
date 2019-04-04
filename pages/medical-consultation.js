import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher, Footer } from 'carbon-components-react';
import Page from '../components/commons/Page/Page';
import PostExam from '../components/forms/PostExam';
import PhysicalExam from '../components/forms/PhysicalExam';
import PreExam from '../components/forms/PreExam';
import withAuth from '../hoc/withAuth';

class MedicalConsultation extends Component {
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
            <PreExam/>
          </FormContainer>
        )
      }
      case 1: {
        return (
          <FormContainer>
            <PhysicalExam />
          </FormContainer>
        )
      }
      case 2: {
        return (
          <FormContainer>
            <PostExam/>
          </FormContainer>
        )
      }
    }
  };


  render() {
    const { selectedIndex } = this.state;
    return (
      <Page title="Medical Consultation" id="medical-consultation">
        <ContentSwitcherContainer className={'bx--grid'}>
          <ContentSwitcher onChange={this.setSelectedIndex} selectedIndex={selectedIndex}>
            <Switch
              name="one"
              text="Pre Exam"
              disabled={false}
            />
            <Switch
              name="two"
              text="Physical Exam"
              disabled={false}
            />
            <Switch
              name="three"
              text="Post Exam"
              disabled={false}
            />
          </ContentSwitcher>
        </ContentSwitcherContainer>
        {this.renderCurrentStep()}
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

MedicalConsultation.propTypes = {};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
`;

const ContentSwitcherContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 2rem;
`;


export default MedicalConsultation;
