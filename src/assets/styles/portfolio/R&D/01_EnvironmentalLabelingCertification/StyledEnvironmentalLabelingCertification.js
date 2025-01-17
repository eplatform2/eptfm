import styled from 'styled-components';

export const StyledEnvironmentalLabelingCertification = styled.div`
  .heroImgWrapper {
    display: grid;
  }

  @media (min-width: 1025px) {
    .heroWrapper {
      position: relative;
    }
    .portfolioTitleWrapper {
      position: absolute;
      text-align: center;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -30%);
    }

    .customLeftTemp {
      position: relative;
      left: -78px;

      .introductionImg {
        max-width: 800px;
        width: 41vw;
      }
    }
    .customRight,
    .customLeft {
      padding-bottom: 160px;
    }
    .customLeft {
      position: relative;
      /* left: -78px; */
    }
    .customRight {
      position: relative;
      left: 120px;
    }

    .customRight p,
    .customLeft p {
      font-size: var(--pc-font-size-24px);
      line-height: var(--pc-line-height-38px);
    }

    .heroImgWrapper {
      aspect-ratio: 1920 / 1080;
    }
    .heroImg {
      width: 100%;
    }
    .F5F5F7 {
      background-color: #f5f5f7;
      padding-bottom: clamp(55px, 5.7vw, 110px);
    }

    .FFFFFF {
      background-color: #ffffff;
      padding-top: var(--pc-160px);

      max-width: 1400px;
      width: 72vw;

      margin: 0 auto;
      /* transform: translateY(-90px); */
      transform: translateY(clamp(-90px, -4.6vw, -45px));

      .introductionWrapper {
        text-align: center;
      }

      .introductionImgs {
        max-width: 960px;
        width: 80%;
        margin-bottom: var(--pc-160px);
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      position: relative;
    }
    .portfolioTitleWrapper {
      position: absolute;
      text-align: center;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .heroImgWrapper {
      aspect-ratio: 375 / 450;
    }

    .F5F5F7 {
      background-color: #f5f5f7;
      padding-bottom: clamp(92px, 24.5vw, 184px);
      /* 122-30 */

      .FFFFFF {
        background-color: #ffffff;
        /* background-color: beige; */
        transform: translateY(var(--mobile-Y-30px));
        text-align: center;
        margin: 0 2.6vw;

        .introductionWrapper {
          text-align: center;
          /* padding-top: 80px; */
          padding-top: var(--mobile-80px);
        }
        .introductionImgs {
          min-width: 315px;
          width: 60vw;

          margin-bottom: var(--mobile-80px);
        }
        .customLeftTemp {
          div:first-child {
            margin: 0;
          }
          img {
            min-width: 345px;
            width: 92vw;
            transform: translateX(-2.6vw);
          }
          p {
            margin-bottom: var(--mobile-80px);
          }
        }
      }
    }
  }
`;
