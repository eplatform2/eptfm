import React from 'react';
import { AboutBox } from '../../assets/styles/main/about.styled';
import AboutImg from './AboutImg';
import AboutDescription from './AboutDescription';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
const About = () => {
  const refs = useIntersectionObserver(0.1);
  const isMobileTablet = useResponsiveMax1024();

  return (
    <AboutBox id="about">
      <div className="aboutTitle">
        <p className="slideUp" ref={(el) => (refs.current[0] = { ref: el })}>
          ABOUT US
        </p>
      </div>
      <div className="aboutContents">
        <AboutImg $left ref={(el) => (refs.current[1] = { ref: el })} img={`${process.env.PUBLIC_URL}/assets/images/main/about_img1.png`} />
        <AboutDescription
          ref={(el) => (refs.current[2] = { ref: el })}
          img={`${process.env.PUBLIC_URL}/assets/images/main/about_img2.png`}
          textsTitle={'VISION'}
          textsSubTitle={'무한한 가능성을 열다'}
          textsContents={`교육 공학의 혁신으로 미래의 학습을 설계하고,\n 교육의 진화를 함께하며 모든 학습자에게\n 맞춤형 학습 경험을 제공합니다.`}
        />
      </div>
      <div className="aboutContents">
        <AboutDescription
          ref={(el) => (refs.current[isMobileTablet ? 4 : 3] = { ref: el })}
          textsTitle={'VALUE'}
          textsSubTitle={'혁신 · 협력 · 소통'}
          textsContents={`새로운 교육 기술 트렌드를 연구하고 적용하고,\n 성과와 필요에 맞춘 맞춤형 피드백 제공합니다.\n 열린 소통을 통해 협력적인 업무 환경 조성하여\n 시공간을 뛰어넘은 소통 학습을 체험할 수\n 있습니다.`}
        />
        <AboutImg
          $right
          ref={(el) => (refs.current[isMobileTablet ? 3 : 4] = { ref: el })}
          img={`${process.env.PUBLIC_URL}/assets/images/main/about_img3.png`}
        />
      </div>
    </AboutBox>
  );
};

export default About;
