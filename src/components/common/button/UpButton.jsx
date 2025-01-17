import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import useResponsiveMax1024 from '../../hooks/useResponsiveMax1024';

const StyledUpButton = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  img {
    cursor: pointer;
    border-radius: 100%;
  }

  @media (min-width: 1025px) {
    margin-right: var(--pc-80px);
    margin-bottom: 60px;
    img {
      max-width: 56px;
      width: var(--pc-fixedButton);
    }
  }
  @media (max-width: 1024px) {
    margin-right: var(--mobile-30px);
    margin-bottom: calc(40.8vw + var(--mobile-30px));

    img {
      width: var(--mobile-fixedButton);
    }
  }
`;

const UpButton = () => {
  const [topBtnView, setTopBtnView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setTopBtnView(true);
      } else {
        setTopBtnView(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // const isMobileTablet = useResponsiveMax1024();

  // useEffect(() => {
  //   const windowHeight = window.innerHeight;
  //   // 모바일 해상도의 높이
  //   const documentHeight = document.documentElement.scrollHeight;
  //   // 전체 페이지 높이

  //   const handleScroll = () => {
  //     const fixedHeaderHeight = 80;

  //     if (isMobileTablet) {
  //       // console.log(window.scrollY, windowHeight, documentHeight, fixedHeaderHeight);
  //       if (window.scrollY + windowHeight >= documentHeight - fixedHeaderHeight) {
  //         setTopBtnView(true);
  //       } else {
  //         setTopBtnView(false);
  //       }
  //     } else {
  //       if (window.scrollY > 500) {
  //         setTopBtnView(true);
  //       } else {
  //         setTopBtnView(false);
  //       }
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  return (
    <StyledUpButton>
      {topBtnView && (
        <img
          // onClick={() => nav(-1)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          src={`${process.env.PUBLIC_URL}/assets/images/common/btn_up.png`}
          alt=""
        />
      )}
    </StyledUpButton>
  );
};

export default UpButton;
