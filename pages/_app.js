import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';
import '../styles/index.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <ToastContainer />
      </Container>
    );
  }
}

export default MyApp;
