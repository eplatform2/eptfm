import styled from 'styled-components';

export const StyledMapExpert = styled.div`
  @media (min-width: 1025px) {
    .heroWrapper {
      position: relative;
      .heroTexts {
        position: absolute;
        margin-left: var(--pc-330px);
        margin-top: var(--pc-118px);

        font-size: var(--pc-font-size-40px);
        line-height: var(--pc-line-height-56px);

        letter-spacing: -0.02em;
        color: #292929;
        font-family: 'NanumSquareEB';
      }
    }

    .gridWrapper {
      text-align: center;
      .customTextsWrapper {
        padding-top: var(--pc-160px);
        margin-bottom: var(--pc-100px);
      }
      .introductionImg {
        width: var(--pc-1100px);
        aspect-ratio: 315 / 172;
      }
    }
    .customMaxWidthWrapper img {
      width: var(--pc-1150px);
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: flex;
      justify-content: center;
    }
    .heroTexts {
      position: absolute;
      text-align: center;
      margin-top: clamp(48px, 12.8vw, 1000px);

      color: #292929;
      font-family: 'NanumSquareEB';

      font-size: clamp(20px, 5.2vw, 54.6px);
      line-height: clamp(28px, 7.3vw, 76.5px);
    }
    .gridWrapper {
      display: grid;
      margin: 0 var(--mobile-margin);
      .customTextsWrapper {
        order: 2;
        text-align: center;
      }
      .introductionImg {
        order: 1;

        margin-top: var(--mobile-80px);
        margin-bottom: var(--mobile-30px);

        width: 100%;
        aspect-ratio: 315 / 172;
      }
    }
  }
`;
