import React from 'react';
import styled from 'styled-components';

const StyledPortfolioTitleWrap = styled.div`
  /* z-index: 1; */
  /* opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 2s ease-in-out; */
  @media (min-width: 1025px) {
    margin-top: ${(props) => props.$pcMarginTop};
    margin-bottom: ${(props) => props.$pcMarginBottom};
  }
  /* @media (min-width: 768px) and (max-width: 1024px) {
  } */
  @media (max-width: 1024px) {
    margin-top: ${(props) => props.$mobileMarginTop};
    margin-bottom: ${(props) => props.$mobileMarginBottom};
    padding-top: ${(props) => props.$mobilePaddingTop};
  }
`;

const PortfolioTitleWrap = ({
  style,
  children,
  pcMarginTop,
  pcMarginBottom,
  mobileMarginTop,
  mobileMarginBottom,
  $isLoaded,
  mobilePaddingTop,
}) => {
  return (
    <StyledPortfolioTitleWrap
      $pcMarginTop={pcMarginTop}
      $pcMarginBottom={pcMarginBottom}
      $mobileMarginTop={mobileMarginTop}
      $mobileMarginBottom={mobileMarginBottom}
      $mobilePaddingTop={mobilePaddingTop}
      style={style}
      $isLoaded={$isLoaded}
    >
      {children}
    </StyledPortfolioTitleWrap>
  );
};

export default PortfolioTitleWrap;
