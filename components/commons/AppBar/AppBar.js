import React, { Component } from 'react';
import { productiveHeading02 } from '@carbon/type';

class AppBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-header">
          <a href="/" className="main-link" style={{ ...productiveHeading02 }}>
            Home
          </a>
        </div>
        <style jsx>
          {`
            .app-header {
              width: 100%;
              display: flex;
              height: 3rem;
              background-color: #171617;
              padding: 1rem;
            }
            .main-link{
              color: white;
              text-decoration: none;
            }
        `}
        </style>
      </React.Fragment>
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
