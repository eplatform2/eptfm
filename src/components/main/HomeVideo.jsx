import React from 'react';
import styled from 'styled-components';
import useMobile from './../hooks/useMobile';

const StyledHomeVideo = styled.div`
  @media (min-width: 1025px) {
    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
  @media (max-width: 1024px) {
    video {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 375 / 200;
    }
  }
`;

const HomeVideo = () => {
  const isMobile = useMobile();
  return (
    <StyledHomeVideo>
      <video
        // src={`https://www.dropbox.com/scl/fi/higgz0izzkd3ah8swuyh1/Showreel_20240726.mp4?rlkey=iak6a90olmyeu1qfyzi8xpbbc&st=0r2blexu&raw=1`}
        src={`${process.env.PUBLIC_URL}/assets/videos/IntroClip.mp4`}
        autoPlay
        muted
        loop
        playsInline
        controls={isMobile}
      ></video>
    </StyledHomeVideo>
  );
};

export default HomeVideo;
