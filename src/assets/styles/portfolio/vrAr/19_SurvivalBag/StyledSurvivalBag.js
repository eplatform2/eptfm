import styled from 'styled-components';

export const StyledSurvivalBag = styled.div`
  @media (min-width: 1025px) {
    .mainTitle {
      white-space: nowrap;
      position: absolute;
      color: #ffffff;
      font-size: var(--pc-font-size-40px);
      line-height: var(--pc-line-height-56px);
      letter-spacing: -0.02em;

      filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .mainImg {
      width: 100%;
    }
    .absolute img {
      z-index: -1;
    }

    .backImgContainer {
      position: relative;

      .backImg {
        width: 100%;
        aspect-ratio: 1920 / 1080;
        position: absolute;
      }
      .exitImg {
        width: clamp(0px, 7.5vw, 144px);
        aspect-ratio: 144 / 180;
      }
    }
  }
  @media (max-width: 1024px) {
    .mainTitle {
      position: absolute;
      filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      color: #ffffff;
      white-space: nowrap;

      font-size: var(--mobile-font-size-22px);
      line-height: var(--mobile-line-height-30px);

      letter-spacing: -0.02em;
      text-align: center;
    }

    .backImgContainer {
      position: relative;

      .backImg {
        aspect-ratio: 375 / 211;
        width: 100%;
        position: absolute;
      }
      .exitImg {
        width: var(--mobile-80px);
      }
    }
  }
`;
