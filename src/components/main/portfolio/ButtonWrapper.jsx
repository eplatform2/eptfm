import React from 'react';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
  @media (min-width: 1025px) {
    margin-top: var(--pc-90px);
    margin-bottom: var(--pc-630px);
  }
  @media (max-width: 1024px) {
    margin-top: var(--mobile-60px);
    margin-bottom: var(--mobile-152px);
  }
`;

const ButtonWrapper = (data) => {
  return <StyledButtonWrapper>{data.children}</StyledButtonWrapper>;
};

export default ButtonWrapper;
