import React from 'react';
import styled from 'styled-components';

const StyledPortfolioListButton = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  img {
    cursor: pointer;
    border-radius: 100%;
  }

  @media (min-width: 1025px) {
    margin-right: var(--pc-80px);
    img {
      max-width: 56px;
      width: var(--pc-fixedButton);
    }
  }
  @media (max-width: 1024px) {
    display: none;
    img {
      min-width: 32px;
      width: var(--mobile-fixedButton);
    }
  }
`;

const PortfolioListButton = ({ portfolioListModalStatus, setPortfolioListModalStatus }) => {
  const listBtn = () => {
    setPortfolioListModalStatus(true);
  };
  return (
    <StyledPortfolioListButton>
      <img onClick={listBtn} src={`${process.env.PUBLIC_URL}/assets/images/common/portfolioListButton.png`} alt="" />
    </StyledPortfolioListButton>
  );
};

export default PortfolioListButton;
