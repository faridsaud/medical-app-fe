import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AppBar extends Component {
  render() {
    return (
        <React.Fragment>
          <div className={'app-header'}>

          </div>
          <style jsx>{`
            .app-header {
              width: 100%;
              display: flex;
              height: 3rem;
              background-color: #171617;
            }
        `}</style>
        </React.Fragment>
    );
  }
}

AppBar.propTypes = {};

export default AppBar;
