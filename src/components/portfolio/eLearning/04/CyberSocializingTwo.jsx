import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledCyberSocializingTwo } from '../../../../assets/styles/portfolio/eLearning/04_CyberSocializingTwo/StyledCyberSocializingTwo';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from './../../common/Img';
// import useLongTablet from '../../../hooks/useTabletMax1556';
import CustomText from '../../common/CustomText';

const CyberSocializingTwo = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  // const isLongTablet = useLongTablet();
  return (
    <StyledCyberSocializingTwo>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{
          position: isMobileTablet ? 'absolute' : 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'grid',
          justifyContent: 'center',
        }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'사이버어울림(영어, 체육)'} />
      </PortfolioTitleWrap>

      <div className="gridWrapper">
        <div className="introductionWrapper">
          <PortfolioIntroductionTitle
            style={{ color: '#4F4F4F' }}
            title={isMobileTablet ? '영어와 체육 교과 연계,\n 사이좋게 지내요!' : '영어와 체육 교과 연계, 사이좋게 지내요!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676', textAlign: 'center' }}
            pcMarginTop={'34px'}
            mobileMarginTop={'5.33vw'}
            pcMarginBottom={'200px'}
            mobileMarginBottom={'80px'}
            description={
              isMobileTablet
                ? '사이버 폭력 예방을 위해 영어와\n 체육 교과와 연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'
                : '사이버 폭력 예방을 위해 영어와 체육 교과와 \n연계해 학습해보아요!\n긍정적인 언어 사용, 안전한 사이버 만들기!'
            }
          />
        </div>
        {isMobileTablet && (
          <img
            className="topCloud"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/hero_m_cloud.png`}
            alt=""
          />
        )}
        <div className="heroWrapper">
          <HeroImg
            style={{ zIndex: '-1' }}
            pcAspectRatio={'1920 / 1080'}
            mobileAspectRatio={'1024 / 1602'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/${
              isMobileTablet ? 'hero_m' : 'hero'
            }.png`}
          />
        </div>
      </div>

      <div className="relative">
        <img
          className="cloud"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/cloud.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'} pcPaddingTop="200px" mobilePaddingTop={'150px'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/1.png`} />
        <CustomText
          text={`이 콘텐츠는 영어 교과와 연계되어 사이버 폭력의 문제를 인식하고, 이를 예방 하고 대처하는 방법에 대해 학습자들이 배울 수 있어요.`}
        />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="book"
          // src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/1.png`}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/book.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText text={`채팅 매너, 댓글 작성 시 주의사항 등을 배우며, 존중과 배려를 바탕으로 한 소통의 중요성에 대해 학습할 수 있어요.`} />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/2.png`} />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/3.png`} />
        <CustomText text={`말이 사람들에게 미치는 긍정적, 부정적 영향을 사례를 통해 알아볼 수 있어요.`} />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText
          text={
            isMobile
              ? '정리하기를 통해 학습한 내용을 한번 더 복습하며,\n 건강한 사이버 환경의 중요성에 대해\n 한번 더 재고할 수 있답니다!'
              : isTablet
              ? '정리하기를 통해 학습한 내용을 한번 더 복습하며,\n 건강한 사이버 환경의 중요성에 대해\n 한번 더 재고할 수 있답니다!'
              : `정리하기를 통해 학습한 내용을 한번 더 복습하며, 건강한 사이버 환경의 중요성에 대해 한번 더 재고할 수 있답니다!`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/4.png`} />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="books"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/books.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/5.png`} />
        <CustomText
          text={
            isMobile
              ? '이 콘텐츠는 체육 교과와 연계되어 사이버 폭력의\n 문제를 인식하고, 이를 예방하고\n 대처하는 방법에 대해 학습자들이 배울 수 있어요.'
              : isTablet
              ? '이 콘텐츠는 체육 교과와 연계되어 사이버 폭력의\n 문제를 인식하고, 이를 예방하고\n 대처하는 방법에 대해 학습자들이 배울 수 있어요.'
              : `이 콘텐츠는 체육 교과와 연계되어 사이버 폭력의 문제를 인식하고, 이를 예방하고 대처하는 방법에 대해 학습자들이 배울 수 있어요.`
            // : `이 콘텐츠는 체육 교과와 연계되어\n사이버 폭력의 문제를 인식하고, \n이를 예방하고 대처하는 방법에 대해\n학습자들이 배울 수 있어요.`
          }
        />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <CustomText text={`다양한 시뮬레이션과 롤플레잉 상황을 통해 학습자들이 직접 상황을 체험하고 대처방법을 연습할 수 있어요.`} />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/6.png`} />
      </WidthImgOneTextsOne>
      <WidthImgOneTextsOne pcMaxWidth={'1260'}>
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/7.png`} />
        <CustomText text={`다양한 교육 전문가분들과 협력하여\n제작되었어요. 실감 나는 시나리오와 \n사례가 콘텐츠에 포함되었답니다!`} />
      </WidthImgOneTextsOne>
      <div className="relative">
        <img
          className="cloudPaperPlane"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/side/${
            isMobileTablet ? 'cloudPaperPlane_m' : 'cloudPaperPlane_pc'
          }.png`}
          alt=""
        />
      </div>
      <WidthImgOneTextsOne pcMaxWidth={'1260'} last>
        <CustomText
          text={
            isMobile
              ? '이 콘텐츠를 통해 학습자들은 건강한 사이버\n 생활을 영위할 수 있는 능력을 가질 수 있답니다!'
              : isTablet
              ? '이 콘텐츠를 통해 학습자들은 건강한 사이버\n 생활을 영위할 수 있는 능력을 가질 수 있답니다!'
              : `이 콘텐츠를 통해 학습자들은 건강한 사이버 생활을 영위할 수 있는 능력을 가질 수 있답니다!`
          }
        />
        <Img pcMaxWidth={'710'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/04_CyberSocializingTwo/group1/8.png`} />
      </WidthImgOneTextsOne>
    </StyledCyberSocializingTwo>
  );
};

export default CyberSocializingTwo;
