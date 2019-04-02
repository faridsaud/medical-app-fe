import React from 'react';
import Patient from '../components/forms/Patient';
import Page from '../components/commons/Page/Page';
import PathologicalHistory from '../components/forms/PathologicalHistory';

function ClinicHistory() {
  return (
      <Page title={'Clinic History'}>
        <Patient/>
        <PathologicalHistory/>
      </Page>
  );
}

ClinicHistory.propTypes = {};

export default ClinicHistory;
