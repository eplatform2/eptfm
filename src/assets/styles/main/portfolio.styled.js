import styled from 'styled-components';

export const StyledMainPortfolio = styled.div`
  .englishFont,
  #portfolioText1 span {
    font-family: 'NanumSquareEB';
  }

  /* 한글폰트 */
  #portfolioText1,
  #pc_portfolioText2,
  #portfolioText2 {
    font-family: 'NanumSquareR';
    color: #292929;
  }

  @media (min-width: 1025px) {
    width: 100%;
    max-width: 1920px;
    position: relative;
    overflow: hidden;

    .backgroundImg {
      position: absolute;
      width: 100%;
      aspect-ratio: 1920 / 1280;
    }

    #portfolioTexts {
      position: relative;
      & #portfolioTitle {
        font-family: 'Roboto-Medium';
        color: #191919;
        font-size: var(--pc-100px);
        text-align: left;

        padding-top: clamp(0px, 14.79vw, 284px);
        padding-bottom: 24px;
      }

      & #portfolioText1 {
        font-size: var(--pc-40px);
        text-align: left;
        margin-bottom: 36px;
      }

      & #portfolioText2 {
        font-size: clamp(0px, 1.35vw, 26px);
        line-height: clamp(0px, 1.88vw, 36px);
        text-align: left;
      }
    }
    /* - */
    .marginWrapper {
      width: 80%;
      max-width: 1920px;
      margin: auto;
    }
    #portfolioImgs {
      display: flex;
      align-items: flex-start;

      position: absolute;
      top: clamp(0px, 9.95vw, 191px);
      right: 0;
    }
    .dinosaur {
      width: clamp(0px, 32.86vw, 631px);
      margin-top: clamp(0px, 4.38vw, 84px);
    }
    .widthTablet {
      width: clamp(0px, 31.87vw, 612px);
    }
    .heightTablet {
      width: clamp(0px, 27.45vw, 527px);
    }
  }

  @media (max-width: 1024px) {
    .backgroundImg {
      position: absolute;
      width: 100%;
      aspect-ratio: 375 / 445;
    }

    #portfolioTexts {
      position: relative;
      & #portfolioTitle {
        font-family: 'Roboto-Medium';
        color: #191919;
        font-size: clamp(36px, 9.6vw, 100px);
        text-align: left;

        padding-top: var(--mobile-80px);
        margin-bottom: var(--mobile-30px);
      }

      & #portfolioText1 {
        font-size: clamp(20px, 5.3vw, 100px);
        font-weight: 400;
        text-align: left;
        margin-bottom: var(--mobile-10px);
      }

      & #portfolioText2 {
        font-size: clamp(16px, 4.2vw, 100px);
        line-height: clamp(24px, 6.4vw, 50vw);
        text-align: left;
      }
    }
    /* - */
    .marginWrapper {
      padding: 0 var(--mobile-margin);
    }
    #portfolioImgs {
      position: relative;
      .dinosaur {
        position: absolute;
        right: 0;
        margin-top: clamp(70px, 18.67vw, 1000px);
        width: clamp(125px, 33.33vw, 1000px);
      }
      .pfImgRightBox {
        display: none;
      }
    }
  }
`;
