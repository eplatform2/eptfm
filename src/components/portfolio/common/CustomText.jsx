import React from 'react';
import styled from 'styled-components';

const CustomTextBox = styled.p`
  color: #767676;
  font-family: 'NanumSquareB';
  letter-spacing: -0.02em;
  word-break: keep-all;

  @media (min-width: 1025px) {
    /* font-size: 24px; */
    /* line-height: 38px; */
    font-size: var(--pc-font-size-24px);
    line-height: var(--pc-line-height-38px);
    font-display: block;
  }
  @media (max-width: 1024px) {
    /* font-size: 16px;
    line-height: 24px; */
    /* font-size: var(--mobile-font-size-16px);
    line-height: var(--mobile-line-height-24px); */

    font-size: var(--mobile-content-common-font-size);
    line-height: var(--mobile-content-common-line-height);
  }
`;

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const CustomText = (data) => {
  return (
    <CustomTextBox style={data && data.style} className="customText">
      {renderTextWithLineBreaks(data.text)}
    </CustomTextBox>
  );
};

export default CustomText;
