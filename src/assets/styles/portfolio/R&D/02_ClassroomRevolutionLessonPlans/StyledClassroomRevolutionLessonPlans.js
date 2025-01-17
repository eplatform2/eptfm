import styled from 'styled-components';

export const StyledClassroomRevolutionLessonPlans = styled.div`
  @media (min-width: 1025px) {
    .twoImgWrapper {
      margin: auto;
      margin-bottom: var(--pc-160px);
      max-width: 1260px;
      width: var(--pc-1260px);
      p {
        text-align: center;
      }
      &:last-child {
        margin-bottom: var(--pc-200px);
      }
    }
    .heroWrapper {
      position: relative;
      div {
        margin-left: clamp(100px, 17vw, 330px);
      }
    }
    .customTextWrapper {
      text-align: center;
      p {
        font-size: var(--pc-font-size-26px);
        line-height: var(--pc-line-height-40px);
      }
    }
    .introductionArea {
      position: relative;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(3, auto);

      margin-top: clamp(178px, 18vw, 357px);
      margin-bottom: clamp(80px, 5.2vw, 100px);
      text-align: center;
      span {
        color: #292929;
        font-size: clamp(30px, 4.6vw, 90px);
        letter-spacing: -0.02em;
        font-family: 'NanumSquareEB';
      }
      .rightSpan {
        margin-left: 133px;
        /* transform: translateX(clamp(-133px, -6.9vw, 0px)); */
      }
      .robotImg1 {
        max-width: 281px;
        width: 14.6vw;
        position: absolute;
        left: clamp(100px, 37.4vw, 700px);
        bottom: -60px;
        z-index: -1;
        /* transform: translate(-30px, -199px); */
        /* transform: translate(-30px, clamp(-199px, -10.3vw, -0px)); */
        /* transform: translate(clamp(-90px, -4.7vw, 0px), clamp(-199px, -10.3vw, -0px)); */
      }
    }
    .introductionArea2 {
      margin-top: var(--pc-160px);
      margin-bottom: var(--pc-160px);
      display: grid;
      grid-template-columns: repeat(3, auto);
      position: relative;
      justify-content: center;
      .aiBook {
        position: relative;
      }
      .ai {
        margin-right: clamp(50px, 5.2vw, 100px);
        max-width: 468px;
        width: 24vw;
      }

      .book {
        position: absolute;
        right: clamp(-60px, -3.1vw, -30px);
        bottom: clamp(-37px, -1.9vw, -18px);
        max-width: 229px;
        width: 11.9vw;
      }
      .robot2 {
        margin-left: clamp(7.5px, 0.7vw, 15px);
        transform: translateY(clamp(-50px, -2.6vw, -25px));
        max-width: 183px;
        width: 9.5vw;
      }
      p {
        white-space: nowrap;
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      position: relative;
      div {
        margin-left: clamp(30px, 8vw, 100px);
      }
    }
    .introductionArea {
      position: relative;
      margin-top: clamp(165px, 44vw, 230px);
      margin-bottom: clamp(56px, 14.9vw, 112px);
      text-align: center;
      span {
        color: #292929;
        font-size: clamp(22px, 6vw, 50px);
        letter-spacing: -0.02em;
        font-family: 'NanumSquareEB';
      }
      .rightSpan {
        margin-left: 60px;
      }
      .robotImg1 {
        position: absolute;
        z-index: -1;
        width: 112px;
        bottom: -33px;
        margin-left: -36px;
        /* margin-left: clamp(68px, 18vw, 100px); */
      }
    }
    .customTextWrapper {
      text-align: center;
      margin-bottom: var(--mobile-100px);
    }

    .introductionArea2 {
      margin: 0 var(--mobile-margin);
      margin-bottom: var(--mobile-80px);

      position: relative;

      /* background-color: yellow; */

      .aiBook {
        position: relative;
        display: inline-block;
      }
      .ai {
        min-width: 202px;
        width: 53vw;
      }

      .book {
        position: absolute;
        /* right: clamp(-69px, -18.4vw, -34px); */
        left: clamp(171px, 45.6vw, 500px);
        top: clamp(99px, 26.4vw, 1000px);

        min-width: 98px;
        width: 26vw;
      }
      .robot2 {
        position: absolute;
        left: clamp(235px, 62.6vw, 1000px);
        top: -50px;

        min-width: 92px;
        width: 24vw;
      }

      p {
        margin-top: var(--mobile-40px);
        text-align: center;
      }
    }

    .maxWidth1260Wrapper {
      div:first-child {
        position: relative;
        margin: 0;
      }
    }
    .leftImg {
      min-width: 345px;
      width: 92vw;
      transform: translateX(4vw);
    }
    .rightImg {
      min-width: 345px;
      width: 92vw;
      transform: translateX(-4vw);
    }

    .twoImgWrapper {
      margin-bottom: var(--mobile-80px);
      p {
        text-align: center;
      }
      &:last-child {
        margin-bottom: var(--mobile-142px);
      }
    }
  }
`;
