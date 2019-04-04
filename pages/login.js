import React, { Component } from 'react';
import {
  Form, TextInput, Modal, Footer,
} from 'carbon-components-react';
import Head from '../components/head';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }


  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Head title="Login" />
        <Modal
          open
          modalHeading="Login"
          primaryButtonText="Login"
          secondaryButtonText="Sign Up"

        >
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
        </Modal>
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
