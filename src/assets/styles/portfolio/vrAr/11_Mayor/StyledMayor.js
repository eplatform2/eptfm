import styled from 'styled-components';

export const StyledMayor = styled.div`
  @media (min-width: 1025px) {
    .ellipseWrapper {
      position: relative;
      .ellipse_left {
        position: absolute;
        z-index: -1;
        width: 56vw;
      }
      .ellipse_right {
        z-index: -1;
        position: absolute;
        right: 0;
      }
    }
    .heroAreaWrapper {
      display: flex;
      justify-content: center;
      .heroTexts {
        margin-right: var(--pc-90px);
      }
      .heroImg {
        img {
          max-width: 442px;
          width: 23vw;
          margin-bottom: var(--pc-160px);
        }
      }
    }

    .introductionWrapper {
      background-color: #2c427a;
      width: 100%;
      height: clamp(0px, 18.23vw, 350px);
      position: relative;

      .megaphone {
        width: clamp(0px, 28.33vw, 544px);
        position: absolute;
        bottom: 0;
        left: clamp(0px, 15.31vw, 294px);
      }

      .introTextsWrapper {
        position: absolute;
        left: clamp(0px, 46.46vw, 892px);
        top: 50%;
        transform: translateY(-50%);
        width: var(--pc-700px);
        p {
          color: #ffffff;
        }
      }
    }
    .fourElement {
      width: var(--pc-1260px);
      margin: 160px auto;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(4, auto);
      gap: var(--pc-122px);
      /* width: 80%; */

      li {
        list-style: none;
        text-align: center;
        img {
          max-width: 204px;
          width: 100%;
          margin-bottom: 24px;
        }
      }
      p {
        font-family: 'NanumSquareB';
        color: #767676;
        letter-spacing: -0.02em;
        line-height: 38px;
        /* font-size: 24px; */
        font-size: clamp(16px, 1.5vw, 24px);
      }
    }
    .AC9EFF {
      background-color: rgba(172, 158, 255, 0.2);
      padding-top: var(--pc-160px);
      div {
        max-width: 1260px;
        width: var(--pc-1260px);
        img {
          width: var(--pc-730px);
        }
      }
      div:last-child {
        padding-bottom: var(--pc-160px);
      }
    }
  }
  @media (max-width: 1024px) {
    .ellipseWrapper {
      position: relative;
      .ellipse_left {
        position: absolute;
        z-index: -1;
      }
      .ellipse_right {
        position: absolute;
        right: 0;
        z-index: -1;
      }
    }

    .heroAreaWrapper {
      display: grid;
      .heroTexts {
        order: 2;
        text-align: center;
        margin-bottom: 80px;
      }
      .heroImg {
        order: 1;
        text-align: center;
        img {
          min-width: 204px;
          width: 50vw;
        }
      }
    }
    .introductionWrapper {
      background-color: #2c427a;
      text-align: center;
      display: grid;
      /* justify-content: center; */
      /* height: 350px; */

      .megaphone {
        order: 2;
        /* width: 166px; */
        width: 44vw;
      }

      .introTextsWrapper {
        order: 1;
        margin-top: 80px;
        margin-bottom: 25px;
        p {
          color: #ffffff;
          /* font-size: 20px; */
        }
      }
    }

    .fourElement {
      margin: 80px 0;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, auto);
      gap: 50px;
      width: 100%;

      li {
        list-style: none;
        text-align: center;
        img {
          /* width: 112px; */
          width: 30vw;
          margin-bottom: 24px;
        }
      }
      p {
        font-family: 'NanumSquareB';
        color: #767676;
        font-size: clamp(16px, 4vw, 24px);

        line-height: 24px;
        letter-spacing: -0.02em;
      }
    }
    .AC9EFF {
      background-color: rgba(172, 158, 255, 0.2);
      padding-top: var(--mobile-80px);
      div:last-child {
        padding-bottom: var(--mobile-80px);
      }
    }
  }
`;
