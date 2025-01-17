import styled from 'styled-components';

export const StyledEastAsia = styled.div`
  max-width: 1920px;
  margin: auto;
  p {
    color: #4f4f4f;
  }
  overflow-x: hidden;

  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      img {
        width: 100%;
      }
      position: relative;
    }

    .figure_01,
    .figure_02,
    .figure_03,
    .figure_04,
    .figure_05 {
      position: absolute;
      z-index: -1;
    }

    .introductionWrapper {
      text-align: center;
      margin: var(--pc-200px) 0;
    }
    .figure_01 {
      left: 0;
      /* top: -520px; */

      max-width: 500px;
      width: 26vw;
    }
    .figure_02 {
      max-width: 500px;
      width: 26vw;

      top: clamp(0px, 18.44vw, 354px);
      right: 0;
    }
    .figure_03 {
      max-width: 500px;
      width: 26vw;

      left: 0;
      bottom: clamp(-70px, -16px + 5vw, -16px);
    }
    .figure_04 {
      max-width: 500px;
      width: 26vw;

      right: 0;
      bottom: clamp(-125px, 6vw, -78px);
    }
    .figure_05 {
      max-width: 500px;
      width: 26vw;

      /* bottom: clamp(42px, 10vw, 87px); */
      bottom: clamp(18px, 2vw, 42px);
      /* left: clamp(-195px, -10vw, -115px); */
      left: clamp(0px, 6.56vw, 126px);
    }
    .imgTwoWrapper {
      max-width: 1260px;
      width: 65.63vw;
      margin: 0 auto;
      margin-bottom: var(--pc-160px);
    }
  }
  @media (max-width: 1024px) {
    .introductionWrapper {
      text-align: center;
      margin-top: var(--mobile-90px);
      margin-bottom: var(--mobile-80px);
    }
    .figure_01,
    .figure_02,
    .figure_03,
    .figure_04,
    .figure_05 {
      position: absolute;
      z-index: -1;
    }
    .figure_01 {
      min-width: 150px;
      width: 40vw;

      left: 0;
      top: -17px;
    }
    .figure_02 {
      min-width: 213px;
      width: 56vw;

      right: clamp(-1000px, -15.7vw, -59px);
      top: clamp(128px, 30vw, 1000px);
    }
    .figure_03 {
      min-width: 197px;
      width: 52vw;
      bottom: clamp(-1000px, -24.8vw, -93px);
      left: -19px;
    }
    .figure_04 {
      min-width: 173px;
      width: 46vw;
      right: 0;
      bottom: clamp(-1000px, -14.6vw, -55px);
    }
    .figure_05 {
      min-width: 390px;
      width: 104vw;
      left: clamp(-1000px, -29.6vw, -111px);
      bottom: clamp(406px, 101vw, 948px);
    }

    .imgTwoWrapper {
      margin-bottom: var(--mobile-80px);
    }
  }
`;
