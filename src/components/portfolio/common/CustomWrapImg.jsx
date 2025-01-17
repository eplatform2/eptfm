import React from 'react';
import styled from 'styled-components';

const StyledCustomWrapImg = styled.div`
  display: flex;
  justify-content: center;
  .fullScreen {
    display: inline-block;
    .contourMap {
      width: 100%;
      display: block;
    }
  }
`;

const CustomWrapImg = (data) => {
  return (
    <StyledCustomWrapImg>
      <div className="fullScreen">
        <img className="contourMap" src={data.src} alt="" />
      </div>
    </StyledCustomWrapImg>
  );
};

export default CustomWrapImg;
