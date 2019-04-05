import React, { Component } from 'react';
import {
  ModalBody, TextInput, ComposedModal, ModalHeader, ModalFooter,
} from 'carbon-components-react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Router from 'next/router';
import Head from '../components/head';
import RestServices from '../services/rest';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: true,
    };
  }

  handleLogin = async () => {
    try {
      const {email, password} = this.state;
      await RestServices.auth.login(email, password);
      Router.push('/');
    } catch (e) {
      toast.error(e.toString());
    }
  };


  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Head title="Login" />
        <ComposedModal open={true}>
          <ModalHeader
            title="Login"
            iconDescription="Close"
          />
          <ModalBody>
            <div className="bx--grid">
              <div className="bx--row">
                <div className="bx--col padded-bottom">
                  <TextInput
                    labelText="Email"
                    id="email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    type="email"
                    value={email}
                  />
                </div>
              </div>
              <div className="bx--row">
                <div className="bx--col">
                  <TextInput
                    labelText="Password"
                    id="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    type="password"
                    value={password}
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            primaryButtonText="Login"
            primaryButtonDisabled={false}
            secondaryButtonText=""
            onRequestClose={()=>{this.setState({open: true})}}
            closeModal={()=>{this.setState({open: true})}}
            onRequestSubmit={this.handleLogin}
          />
        </ComposedModal>

        <style jsx>
          {`
            .padded-bottom {
              padding-bottom: 2rem;
            }
        `}
        </style>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
