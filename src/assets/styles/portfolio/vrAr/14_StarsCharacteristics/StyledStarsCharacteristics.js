import styled from 'styled-components';

export const StyledStarsCharacteristics = styled.div`
  @media (min-width: 1025px) {
    /* .heroContainer {
      position: relative;
      width: 100%;
      height: 908px;
      img {
        position: absolute;
      }
      img:nth-of-type(1) {
        margin-left: 192px;
        margin-top: 46px;
      }
      img:nth-of-type(2) {
        bottom: 0;
        margin-bottom: 140px;
      }
      img:nth-of-type(3) {
        margin-top: 50px;
        margin-left: 182px;
      }
      img:nth-of-type(4) {
        right: 0;
        bottom: 0;
        margin-right: 106px;
      }
      .rocket {
        right: 0;
        margin-right: 280px;
      }
      .astronaut {
        margin-top: 308px;
        margin-left: 600px;
      }
    }
    .mainTexts {
      position: absolute;
      right: 0;
      margin-top: 358px;
    } */
    /* --- */
    .heroAreaWrapper {
      position: relative;
      max-width: 1920px;
      margin: auto;
      .introductionWrapper {
        position: absolute;
        top: 50%;
        right: clamp(100px, 10vw, 186px);
      }
      .heroImgWrapper {
        img {
          width: clamp(0px, 94.48vw, 1814px);
        }
        margin-top: 80px;
      }
    }
    .contentsWrapper {
      margin-top: clamp(0px, 5.78vw, 111px);
    }
  }
  @media (max-width: 1024px) {
    .heroAreaWrapper {
      position: relative;
      .portfolioTitleWrapper {
        display: flex;
        justify-content: center;
      }
      .introductionWrapper {
        white-space: nowrap;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: clamp(278px, 74.13vw, 1000px);
      }
    }
    .heroImgWrapper {
      margin-top: 12px;
    }
    .contentsWrapper {
      margin-top: var(--mobile-30px);
    }
  }
`;
