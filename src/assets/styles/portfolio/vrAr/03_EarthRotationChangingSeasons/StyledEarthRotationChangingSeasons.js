import styled from 'styled-components';

export const StyledEarthRotationChangingSeasons = styled.div`
  .mainImg {
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 1025px) {
    .width80 {
      width: 80%;
    }
    position: relative;
    max-width: 1920px;
    margin: auto;

    .mainDescription {
      max-width: 1260px;
      width: var(--pc-1260px);
      margin: auto;
      display: flex;
      /* background-color: beige; */
      margin-top: 171px;
      margin-bottom: 128px;

      .globe {
        max-width: 182px;
        aspect-ratio: 182 / 220;
      }

      .mainDescriptionTextBox {
        margin-top: 30px;
        margin-left: 79px;
        /* background-color: aqua; */
        letter-spacing: -0.02em;

        .title {
          color: #292929;
          /* font-size: 40px; */
          font-size: clamp(20px, 3vw, 40px);
        }
        .subTexts {
          margin-top: 34px;
          color: #767676;

          /* font-size: 25px;
          line-height: 40px; */

          font-size: clamp(14px, 1.7vw, 26px);
          line-height: clamp(20px, 2vw, 40px);
        }
      }
    }

    .animationBox {
      display: flex;
      /* background-color: aqua; */
      margin-bottom: 66px;
      position: relative;

      img:first-child {
        position: absolute;
        left: -123px;
        top: -80px;
      }
      div {
        text-align: left;
        p:first-child {
          color: #292929;
          font-size: 40px;
          margin-top: 320px;
          margin-bottom: 59px;
        }
        p:last-child {
          color: #767676;
          font-size: 26px;
        }
      }
      img:last-child {
        margin-top: 152px;
      }
    }

    .contentsWrapper div {
      max-width: 1260px;
      width: var(--pc-1260px);
      img {
        max-width: 710px;
        width: var(--pc-710px);
      }
    }
  }
  @media (max-width: 1024px) {
    .mainDescription {
      text-align: center;
      margin: 0 var(--mobile-margin);
      .globe {
        aspect-ratio: 95 / 115;

        min-width: 95px;
        width: 25.3vw;
        margin-top: clamp(80px, 15vw, 120px);
      }
      .mainDescriptionTextBox {
        margin-top: var(--mobile-30px);
        p:last-child {
          color: #767676;
        }
      }
    }
  }
`;
