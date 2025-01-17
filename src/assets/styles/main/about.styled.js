import styled from 'styled-components';

export const AboutBox = styled.div`
  .textsTitle,
  .aboutTitle {
    font-family: 'Roboto-Medium';
  }
  .textsSubTitle {
    font-family: 'NanumSquareEB';
  }
  .textsContents {
    font-family: 'NanumSquareB';
  }

  @media (min-width: 1025px) {
    .aboutTitle {
      width: 100%;
      height: 400px;
      /* background-color: yellow; */

      p {
        margin: 0;
        font-size: var(--pc-100px);
        letter-spacing: 0;
        color: #191919;
        padding-top: 200px;
        /* padding-left: 182px; */
        padding-left: clamp(10px, 9.47vw, 182px);
      }
    }
    .aboutContents {
      /* background-color: yellow; */
      width: 100%;
      display: flex;

      &:last-child {
        margin-top: 80px; // 마지막 요소에만 적용할 스타일
      }
    }
  }
  @media (max-width: 1024px) {
    /* margin: 0 30px; */
    margin: 0 8vw;
    .aboutTitle {
      width: 100%;
      /* background-color: yellow; */

      p {
        color: #191919;
        padding-top: 80px;
        padding-bottom: 40px;

        /* font-size: 36px; */
        font-size: 9.6vw;
      }
    }
    .aboutContents {
      width: 100%;
      /* background-color: blueviolet; */
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        animation-delay: 8s;
      }
      div {
        animation-delay: 10s;
      }
      /* :first-child {
        animation-delay: 3s;
      }
      :last-child {
        animation-delay: 5s;
      } */
    }
  }
`;
