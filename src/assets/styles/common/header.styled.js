import styled from 'styled-components';

const headerHeightDesktop = 'var(--pc-100px)';
// const headerHeightMobile = '60px';
const headerHeightMobile = '10vw';

export const HeaderSpacer = styled.div`
  @media (min-width: 1025px) {
    height: ${headerHeightDesktop};
  }
  @media (max-width: 1024px) {
    height: ${headerHeightMobile};
    min-height: 60px;
  }
`;

export const HeaderBox = styled.div`
  top: 0;
  width: 100%;
  max-width: 1920px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;

  .active {
    color: #4ac2c5;
  }

  &.transparent {
    transition: background-color 0.5s ease, transform 0.5s ease;
  }

  ul {
    list-style: none;
  }

  /* 데스크탑 */

  @media (min-width: 1301px) {
    li {
      margin-right: 92px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1300px) {
    li {
      margin-right: 30px;
    }
  }

  @media (min-width: 1025px) {
    height: ${headerHeightDesktop};
    /* background-color: white; */
    .transparent {
      background-color: transparent;
    }

    #headerContainer {
      position: relative;
      max-width: 1920px;
      width: 80%;
      margin: auto;
    }
    #logoImg {
      max-width: 122px;
      width: clamp(0px, 9vw, 122px);
      /* width: 122px;
      height: 18px; */
    }
    #dropDownImg {
      display: none;
    }

    ul {
      display: flex;
      margin: 0;

      li {
        /* 헤더 nav 텍스트 */
        & a {
          text-decoration: none;
          color: #292929;
          font-size: var(--pc-18px);
          letter-spacing: 0px;
          scroll-behavior: smooth;

          &:hover {
            color: #4ac2c5;
          }
        }
      }
    }
    .dropdown {
      position: relative;
      p {
        color: #292929;
        /* padding-top: 5px; */
        padding-bottom: var(--pc-39px);
        &:hover {
          color: #4ac2c5;
        }
      }
      .dropdown-content {
        background-color: white;
        display: none;
        position: absolute;
        width: 200px;
        padding: 10px 0;
        border: 1px solid rgba(10, 15, 54, 0.08); /* Border color with 8% opacity */
        border-top: 2px solid #4ac2c5;
        box-shadow: 0 0 20px rgba(10, 15, 54, 0.08); /* Blur radius 20px with 8% opacity */
        left: 50%;
        transform: translateX(-50%);
        a {
          width: 100%;
          height: 54px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #767676;
          font-size: 16px;
          &:hover {
            color: #191919;
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
      &:hover .dropdown-content {
        display: block;
      }
    }
    & ul li:last-child {
      margin-right: 0;
    }
    & span {
      position: absolute;
      right: 0;
    }
    &.colored {
      background-color: rgba(255, 255, 255, 0.9);
      /* background-color: yellow; */

      backdrop-filter: blur(5px);
      transition: background-color 0.5s ease, transform 0.5s ease;
    }
  }

  @media (max-width: 1024px) {
    background-color: white;
    height: ${headerHeightMobile};
    min-height: 60px;
    /* background-color: beige; */
    #headerContainer {
      /* background-color: yellow; */
      position: relative;
      width: 100%;
      margin: 0 var(--mobile-margin);

      #logoImg {
        min-width: 98px;
        width: 17vw;

        /* width: 82px; */
        /* height: 11px; */
        position: relative;
        z-index: 10;
      }
      #dropDownImg,
      #xBtn {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      #dropDownImg {
        width: 18px;
        height: 14px;
      }
      .mobileListButton {
        cursor: pointer;
        position: absolute;
        right: 50px;
        /* right: 13.3vw; */
        /* top: 2px; */
        top: 50%;
        transform: translateY(-40%);

        width: 23px;
        /* min-width: 20.8px;
        width: 4.2vw; */
      }

      ul {
        display: none;
        /* z-index: -1; */
        /* position: relative; */
        /* top: 100px; */
      }
    }
  }
`;
