import styled from 'styled-components';

export const StyledChemicalSafety = styled.div`
  @media (min-width: 1200px) {
    .introductionWrapper {
      margin-bottom: 200px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    .introductionWrapper {
      margin-bottom: 100px;
    }
  }

  @media (min-width: 1025px) {
    .heroArea {
      position: relative;
      max-width: 1920px;
      margin: auto;
      .introductionWrapper {
        white-space: nowrap;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        bottom: 0;
      }
    }
    .side1 {
      position: absolute;
      max-width: 790px;
      width: 41vw;
      z-index: -1;

      bottom: clamp(-267px, -13vw, -159px);
    }
    .group2Area {
      background-color: rgba(131, 148, 188, 0.3);

      .nationFlag {
        width: 610px;
        padding-top: var(--pc-160px);
        padding-bottom: var(--pc-100px);

        /* display: grid; */
        /* grid-template-columns: repeat(5, auto); */
        /* gap: 0 20px; */
        text-align: center;
        margin: 0 auto;

        img {
          max-width: 610px;
          width: 31vw;
        }
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: var(--pc-60px) var(--pc-60px);
        max-width: 1260px;
        width: 65.63vw;
        margin: auto;
        img {
          width: 100%;
        }
      }

      .customPadding {
        padding-top: var(--pc-60px);
        padding-bottom: var(--pc-160px);
        p {
          color: #292929;
        }
      }
    }

    .side2 {
      max-width: 377px;
      width: 19.6vw;

      position: absolute;
      right: clamp(-0px, 4vw, 78px);
      top: clamp(-218px, -11vw, -132px);
    }
  }
  @media (max-width: 1024px) {
    .heroArea {
      position: relative;
    }
    .introductionWrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      bottom: clamp(80px, 21vw, 300px);
      white-space: nowrap;
    }
    .side1 {
      position: absolute;
      min-width: 228px;
      width: 60.8vw;

      /* top: clamp(-302px, ,158px); */
      /* top: -158px; */
      bottom: clamp(-181px, -25vw, -93px);
      z-index: -1;
    }
    .side2 {
      display: none;
    }

    .group2Area {
      background-color: rgba(131, 148, 188, 0.3);

      .nationFlag {
        padding-top: var(--mobile-80px);
        padding-bottom: var(--mobile-60px);

        /* display: grid; */
        /* justify-content: center; */
        /* grid-template-columns: repeat(5, auto); */
        /* gap: 0 10px; */

        /* margin: 0 auto; */
        text-align: center;
        img {
          /* width: 100%; */
          width: 84vw;
          min-width: 315px;
        }
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(1, auto);
        gap: var(--mobile-24px);
        margin: auto;
        width: 80%;
        img {
          width: 100%;
        }
      }

      .customPadding {
        padding-top: var(--mobile-24px);
        padding-bottom: var(--mobile-80px);
        p {
          color: #292929;
        }
      }
    }
  }
`;
