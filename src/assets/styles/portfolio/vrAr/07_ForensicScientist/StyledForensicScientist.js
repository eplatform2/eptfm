import styled from 'styled-components';

export const StyledForensicScientist = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    .heroWrapper {
      font-size: 0;
    }
    .mainBackgroundImg {
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/main2.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      aspect-ratio: 1920 / 850;
      text-align: center;
      .powder {
        margin-top: var(--pc-100px);

        max-width: 600px;
        width: var(--pc-600px);
      }
    }
    .orderWrapper {
      display: grid;
      .introduction_text2_Wrapper {
        order: 2;
        margin-top: var(--pc-150px);
        margin-bottom: var(--pc-300px);

        position: relative;
        left: var(--pc-800px);
        width: clamp(0px, 32.66vw, 627px);
      }
      .sideImgsWrapper {
        order: 1;
        position: relative;
        .magnifier {
          position: absolute;
          width: clamp(0px, 37vw, 712px);
        }
        .blood_1 {
          position: absolute;
          right: 0;
          top: clamp(0px, 19.9vw, 382px);
          width: clamp(0px, 21.98vw, 422px);
        }
      }
    }

    .book {
      position: absolute;
      max-width: 410px;
      width: var(--pc-410px);
      top: clamp(-180px, -9.38vw, 0px);
    }
    .footsWrapper {
      position: relative;
    }
    .foots {
      position: absolute;
      right: 0;
      top: clamp(-150px, -7.81vw, 0px);

      width: clamp(0px, 32.08vw, 616px);
    }
    .blood_2 {
      position: absolute;
      bottom: clamp(0px, 8.85vw, 170px);

      max-width: 493px;
      width: 25.68vw;
    }
    .customMaxWidth790 div {
      display: grid;
      justify-items: center;
      img {
        max-width: 790px;
        width: var(--pc-790px);
      }
    }
  }
  @media (max-width: 1024px) {
    .mainBackgroundImg {
      margin: 0 var(--mobile-margin);
      text-align: center;
    }
    .powder {
      margin-top: var(--mobile-30px);

      min-width: 236px;
      width: 62.93vw;
    }

    .introduction_text2_Wrapper {
      margin: 0 var(--mobile-margin);
      margin-top: var(--mobile-80px);
      text-align: center;
    }

    .sideImgsWrapper {
      position: relative;
      margin-top: var(--mobile-35px);

      .magnifier {
        min-width: 246px;
        width: 65.6vw;
      }
      .blood_1 {
        position: absolute;
        right: 0;
        top: var(--mobile-130px);

        min-width: 138px;
        width: 36.8vw;
      }
    }
    .book {
      width: clamp(112px, 29.87vw, 306px);
      position: absolute;
      bottom: 10px;
    }
    .footsWrapper {
      position: relative;
      width: 100%;
    }
    .foots {
      position: absolute;
      right: 0;
      top: clamp(91px, 24.27vw, 1000px);
      width: clamp(105px, 28vw, 287px);
    }
    .blood_2 {
      position: absolute;

      bottom: clamp(-1000px, -16vw, -60px);
      width: clamp(132px, 35.2vw, 360px);
    }
  }
`;
