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

function ClinicHistories(props) {
  const { clinicHistories } = props;
  return (
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>
            Full Name
          </StructuredListCell>
          <StructuredListCell head>
            Document Number
          </StructuredListCell>
          <StructuredListCell head>
            Action
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {
          clinicHistories.map(({ uuid, patient }) => (
            <StructuredListRow key={uuid}>
              <StructuredListCell noWrap>
                {`${patient.firstName} ${patient.lastName}`}
              </StructuredListCell>
              <StructuredListCell>
                {patient.documentNumber}
              </StructuredListCell>
              <StructuredListCell>
                  <Button
                    href={`/clinic-history?uuid=${uuid}`}
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

ClinicHistories.propTypes = {
  clinicHistories: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    patient: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      documentNumber: PropTypes.string,
    }),
  })),
};

ClinicHistories.defaultProps = {
  clinicHistories: [],
};

export default ClinicHistories;
