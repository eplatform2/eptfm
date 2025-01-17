import React from 'react';
// import { Link } from 'react-router-dom';
import About from './About';
import Business from './Business';
import Portfolio from './portfolio/Portfolio';
import styled from 'styled-components';

const MainBox = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    margin: auto;
  }
`;

const Main = () => {
  return (
    <MainBox>
      <About />
      <Business />
      <Portfolio />
    </MainBox>
  );
};

export default Main;
