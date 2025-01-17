import styled from 'styled-components';

export const StyledAboutImg = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    overflow: hidden;
    width: 50%;
    & img {
      width: 100%;
      max-width: 960px;
      max-height: 1000px;
    }
    .magnify {
      opacity: 0;
      transform: scale(0.1) translate(0, 0);

      /* transform-origin: top left; */
      transform-origin: ${(props) => {
        if (props.$left) return 'top left';
        else return 'top right';
      }};
      transition: transform 1.5s ease, opacity 1.5s ease;
    }
    .magnifyDone {
      transform: scale(1) translate(0, 0);
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    overflow: hidden;
    order: 1;
    img {
      width: 100%;
      aspect-ratio: 315 / 315;
    }
  }
`;
