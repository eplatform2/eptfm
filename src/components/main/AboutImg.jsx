import React, { forwardRef, useEffect, useRef, useState } from 'react';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
import { StyledAboutImg } from '../../assets/styles/main/aboutImg.styled';

const AboutImg = forwardRef((props, ref) => {
  const isMobileTablet = useResponsiveMax1024();

  const [initialResolution, setInitialResolution] = useState(isMobileTablet);
  const [magnify, setMagnify] = useState(false);

  useEffect(() => {
    setInitialResolution(isMobileTablet);
  }, [isMobileTablet]);

  useEffect(() => {
    if (isMobileTablet !== initialResolution) {
      // console.log('isMobileTablet', isMobileTablet);
      // console.log('initialResolution', initialResolution);
      if (isMobileTablet === false) {
        setMagnify(true);
      } else {
        setMagnify(false);
      }
    }
  });

  // useEffect(() => {
  //   console.log('magnify', magnify);
  // }, [magnify]);
  return (
    <StyledAboutImg $left={props.$left} $right={props.$right}>
      {/* <img ref={ref} src={data && data.img} alt="" /> */}
      {isMobileTablet ? (
        <>
          <img className="slideUp" ref={ref} src={props.img} loading="lazy" alt="" />
        </>
      ) : (
        <>
          {/* <div className="imgCover" ref={ref}></div> */}
          {/* <img className="magnify" src={props.img} ref={ref} loading="lazy" alt="" /> */}
          <img className={`magnify ${magnify ? 'magnifyDone' : ''}`} src={props.img} ref={ref} loading="lazy" alt="" />
        </>
      )}
    </StyledAboutImg>
  );
});

export default AboutImg;
