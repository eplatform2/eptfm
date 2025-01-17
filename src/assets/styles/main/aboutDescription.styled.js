import styled from 'styled-components';

export const StyledAboutDescription = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    overflow-x: clip;
    aspect-ratio: 960 / 1000;
    width: 50%;
    max-width: 960px;
    /* background-color: skyblue; */
    img {
      width: clamp(0px, 12.86vw, 247px);
      /* height: 286px; */
      position: absolute;
      right: clamp(0px, 9.69vw, 186px);
      margin-top: -35px;
    }
    & .textsBoxContainer {
      margin-top: clamp(0px, 13.54vw, 260px);
      margin-left: clamp(0px, 5.52vw, 106px);

      &.marginLeft182 {
        margin-left: clamp(10px, 9.48vw, 182px);
      }

      & .textsTitle {
        font-size: var(--pc-180px);
        color: #48c2c5;
      }

      & .textsSubTitle {
        font-size: clamp(0px, 3.65vw, 70px);
        color: #48c2c5;
        letter-spacing: -4px;
      }
      & .textsContents {
        color: #767676;
        font-size: var(--pc-36px);
        margin-top: var(--pc-73px);
        line-height: var(--pc-50px);
      }
    }

    .textsTitle,
    .textsSubTitle,
    .textsContents {
      /* transform: translateX(300px); */
      opacity: 0;
      transform: ${(props) => {
        if (props.$textsTitle === 'VISION') return 'translateX(300px)';
        else return 'translateX(-300px)';
      }};
      transition: opacity 1s ease, transform 1s ease;
    }
    .opacity1translateY0 {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    /* background-color: red; */
    img {
      display: none;
    }
    .textsBoxContainer {
      margin: 0 auto;
      /* padding-top: 24px;
    padding-bottom: 80px; */

      padding-top: 6.4vw;
      padding-bottom: 21.33vw;

      .textsTitle {
        /* font-size: 40px; */
        font-size: 10.67vw;
        text-align: left;
        color: #48c2c5;
      }
      .textsSubTitle {
        color: #48c2c5;
        /* font-size: 20px; */
        font-size: 5.33vw;
        text-align: left;

        /* margin-top: 4px; */
        margin-top: 1.07vw;
        /* margin-bottom: 20px; */
        margin-bottom: 5.33vw;
      }
      .textsContents {
        color: #767676;
        /* font-size: 16px; */
        font-size: 4.27vw;
        /* line-height: 24px; */
        line-height: 6.4vw;
        letter-spacing: -0.02em;
        text-align: left;
      }
    }

    .textsTitle,
    .textsSubTitle,
    .textsContents {
      /* transform: translateX(300px); */
      opacity: 0;
      transform: translateY(100px);
      transition: opacity 2s ease, transform 2s ease;
    }
    .opacity1translateY0 {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
