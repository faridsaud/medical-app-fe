import React from 'react';
import { Form, TextInput } from 'carbon-components-react';
import Head from '../components/head';

function Login() {
  return (
    <div>
      <Head title="Login" />
      <Form>
        <TextInput labelText="Test" />
      </Form>
    </div>
  );
}

Login.propTypes = {};

export default Login;
