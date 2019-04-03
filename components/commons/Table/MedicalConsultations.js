import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Button,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
} from 'carbon-components-react';

function MedicalConsultations(props) {
  const { medicalConsultations } = props;
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
              Illness
          </StructuredListCell>
          <StructuredListCell head>
              Date
          </StructuredListCell>
          <StructuredListCell head>
              Action
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {
            medicalConsultations.map(medicalConsultation => (
              <StructuredListRow key={medicalConsultation.uuid}>
                <StructuredListCell noWrap>
                  {medicalConsultation.illness}
                </StructuredListCell>
                <StructuredListCell>
                  {medicalConsultation.date}
                </StructuredListCell>
                <StructuredListCell>
                    <Button
                      href={`/medical-consultation?uuid=${medicalConsultation.uuid}`}
                    >
                      View
                    </Button>
                </StructuredListCell>
              </StructuredListRow>
            ))
          }
      </StructuredListBody>
    </StructuredListWrapper>
  );
}

MedicalConsultations.propTypes = {
  medicalConsultations: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    illness: PropTypes.string,
    date: PropTypes.string,
  })),
};

MedicalConsultations.defaultProps = {
  medicalConsultations: [],
};

export default MedicalConsultations;
