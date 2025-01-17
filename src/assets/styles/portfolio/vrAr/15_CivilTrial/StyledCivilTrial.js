import styled from 'styled-components';

export const StyledCivilTrial = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .introductionWrapper2 {
      display: flex;
      margin: var(--pc-160px) 0;
      /* background-color: aqua; */

      .introductionImg {
        max-width: 900px;
        width: 46vw;
      }
      .alignCenter {
        display: flex;
        align-items: center;
        margin-left: clamp(10px, 5vw, 100px);
      }
    }
    .heroWrapper {
      display: grid;
      justify-content: end;
      position: relative;

      margin-top: var(--pc-80px);
      img {
        width: clamp(0px, 86.46vw, 1660px);
      }
      .heroTextsWrapper {
        position: absolute;
        right: 0;

        display: grid;
        align-content: center;

        width: var(--pc-780px);
        height: 100%;
        background: rgba(34, 20, 14, 0.7);
        p {
          margin-left: var(--pc-130px);
        }
      }
    }
    .mobileTextsImg img {
      display: none;
    }
    .contentsWrapper img {
      width: var(--pc-1100px);
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: grid;
      /* font-size: 0; */
      .mobileTextsImg {
        order: 2;
        position: relative;
      }
    }
    .heroTextsWrapper {
      white-space: nowrap;
      text-align: center;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .introductionWrapper2 {
      margin-top: 80px;
      margin-bottom: 80px;
      img {
        width: calc(100% - var(--mobile-margin));
      }
      .alignCenter {
        margin-top: 24px;
        text-align: center;
      }
    }
  }
`;
