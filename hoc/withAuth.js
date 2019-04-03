import React from 'react';
import Router from 'next/router';
import { isLoggedIn } from '../utils/auth';

const withAuth = WrappedComponent => function () {
  if (!isLoggedIn()) {
    Router.push('/login');
    return null;
  }
  return <WrappedComponent />;
};


export default withAuth;
