import styled from 'styled-components';

export const StyledWaterTemperatureSalinityExploration = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;

    .mainImgContainer {
      margin-bottom: var(--pc-200px);
      .rectangular {
        position: absolute;
        right: clamp(0px, 13.49vw, 259px);
        bottom: -19px;
      }
    }
    .dolphin {
      width: clamp(0px, 47.14vw, 905px);
    }
  }
  @media (max-width: 1024px) {
    .rectangular {
      text-align: center;
    }
    .dolphin {
      margin-top: var(--mobile-80px);
    }
  }
`;
