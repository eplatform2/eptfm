import React, { forwardRef } from 'react';

const PortfolioListField = forwardRef((props, ref) => {
  return (
    <p className="fieldTitle slideUp" ref={ref}>
      {props.field}
    </p>
  );
});

export default PortfolioListField;
