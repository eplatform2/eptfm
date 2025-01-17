import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledEastAsia } from '../../../../assets/styles/portfolio/eLearning/07_EastAsia/StyledEastAsia';
import Img from '../../common/Img';
import CustomText from './../../common/CustomText';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from './../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgTwo from '../../common/WidthImgTwo';

const EastAsia = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledEastAsia>
      <Breadcrumb />

      <div className="heroWrapper">
        {isMobileTablet ? (
          <PortfolioTitleWrap
            style={{ display: 'grid', justifyContent: 'center' }}
            pcMarginBottom={'78px'}
            mobileMarginTop={'50px'}
            mobileMarginBottom={'40px'}
          >
            <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'동북아역사재단'} />
            <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'처음 만나는 동아시아사'} />
          </PortfolioTitleWrap>
        ) : (
          <PortfolioTitleWrap style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} pcMarginTop={'4.6vw'}>
            <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB' }} organization={'동북아역사재단'} />
            <PortfolioFieldTitle style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'처음 만나는 동아시아사'} />
          </PortfolioTitleWrap>
        )}
        <HeroImg
          pcAspectRatio={'1920 / 1250'}
          mobileAspectRatio={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <div className="relative">
        <img
          className="figure_01"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_01.png`}
          alt=""
        />
        <img
          className="figure_02"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_02.png`}
          alt=""
        />
      </div>
      <div className="introductionWrapper">
        <PortfolioIntroductionTitle
          style={{ color: '#4F4F4F' }}
          title={
            isMobileTablet ? '과거로의 여행에서 배운 역사,\n 동아시아의 문화를 살펴봐요!' : '과거로의 여행에서 배운 역사, 동아시아의 문화를 살펴봐요!'
          }
        />
        <PortfolioIntroductionDescription
          style={{ color: '#4F4F4F' }}
          pcMarginTop={'34px'}
          mobileMarginTop={'5.33vw'}
          description={
            isMobileTablet
              ? '한국, 중국, 일본의 역사를 통해 동아시아 지역의\n 문화와 상호작용을 탐구하여 깊이 있는\n 역사적 이해를 도모해볼까요?'
              : '한국, 중국, 일본의 역사를 통해 동아시아 지역의 문화와\n상호작용을 탐구하여 깊이 있는 역사적 이해를 도모해볼까요?'
          }
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/1.png`} />
        <CustomText
          className="customText"
          text={
            isMobile
              ? '학습자는 동아시아 원격연수를 통해\n 동아시아 지역의 역사적 흐름과 상호작용을\n 이해할 수 있어요.'
              : isTablet
              ? '학습자는 동아시아 원격연수를 통해\n 동아시아 지역의 역사적 흐름과 상호작용을\n 이해할 수 있어요.'
              : '학습자는 동아시아 원격연수를 통해 동아시아 지역의 역사적 흐름과 \n상호작용을 이해할 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/2.png`} />
        <CustomText
          className="customText"
          text={
            isMobile
              ? '동아시아의 나라들이 어떻게 상호 영향을\n 주고받으며 발전해왔는지 탐구해볼까요?\n동아시아의 고대 문명 부터 현대에 이르기까지의\n 주요 사건과 문화적 교류 그리고 경제적\n 변화 등을 포괄적으로 확인해보세요!'
              : isTablet
              ? '동아시아의 나라들이 어떻게 상호 영향을\n 주고받으며 발전해왔는지 탐구해볼까요?\n동아시아의 고대 문명 부터 현대에 이르기까지의\n 주요 사건과 문화적 교류 그리고 경제적 변화 등을\n 포괄적으로 확인해보세요!'
              : '동아시아의 나라들이 어떻게 상호 영향을 주고받으며 발전해왔는지 탐구해볼까요?\n동아시아의 고대 문명 부터 현대에 이르기까지의 주요 사건과 문화적 교류\n그리고 경제적 변화 등을 포괄적으로 확인해보세요!'
          }
        />
      </WidthOneContent>
      <div className="relative">
        <img
          className="figure_03"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_03.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/3.png`} />
        <CustomText
          className="customText"
          text={
            isMobile
              ? '각국의 초기 역사와 문명 형성, 주요 왕조와\n 그들의 업적, 문화와 사상 그리고 제국주의와\n 서양 열강의 진출, 동아시아 각국의\n 근대화 과정을 살펴볼 수 있어요.'
              : isTablet
              ? '각국의 초기 역사와 문명 형성, 주요 왕조와 그들의 업적,\n 문화와 사상 그리고 제국주의와 서양 열강의 진출,\n 동아시아 각국의 근대화 과정을 살펴볼 수 있어요.'
              : '각국의 초기 역사와 문명 형성, 주요 왕조와 그들의 업적, 문화와 사상\n그리고 제국주의와 서양 열강의 진출, 동아시아 각국의 근대화 과정을 살펴볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <div className="relative">
        <img
          className="figure_04"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_04.png`}
          alt=""
        />
      </div>

      <div className="imgTwoWrapper">
        <WidthImgTwo gap={'var(--pc-60px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/2.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center', color: '#4f4f4f' }}
          text={
            isMobile
              ? '동아시아의 주요 역사적 사건과 인물을\n 다룬 강의와 애니메이션을 통해\n시청각적으로 학습할 수 있어요.'
              : isTablet
              ? '동아시아의 주요 역사적 사건과 인물을\n 다룬 강의와 애니메이션을 통해\n시청각적으로 학습할 수 있어요.'
              : '동아시아의 주요 역사적 사건과 인물을 다룬 강의와 애니메이션을 통해\n시청각적으로 학습할 수 있어요.'
          }
        />
      </div>
      <div className="imgTwoWrapper">
        <WidthImgTwo gap={'var(--pc-60px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/4.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center', color: '#4f4f4f' }}
          text={
            isMobile
              ? '고대 문헌, 지도, 유물 사진 등 다양한\n 디지털 자료를 활용하여 구체적인 역사적 사실과\n 맥락을 시각적으로 이해할 수 있답니다!'
              : isTablet
              ? '고대 문헌, 지도, 유물 사진 등 다양한\n 디지털 자료를 활용하여 구체적인 역사적 사실과\n 맥락을 시각적으로 이해할 수 있답니다!'
              : '고대 문헌, 지도, 유물 사진 등 다양한 디지털 자료를 활용하여\n구체적인 역사적 사실과 맥락을 시각적으로 이해할 수 있답니다!'
          }
        />
      </div>
      <div className="relative">
        <img
          className="figure_05"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/side/figure_05.png`}
          alt=""
        />
      </div>
      <div className="imgTwoWrapper">
        <WidthImgTwo gap={'var(--pc-60px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/5.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group2/6.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center', color: '#4f4f4f' }}
          text={
            isMobile
              ? '각 테마별로 퀴즈와 과제를 통해\n 학습 내용을 복습하고 학습자 스스로의\n 이해도를 점검할 수 있어요.'
              : isTablet
              ? '각 테마별로 퀴즈와 과제를 통해\n 학습 내용을 복습하고 학습자 스스로의\n 이해도를 점검할 수 있어요.'
              : '각 테마별로 퀴즈와 과제를 통해 학습 내용을 복습하고\n학습자 스스로의 이해도를 점검할 수 있어요.'
          }
        />
      </div>

      <WidthOneContent $last>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/07_EastAsia/group1/4.png`} />
        <CustomText
          text={
            isMobile
              ? '‘동아시아 원격연수’ 콘텐츠를 통해 동아시아의\n 역사를 깊이 이해하고 현재와 미래의\n 동아시아 관계를 고찰하는 능력을 함양해보아요!'
              : isTablet
              ? '‘동아시아 원격연수’ 콘텐츠를 통해 동아시아의\n 역사를 깊이 이해하고 현재와 미래의\n 동아시아 관계를 고찰하는 능력을 함양해보아요!'
              : '‘동아시아 원격연수’ 콘텐츠를 통해 동아시아의 역사를 깊이 이해하고\n현재와 미래의 동아시아 관계를 고찰하는 능력을 함양해보아요!'
          }
        />
      </WidthOneContent>
    </StyledEastAsia>
  );
};

export default EastAsia;
