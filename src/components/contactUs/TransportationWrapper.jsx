import React from 'react';
import styled from 'styled-components';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';

const StyledTransportationWrapper = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;

    .subway {
      width: clamp(0px, 1.88vw, 36px);
      margin-right: 8px;
    }
    .bus {
      width: var(--pc-50px);
      margin-right: 10px;
    }

    p {
      color: #767676;
      font-size: clamp(0px, 1.15vw, 22px);
      word-break: keep-all;

      span {
        color: #292929;
      }
    }
    p:first-child {
      margin-right: 120px;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    .subway {
      /* margin-right: clamp(11.67px, 3.11vw, 1000px); */
      margin-right: calc(clamp(8.21px, 2.19vw, 1000px) + 7px);
      margin-left: 3px;
      width: clamp(20px, 5.33vw, 30px);
    }
    .bus {
      margin-right: clamp(8.21px, 2.19vw, 1000px);
      width: clamp(26px, 6.93vw, 40px);
    }
    p {
      color: #767676;
      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
      word-break: keep-all;
      span {
        color: #292929;
      }
    }
    margin-bottom: var(--mobile-10px);
  }
`;

const TransportationWrapper = (data) => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledTransportationWrapper>
      <img
        className={data.transit}
        src={`${process.env.PUBLIC_URL}/assets/images/contact/${isMobileTablet ? data.transit + '_m' : data.transit}.png`}
        alt=""
      />
      <p>
        <span>{data.transitKorean}</span> : {data.transitInfo}
      </p>
    </StyledTransportationWrapper>
  );
};

export default TransportationWrapper;
