import styled from 'styled-components';

export const StyledReservoirDam = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;

    .gridWrapper {
      display: grid;
      .introductionWrapper {
        order: 1;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: clamp(0px, 4.83vw, 112px);
        text-align: center;
      }
      img {
        order: 2;
      }
    }
    .backgroundImg {
      position: absolute;
      margin-top: var(--pc-160px);

      max-width: 1384px;
      width: 72vw;
    }
    .background90ebff {
      background-color: rgba(144, 235, 255, 0.3);

      img {
        max-width: 1021px;
        width: 53.18vw;
      }

      p {
        color: #040404;
      }
    }
    .contentsWrapper > div {
      max-width: 1260px;
      width: var(--pc-1260px);
    }
    .contentsWrapper div img {
      max-width: 630px;
      width: 32.8vw;
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      display: grid;
      position: relative;
    }
    .introductionWrapper {
      /* order: 2; */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      margin-top: var(--mobile-80px);

      p:last-child {
        white-space: nowrap;
      }
    }

    .backgroundImg {
      width: 100%;
      margin-top: var(--mobile-20px);
      margin-bottom: var(--mobile-10px);
    }

    .background90ebff {
      background-color: rgba(144, 235, 255, 0.3);
      p {
        color: #040404;
      }
    }
  }
`;
