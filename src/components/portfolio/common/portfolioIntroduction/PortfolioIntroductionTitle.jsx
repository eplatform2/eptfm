import React from 'react';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const StyledPortfolioIntroductionTitle = styled.p`
  font-family: 'NanumSquareEB';
  color: #000000;
  letter-spacing: -0.02em;
  word-break: keep-all;
  @media (min-width: 1025px) {
    font-size: var(--pc-font-size-40px);
    line-height: var(--pc-line-height-56px);

    margin-top: ${(props) => props.$pcMarginTop};
    padding-top: ${(props) => props.$pcPaddingTop};
  }
  @media (max-width: 1024px) {
    font-size: var(--mobile-font-size-22px);
    line-height: var(--mobile-line-height-30px);

    margin-top: ${(props) => props.$mobileMarginTop};
    margin-bottom: ${(props) => props.$mobileMarginBottom};
  }
`;

const PortfolioIntroductionTitle = (data) => {
  return (
    <StyledPortfolioIntroductionTitle
      style={data && data.style}
      $pcMarginTop={data.pcMarginTop}
      $pcPaddingTop={data.pcPaddingTop}
      $mobileMarginTop={data.mobileMarginTop}
      $mobileMarginBottom={data.mobileMarginBottom}
    >
      {renderTextWithLineBreaks(data.title)}
    </StyledPortfolioIntroductionTitle>
  );
};

export default PortfolioIntroductionTitle;
