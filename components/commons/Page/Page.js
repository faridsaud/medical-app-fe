import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../../components/head';
import AppBar from '../../../components/commons/AppBar/AppBar';

function Page({children}) {
  return (
      <React.Fragment>
        <Head title="Clinic History" />
        <AppBar/>
        <div>

        </div>
        {children}
      </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.element,
};

export default Page;
