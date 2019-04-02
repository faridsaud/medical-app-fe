import React from 'react';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';

function ClinicHistory() {
  return (
      <Page title={'Clinic History'}>
        <Patient></Patient>
      </Page>
  );
}

ClinicHistory.propTypes = {};

export default ClinicHistory;
