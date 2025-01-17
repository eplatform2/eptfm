import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import Img from '../../common/Img';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import { StyledCyberSocializingOne } from '../../../../assets/styles/portfolio/eLearning/03_CyberSocializingOne/StyledCyberSocializingOne';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroImg from './../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';

const CyberSocializingOne = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledCyberSocializingOne>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }}
          title={isMobileTablet ? '사이버어울림\n(기술·가정, 진로와 직업, 한문)' : '사이버어울림(기술·가정, 진로와 직업, 한문)'}
        />
      </PortfolioTitleWrap>

      <div className="fullScreen heroArea">
        <HeroImg
          pcAspectRatio={'1920 / 1080'}
          mobileAspectRatio={'1024 / 846'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <div className="relative">
        <img
          className="cloud"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/${
            isMobileTablet ? 'cloud_m' : 'cloud'
          }.png`}
          alt=""
        />
      </div>
      <div className="introductionWrapper">
        <PortfolioIntroductionTitle
          pcMarginTop={'var(--pc-200px)'}
          mobileMarginTop={'var(--mobile-80px)'}
          style={{ color: '#4F4F4F' }}
          title={
            isMobileTablet
              ? '기술·가정, 진로와 직업, 한문과\n 교과 연계, 사이좋게 지내요!'
              : '기술·가정, 진로와 직업, 한문과 교과 연계,\n사이좋게 지내요!'
          }
        />
        <PortfolioIntroductionDescription
          style={{ color: '#767676' }}
          pcMarginTop={'34px'}
          pcMarginBottom={'var(--pc-200px)'}
          mobileMarginBottom={'var(--mobile-80px)'}
          description={
            isMobileTablet
              ? '사이버 폭력 예방을 위해\n 영어와 체육 교과와 연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'
              : '사이버 폭력 예방을 위해 영어와 체육 교과와 연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'
          }
        />
      </div>

      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/1.png`} />
        <CustomText
          text={
            isMobile
              ? '이 콘텐츠는 기술·가정 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.'
              : isTablet
              ? '이 콘텐츠는 기술·가정 교과와 연계되어\n 사이버 폭력의 문제를 인식하고, 이를 예방하고 대처하는\n 방법에 대해 학습자들이 배울 수 있어요.'
              : `이 콘텐츠는 기술·가정 교과와 연계되어 사이버 폭력의 문제를 인식하고, 이를 예방하고 대처하는 방법에 대해 학습자들이 배울 수 있어요.`
            // : `이 콘텐츠는 기술·가정 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`
          }
        />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="circle1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle1.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText
          text={
            isMobile
              ? '자신의 가치와 소중함, 그리고 \n긍정적인 자아존중감을 자세히 이해하고\n그 중요성을 인식할 수 있어요.'
              : isTablet
              ? '자신의 가치와 소중함, 그리고 \n긍정적인 자아존중감을 자세히 이해하고\n그 중요성을 인식할 수 있어요.'
              : `자신의 가치와 소중함, 그리고 긍정적인 자아존중감을 자세히 이해하고 그 중요성을 인식할 수 있어요.`
            // : `자신의 가치와 소중함, 그리고 \n긍정적인 자아존중감을 자세히 이해하고\n그 중요성을 인식할 수 있어요.`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/2.png`} />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="circle2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle2.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/3.png`} />
        <CustomText
          text={
            isMobile
              ? '말이 사람들에게 미치는 긍정적, 부정적영향을\n 사례를 통해 알아볼 수 있어요.'
              : isTablet
              ? '말이 사람들에게 미치는 긍정적, 부정적영향을\n 사례를 통해 알아볼 수 있어요.'
              : `말이 사람들에게 미치는 긍정적, 부정적 영향을 사례를 통해 알아볼 수 있어요.`
            // : `말이 사람들에게 미치는 긍정적, 부정적\n영향을 사례를 통해 알아볼 수 있어요.`
          }
        />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText
          text={
            isMobile
              ? '이 콘텐츠는 진로와 직업 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방 하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.'
              : isTablet
              ? '이 콘텐츠는 진로와 직업 교과와 연계되어 사이버\n 폭력의 문제를 인식하고, 이를 예방 하고 대처하는\n 방법에 대해 학습자들이 배울 수 있어요.'
              : `이 콘텐츠는 진로와 직업 교과와 연계되어 사이버 폭력의 문제를 인식하고, 이를 예방 하고 대처하는 방법에 대해 학습자들이 배울 수 있어요.`
            // : `이 콘텐츠는 진로와 직업 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방 하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/4.png`} />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="yellowWordBalloon"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/yellowWordBalloon.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/5.png`} />
        <CustomText
          text={
            isMobile
              ? '학생들이 자신의 미래를 계획하고, 적극적으로\n 진로를 탐색할 수 있는 계기를 제공해요.'
              : isTablet
              ? '학생들이 자신의 미래를 계획하고, 적극적으로\n 진로를 탐색할 수 있는 계기를 제공해요.'
              : `학생들이 자신의 미래를 계획하고, 적극적으로 진로를 탐색할 수 있는 계기를 제공해요.`
            // : `학생들이 자신의 미래를 계획하고,\n적극적으로 진로를 탐색할 수 있는 계기를\n제공해요.`
          }
        />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="circle3"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/circle3.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText
          text={
            isMobile
              ? '학생들이 스스로를 이해하고, 다양한 직업세계를\n 탐색할 수 있고 미래를 준비하는데\n실질적인 도움을 받을 수 있어요.'
              : isTablet
              ? '학생들이 스스로를 이해하고, 다양한 직업세계를\n 탐색할 수 있고 미래를 준비하는데\n실질적인 도움을 받을 수 있어요.'
              : `학생들이 스스로를 이해하고, 다양한 직업세계를 탐색할 수 있고 미래를 준비하는데 실질적인 도움을 받을 수 있어요.`
            // : `학생들이 스스로를 이해하고, 다양한 직업\n세계를 탐색할 수 있고 미래를 준비하는데\n실질적인 도움을 받을 수 있어요.`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/6.png`} />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/7.png`} />
        <CustomText
          text={
            isMobile
              ? '이 콘텐츠는 한문 교과와 연계되어 사이버 폭력의\n 문제를 인식하고, 이를 예방 하고 대처하는\n 방법에 대해 학습자들이 배울 수 있어요.'
              : isTablet
              ? '이 콘텐츠는 한문 교과와 연계되어 사이버 폭력의\n 문제를 인식하고, 이를 예방 하고 대처하는\n 방법에 대해 학습자들이 배울 수 있어요.'
              : `이 콘텐츠는 한문 교과와 연계되어 사이버 폭력의 문제를 인식하고, 이를 예방 하고 대처하는 방법에 대해 학습자들이 배울 수 있어요.`
            // : `이 콘텐츠는 한문 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방 하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`
          }
        />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText
          text={
            isMobile
              ? '한문 교과와 연계된 부분에서는 전통적인 도덕과\n 윤리적 가치에 배울 수 있어요.'
              : isTablet
              ? '한문 교과와 연계된 부분에서는 전통적인 도덕과\n 윤리적 가치에 배울 수 있어요.'
              : `한문 교과와 연계된 부분에서는 전통적인 도덕과 윤리적 가치에 배울 수 있어요.`
            // : `한문 교과와 연계된 부분에서는 전통적인 도\n덕과 윤리적 가치에 배울 수 있어요.`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/8.png`} />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="heart"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/side/heart.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'} last>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/03_CyberSocializingOne/group1/9.png`} />
        <CustomText
          text={
            isMobile
              ? '고사성어, 명언, 역사적 일화 등을 통해 배운\n 전통적 가치를 현대 온라인 윤리와\n 연계하여 학습할 수 있어요.'
              : isTablet
              ? '고사성어, 명언, 역사적 일화 등을 통해 배운\n 전통적 가치를 현대 온라인 윤리와\n 연계하여 학습할 수 있어요.'
              : `고사성어, 명언, 역사적 일화 등을 통해 배운 전통적 가치를 현대 온라인 윤리와 연계하여 학습할 수 있어요.`
            // : `고사성어, 명언, 역사적 일화 등을 통해 배운\n 전통적 가치를 현대 온라인 윤리와 연계하여\n 학습할 수 있어요.`
          }
        />
      </WidthImgOneTextsOne>
    </StyledCyberSocializingOne>
  );
};

export default CyberSocializingOne;
