import styled from 'styled-components';

export const StyledMudFlat = styled.div`
  .gridContainer,
  .watchContainer {
    background-color: rgba(237, 250, 255, 0.8);
  }
  .introductionWrap {
    display: flex;
    align-items: center;
  }
  .mainContainer {
    text-align: center;
  }

  @media (min-width: 1025px) {
    .portfolioTitle {
      position: absolute;
      margin-top: 425px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    .mainContainer {
      margin-top: clamp(0px, 8.91vw, 171px);
      display: flex;
      justify-content: center;

      .woman {
        margin-right: 20px;
      }
    }
    .watchContainer {
      padding: var(--pc-100px) 0;
      width: 100%;

      margin-top: var(--pc-160px);
      margin-bottom: var(--pc-160px);
      .centerAlignment {
        display: grid;
        grid-template-columns: repeat(6, auto);
        /* justify-content: center; */
        max-width: 1555px;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 34px;
        img {
          width: 100%;
          max-width: 259px;
        }
      }

      .watchTitle {
        color: #000000;
        /* font-size: 50px; */
        font-size: clamp(30px, 2.6vw, 50px);
        letter-spacing: -0.02em;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        text-align: center;

        margin-bottom: var(--pc-60px);
      }
    }
    .gridContainer {
      padding-top: var(--pc-160px);
      padding-bottom: var(--pc-160px);
      width: 100%;
      ul {
        display: grid;
        justify-content: center;
        /* grid-template-columns: repeat(3, 400px); */
        grid-template-columns: repeat(3, auto);
        gap: 0px 30px;
        /* margin: 0 50px; */
        width: 80%;
        margin: auto;

        li {
          list-style: none;
          padding-bottom: var(--pc-60px);

          img {
            width: 100%;
            max-width: 400px;
            height: auto;
          }
        }
      }
      .customText {
        color: #191919;
        text-align: center;
      }
    }
    .woman {
      width: 39.72vw;
      max-width: 572px;
      /* 572px / 1440px * 100 = 39.72vw */
    }
    .man {
      /* width: 311px; */
      width: clamp(0px, 16.2vw, 311px);
    }

    .maxWidth1100Wrapper {
      img {
        max-width: 1100px;
        width: 57.29vw;
      }
    }
  }

  @media (max-width: 1024px) {
    .mainContainer {
      /* margin-top: 80px; */
      margin-top: 21.33vw;

      .woman {
        width: 42.13vw;
        /* 158px / 375px * 100 = 42.13vw */
        aspect-ratio: 158 / 140;
      }

      .introductionWrap {
        margin-top: var(--mobile-20px);
        margin-bottom: var(--mobile-80px);
        justify-content: center;
      }
    }
    .watchContainer {
      padding-top: var(--mobile-80px);
      padding-bottom: var(--mobile-80px);

      margin-bottom: var(--mobile-80px);

      .centerAlignment {
        display: grid;
        grid-template-columns: repeat(3, min-content);
        justify-content: center;
        /* margin-bottom: 34px; */
        margin-bottom: 9.07vw;
        img {
          /* width: 105px; */
          width: 28vw;
        }
      }

      .watchTitle {
        color: #000000;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        text-align: center;

        /* margin-bottom: 25px;
        font-size: 20px; */
        margin-bottom: 6.67vw;
        font-size: 5.33vw;
      }
    }
    .gridContainer {
      padding: 0 30px;
      /* padding: 0 8vw; */

      padding-top: var(--mobile-80px);
      padding-bottom: var(--mobile-80px);

      ul {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, auto);
        /* gap: 7px 7.5px; */
        gap: 1.87vw 2vw;
        margin-bottom: var(--mobile-24px);

        li {
          list-style: none;
          img {
            width: 100%;
          }
        }
      }
      .customText {
        color: #191919;
        text-align: center;
      }
    }
    .man {
      /* width: 94px; */
      width: 25.07vw;
    }
  }
`;
