import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledHeroVideo = styled.video`
  width: 100%;
  /* transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)}; */

  @media (min-width: 1025px) {
    aspect-ratio: ${(props) => props.$pcHeight};
  }
  @media (max-width: 1024px) {
    aspect-ratio: ${(props) => props.$mobileHeight};
  }
`;

const HeroVideo = (data) => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     const handleLoadedData = () => {
  //       data.setIsLoaded(true);
  //     };
  //     video.addEventListener('loadeddata', handleLoadedData);

  //     return () => {
  //       video.removeEventListener('loadeddata', handleLoadedData);
  //     };
  //   }
  // }, [data]);
  return (
    <StyledHeroVideo
      style={data.style}
      $pcHeight={data.pcHeight}
      $mobileHeight={data.mobileHeight}
      $isLoaded={data.isLoaded}
      ref={videoRef}
      src={data.src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default HeroVideo;
