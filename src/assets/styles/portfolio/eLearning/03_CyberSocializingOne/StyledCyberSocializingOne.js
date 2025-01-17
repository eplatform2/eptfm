import styled from 'styled-components';

export const StyledCyberSocializingOne = styled.div`
  .heroArea img {
    width: 100%;
  }
  @media (min-width: 1025px) {
    overflow-x: hidden;
    .cloud,
    .circle1,
    .circle2,
    .circle3,
    .heart,
    .yellowWordBalloon {
      position: absolute;
      z-index: -1;
    }
    /* - */
    .introductionWrapper {
      text-align: center;
    }
    .cloud {
      left: clamp(0px, 17.19vw, 330px);

      max-width: 392px;
      width: 20.42vw;
    }
    .circle1 {
      bottom: clamp(-177px, -9.22vw, 0px);

      width: 26vw;
      max-width: 500px;
    }
    .circle2 {
      max-width: 500px;
      width: 26vw;

      right: clamp(0px, 4.64vw, 89px);
      top: clamp(-105px, -5.47vw, 0px);
    }
    .yellowWordBalloon {
      max-width: 500px;
      width: 26vw;

      left: clamp(0px, 1.82vw, 35px);
      top: clamp(0px, 9.27vw, 178px);
    }
    .circle3 {
      width: 26vw;
      max-width: 500px;

      right: 0;
      top: clamp(0px, 21.4vw, 411px);
    }
    .heart {
      max-width: 500px;
      width: 26vw;

      top: clamp(-310px, -16.15vw, 0px);
    }
    .relative {
      max-width: 1920px;
      margin: auto;
    }
  }
  @media (max-width: 1024px) {
    overflow-x: hidden;
    .introductionWrapper {
      text-align: center;
    }
    .cloud,
    .circle1,
    .circle2,
    .circle3,
    .heart,
    .yellowWordBalloon {
      position: absolute;
      z-index: -1;
    }

    .cloud {
      min-width: 136px;
      width: 36.27vw;
      top: -29px;
    }
    .circle1 {
      min-width: 200px;
      width: 53vw;

      bottom: clamp(-1000px, -10.93vw, -41px);
      left: clamp(-1000px, -14vw, -53px);
    }
    .circle2 {
      min-width: 211px;
      width: 56vw;

      right: -16vw;
      top: clamp(167px, 40vw, 1000px);
    }
    .yellowWordBalloon {
      min-width: 169px;
      width: 45vw;

      left: clamp(-10px, -2.67vw, 0px);
      top: clamp(97px, 25.87vw, 1000px);
    }
    .circle3 {
      min-width: 241px;
      width: 64vw;
      /* right: -75px; */
      right: -20vw;
      top: clamp(176px, 40vw, 1000px);
    }
    .heart {
      min-width: 119px;
      width: 31vw;

      bottom: clamp(-1000px, -8.53vw, -32px);
    }
  }
`;
