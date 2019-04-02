import React from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import styled from 'styled-components';
import { Button } from 'carbon-components-react';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';
import MedicalConsultation from '../components/forms/MedicalConsultation';

function ClinicHistory() {
  return (
    <Page title="Clinic History" id="clinic-history">
      <Wizard>
        <Steps>
          <Step
            id="patient"
            render={({ next }) => (
              <FormContainer>
                <Patient />
                <ButtonContainer className="bx--grid">
                  <div />
                  <Button
                    onClick={next}
                  >
                    Next
                  </Button>
                </ButtonContainer>
              </FormContainer>
            )}
          />
          <Step
            id="pathologicalHistory"
            render={({ next, previous }) => (
              <FormContainer>
                <PathologicalHistory />
                <ButtonContainer className="bx--grid">
                  <Button
                    onClick={previous}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={next}
                  >
                    Next
                  </Button>
                </ButtonContainer>
              </FormContainer>
            )}
          />
          <Step
            id="medicalConsultation"
            render={({ next, previous }) => (
              <FormContainer>
                <MedicalConsultation />
                <ButtonContainer className="bx--grid">
                  <Button
                    onClick={previous}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={next}
                  >
                    Next
                  </Button>
                </ButtonContainer>
              </FormContainer>
            )}
          />
        </Steps>
      </Wizard>
    </Page>
  );
}

ClinicHistory.propTypes = {};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  bottom: 0;
  height: 5rem;
  background-color: white;
`;

export default ClinicHistory;
