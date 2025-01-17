import styled from 'styled-components';

export const StyledBoneJointMuscle = styled.div`
  @media (min-width: 1025px) {
    .fff6df {
      background-color: #fff6df;
      margin-bottom: var(--pc-160px);
    }
    .heroWrapper {
      position: relative;
      max-width: 1920px;
      width: 100%;
      margin-bottom: 100px;
      margin-top: 80px;
      text-align: right;

      img {
        width: var(--pc-1100px);
      }

      .rectangle {
        position: absolute;
        aspect-ratio: 930 / 680;
        background-color: rgba(234, 181, 102, 0.9);
        top: 158px;
        width: clamp(500px, 49vw, 950px);
        /* height: 680px; */
        /* height: clamp(300px, 62vh, 680px); */
        display: grid;
        align-items: center;

        .introductionWrapper {
          text-align: left;
          margin-left: clamp(0px, 10.42vw, 250px);
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: grid;
    }
    .rectangle {
      order: 2;
      position: relative;
      background-color: rgba(234, 181, 102, 0.9);
      width: clamp(345px, 92vw, 1000px);
      aspect-ratio: 345 / 270;
      margin-top: clamp(-1000px, -12.8vw, -48px);
      .introductionWrapper {
        white-space: nowrap;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .fff6df {
      background-color: #fff6df;
      padding-top: var(--mobile-80px);
      margin-bottom: var(--mobile-80px);
    }
  }
`;
