import React from 'react';
import BusinessItems from './BusinessItems';
import { BusinessBox } from '../../assets/styles/main/business.styled';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
const Business = () => {
  const refs = useIntersectionObserver(0.1);
  return (
    <BusinessBox id="business">
      <div id="container">
        <div id="businessTitleBox">
          <p id="businessTitle" className="slideUp" ref={(el) => (refs.current[0] = { ref: el })}>
            BUSINESS
          </p>
        </div>
        <div id="contentsWrap">
          <ul>
            <BusinessItems
              ref={(el) => (refs.current[1] = { ref: el })}
              img={`${process.env.PUBLIC_URL}/assets/images/main/business_img1.png`}
              first
              hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img1_over.png`}
              mobile_hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img1_over_mobile.png`}
              text={'VR/AR'}
              hoverText={'우리는 혁신적인 디지털 학습 솔루션을\n 통해 누구나 어디서든 쉽게 배울 수 있는\n 환경을 제공합니다.'}
            />
            <BusinessItems
              ref={(el) => (refs.current[2] = { ref: el })}
              img={`${process.env.PUBLIC_URL}/assets/images/main/business_img2.png`}
              hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img2_over.png`}
              mobile_hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img2_over_mobile.png`}
              text={'e-Learning'}
              hoverText={'가상현실(VR)과 증강현실(AR)을 통해\n 교육의 경계를 허물고, 몰입감 있는\n 학습 경험을 제공합니다.'}
            />
            <BusinessItems
              ref={(el) => (refs.current[3] = { ref: el })}
              img={`${process.env.PUBLIC_URL}/assets/images/main/business_img3.png`}
              last
              hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img3_over.png`}
              mobile_hoverImg={`${process.env.PUBLIC_URL}/assets/images/main/business_img3_over_mobile.png`}
              text={'R&D'}
              hoverText={'최첨단 기술과 지속적인 연구개발(R&D)을\n 통해 교육의 한계를 넘어서고, 새로운 학습\n방법을 개척합니다.'}
            />
          </ul>
        </div>
      </div>
    </BusinessBox>
  );
};

export default Business;
