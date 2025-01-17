import React from 'react';
import styled from 'styled-components';
import CustomText from './CustomText';
const ZigZagImgTextsBox = styled.div`
  p {
    text-align: center;
  }

  @media (min-width: 1025px) {
    img {
      margin-bottom: var(--pc-60px);
      width: 100%;
    }
    margin-top: ${(props) => props.$pcMarginTop};
    margin-bottom: ${(props) => props.$pcMarginBottom};
  }
  @media (max-width: 1024px) {
    img {
      margin-bottom: var(--mobile-24px);
    }
    padding-bottom: var(--mobile-80px);
  }
`;

const ZigZagImgTexts = (data) => {
  return (
    <ZigZagImgTextsBox style={data.style} $pcMarginTop={data.pcMarginTop} $pcMarginBottom={data.pcMarginBottom}>
      <img src={data.src} alt="" />

      <CustomText style={data.style} text={data.text} />
    </ZigZagImgTextsBox>
  );
};

export default ZigZagImgTexts;
