import styled from 'styled-components';

export const StyledBusinessItems = styled.li`
  @media (min-width: 1025px) {
    position: relative;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: ${(props) => {
      if (props.$first) return '30px';
    }};
    border-bottom-right-radius: ${(props) => {
      if (props.$last) return '30px';
    }};

    .hoverOn {
      display: none;
      div p:first-child {
        margin-bottom: 20px;
        font-size: 26px;
      }
      div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p:first-child {
          color: #ffffff;
          font-size: clamp(0px, 2.19vw, 42px);
          text-align: center;
          font-family: 'Roboto-Medium';
          filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          margin-bottom: 60px;
        }

        p:last-child {
          color: white;
          font-size: clamp(0px, 1.35vw, 26px);
          line-height: var(--pc-40px);
          text-align: center;
          font-family: 'NanumSquareB';
          filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          white-space: nowrap;
        }
      }
    }

    .hoverOff {
      aspect-ratio: 500 / 600;
      height: var(--pc-600px);
      .basicText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        font-size: clamp(0px, 2.19vw, 42px);
        margin: 0;
        padding: 0;
        white-space: nowrap;
        z-index: 1;
        /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
      }
      img {
        width: 100%; /* 이미지가 그리드 셀의 너비에 맞게 조정 */
        height: 100%;
        max-width: 500px;

        transition: transform 1s ease;
        transform: scale(1);
      }
      .background {
        width: 100%;
        height: 100%;
        background-color: #133f7e;

        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 1.2s ease;
      }
      &:hover {
        .background {
          opacity: 0.8;
        }
        .basicText {
          display: none;
        }
        .hoverTexts p {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }

        img {
          transform: scale(1.2);
        }
      }
    }

    .hoverTexts {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      p {
        /* display: none; */
        visibility: hidden;

        color: white;
        font-size: clamp(0px, 1.35vw, 26px);
        line-height: var(--pc-40px);
        text-align: center;
        font-family: 'NanumSquareB';
        filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
        white-space: nowrap;

        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-in-out, transform 1s ease-out;
      }
      p:first-child {
        font-size: clamp(0px, 2.19vw, 42px);
      }
    }
  }
  @media (max-width: 1024px) {
    position: relative;
    overflow: hidden;

    .hoverOff {
      display: none;
    }
    position: relative;

    .hoverOn {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
      img p {
        color: #ffffff;
        letter-spacing: -0.02em;
        text-align: center;
        line-height: 24px;
        /* filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6)); */
      }
      div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p:first-child {
          color: #ffffff;
          font-size: 5.87vw;
          text-align: center;
          font-family: 'NanumSquareEB';
          filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          margin-bottom: 10px;
        }

        p:last-child {
          color: #ffffff;
          font-size: 4.27vw;
          line-height: 6.4vw;
          text-align: center;
          font-family: 'NanumSquareB';
          filter: drop-shadow(4px 4px 6px rgba(19, 31, 47, 0.6));
          white-space: nowrap;
        }
      }
    }
  }
`;
