import styled from 'styled-components';

export const BusinessBox = styled.div`
  font-family: 'Roboto-Medium';
  background-image: url(${process.env.PUBLIC_URL}/assets/images/main/business_bg.png);
  background-repeat: no-repeat;
  width: 100%;
  /* background-size: cover; */

  #businessTitle {
    font-family: 'Roboto-Regular';
  }

  @media (min-width: 1025px) {
    height: auto;
    margin-top: clamp(0px, 12.5vw, 240px);
    padding-bottom: var(--pc-200px);

    #container {
      & #businessTitleBox {
        width: 100%;
        height: clamp(0px, 19.79vw, 380px);
      }
    }

    & #businessTitle {
      text-align: center;
      color: #ffffff;
      font-size: var(--pc-100px);
      margin: 0;
      padding-top: var(--pc-200px);
    }

    #contentsWrap {
      width: 80%;
      margin: auto;
      ul {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 28px;
        list-style: none;
        justify-content: center;
      }
    }
  }
  @media (max-width: 1024px) {
    background-size: cover;
    width: 100%;
    #container {
      #businessTitleBox {
        margin: 0 8vw;
        & #businessTitle {
          /* padding-top: 80px;
          padding-bottom: 40px;
          font-size: 36px; */

          color: #fff6f6;

          padding-top: 20vw; /* 80px를 vw로 변환 */
          padding-bottom: 10vw; /* 40px를 vw로 변환 */

          font-size: 9vw;
        }
      }

      & #contentsWrap {
        /* display: flex;
        justify-content: center; */
        margin: 0 8vw;

        padding-bottom: 20vw;
        //80px
      }
      & #contentsWrap ul li:nth-child(2) {
        /* margin: 24px 0; */
        margin: 6vw 0; /* 24px를 vw로 변환 */
      }
      /* & #contentsWrap ul li:nth-child(3) {
        margin-bottom: 80px;
      } */
    }
  }
`;
