import React, { forwardRef } from 'react';

const PortfolioListTitle = forwardRef((props, ref) => {
  return (
    <p className="pageTitle slideUp" ref={ref}>
      PORTFOLIO
    </p>
  );
});

export default PortfolioListTitle;
