import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import Img from '../../common/Img';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { StyledReservoirDam } from '../../../../assets/styles/portfolio/eLearning/01_ReservoirDam/StyledReservoirDam';
import HeroImg from '../../common/Hero/HeroImg';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';
// import useLongTablet from '../../../hooks/useTabletMax1556';

const ReservoirDam = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  // const isLongTablet = useLongTablet();

  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledReservoirDam>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'농식품공무원교육원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }}
          title={'저수지·댐 안전관리 및 재해예방'}
        />
      </PortfolioTitleWrap>

      <div className="gridWrapper">
        <HeroImg
          pcAspectRatio={'1920 / 1080'}
          mobileAspectRatio={'1024 / 1080'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
        <div className="introductionWrapper">
          <PortfolioIntroductionTitle style={{ color: '#292929' }} title={'물의 힘을 안전하게!'} />
          <PortfolioIntroductionDescription
            style={{ color: 'rgba(41, 41, 41, 0.8)' }}
            description={
              isMobileTablet
                ? '저수지·댐의 구조와 기능을 이해하고,\n 안전 관리와 재해 예방을 위한 지식을 습득하세요!\n실제 사례와 함께 배우며, 안전한 댐 관리를\n 이해할 수 있어요.'
                : '저수지·댐의 구조와 기능을 이해하고, 안전 관리와 재해 예방을 위한 지식을 습득하세요!\n실제 사례와 함께 배우며, 안전한 댐 관리를 이해할 수 있어요.'
            }
          />
        </div>
      </div>
      <img
        className="backgroundImg"
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/background.png`}
        alt=""
      />
      <div className="contentsWrapper">
        <WidthImgOneTextsOne pcPaddingTop="var(--pc-200px)">
          <CustomText
            text={
              isMobile
                ? '우리 팀은 저수지·댐 안전관리 및 재해예방\n e-Learning 컨텐츠를 개발하면서\n 다양한 저수지·댐 전문가들과 협력하여\n 심층적인 자료를 수집하고 분석했어요.'
                : isTablet
                ? '우리 팀은 저수지·댐 안전관리 및 재해예방\n e-Learning 컨텐츠를 개발하면서\n 다양한 저수지·댐 전문가들과 협력하여\n 심층적인 자료를 수집하고 분석했어요.'
                : '우리 팀은 저수지·댐 안전관리 및 재해예방\n e-Learning 컨텐츠를 개발하면서 다양한 저수지·댐 전문가들과 협력하여 심층적인 자료를 수집하고 분석했어요.'
              // : `우리 팀은 저수지·댐 안전관리 및 재해예방\n e-Learning 컨텐츠를 개발하면서 다양한 저수지·댐\n 전문가들과 협력하여 심층적인 자료를 수집하고 \n분석했어요.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/1.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/2.png`} />
          <CustomText
            text={
              isMobile
                ? '콘텐츠의 시각적 요소는 학습자들이 쉽게\n 이해하고 흥미를 느낄 수 있도록 3D 모델링과\n 애니메이션을 활용하여 제작되었답니다!'
                : isTablet
                ? '콘텐츠의 시각적 요소는 학습자들이 쉽게\n 이해하고 흥미를 느낄 수 있도록 3D 모델링과\n 애니메이션을 활용하여 제작되었답니다!'
                : '콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고 흥미를 느낄 수 있도록 3D 모델링과 애니메이션을 활용하여 제작되었답니다!'
              // : `콘텐츠의 시각적 요소는 학습자들이 쉽게 이해하고\n흥미를 느낄 수 있도록 3D 모델링과 애니메이션을\n활용하여 제작되었답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '저수지·댐의 구조와 기능에 대한\n 기본적인 이해를 바탕으로, 수자원 관리와\n 재해 예방의 중요성을 인식할 수 있어요.'
                : isTablet
                ? '저수지·댐의 구조와 기능에 대한\n 기본적인 이해를 바탕으로, 수자원 관리와\n 재해 예방의 중요성을 인식할 수 있어요.'
                : '저수지·댐의 구조와 기능에 대한 기본적인 이해를 바탕으로, 수자원 관리와 재해 예방의 중요성을 인식할 수 있어요.'
              // : `저수지·댐의 구조와 기능에 대한 기본적인 이해를\n바탕으로, 수자원 관리와 재해 예방의 중요성을\n인식할 수 있어요.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/3.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/4.png`} />
          <CustomText
            text={
              isMobile
                ? '댐 붕괴나 유출 사고와 같은 비상 상황에서의\n 대처 방법을 익히고, 비상 대응 계획 수립과\n 주민 대피 절차를 학습할 수 있어요.'
                : isTablet
                ? '댐 붕괴나 유출 사고와 같은 비상 상황에서의\n 대처 방법을 익히고, 비상 대응 계획 수립과\n 주민 대피 절차를 학습할 수 있어요.'
                : '댐 붕괴나 유출 사고와 같은 비상 상황에서의 대처 방법을 익히고, 비상 대응 계획 수립과 주민 대피 절차를 학습할 수 있어요.'
              // : `댐 붕괴나 유출 사고와 같은 비상 상황에서의 대처 \n방법을 익히고, 비상 대응 계획 수립과 주민 대피 절차를\n 학습할 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
      </div>
      <div className="background90ebff">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/1.png`} />
          <CustomText
            text={
              isMobile
                ? '저수지 댐의 각 구성 요소와 기능을 이해하기 위해\n 직접 이미지를 디자인 했어요!\n학습자들은 그려진 이미지를 통해\n 저수지 댐의 구조와 기능을 보다\n 명확히 이해하고 기억할 수 있답니다!'
                : isTablet
                ? '저수지 댐의 각 구성 요소와 기능을 이해하기 위해\n 직접 이미지를 디자인 했어요!\n학습자들은 그려진 이미지를 통해 저수지 댐의 구조와 기능을\n 보다 명확히 이해하고 기억할 수 있답니다!'
                : '저수지 댐의 각 구성 요소와 기능을 이해하기 위해 직접 이미지를 디자인 했어요!\n학습자들은 그려진 이미지를 통해 저수지 댐의 구조와 기능을 \n보다 명확히 이해하고 기억할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/2.png`} />
          <CustomText
            text={
              isMobile
                ? '학습 중간마다 Q&A 섹션이 있어 학습자들이\n 궁금한 점을 해소할 수 있어요.\n학습의 흐름을 방해하지 않으면서도\n 효과적인 학습이 가능하답니다!'
                : isTablet
                ? '학습 중간마다 Q&A 섹션이 있어 학습자들이\n 궁금한 점을 해소할 수 있어요.\n학습의 흐름을 방해하지 않으면서도\n 효과적인 학습이 가능하답니다!'
                : '학습 중간마다 Q&A 섹션이 있어 학습자들이 궁금한 점을 해소할 수 있어요.\n학습의 흐름을 방해하지 않으면서도 효과적인 학습이 가능하답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group2/3.png`} />
          <CustomText
            text={
              isMobile
                ? '퀴즈를 통해 학습 내용을 점검할 수 있어요.\n학습자는 자신이 얼마나 이해했는지 확인하고,\n 부족한 부분을 보완할 수 있어요.\n학습 내용을 체계적으로 정리해볼까요?'
                : isTablet
                ? '퀴즈를 통해 학습 내용을 점검할 수 있어요.\n학습자는 자신이 얼마나 이해했는지 확인하고,\n 부족한 부분을 보완할 수 있어요.\n학습 내용을 체계적으로 정리해볼까요?'
                : '퀴즈를 통해 학습 내용을 점검할 수 있어요.\n학습자는 자신이 얼마나 이해했는지 확인하고, 부족한 부분을 보완할 수 있어요.\n학습 내용을 체계적으로 정리해볼까요?'
            }
          />
        </WidthOneContent>
      </div>

      <div className="contentsWrapper">
        <WidthImgOneTextsOne pcPaddingTop="var(--pc-160px)" mobilePaddingTop={'var(--mobile-80px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/5.png`} />
          <CustomText
            text={
              isMobile
                ? '적절한 이미지와 한눈에 보이는 텍스트 구성으로\n학습자의 이해를 최선으로 고려하여\n 화면 디자인을 구성해요.'
                : isTablet
                ? '적절한 이미지와 한눈에 보이는 텍스트 구성으로\n학습자의 이해를 최선으로 고려하여\n 화면 디자인을 구성해요.'
                : '적절한 이미지와 한눈에 보이는 텍스트 구성으로 학습자의 이해를 최선으로 고려하여 화면 디자인을 구성해요.'
              // : `적절한 이미지와 한눈에 보이는 텍스트 구성으로\n학습자의 이해를 최선으로 고려하여 화면 디자인을 \n구성해요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '다양한 내용을 인포그래픽화하기 위해\n 전문가들의 많은 피드백을 반영하여 최적의\n 학습 경험을 제공할 수 있도록 노력한답니다!'
                : isTablet
                ? '다양한 내용을 인포그래픽화하기 위해\n 전문가들의 많은 피드백을 반영하여 최적의\n 학습 경험을 제공할 수 있도록 노력한답니다!'
                : '다양한 내용을 인포그래픽화하기 위해 전문가들의 많은 피드백을 반영하여 최적의 학습 경험을 제공할 수 있도록 노력한답니다!'
              // : `다양한 내용을 인포그래픽화하기 위해 전문가들의\n많은 피드백을 반영하여 최적의 학습 경험을 제공할 수\n있도록 노력한답니다!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/6.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/7.png`} />
          <CustomText
            text={
              isMobile
                ? '저수지 댐의 구조를 설명할 때는\n 각 구성 요소를 시각적으로 보여주는\n 다이어그램 및 이미지를 제공하여\n학습자가 쉽게 구조를 파악할 수 있게 해요.'
                : isTablet
                ? '저수지 댐의 구조를 설명할 때는 각 구성 요소를\n 시각적으로 보여주는 다이어그램 및 이미지를 제공하여\n학습자가 쉽게 구조를 파악할 수 있게 해요.'
                : '저수지 댐의 구조를 설명할 때는 각 구성 요소를 시각적으로 보여주는 다이어그램 및 이미지를 제공하여 학습자가 쉽게 구조를 파악할 수 있게 해요.'
              // : `저수지 댐의 구조를 설명할 때는 각 구성 요소를 \n시각적으로 보여주는 다이어그램 및 이미지를 제공하여\n학습자가 쉽게 구조를 파악할 수 있게 해요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <CustomText
            text={
              isMobile
                ? '다양한 학습 내용의 구성을 통해 지루함을\n 방지해요! 저수지 댐의 구조와 기능부터\n 안전 관리와 재해 예방까지, 인터랙티브한\n e-Learning으로 배워보세요!'
                : isTablet
                ? '다양한 학습 내용의 구성을 통해 지루함을 방지해요!\n 저수지 댐의 구조와 기능부터 안전 관리와 재해 예방까지,\n 인터랙티브한 e-Learning으로 배워보세요!'
                : '다양한 학습 내용의 구성을 통해 지루함을 방지해요! 저수지 댐의 구조와 기능부터\n 안전 관리와 재해 예방까지, 인터랙티브한\n e-Learning으로 배워보세요!'
              // : '다양한 학습 내용의 구성을 통해 지루함을 방지해요!\n저수지 댐의 구조와 기능부터 안전 관리와 재해 예방까지, 인터랙티브한 e-Learning으로 배워보세요!'
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/01_ReservoirDam/group1/8.png`} />
        </WidthImgOneTextsOne>
      </div>
    </StyledReservoirDam>
  );
};

export default ReservoirDam;
