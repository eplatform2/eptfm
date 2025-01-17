import React from 'react';
import styled from 'styled-components';

const StyledPortfolioOrganization = styled.p`
  letter-spacing: -0.02em;

  @media (min-width: 1025px) {
    font-size: var(--pc-font-size-22px);
    margin-bottom: var(--pc-24px);
  }
  @media (max-width: 1024px) {
    font-size: var(--mobile-font-size-12px);
    margin-bottom: var(--mobile-10px);
  }
`;

const PortfolioOrganization = (data) => {
  return <StyledPortfolioOrganization style={data && data.style}>{data.organization}</StyledPortfolioOrganization>;
};

export default PortfolioOrganization;
