import React from 'react';
import styled from 'styled-components';

const StyledWidthImgTwo = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: ${(props) => props.$gap};

    margin-bottom: var(--pc-60px);
    img {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    margin: 0 var(--mobile-margin);

    img {
      display: block;
      width: 100%;

      margin-bottom: var(--mobile-24px);
    }
  }
`;

const WidthImgTwo = (data) => {
  return <StyledWidthImgTwo $gap={data.gap}>{data.children}</StyledWidthImgTwo>;
};

export default WidthImgTwo;
