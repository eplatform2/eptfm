import styled from 'styled-components';

export const Zigzag = styled.div`
  @media (min-width: 1025px) {
    /* display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 200px;
    .left + .right {
      margin-left: 60px;
    }
    .right {
      position: relative;
      margin-top: 130px;
      .sideImg1 {
        top: -453px;
        right: -173px;
        position: absolute;
      }
    } */

    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    gap: var(--pc-60px);
    width: var(--pc-1260px);
    margin: auto;

    padding-top: ${(props) => props.$pcPaddingTop};
  }
  @media (max-width: 1024px) {
    margin: 0 var(--mobile-margin);
    padding-top: ${(props) => props.$mobilePaddingTop};
    img {
      width: 100%;
    }
  }
`;
