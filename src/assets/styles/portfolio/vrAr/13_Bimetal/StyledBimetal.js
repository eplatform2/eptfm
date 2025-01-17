import styled from 'styled-components';

export const StyledBimetal = styled.div`
  @media (min-width: 1025px) {
    .heroAreaWrapper {
      position: relative;
      margin-top: 80px;
      margin-bottom: 100px;

      .introductionWrapper {
        position: absolute;
        right: clamp(0px, 10.19vw, 330px);
        text-align: right;
      }
    }

    .first_contentsWrapper div {
      width: var(--pc-1260px);
      img {
        width: var(--pc-600px);
      }
    }

    .contentsWrapper {
      div {
        width: var(--pc-1260px);
      }
      img {
        width: var(--pc-800px);
      }
    }
  }
  @media (max-width: 1024px) {
    .heroAreaWrapper {
      position: relative;
      margin-top: 40px;
      margin-bottom: 80px;

      display: flex;
      justify-content: center;
      .introductionWrapper {
        position: absolute;
        text-align: center;
      }
    }
    .first_contentsWrapper div {
      img {
        width: clamp(259px, 69.07vw, 1000px);
        margin: auto;
        margin-bottom: var(--mobile-30px);
      }
    }
  }
`;
