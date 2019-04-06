import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'carbon-components-react';

class Footer extends Component {
  render() {
    const { primaryAction, secondaryAction } = this.props;
    return (
      <div id="footer">
        {secondaryAction
        && (
          <Button onClick={secondaryAction.onClick}>
            {secondaryAction.label}
          </Button>
        )
        }
        {primaryAction
          && (
          <Button onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
          )
        }
        <style jsx>
          {`
            #footer {
              position: fixed;
              bottom: 0;
              display: flex;
              justify-content: flex-end;
              font-family: "ibm-plex-sans", Helvetica Neue, Arial, sans-serif;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              border-top: 2px solid #3d70b2;
              background-color: #fff;
              min-height: 3.5rem;
              z-index: 5000;
              padding: 1.25rem 5%;
              width: 100%;
            }
        `}
        </style>
      </div>
    );
  }
}

Footer.propTypes = {
  primaryAction: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

Footer.defaultProps = {
  primaryAction: null,
  secondaryAction: null,
};


export default Footer;
