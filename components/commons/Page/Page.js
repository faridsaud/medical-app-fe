import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Head from '../../../components/head';
import AppBar from '../../../components/commons/AppBar/AppBar';

function Page({children}) {
  return (
      <React.Fragment>
        <Head title="Clinic History" />
        <AppBar/>
        <Content>
          {children}
        </Content>
      </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.element,
};

const Content = styled.div`
  width: 100%;
  padding-top: 3rem;
`;

export default Page;
