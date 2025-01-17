import styled from 'styled-components';

export const StyledBongsuPaval = styled.div`
  max-width: 1920px;
  margin: auto;
  .top-row {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1025px) {
    .introudctionWrapper {
      white-space: nowrap;
    }

    .mobile_beaconCount {
      display: none;
    }
    .pc_beaconCount {
      /* display: block; */
      max-width: 816px;
      width: 42.5vw;
    }
    .heroWrapper {
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/main.png);
      background-size: cover; /* 또는 contain */
      aspect-ratio: 1920 /1240;
      width: 100%;
    }
    .beaconWrapper {
      margin-top: 80px;

      /* overflow: hidden; */
      .beacon {
        aspect-ratio: 338 / 858;
        max-width: 338px;
        width: 17vw;
        /* width: clamp(102px, 27.2vw, 280px); */
        margin-right: var(--pc-90px);
      }
      .introudctionWrapper {
        margin-top: var(--pc-40px);
      }
      .beaconCount {
        margin-top: 50px;
        width: 100%;
      }
    }
    .textWrapper {
      margin: var(--pc-160px) 0;
    }

    .heroWrapper {
      width: 100%;
      /* position: relative; */

      .mainImg {
        position: relative;
        /* background-color: yellow; */
        img {
          position: absolute;
          left: 50%;
          /* transform: translateX(-50%); */
          z-index: -1;
        }
      }

      .divide {
        font-family: 'Roboto-Light';
      }
    }

    .projectDescriptions {
      div {
        max-width: 1260px;
        width: var(--pc-1260px);
        margin: auto;
        margin-bottom: var(--pc-60px);
      }
      margin-bottom: var(--pc-160px);
      &:last-child {
        margin-bottom: 200px;
      }
    }
  }

  @media (max-width: 1024px) {
    .introudctionWrapper {
      white-space: nowrap;
    }

    .mobile_beaconCount {
      display: block;
      width: 100%;
      margin-top: 50px;
    }
    .pc_beaconCount {
      display: none;
    }
    .heroWrapper {
      background-image: url(${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/main_m.png);
      background-size: cover; /* 또는 contain */
      /* aspect-ratio: 375 / 746; */
      width: 100%;
      padding-bottom: 80px;
    }

    .beaconWrapper {
      margin: 0 var(--mobile-margin);
      margin-top: 50px;
      .beacon {
        aspect-ratio: 102 / 258;
        /* width: 102px; */
        width: clamp(102px, 27.2vw, 1000px);
        /* margin-right: 26px; */
        margin-right: var(--mobile-26px);
      }
      .introudctionWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: yellow; */
      }
      .beaconCount {
        margin-top: 50px;
        width: 100%;
      }
    }

    .textWrapper {
      margin: 80px 30px;
    }
    .projectDescriptions {
      margin-bottom: var(--mobile-80px);
      &:last-child {
        margin-bottom: var(--mobile-142px);
      }
    }
  }
`;
