import styled from 'styled-components';

export const StyledEcosystemRestoration = styled.div`
  .titleWrap {
    display: flex;
    justify-content: center;
  }
  .eagle,
  .cloud,
  .wolf,
  .fox,
  .beaver,
  .tree1,
  .tree2 {
    display: none;
  }

  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
    /* background-color: yellow; */

    .heroWrapper {
      max-width: 1260px;
      width: var(--pc-1260px);
      margin: auto;
    }

    .eagleCloud {
      position: absolute;
      margin-top: clamp(-78px, -4vw, 0px);
      margin-left: var(--pc-180px);

      max-width: 387px;
      width: 20vw;
    }

    .introductionArea {
      /* background-color: aqua; */
      display: flex;
      justify-content: space-between;
      max-width: 1260px;
      width: var(--pc-1260px);
      margin: auto;

      margin-top: clamp(0px, 7.9vw, 152px);
      margin-bottom: var(--pc-60px);
      position: relative;

      .left {
        margin-top: clamp(0px, 8.75vw, 168px);
      }
      .introduction {
        text-align: left;
        max-width: 586px;
        p:first-child {
          white-space: nowrap;
          color: #292929;
        }
        p:last-child {
          color: #767676;
        }
      }
      .right {
        width: 50%;
        /* position: absolute; */
        /* right: 0; */
        /* bottom: 0; */
        .animals {
          /* display: none; */
          max-width: 621px;
          width: 32.34vw;
        }
        .wolf {
          margin-left: 170px;
        }
        .fox {
          bottom: 0;
        }
        .beaver {
          margin-left: 379px;
          margin-top: 224px;
        }
        .tree1 {
          margin-left: 92px;
          margin-top: 100px;
        }
        .tree2 {
          right: 0;
          margin-top: 143px;
        }
      }
    }
    .contentsWrapper div {
      max-width: 1260px;
      width: var(--pc-1260px);
      img {
        max-width: 630px;
        width: 32.81vw;
      }
    }
  }

  @media (max-width: 1024px) {
    .eagleCloud {
      width: clamp(148px, 39.47vw, 1000px);
      aspect-ratio: 148 / 133;
      margin-left: var(--mobile-20px);
      transform: translateY(-28px);
      /* margin-bottom: var(--mobile-20px); */
    }
    .introductionArea {
      /* background-color: aqua; */
      margin-bottom: var(--mobile-80px);
      position: relative;

      .left {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        .eagle {
          width: 148px;
        }
        .cloud {
          width: 22px;
          position: absolute;
          top: 73px;
        }
      }
      .introduction {
        aspect-ratio: 315 / 117;
        p:last-child {
          color: #767676;
        }
      }
      .right {
        text-align: center;
        .animals {
          margin-top: var(--mobile-30px);
          min-width: 236px;
          width: 62.93vw;
        }
      }
    }
  }
`;
