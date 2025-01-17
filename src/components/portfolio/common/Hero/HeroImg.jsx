import React, { useRef } from 'react';
import styled from 'styled-components';
// import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';

const StyledHeroImg = styled.img`
  width: 100%;
  /* opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in-out; */
  max-width: ${(props) => props.$maxwidth};

  @media (min-width: 1025px) {
    aspect-ratio: ${(props) => props.$pcHeight};
    aspect-ratio: ${(props) => props.$pcAspectRatio};
    /* margin-bottom: 160px; */
  }
  @media (max-width: 1024px) {
    aspect-ratio: ${(props) => props.$mobileHeight};
    aspect-ratio: ${(props) => props.$mobileAspectRatio};
  }
`;

const HeroImg = (data) => {
  const imgRef = useRef(null);
  // const isMobile = useResponsiveMax1024();

  // useEffect(() => {
  //   const img = imgRef.current;
  //   if (img) {
  //     const handleLoad = () => {
  //       data.setIsLoaded(true);
  //     };
  //     img.addEventListener('load', handleLoad);

  //     return () => {
  //       img.removeEventListener('load', handleLoad);
  //     };
  //   }
  // }, [data]);

  return (
    <StyledHeroImg
      style={data.style}
      $pcHeight={data.pcHeight}
      $tabletHeight={data.tabletHeight}
      $mobileHeight={data.mobileHeight}
      $maxwidth={data.maxwidth}
      $pcAspectRatio={data.pcAspectRatio}
      $mobileAspectRatio={data.mobileAspectRatio}
      // $isLoaded={data.isLoaded}
      ref={imgRef}
      src={data.src}
      alt=""
    />
  );
};

export default HeroImg;
