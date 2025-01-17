import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledFieldMoveButton } from '../../../assets/styles/main/portfolioFieldButton.styled';

const PfFieldButton = forwardRef((props, ref) => {
  return (
    <StyledFieldMoveButton className="slideUp" ref={ref}>
      <Link to={props && props.link}>
        <span className="pfFieldTag">
          {props && props.title}
          <div className="arrow"></div>
        </span>
      </Link>
    </StyledFieldMoveButton>
  );
});

export default PfFieldButton;
