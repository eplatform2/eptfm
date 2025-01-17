import React from 'react';
import styled from 'styled-components';

const StyledThreeImgTextsWrapper = styled.div`
  @media (min-width: 1025px) {
    display: inline-block;

    .threeImgWrapper {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: clamp(24px, 2.5vw, 48px);
      /* margin-bottom: 60px; */
      margin-bottom: clamp(30px, 3.1vw, 60px);
      img {
        max-width: 416px;
        width: 21vw;
        border: 1px solid rgb(237, 237, 237);
      }
    }
    position: relative;
    left: ${(props) => {
      if (props.$left) return 'clamp(-64px,-3.3vw,-32px)';
      else if (props.$right) return 'clamp(60px,6.25vw,120px)';
    }};

    /* &.right {
    left: 120px;
  }
  &.left {
    position: relative;
    left: -64px;
  } */
    margin-bottom: ${(props) => {
      if (props.$last) return 'clamp(100px, 10vw ,200px)';
      return 'clamp(80px, 8.3vw ,160px)';
    }};
  }
  @media (max-width: 1024px) {
    /* background-color: yellow; */
    display: inline-block;

    .threeImgWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        border: 1px solid #ededed;
        box-sizing: border-box;
        min-width: 200px;
        width: 53vw;

        /* margin-bottom: 24px; */
        margin-bottom: var(--mobile-24px);
      }
    }

    margin-bottom: clamp(80px, 21vw, 160px);
  }
`;

const ThreeImgTextsWrapper = (data) => {
  return (
    <StyledThreeImgTextsWrapper $last={data.last} $left={data.left} $right={data.right}>
      {data.children}
    </StyledThreeImgTextsWrapper>
  );
};

export default ThreeImgTextsWrapper;
