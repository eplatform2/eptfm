import styled from 'styled-components';

export const ContactUsBox = styled.div`
  hr {
    border-style: solid;
    border-color: rgba(118, 118, 118, 0.5);
    border-width: 1px 0 0 0;
    height: 0px;

    /* width: 0; */
    /* height: 2px; */
    /* background-color: rgba(118, 118, 118, 0.5); */
    /* border: none; */
    /* margin: 100px auto; */
    /* transition: width 1s ease-out; */
    /* transform-origin: center; */
  }
  .mapWrap {
    img {
      width: 100%;
    }
  }
  .hr_expand {
    width: 100%;
  }

  @media (min-width: 1025px) {
    .transportation {
      display: flex;
      justify-content: space-around;

      margin-top: 31px;
      margin-bottom: 202px;
    }

    hr {
      width: 100%;
      margin: 100px 0;
    }
    .inquiryImg {
      text-align: center;
      display: grid;
      grid-template-columns: repeat(3, minmax(200px, 1fr));
      gap: var(--pc-60px);
      img {
        aspect-ratio: 380 / 280;
      }
      li {
        list-style: none;
        img {
          width: 100%;
        }
        p {
          margin-top: 24px;
          color: #292929;
          font-size: var(--pc-font-size-22px);
        }
      }
    }

    /* - */
    .Wrapper {
      /* width: 80%; */
      /* max-width: 1260px; */
      width: var(--pc-1260px);
      margin: auto;
      .title {
        text-align: center;
        font-size: var(--pc-100px);
        color: #191919;
        margin-bottom: 42px;
      }
      .subTitle {
        text-align: center;
        font-size: var(--pc-font-size-26px);
        color: #767676;
      }
    }
    .ellipseArea {
      position: relative;
      max-width: 1920px;
      margin: auto;
      z-index: -1;
      .ellipse1 {
        position: absolute;
        width: 100%;
      }
      .ellipse2 {
        position: absolute;
        right: 0;
        width: 100%;
      }
    }
    .mapWrap img {
      aspect-ratio: 1260 / 480;
    }
  }

  @media (max-width: 1024px) {
    .ellipseArea {
      position: relative;
      z-index: -1;
      .ellipse1 {
        position: absolute;
      }
      .ellipse2 {
        display: none;
      }
    }
    .ellipse1 {
      width: 375px;
    }
    .Wrapper {
      margin: 0 var(--mobile-margin);
    }
    .title {
      text-align: center;
      color: #191919;
      font-size: clamp(36px, 9.6vw, 100px);

      padding-top: 50px;
      margin-bottom: 20px;
    }
    .subTitle {
      text-align: center;
      color: #767676;
      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
      letter-spacing: -0.02em;
      white-space: nowrap;
    }
    hr {
      width: 100%;
      margin: 60px 0;
    }

    .inquiryImg {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, auto);
      gap: 24px 0px;
      word-break: keep-all;

      img {
        aspect-ratio: 150 / 110;
      }

      li {
        list-style: none;
        display: flex;
        img {
          min-width: 150px;
          width: 40vw;
          /* height: 110px; */
        }
        p {
          margin: auto 0px;
          margin-left: 14px;
          min-width: 129px;

          color: #292929;
          font-size: var(--mobile-content-common-font-size);
          line-height: var(--mobile-content-common-line-height);
          letter-spacing: -0.02em;
        }
      }
    }

    .transportation {
      margin-top: 24px;
      margin-bottom: 142px;
    }
  }
`;
