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

const StyledPortfolioIntroductionDescription = styled.p`
  font-family: 'NanumSquareB';
  color: #333333;
  letter-spacing: -0.02em;
  /* white-space: nowrap; */
  word-break: keep-all;

  @media (min-width: 1025px) {
    margin-top: var(--pc-34px);
    margin-bottom: ${(props) => props.$pcMarginBottom};

    font-size: var(--pc-font-size-26px);
    line-height: var(--pc-line-height-40px);
  }
  @media (max-width: 1024px) {
    margin-top: var(--mobile-20px);

    margin-bottom: ${(props) => props.$mobileMarginBottom};

    font-size: var(--mobile-content-common-font-size);
    line-height: var(--mobile-content-common-line-height);
    /* font-size: var(--mobile-font-size-16px);
    line-height: var(--mobile-line-height-24px); */
  }
`;

const PortfolioIntroductionDescription = (data) => {
  return (
    <StyledPortfolioIntroductionDescription
      style={data && data.style}
      $pcMarginBottom={data.pcMarginBottom}
      $mobileMarginBottom={data.mobileMarginBottom}
    >
      {renderTextWithLineBreaks(data.description)}
    </StyledPortfolioIntroductionDescription>
  );
};

export default PortfolioIntroductionDescription;
