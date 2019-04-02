import React from 'react';
import PropTypes from 'prop-types';
import { productiveHeading04 } from '@carbon/type';

function PageTitle({ children }) {
  return (
    <div className="bx--grid" style={{ ...productiveHeading04, paddingTop: '2rem' }}>
      {children}
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.element,
};

export default PageTitle;
