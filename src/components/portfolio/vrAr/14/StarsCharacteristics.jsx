import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import { StyledStarsCharacteristics } from '../../../../assets/styles/portfolio/vrAr/14_StarsCharacteristics/StyledStarsCharacteristics';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import HeroImg from '../../common/Hero/HeroImg';
import Img from '../../common/Img';
import CustomText from './../../common/CustomText';
import useMobile from './../../../hooks/useMobile';
import useTablet from './../../../hooks/useTablet';

const StarsCharacteristics = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledStarsCharacteristics>
      <Breadcrumb />

      <div className="heroAreaWrapper">
        <div className="portfolioTitleWrapper">
          <PortfolioTitleWrap
            style={{ position: isMobileTablet ? 'absolute' : '', display: 'grid', justifyContent: 'center' }}
            mobileMarginTop={'var(--mobile-50px)'}
          >
            <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
            <PortfolioFieldTitle
              style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }}
              field={'AR'}
              title={isMobileTablet ? '별의 색과 밝기를 이용한\n 별의 특성 알아보기' : '별의 색과 밝기를 이용한 별의 특성 알아보기'}
            />
          </PortfolioTitleWrap>
        </div>

        <div className="introductionWrapper">
          <PortfolioIntroductionTitle style={{ color: isMobileTablet ? '#FFFFFF' : '#292929' }} title={'별빛을 따라 떠나는 우주 여행!'} />
          <PortfolioIntroductionDescription
            style={{ color: isMobileTablet ? '#FFFFFF' : '#767676' }}
            description={
              isMobileTablet
                ? '별의 색과 밝기를 관찰하고, 스펙트럼을 통해 \n별의 표면 온도와 나이, 질량 등을 학습하세요. \n밤하늘의 수수께끼를 풀며 우주의 신비를 \n탐험해보세요!'
                : '별의 색과 밝기를 관찰하고, 스펙트럼을 통해 \n별의 표면 온도와 나이, 질량 등을 학습하세요. \n밤하늘의 수수께끼를 풀며 우주의 신비를 \n탐험해보세요!'
            }
          />
        </div>
        <div className="heroImgWrapper">
          <HeroImg
            pcAspectRatio={'1814 / 908'}
            mobileAspectRatio={'375 / 710'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
          />
        </div>
      </div>

      <div className="contentsWrapper maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/1.png`} />
          <CustomText
            text={
              isMobile
                ? '이 콘텐츠는 밤하늘의 수많은 별을\n 관찰하는 것에서 시작되었어요. 천체 망원경으로\n 별을 보며, 우리가 어릴 적 꿈꿨던 우주 탐험가가\n 된 듯한 기분을 되살려주는 프로젝트죠. \n여러분도 별의 세계로 떠나보세요!'
                : isTablet
                ? '이 콘텐츠는 밤하늘의 수많은 별을\n 관찰하는 것에서 시작되었어요. 천체 망원경으로\n 별을 보며, 우리가 어릴 적 꿈꿨던 우주 탐험가가\n 된 듯한 기분을 되살려주는 프로젝트죠. \n여러분도 별의 세계로 떠나보세요!'
                : '이 콘텐츠는 밤하늘의 수많은 별을 관찰하는 것에서 시작되었어요.\n 천체 망원경으로 별을 보며, 우리가 어릴 적 꿈꿨던 우주 탐험가가 된 듯한 기분을 되살려주는 프로젝트죠. \n여러분도 별의 세계로 떠나보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/2.png`} />
          <CustomText
            text={
              isMobile
                ? '별은 저마다 다른 색을 띠며, 그 색은 별의 표면\n 온도와 관련이 있단 사실 알고 있었나요?\n별들도 옷 색깔처럼 온도에 따라 색이\n 변한답니다!\n 뜨거운 별은 쿨톤, 차가운 별은 웜톤이에요!'
                : isTablet
                ? '별은 저마다 다른 색을 띠며, 그 색은 별의 표면\n 온도와 관련이 있단 사실 알고 있었나요?\n별들도 옷 색깔처럼 온도에 따라 색이 변한답니다!\n 뜨거운 별은 쿨톤, 차가운 별은 웜톤이에요!'
                : '별은 저마다 다른 색을 띠며, 그 색은 별의 표면 온도와 관련이 있단 사실 알고 있었나요?\n별들도 옷 색깔처럼 온도에 따라 색이 변한답니다! 뜨거운 별은 쿨톤, 차가운 별은 웜톤이에요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/3.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 우리 눈에 보이는 별의 밝기를\n 겉보기 등급으로 나타내고, 별의 실제 밝기는\n 절대 등급으로 나타낸다는 것을 배울 수 있어요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는\n 마법 같은 이야기를 들어보세요.'
                : isTablet
                ? '학습자들은 우리 눈에 보이는 별의 밝기를\n 겉보기 등급으로 나타내고, 별의 실제 밝기는\n 절대 등급으로 나타낸다는 것을 배울 수 있어요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는\n 마법 같은 이야기를 들어보세요.'
                : '학습자들은 우리 눈에 보이는 별의 밝기를 겉보기 등급으로 나타내고,\n별의 실제 밝기는 절대 등급으로 나타낸다는 것을 배울 수 있어요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는 마법 같은 이야기를 들어보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/4.png`} />
          <CustomText
            text={
              isMobile
                ? '별의 스펙트럼을 측정하여 표면 온도를 알 수\n 있어요. 스펙트럼형은 별들의 온도 무지개!'
                : isTablet
                ? '별의 스펙트럼을 측정하여 표면 온도를 알 수\n 있어요. 스펙트럼형은 별들의 온도 무지개!'
                : '별의 스펙트럼을 측정하여 표면 온도를 알 수 있어요.\n스펙트럼형은 별들의 온도 무지개!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/5.png`} />
          <CustomText
            text={
              isMobile
                ? '별의 색과 스펙트럼 노트를 통해서 학습자들은\n 스펙트럼의 특징에 따라 O, B, A, F, G, K, M의\n 7가지 형태로 분류할 수 있다는 것을 알 수\n 있어요. O형은 불타는 태양,\n M형은 시원한 얼음별이랍니다!'
                : isTablet
                ? '별의 색과 스펙트럼 노트를 통해서 학습자들은\n 스펙트럼의 특징에 따라 O, B, A, F, G, K, M의\n 7가지 형태로 분류할 수 있다는 것을 알 수 있어요.\nO형은 불타는 태양, M형은 시원한 얼음별이랍니다!'
                : '별의 색과 스펙트럼 노트를 통해서 학습자들은 스펙트럼의 특징에 따라\nO, B, A, F, G, K, M의 7가지 형태로 분류할 수 있다는 것을 알 수 있어요.\nO형은 불타는 태양, M형은 시원한 얼음별이랍니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/6.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들이 직접 눈에 보이는 별의 밝기 순서대로 배치해보며 겉보기 등급을 나누어 볼 수 있어요.'
                : isTablet
                ? '학습자들이 직접 눈에 보이는 별의 밝기 순서대로\n 배치해보며 겉보기 등급을 나누어 볼 수 있어요.'
                : '학습자들이 직접 눈에 보이는 별의 밝기 순서대로 배치해보며 \n겉보기 등급을 나누어 볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/7.png`} />
          <CustomText
            text={
              isMobile
                ? '별의 밝기 등급은 별들의 성적표 같아요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는\n 마법같은 이야기!'
                : isTablet
                ? '별의 밝기 등급은 별들의 성적표 같아요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는\n 마법같은 이야기!'
                : '별의 밝기 등급은 별들의 성적표 같아요.\n가까이서 보면 밝지만, 멀리서 보면 흐릿해지는 마법같은 이야기!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/14_StarsCharacteristics/8.png`} />
          <CustomText
            text={
              isMobile
                ? '다양한 별의 색과 밝기를 AR로 관찰하며\n 복습할 수 있어요. 별의 표면 온도와 밝기 등급을\n 시각적으로 이해하고 기억할 수 있답니다!\n별들의 성격을 모두 알아볼까요?'
                : isTablet
                ? '다양한 별의 색과 밝기를 AR로 관찰하며\n 복습할 수 있어요. 별의 표면 온도와 밝기 등급을\n 시각적으로 이해하고 기억할 수 있답니다!\n별들의 성격을 모두 알아볼까요?'
                : '다양한 별의 색과 밝기를 AR로 관찰하며 복습할 수 있어요.\n별의 표면 온도와 밝기 등급을 시각적으로 이해하고 기억할 수 있답니다!\n별들의 성격을 모두 알아볼까요?'
            }
          />
        </WidthOneContent>
      </div>
    </StyledStarsCharacteristics>
  );
};

export default StarsCharacteristics;
