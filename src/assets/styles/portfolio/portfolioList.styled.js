import styled from 'styled-components';
// const portfolioImgWidth = 'var(--pc-480px)';
// const mobile_PortfolioImgWidth = '315px';
const mobile_PortfolioImgWidth = 'clamp(315px, 55vw, 600px)';
export const PortfolioListBox = styled.div`
  overflow: hidden;
  .div1 {
    width: 100%;
    background-color: gold;
    height: 1000px;
  }

  .pageTitle {
    color: #191919;
    font-family: 'Roboto-Medium';
    text-align: center;
  }

  .fieldTitle {
    color: #292929;
    font-family: 'Roboto-Light';
    text-align: center;
  }

  .bigToOriginal {
    animation: shrinkToOriginal 2s ease forwards;
  }

  @keyframes shrinkToOriginal {
    from {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }

  @media (min-width: 1556px) {
    /* background-color: yellow; */
    /* height: 3688px; */
    ul {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
    .thumbnail {
      height: clamp(0px, 13.75vw, 264px);
      overflow: hidden;
    }
  }
  @media (min-width: 1025px) and (max-width: 1555px) {
    /* background-color: aqua; */
    /* height: 5050px; */

    ul {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    width: 100%;
    margin: auto;

    .topTitleBox {
      .pageTitle {
        font-size: var(--pc-100px);
        padding-bottom: 20px;
      }

      .fieldTitle {
        font-size: var(--pc-46px);
        margin-bottom: 128px;
      }
    }

    ul {
      width: 80%;
      margin: auto;
      /* height: 2168px; */

      display: grid;
      justify-content: center;
      /* grid-template-columns: auto auto auto; */
      gap: 80px 58px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      padding-bottom: 200px;
      /* height: ${(props) => {
        if (props.$finalUlHeight !== 0 && props.$finalUlHeight !== false) {
          return props.$finalUlHeight + 'px';
        }
      }}; */

      li {
        list-style: none;
        /* width: 400px;
        height: 382px; */
        /* aspect-ratio: 469 / 369; */
        /* height: ${(props) => props.abc + 'px'}; */

        .thumbnail {
          overflow: hidden;
          aspect-ratio: 469 / 264;
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          aspect-ratio: 469 / 264;
          transition: transform 1s ease;
          transform: scale(1);
          &:hover {
            transform: scale(1.1);
          }
        }
        & .thumbnailTexts {
          height: 100px;
          font-weight: bold;
          padding-left: 30px;

          & p:first-child {
            font-size: clamp(0px, 0.94vw, 18px);
            letter-spacing: 0;
            color: #999999;
            padding-top: clamp(0px, 1.35vw, 26px);
            padding-bottom: clamp(0px, 1.04vw, 20px);
          }
          & p:last-child {
            font-size: clamp(0px, 1.46vw, 28px);
            /* line-height: 34px; */
            color: #292929;
            word-break: keep-all;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .topTitleBox {
      height: 180px;

      .pageTitle {
        font-size: 36px;

        padding-top: 50px;
        padding-bottom: 10px;
      }

      .fieldTitle {
        font-size: 24px;
      }
    }

    ul {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, ${mobile_PortfolioImgWidth});
      gap: 50px 0px;
      /* 앞: 상하간격 뒤: 좌우간격 */
      padding-bottom: 142px;
      /* margin-bottom: 142px; */

      li {
        list-style: none;

        & .thumbnail img {
          width: ${mobile_PortfolioImgWidth};
          aspect-ratio: 315 / 177;
          /* height: 177px; */
        }
        & .thumbnailTexts {
          word-break: keep-all;
          & p:first-child {
            color: #999999;
            font-size: 12px;
            line-height: 24px;
            letter-spacing: -0.02em;

            padding-top: 16px;
            padding-bottom: 4px;
          }
          & p:last-child {
            color: #292929;
            font-size: 18px;
            letter-spacing: -0.02em;
          }
        }
      }
    }
  }
`;
