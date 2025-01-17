import styled from 'styled-components';

export const StyledCategoryLi = styled.li`
  @media (min-width: 1557px) {
    max-width: 460px;
    width: 23.9vw;
    position: relative;

    color: #ffffff;
    text-align: left;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;

    list-style: none;

    margin-bottom: 10px;
    a {
      color: #ffffff;
    }

    p {
      /* font-size: clamp(10px, 0.9vw, 18px); */
      font-size: 18px;
      letter-spacing: -0.02em;

      max-width: 420px;
      width: 21.8vw;
      margin: 5px 0;
      white-space: nowrap;
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      color: #48c2c5;
      p {
        color: #48c2c5;
      }
      .move {
        display: inline;
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    position: relative;
    width: 460px;
    color: #ffffff;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;
    list-style: none;
    margin-bottom: 10px;

    a {
      color: #ffffff;
    }

    p {
      font-size: 18px;
      letter-spacing: -0.02em;
      width: 420px;
      margin: 5px 0;
      white-space: nowrap;
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      color: #48c2c5;
      p {
        color: #48c2c5;
      }
      .move {
        display: inline;
      }
    }
  }
  @media (max-width: 1024px) {
    min-width: 315px;
    width: 84vw;
    position: relative;
    text-align: left;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;
    list-style: none;

    /* margin-bottom: 16px; */
    margin-bottom: clamp(16px, 4.2vw, 100px);

    a {
      color: #ffffff;
    }

    p {
      font-size: clamp(16px, 3.2vw, 100px);
      line-height: 6vw;
      letter-spacing: -0.02em;
      min-width: 275px;
      width: 73vw;
      /* padding: 5px 0; */
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      p {
        color: #48c2c5;
      }
      .move {
        display: inline;
      }
    }
  }
`;
