import React from 'react';
import { StyledMainPortfolio } from '../../../assets/styles/main/portfolio.styled';
import PfFieldButton from './PfFieldButton';
import useResponsiveMax1024 from '../../hooks/useResponsiveMax1024';
import ButtonWrapper from './ButtonWrapper';
import useFastIntersectionObserver from '../../hooks/useFastIntersectionObserver';
const Portfolio = () => {
  const isMobileTablet = useResponsiveMax1024();
  const refs = useFastIntersectionObserver();
  return (
    <StyledMainPortfolio id="portfolio">
      <img
        className="backgroundImg opacity_05s"
        ref={(el) => (refs.current[0] = { ref: el })}
        src={`${process.env.PUBLIC_URL}/assets/images/main/${isMobileTablet ? 'portfolio_bg_m' : 'portfolio_bg'}.png`}
        alt=""
      />
      <div id="portfolioImgs">
        <img
          className={`dinosaur ${isMobileTablet ? 'slideUp' : 'rightToLeftAnimate'} `}
          ref={(el) => (refs.current[7] = { ref: el })}
          src={`${process.env.PUBLIC_URL}/assets/images/main/${isMobileTablet ? 'dinosaur_m' : 'dinosaur'}.png`}
          alt=""
        />
        <div className="pfImgRightBox">
          <img
            className="widthTablet rightToLeftAnimate"
            ref={(el) => (refs.current[8] = { ref: el })}
            src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img2.png`}
            alt=""
          />
          <br />
          <img
            className="heightTablet rightToLeftAnimate"
            ref={(el) => (refs.current[9] = { ref: el })}
            src={`${process.env.PUBLIC_URL}/assets/images/main/portfolio_img3.png`}
            alt=""
          />
        </div>
      </div>
      <div className="marginWrapper">
        <div id="portfolioTexts">
          <p id="portfolioTitle" className="slideUp" ref={(el) => (refs.current[1] = { ref: el })}>
            PORTFOLIO
          </p>
          <p id="portfolioText1" className="slideUp" ref={(el) => (refs.current[2] = { ref: el })}>
            미래의 학습을 <span>설계하다</span>
          </p>

          <div id="portfolioText2" className="slideUp" ref={(el) => (refs.current[3] = { ref: el })}>
            최첨단 교육 공학 <span className="englishFont">SOLUTION</span>으로
            <br /> 학습의 한계를 뛰어넘다.
          </div>
        </div>

        <ButtonWrapper>
          <PfFieldButton ref={(el) => (refs.current[4] = { ref: el })} title={'VR/AR'} link={'portfolio/VrAr'} />
          <PfFieldButton ref={(el) => (refs.current[5] = { ref: el })} title={'e-Learning'} link={'portfolio/e-Learning'} />
          <PfFieldButton ref={(el) => (refs.current[6] = { ref: el })} title={'R&D'} link={'portfolio/R&D'} />
        </ButtonWrapper>
      </div>
    </StyledMainPortfolio>
  );
};

export default Portfolio;
