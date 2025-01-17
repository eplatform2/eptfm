import styled from 'styled-components';

export const StyledParentingGuide = styled.div`
  p {
    color: #4f4f4f;
  }
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    .heroArea {
      img {
        width: 100%;
      }
    }
    .backImg {
      position: absolute;
      width: 100%;
      z-index: -1;
    }
    .introductionWrapper {
      text-align: center;
      .babyHeart {
        margin-top: clamp(0px, 9.27vw, 178px);
        max-width: 250px;
        width: 13vw;
      }
    }
    .customMaxWidth1060 img {
      max-width: 1060px;
      width: 55.21vw;
    }
    .backImgTwo {
      position: relative;
      img {
        max-width: 1920px;
        width: 100%;
        top: -21.46vw;
        position: absolute;
        z-index: -1;
      }
    }
    .sole {
      text-align: center;
    }
  }
  @media (max-width: 1024px) {
    .backImg {
      position: absolute;
      width: 100%;
      z-index: -1;
    }
    .introductionWrapper {
      text-align: center;
      .babyHeart {
        margin-top: clamp(56px, 14.93vw, 1000px);
        min-width: 125px;
        width: 33vw;
      }
    }
    .backImgTwo {
      position: relative;
      img {
        max-width: 1920px;
        width: 100%;
        top: -161px;
        position: absolute;
        z-index: -1;
      }
    }
    .sole {
      text-align: center;
      margin-bottom: 45px;
      img {
        width: 100%;
      }
    }
  }
`;
