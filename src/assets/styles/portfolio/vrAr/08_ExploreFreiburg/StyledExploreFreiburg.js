import styled from 'styled-components';

export const StyledExploreFreiburg = styled.div`
  .fff6df {
    background-color: #fff6df;
  }
  .wrapper {
    display: flex;
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .heroWrapper {
      text-align: center;
      margin-top: 88px;
      margin-bottom: 52px;
      img {
        max-width: 837px;
        width: var(--pc-837px);
      }
    }
    .sideImgWrapper {
      position: relative;
      .yellowCharacter {
        position: absolute;
        left: clamp(0px, 7.14vw, 137px);
        bottom: clamp(0px, 3.65vw, 70px);

        width: 20vw;
        max-width: 280px;
      }
      .skyblueCharacter {
        position: absolute;
        right: clamp(0px, 6.09vw, 117px);
        bottom: var(--pc-300px);

        width: 20vw;
        max-width: 313px;
      }
      .greenCharacter {
        position: absolute;
        left: 79px;
        bottom: clamp(0px, 14.06vw, 270px);

        width: 20vw;
        max-width: 313px;
      }
    }

    .customMaxWidth785 img {
      max-width: 785px;
    }
    .main2 {
      max-width: 1260px;
      width: var(--pc-1260px);
    }

    .bicycleGirl {
      position: absolute;
      right: var(--pc-150px);
      top: -27px;

      max-width: 353px;
      width: 20vw;
    }
    .topText {
      text-align: center;
      color: #292929;
      font-size: clamp(0px, 1.46vw, 28px);
      line-height: clamp(0px, 1.98vw, 38px);
      padding-top: var(--pc-160px);
      padding-bottom: var(--pc-100px);
    }
  }

  @media (max-width: 1024px) {
    .heroWrapper {
      margin: 0 var(--mobile-margin);
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .topText {
      color: #292929;
      text-align: center;
      /* font-size: clamp(18px, 4.8vw, 100px);
      line-height: clamp(26px, 7vw, 90px); */
      font-size: var(--mobile-font-size-22px);
      line-height: var(--mobile-line-height-30px);

      padding-bottom: 80px;
    }
    .fff6df {
      text-align: center;
      .bicycleGirl {
        min-width: 153px;
        width: 30vw;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: var(--mobile-24px);
      }
    }
    .sideImgWrapper {
      position: relative;
      z-index: -1;
      .yellowCharacter {
        position: absolute;
        left: 32px;
        bottom: 8px;
        min-width: 77px;
        width: 20vw;
      }
      .skyblueCharacter {
        position: absolute;
        right: 14px;
        /* top: 293px; */
        bottom: 0;
        min-width: 101px;
        width: 26.9vw;
      }
      .greenCharacter {
        position: absolute;
        left: -6px;
        bottom: 0;
        min-width: 101px;
        width: 26.9vw;
      }
    }
  }
`;
