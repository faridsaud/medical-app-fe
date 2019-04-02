import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from '../../head';
import AppBar from '../AppBar/AppBar';
import PageTitle from './PageTitle';

function Page({ children, title }) {
  return (
    <React.Fragment>
      <Head title="Clinic History" />
      <AppBar />
      <PageTitle>{title}</PageTitle>
      <Content>
        {children}
      </Content>
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: '',
};

const Content = styled.div`
  width: 100%;
  padding-top: 3rem;
`;

export default Page;
