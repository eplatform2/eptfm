import styled from 'styled-components';

export const StyledBuildingGreatCity = styled.div`
  @media (min-width: 1025px) {
    .heroWrapper {
      position: relative;
      max-width: 1920px;
      margin: auto;

      .introductionWrapper {
        margin-top: clamp(10px, 13vw, 168px);
        margin-left: clamp(100px, 17vw, 330px);
        position: absolute;
      }
      .satellite {
        position: absolute;
        right: clamp(10px, 5vw, 170px);
        top: -24px;
        width: clamp(10px, 15vw, 297px);
      }
    }

    .customTextWrapper {
      margin: var(--pc-160px) 0;
      text-align: center;
    }

    .customTag {
      background-color: rgba(115, 243, 236, 0.3);
      margin-bottom: var(--pc-160px);

      img {
        width: var(--pc-920px);
      }
    }
    .contentsWrapper div {
      width: var(--pc-1260px);
      img {
        width: var(--pc-720px);
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      position: relative;
      text-align: center;
      .introductionWrapper {
        white-space: nowrap;
        margin-top: 22vw;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .satellite {
        position: absolute;
        right: 0;
        top: -1.8vw;
        width: 26vw;
        aspect-ratio: 99 / 69;
      }
    }
    .customTextWrapper {
      margin: var(--mobile-80px) 0;
      text-align: center;
    }

    .customTag {
      background-color: rgba(115, 243, 236, 0.3);
      padding-top: 0px;
      margin-bottom: var(--mobile-80px);
    }
  }
`;
