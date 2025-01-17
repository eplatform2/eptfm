import styled from 'styled-components';

export const StyledDropDown = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: ${(props) => (props.$show ? 'block' : 'none')};
    position: fixed;
    background-color: white;
    width: 100%;
    text-align: center;
    z-index: 2;
    li * {
      color: #292929;
      font-family: 'Roboto-Medium';
      font-size: 20px;
    }
    li {
      margin-bottom: 30px;
    }
    li:first-child {
      margin-top: 30px;
    }
    .portfolioLi a {
      display: block;
      /* width: 200px; */
      height: 36px;
      line-height: 36px;

      color: #767676;
      font-size: 16px;
    }
    .portfolioLi a:nth-child(2) {
      margin-top: 8px;
    }
    .dim {
      width: 100%;
      height: calc(100vh - 363px);
      /* background-color: rgba(255, 255, 255, 0.9); */
      background: rgba(7, 16, 24, 0.3);
      position: fixed;
    }
  }
`;
