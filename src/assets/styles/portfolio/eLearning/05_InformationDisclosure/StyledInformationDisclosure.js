import styled from 'styled-components';

export const StyledInformationDisclosure = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;

    .portfolioTitleWrapper {
      position: relative;
      margin-left: clamp(10px, 17vw, 330px);
      div {
      }
    }
    .heroImgWrapper {
      max-width: 1526px;
      width: 90%;
      margin: auto;
    }

    .introductionWrapper {
      margin: var(--pc-200px) 0;
      text-align: center;
    }

    .customMaxWidth1257 {
      max-width: 1257px;
      width: 65.47vw;
      margin: auto;
    }
  }
  @media (max-width: 1024px) {
    .introductionWrapper {
      margin: var(--mobile-80px) 0;
      text-align: center;
    }
  }
`;
