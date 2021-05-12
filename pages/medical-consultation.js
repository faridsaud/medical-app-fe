import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Switch, ContentSwitcher } from 'carbon-components-react';
import Page from '../components/commons/Page/Page';
import PostExam from '../components/forms/PostExam';
import PhysicalExam from '../components/forms/PhysicalExam';
import PreExam from '../components/forms/PreExam';
import RestServices from '../services/rest';
import { toast } from 'react-toastify';
import Router from 'next/dist/client/router';
import _ from 'lodash';
import Footer from '../components/commons/Footer/Footer';
import { printData } from "../utils/print";


class MedicalConsultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      preExam: {
        values: {},
        errors: {},
      },
      physicalExam: {
        values: {},
        errors: {},
      },
      postExam: {
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
          physicalExam,
          reason,
          currentIllness,
          diagnosis,
          treatmentPlan,
          indications,
          complementaryExam,
          observations,
        }} = await RestServices.medicalConsultation.get(uuid);
        this.setState({
          preExam:{
            values:{
              reason,
              currentIllness,
            },
            errors:{

            },
          },
          physicalExam:{
            values:{
              ...physicalExam,
            },
            errors:{

            },
          },
          postExam:{
            values:{
              diagnosis,
              treatmentPlan,
              indications,
              complementaryExam,
              observations,
            },
            errors:{

            },
          },
        })
      }

    } catch (e) {

    }
  };

  static getInitialProps({query}) {
    return {query}
  }

  setSelectedIndex = ({ index }) => {
    this.setState({ selectedIndex: index });
  };

  setPreExamValues = ({values, errors}) => {
    const {preExam} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(preExam) && !_.isEmpty(values))
      this.setState({
        preExam:{
          values,
          errors,
        }
      })
  };

  setPhysicalExamValues = ({values, errors}) => {
    const {physicalExam} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(physicalExam) && !_.isEmpty(values))
      this.setState({
        physicalExam:{
          values,
          errors,
        }
      })
  };

  setPostExamValues = ({values, errors}) => {
    const {postExam} = this.state;
    if(JSON.stringify({values, errors})!== JSON.stringify(postExam) && !_.isEmpty(values))
      this.setState({
        postExam:{
          values,
          errors,
        }
      })
  };

  handlePrint = () => {
    const {
      preExam:{values: preExam},
      physicalExam:{values: physicalExam},
      postExam:{values: postExam} } = this.state;
    console.log({physicalExam})
    printData("Medical Consultation", {
      preExam,
      physicalExam,
      postExam,
    })
  }

  handleSave = async () => {
    const {
      preExam:{values: preExam},
      physicalExam:{values: physicalExam},
      postExam:{values: postExam} } = this.state;
    const { query: { uuid, 'clinic-history-uuid': clinicHistory } } = this.props;
    try {
      if (uuid) {
        await RestServices.medicalConsultation.update(uuid, {
          clinicHistory,
            ...preExam,
          physicalExam,
          ...postExam,
        });
      } else {
        await RestServices.medicalConsultation.create({
          clinicHistory,
          ...preExam,
          physicalExam,
          ...postExam,
        });
      }
      toast.success('Medical Consultation created');
      Router.push('/dashboard');
    } catch (e) {
      toast.error(e.toString());

    }

  };

  renderCurrentStep = () => {
    const { selectedIndex, preExam, physicalExam, postExam } = this.state;
    switch (selectedIndex) {
      case 0: {
        return (
          <FormContainer>
            <PreExam onChange={this.setPreExamValues} initialValues={{...preExam.values}}/>
          </FormContainer>
        );
      }
      case 1: {
        return (
          <FormContainer>
            <PhysicalExam onChange={this.setPhysicalExamValues} initialValues={{...physicalExam.values}}/>
          </FormContainer>
        );
      }
      case 2: {
        return (
          <FormContainer>
            <PostExam onChange={this.setPostExamValues} initialValues={{...postExam.values}}/>
          </FormContainer>
        );
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
