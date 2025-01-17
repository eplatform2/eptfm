import styled from 'styled-components';

export const StyledKoreanWar = styled.div`
  @media (min-width: 1025px) {
    .titleWrapper {
      div:first-child {
        margin-top: clamp(10px, 13.3vw, 180px);
      }
    }
    .customTextWrapper p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: clamp(100px, 24.9vw, 460px);

      font-size: var(--pc-font-size-26px);
      line-height: var(--pc-line-height-40px);

      letter-spacing: -0.02em;
      white-space: nowrap;
    }
    .introductionArea {
      max-width: 1920px;
      margin: auto;

      position: relative;
      /* background-color: yellow; */
      padding-top: var(--pc-200px);
      margin-bottom: clamp(0px, 28.13vw, 540px);

      .introudctionImg1 {
        position: absolute;
        left: var(--pc-100px);
        top: var(--pc-160px);

        max-width: 440px;
        width: 22vw;
      }
      .introudctionImg2 {
        position: absolute;
        left: clamp(100px, 16vw, 320px);
        top: clamp(0px, 30.21vw, 580px);

        max-width: 440px;
        width: 22vw;
      }
      .introudctionImg3 {
        position: absolute;
        right: var(--pc-100px);
        top: clamp(0px, 11.46vw, 220px);

        max-width: 452px;
        width: 23vw;
      }

      p {
        text-align: center;
      }
    }
  }
  @media (max-width: 1024px) {
    .gridWrapper {
      display: grid;
    }
    .customTextWrapper {
      order: 2;

      margin: var(--mobile-80px) 0;
    }
    .introductionArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: var(--mobile-80px);
      .introudctionImg1 {
        min-width: 167px;
        width: 44vw;
      }
      .introudctionImg2 {
        min-width: 145px;
        width: 38vw;
      }
      .introudctionImg3 {
        min-width: 175px;
        width: 46vw;
        margin-bottom: var(--mobile-30px);
      }

      p {
        text-align: center;
      }
    }
  }
`;
