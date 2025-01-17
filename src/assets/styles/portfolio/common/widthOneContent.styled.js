import styled from 'styled-components';

export const WidthOneContent = styled.div`
  position: relative;
  text-align: center;

  @media (min-width: 1025px) {
    /* margin: 0 50px; */
    /* width: 80%; */
    margin: 0 auto;
    img {
      /* width: 100%; */
      margin-bottom: var(--pc-60px);
    }
    padding-top: ${(props) => {
      if (props.$first) return 'var(--pc-160px)';
      return '0px';
    }};
    padding-bottom: ${(props) => {
      if (props.$last) return 'var(--pc-200px)';
      else if (props.$none) return '0px';
      return 'var(--pc-160px)';
    }};

    .left {
      position: absolute;
      left: 0;
      bottom: 510px;
    }
    .right {
      position: absolute;
      right: 0;
      top: -209px;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 var(--mobile-margin);
    img {
      width: 100%;
      margin-bottom: var(--mobile-24px);
    }

    padding-top: ${(props) => {
      if (props.$first) return 'var(--mobile-80px)';
      return '0px';
    }};
    padding-bottom: ${(props) => {
      if (props.$last) return 'var(--mobile-142px)';
      else if (props.$none) return '0px';
      return 'var(--mobile-80px)';
    }};
  }
`;
