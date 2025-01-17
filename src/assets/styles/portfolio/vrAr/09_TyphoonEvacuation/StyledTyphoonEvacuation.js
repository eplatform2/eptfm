import styled from 'styled-components';

export const StyledTyphoonEvacuation = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .textWrapper {
      padding: var(--pc-160px) 0;
      text-align: center;
    }
    .introductionWrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }
  @media (max-width: 1024px) {
    .textWrapper {
      padding: var(--mobile-80px) 0;
      text-align: center;
    }
    .introductionWrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      p:last-child {
        white-space: nowrap;
      }
    }
  }
`;
