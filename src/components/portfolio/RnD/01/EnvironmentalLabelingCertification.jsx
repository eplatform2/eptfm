import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledEnvironmentalLabelingCertification } from '../../../../assets/styles/portfolio/R&D/01_EnvironmentalLabelingCertification/StyledEnvironmentalLabelingCertification';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import HeroImg from './../../common/Hero/HeroImg';
import ThreeImgTextsWrapper from './ThreeImgTextsWrapper';

const EnvironmentalLabelingCertification = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();

  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledEnvironmentalLabelingCertification>
      <Breadcrumb />

      <div className="fullScreen">
        <div className="heroWrapper">
          <div className="portfolioTitleWrapper">
            <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }} organization={'환경산업기술원'} />
            <PortfolioFieldTitle
              style={{ color: '#FFFFFF', whiteSpace: 'nowrap', fontFamily: 'NanumSquareEB' }}
              title={
                isMobile
                  ? '친환경 소비의 첫걸음,\n환경표지인증을 통한 더 나은\n 선택'
                  : isTablet
                  ? '친환경 소비의 첫걸음,\n환경표지인증을 통한 더 나은 선택'
                  : '친환경 소비의 첫걸음,\n환경표지인증을 통한 더 나은 선택'
              }
            />
          </div>

          <div className="heroImgWrapper">
            <HeroImg
              pcAspectRatio={'1920 / 1080'}
              mobileAspectRatio={'375 / 450'}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/${
                isMobileTablet ? 'hero_m' : 'hero'
              }.png`}
            />
          </div>
        </div>
      </div>

      <div className="fullScreen F5F5F7">
        <div className="FFFFFF">
          <div className="introductionWrapper">
            <PortfolioIntroductionTitle
              style={{ color: '#292929' }}
              title={
                isMobile
                  ? '지속 가능한 미래를 위한\n 친환경 인증'
                  : isTablet
                  ? '지속 가능한 미래를 위한 친환경 인증'
                  : '지속 가능한 미래를 위한 친환경 인증'
              }
            />
            <PortfolioIntroductionDescription
              style={{ color: '#767676' }}
              // pcMarginTop={'34px'}
              pcMarginBottom={'var(--pc-60px)'}
              // mobileMarginTop={'5.33vw'}
              mobileMarginBottom={'var(--mobile-40px)'}
              description={
                isMobileTablet
                  ? '친환경 인증의 개념부터 절차, 혜택까지\n 심층적으로 탐구하세요! 인터랙티브 학습을 통해\n환경표지인증의 중요성을 체험하고,\n 지속 가능한 소비를 실천해 볼 수 있어요.'
                  : '친환경 인증의 개념부터 절차, 혜택까지 심층적으로 탐구하세요! 인터랙티브 학습을 통해\n환경표지인증의 중요성을 체험하고, 지속 가능한 소비를 실천해 볼 수 있어요.'
              }
            />

            <img
              className="introductionImgs"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/${
                isMobileTablet ? 'introductionImgs_m' : 'introductionImgs'
              }.png`}
              alt=""
            />
          </div>

          <div className="customLeftTemp">
            <WidthImgOneTextsOne>
              <img
                className="introductionImg"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/introduction2.png`}
                alt=""
              />
              <CustomText
                text={
                  isMobile
                    ? '다양한 인증 사례와 데이터를 조사하고\n 분석하여, 복잡한 절차를 쉽게 이해할 수 있는\n 상호작용 학습 컨텐츠를 만들었어요. \n이제 여러분도 친환경 인증의 중요성을\n 이해하고 실천할 수 있어요!\n\n인증 받은 제품을 사용할 때마다\n 지구가 살짝 미소 짓는 것 같지 않나요?'
                    : isTablet
                    ? '다양한 인증 사례와 데이터를 조사하고\n 분석하여, 복잡한 절차를 쉽게 이해할 수 있는\n 상호작용 학습 컨텐츠를 만들었어요. \n이제 여러분도 친환경 인증의 중요성을\n 이해하고 실천할 수 있어요!\n\n인증 받은 제품을 사용할 때마다\n 지구가 살짝 미소 짓는 것 같지 않나요?'
                    : `다양한 인증 사례와 데이터를 조사하고 분석하여, 복잡한 절차를 쉽게 이해할 수 있는 상호작용 학습 컨텐츠를 만들었어요. 이제 여러분도 친환경 인증의 중요성을 이해하고 실천할 수 있어요!\n\n인증 받은 제품을 사용할 때마다 지구가 살짝 미소 짓는 것 같지 않나요?`
                }
              />
            </WidthImgOneTextsOne>
          </div>

          <ThreeImgTextsWrapper right>
            <div className="threeImgWrapper">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group1/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: isMobileTablet ? 'center' : 'left' }}
              text={
                isMobile
                  ? '환경표지인증 제도는 우리가 일상에서\n 사용하는 제품들이 환경에 미치는 영향을\n 줄이고, 환경 보호에 기여할 수 있도록 하는\n 인증 시스템이에요.\n이 콘텐츠를 통해 학습자들은 이 제도의\n 의미와 중요성을 이해하고, 환경을 보호하는\n 소비 습관을 기를 수 있도록 도와요.'
                  : isTablet
                  ? '환경표지인증 제도는 우리가 일상에서 사용하는\n 제품들이 환경에 미치는 영향을 줄이고,\n 환경 보호에 기여할 수 있도록 하는 인증 시스템이에요.\n이 콘텐츠를 통해 학습자들은 이 제도의\n 의미와 중요성을 이해하고, 환경을 보호하는\n 소비 습관을 기를 수 있도록 도와요.'
                  : '환경표지인증 제도는 우리가 일상에서 사용하는 제품들이 환경에 미치는 영향을 줄이고,\n환경 보호에 기여할 수 있도록 하는 인증 시스템이에요.\n이 콘텐츠를 통해 학습자들은 이 제도의 의미와 중요성을 이해하고,\n 환경을 보호하는 소비 습관을 기를 수 있도록 도와요.'
              }
            />
          </ThreeImgTextsWrapper>
          <ThreeImgTextsWrapper left>
            <div className="threeImgWrapper">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group2/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: isMobileTablet ? 'center' : 'right' }}
              text={
                isMobile
                  ? '환경표지가 붙은 제품이 무엇을 의미하는지\n 설명하고, 환경표지가 소비자에게 제공하는\n 정보와 신뢰성에 대해 설명해요.\n환경표지가 붙은 제품을 왜 사용해야 할까요?\n환경표지가 붙은 제품을 선택할 때의 이점과\n 그 제품이 환경에 미치는 긍정적인 영향을\n 확인해보세요!'
                  : isTablet
                  ? '환경표지가 붙은 제품이 무엇을 의미하는지 설명하고,\n 환경표지가 소비자에게 제공하는 정보와 신뢰성에 대해 설명해요.\n환경표지가 붙은 제품을 왜 사용해야 할까요?\n환경표지가 붙은 제품을 선택할 때의 이점과 그 제품이\n 환경에 미치는 긍정적인 영향을 확인해보세요!'
                  : '환경표지가 붙은 제품이 무엇을 의미하는지 설명하고,\n 환경표지가 소비자에게 제공하는 정보와 신뢰성에 대해 설명해요.\n환경표지가 붙은 제품을 왜 사용해야 할까요?\n환경표지가 붙은 제품을 선택할 때의 이점과 그 제품이 환경에 미치는 긍정적인 영향을 확인해보세요!'
              }
            />
          </ThreeImgTextsWrapper>
          <ThreeImgTextsWrapper right>
            <div className="threeImgWrapper">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group3/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: isMobileTablet ? 'center' : 'left' }}
              text={
                isMobile
                  ? '생태적 발자국, 에너지 효율성,\n 유해물질 감소 등 주요 기준을 소개해요.\n일상 생활에서 쉽게 접할 수 있는 환경표지인증\n 제품들을 예로 들어 설명한답니다!\n우리 주변에 환경표지인증을 받은 제품이\n 있는지 둘러봐보세요!'
                  : isTablet
                  ? '생태적 발자국, 에너지 효율성,\n 유해물질 감소 등 주요 기준을 소개해요.\n일상 생활에서 쉽게 접할 수 있는 환경표지인증\n 제품들을 예로 들어 설명한답니다!\n우리 주변에 환경표지인증을 받은 제품이\n 있는지 둘러봐보세요!'
                  : '생태적 발자국, 에너지 효율성, 유해물질 감소 등 주요 기준을 소개해요.\n일상 생활에서 쉽게 접할 수 있는 환경표지인증 제품들을 예로 들어 설명한답니다!\n우리 주변에 환경표지인증을 받은 제품이 있는지 둘러봐보세요!'
              }
            />
          </ThreeImgTextsWrapper>
          <ThreeImgTextsWrapper left last>
            <div className="threeImgWrapper">
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/1.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/2.png`} />
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/01_EnvironmentalLabelingCertification/group6/3.png`} />
            </div>
            <CustomText
              style={{ textAlign: isMobileTablet ? 'center' : 'right' }}
              text={
                isMobile
                  ? '환경표지와 관련된 이미지, 인증 과정의 다양한\n 사례들을 활용하여 시청각적으로 이해를 도와요.\n환경표지인증 제도의 중요성을 인식하고,\n 일상생활에서 환경 보호에 기여하는 방법을\n 배워보세요.\n환경 문제에 대한 관심을 높이고, 미래 세대가\n 환경을 생각하며 책임감 있는 소비 습관을\n 형성할 수 있을 때까지!'
                  : isTablet
                  ? '환경표지와 관련된 이미지, 인증 과정의 다양한\n 사례들을 활용하여 시청각적으로 이해를 도와요.\n환경표지인증 제도의 중요성을 인식하고,\n 일상생활에서 환경 보호에 기여하는 방법을 배워보세요.\n환경 문제에 대한 관심을 높이고, 미래 세대가\n 환경을 생각하며 책임감 있는 소비 습관을\n 형성할 수 있을 때까지!'
                  : '환경표지와 관련된 이미지, 인증 과정의 다양한 사례들을 활용하여 시청각적으로 이해를 도와요.\n환경표지인증 제도의 중요성을 인식하고, 일상생활에서 환경 보호에 기여하는 방법을 배워보세요.\n환경 문제에 대한 관심을 높이고,\n 미래 세대가 환경을 생각하며 책임감 있는 소비 습관을 형성할 수 있을 때까지!'
              }
            />
          </ThreeImgTextsWrapper>
        </div>
      </div>
    </StyledEnvironmentalLabelingCertification>
  );
};

export default EnvironmentalLabelingCertification;
