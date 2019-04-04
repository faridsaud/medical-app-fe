import React from 'react';
import Router from 'next/router';
import { isLoggedIn } from '../utils/auth';

const withAuth = WrappedComponent => function () {
  if (!isLoggedIn()) {
    if (Router) {
      Router.push('/login');
    }
    return null;
  }
  return <WrappedComponent />;
};


export default withAuth;
