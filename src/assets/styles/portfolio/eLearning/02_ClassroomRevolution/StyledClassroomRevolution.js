import styled from 'styled-components';

export const StyledClassroomRevolution = styled.div`
  .ellipseWrapper {
    position: relative;
    z-index: -1;
  }
  @media (min-width: 1025px) {
    .heroArea {
      max-width: 1920px;
      position: relative;
      .ellipse1,
      .ellipse2 {
        position: absolute;
        z-index: -1;
        width: 100%;
      }
      .ellipse2 {
        right: 0;
      }

      /* .ellipseContainer {
        z-index: -1;
        .ellipse {
          position: absolute;
          width: 1400px;
          height: 1400px;

          background-image: radial-gradient(circle, #50dfff, #68e9f9, #9effec);
          filter: blur(10px); 
          블러 효과
          border-radius: 50%; 
          원형 또는 타원형으로 설정
          opacity: 0.5;
          top: -50%;
          left: -50%;
        }
      } */
    }

    .area2 {
      background-color: #30bbc7;
      position: relative;
      z-index: -2;

      .customTextWrapperOne {
        padding-top: var(--pc-200px);
        padding-bottom: var(--pc-160px);
        p {
          text-align: center;
          color: #ffffff;
        }
      }
      .customTextWrapperTwo {
        padding-top: var(--pc-60px);
        padding-bottom: var(--pc-200px);
        p {
          text-align: center;
          color: #ffffff;
        }
      }
    }

    .doubleImgWrapper {
      max-width: 1260px;
      width: var(--pc-1260px);
      margin: auto;
      img {
        width: calc(50% - 20px);
      }

      img + img {
        margin-left: var(--pc-40px);
      }
    }

    /* ------ */
    .intro_imgs_Wrapper {
      position: relative;
      padding-top: var(--pc-500px);
      padding-bottom: var(--pc-465px);
      z-index: -1;

      .introductionWrapper {
        display: grid;
        justify-content: end;
        margin-right: clamp(100px, 11vw, 218px);
      }

      .hero1,
      .hero2 {
        position: absolute;
        bottom: 0;
      }
      .hero1 {
        max-width: 535px;
        width: 27vw;
        margin-left: clamp(50px, 17vw, 330px);
        transform: translateY(70px);
      }
      .hero2 {
        max-width: 593px;
        width: 30vw;
        /* width: 167px; */
        right: 0;
        margin-right: clamp(50px, 11vw, 218px);
        transform: translateY(47px);
      }
    }
    .contentsWrapper img {
      max-width: 1080px;
      width: 56.25vw;
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      width: 100%;
      position: relative;

      .ellipse1,
      .ellipse2 {
        position: absolute;
        width: 100vw;
      }
      .ellipse1 {
      }
      .ellipse2 {
        right: 0;
        /* height: 100%; */
      }

      .intro_imgs_Wrapper {
        padding-top: var(--mobile-152px);
        padding-bottom: var(--mobile-189px);
        position: relative;
        .introductionWrapper {
          display: grid;
          justify-content: end;
          margin-right: var(--mobile-30px);
        }

        .hero1,
        .hero2 {
          position: absolute;
          bottom: 0;
        }
        .hero1 {
          min-width: 216px;
          width: 57.6vw;
          transform: translateY(clamp(27px, 7.2vw, 1000px));
        }
        .hero2 {
          min-width: 167px;
          width: 44.53vw;
          right: 0;
          transform: translateY(var(--mobile-10px));
        }
      }
    }
    .area2 {
      background-color: #30bbc7;

      .customTextWrapperOne {
        padding-top: 90px;
        padding-bottom: 80px;
        p {
          text-align: center;
          color: #ffffff;
        }
      }
      .customTextWrapperTwo {
        padding-bottom: 80px;
        p {
          text-align: center;
          color: #ffffff;
        }
      }
    }
    .doubleImgWrapper {
      margin: 0 var(--mobile-margin);
      img {
        width: 100%;
      }
      img:last-child {
        margin-top: var(--mobile-24px);
        margin-bottom: var(--mobile-20px);
      }
    }
  }
`;
