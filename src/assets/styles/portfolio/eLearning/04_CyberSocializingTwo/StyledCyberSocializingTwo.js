import styled from 'styled-components';

export const StyledCyberSocializingTwo = styled.div`
  @media (min-width: 1025px) {
    .book {
      position: absolute;
      left: 50px;
      bottom: clamp(-135px, -7vw, -80px);

      max-width: 475px;
      width: 24.7vw;
    }

    .cloud {
      position: absolute;
      right: 81px;
      bottom: clamp(-395px, -20vw, -100px);

      max-width: 580px;
      width: 30vw;
    }

    .books {
      position: absolute;
      right: clamp(0px, 5.73vw, 110px);
      z-index: -1;
      bottom: clamp(-125px, -6vw, 0px);

      max-width: 400px;
      width: 20vw;
    }
    .cloudPaperPlane {
      width: 27.24vw;
      max-width: 523px;

      position: absolute;
      left: 0px;
      top: clamp(-242px, -12.6vw, 0px);
      z-index: -1;
    }
    .gridWrapper {
      max-width: 1920px;
      margin: auto;
      position: relative;
      .introductionWrapper {
        position: absolute;
        margin-top: clamp(0px, 10vw, 194px);
        /* margin-left: 459px; */
        margin-left: clamp(10px, 23vw, 459px);
      }
    }
    .relative {
      max-width: 1920px;
      margin: auto;
    }
  }
  @media (max-width: 1024px) {
    .gridWrapper {
      display: grid;
      position: relative;
      img {
        order: 1;
      }
      .introductionWrapper {
        order: 2;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        bottom: clamp(-150px, -33vw, -75px);
        white-space: nowrap;
      }
    }
    .cloud {
      position: absolute;
      min-width: 141px;
      width: 37.6vw;
      right: 0;
      bottom: clamp(-250px, -25vw, -123px);
      z-index: -1;
    }
    .book {
      position: absolute;
      min-width: 202px;
      width: 53vw;
      top: clamp(-1000px, -20vw, -59px);
      left: clamp(-1000px, -6.67vw, -25px);
    }
    .books {
      position: absolute;

      min-width: 115px;
      width: 30vw;
      right: 0;
      bottom: clamp(-11px, -2.93vw, 0px);
    }
    .cloudPaperPlane {
      position: absolute;
      z-index: -1;
      bottom: clamp(-1000px, -17.3vw, -65px);

      min-width: 144px;
      width: 38.4vw;
    }

    .topCloud {
      position: absolute;
      right: 0;
      top: clamp(-1000px, -13vw, -52px);

      width: clamp(120px, 32vw, 1000px);
      z-index: -1;
    }
    .heroWrapper {
      margin-top: clamp(93px, 24.8vw, 1000px);
    }
  }
`;
