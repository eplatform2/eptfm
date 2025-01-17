import styled from 'styled-components';

export const StyledExploreDokdo = styled.div`
  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      .manOnEarth {
        position: absolute;
        max-width: 606px;
        width: 31.56vw;
        bottom: clamp(-237px, -12.34vw, 0px);
        right: clamp(0px, 5.73vw, 110px);
      }
    }
    .introductionWrapper {
      margin-top: var(--pc-200px);
      margin-bottom: var(--pc-160px);
    }
    .contentsWrapper img {
      max-width: 720px;
      width: var(--pc-720px);
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      position: relative;
      margin-top: 50px;
      .manOnEarth {
        position: absolute;
        min-width: 192px;
        width: 51vw;
        bottom: clamp(-91px, -24.27vw, 0px);
        right: 0;
      }
    }
    .introductionWrapper {
      text-align: center;
      margin-top: 107px;
      margin-bottom: 80px;
    }
  }
`;
