import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingBox = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: white; */
  position: absolute;
  z-index: 10;
  .loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* & img {
    border-radius: 100%;
    height: 150px;
  } */
  }
`;

const Loading = () => {
  return (
    <LoadingBox>
      <img
        className="loading"
        src={`${process.env.PUBLIC_URL}/assets/images/common/logo_line.png`}
        alt=""
      />
    </LoadingBox>
  );
};

export default Loading;
