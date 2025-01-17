import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.p`
  @media (min-width: 1557px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    /* font-size: clamp(10px, 1.8vw, 36px); */
    font-size: 36px;
    position: relative;

    margin-top: ${(props) => {
      return '0px';
    }};
    /* margin-bottom: clamp(10px, 1.3vw, 26px); */
    margin-bottom: 26px;
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: 26px;
    position: relative;

    margin-bottom: 22px;
  }
  @media (max-width: 1024px) {
    color: #ffffff;
    text-align: left;
    font-family: 'Roboto-Regular';
    font-size: clamp(26px, 5.9vw, 100px);
    position: relative;

    margin-bottom: var(--mobile-30px);
  }
`;

const Category = (data) => {
  return <StyledCategory style={data && data.style}>{data.category}</StyledCategory>;
};

export default Category;
