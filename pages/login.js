import React from 'react';
import {Button, Form, TextInput} from 'carbon-components-react';
import Head from '../components/head';

function Login() {
  return (
      <div>
        <Head title="Login" />
        <Form>
          <TextInput labelText={'Test'}>

          </TextInput>
        </Form>
      </div>
  );
}

Login.propTypes = {};

export default Login;
