import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const BlankPageBox = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: calc(100vh - 460px);
  }
`;
const BlankPage = () => {
  return (
    <>
      <Breadcrumb />
      <BlankPageBox>
        <div>페이지를 찾을수 없습니다.</div>
      </BlankPageBox>
    </>
  );
};

export default BlankPage;
