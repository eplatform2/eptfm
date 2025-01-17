import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';
import { StyledClassroomRevolution } from '../../../../assets/styles/portfolio/eLearning/02_ClassroomRevolution/StyledClassroomRevolution';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';

const ClassroomRevolution = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledClassroomRevolution>
      <div className="fullScreen heroArea">
        <div className="ellipseWrapper">
          <img
            className="ellipse1"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/${
              isMobileTablet ? 'ellipse1_m' : 'ellipse1'
            }.png`}
            alt=""
          />
          <img
            className="ellipse2"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/${
              isMobileTablet ? 'ellipse2_m' : 'ellipse2'
            }.png`}
            alt=""
          />
        </div>

        <Breadcrumb style={{ position: 'absolute', zIndex: '0' }} />

        <PortfolioTitleWrap
          pcMarginTop={'var(--pc-180px)'}
          style={{ position: 'absolute', left: '50%', zIndex: '0', transform: 'translateX(-50%)' }}
          mobileMarginTop={'var(--mobile-50px)'}
        >
          <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'교사가 이끄는 교실혁명'} />
        </PortfolioTitleWrap>

        <div className="intro_imgs_Wrapper">
          <div className="introductionWrapper">
            <PortfolioIntroductionTitle
              style={{ color: '#292929' }}
              title={isMobileTablet ? 'AI 디지털교과서의\n 새로운 시대가 열립니다!' : 'AI 디지털교과서의 새로운 시대가 열립니다!'}
            />
            <PortfolioIntroductionDescription
              style={{ color: 'rgba(41, 41, 41, 0.8)' }}
              pcMarginTop={'34px'}
              mobileMarginTop={'5.33vw'}
              description={
                isMobileTablet
                  ? '이 콘텐츠는 AI 디지털교과서의\n 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수\n 있는 혁신적인 학습 경험을\n 탐구합니다.'
                  : '이 콘텐츠는 AI 디지털교과서의 도입과 사용 방법을 설명하며,\n교사가 학생들에게 제공할 수 있는 혁신적인 학습 경험을 탐구합니다.'
              }
            />
          </div>
          <div className="imgsWrapper">
            <img
              className="hero1"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/hero1.png`}
              alt=""
            />

            <img
              className="hero2"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/hero2.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="fullScreen area2">
        <div className="customTextWrapperOne">
          <CustomText
            text={
              isMobile
                ? "'교사가 이끄는 교실혁명'을 제작하면서,\n 우리 팀은 AI 기술이 학생 개개인의 학습 스타일에\n 맞춘 맞춤형 교육을 제공한다는 점에서\n 큰 가능성을 보았어요."
                : isTablet
                ? "'교사가 이끄는 교실혁명'을 제작하면서, 우리 팀은\n AI 기술이 학생 개개인의 학습 스타일에 맞춘 맞춤형 교육을\n 제공한다는 점에서 큰 가능성을 보았어요."
                : "'교사가 이끄는 교실혁명'을 제작하면서, 우리 팀은 AI 기술이 학생 개개인의\n 학습 스타일에 맞춘 맞춤형 교육을 제공한다는 점에서 큰 가능성을 보았어요."
            }
          />
        </div>
        <div className="doubleImgWrapper">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group1/1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group1/2.png`} />
        </div>
        <div className="customTextWrapperTwo">
          <CustomText
            text={
              isMobile
                ? '이 콘텐츠는 학습자의 학습 스타일에 맞추어\n 최적화된 학습 경험을 제공하며,\n다양한 주제와 과목을 다루는 포괄적인\n 학습 도구로써 제작되었어요.'
                : isTablet
                ? '이 콘텐츠는 학습자의 학습 스타일에 맞추어 최적화된\n 학습 경험을 제공하며, 다양한 주제와 과목을 다루는\n 포괄적인 학습 도구로써 제작되었어요.'
                : '이 콘텐츠는 학습자의 학습 스타일에 맞추어 최적화된 학습 경험을 제공하며,\n다양한 주제와 과목을 다루는 포괄적인 학습 도구로써 제작되었어요.'
            }
          />
        </div>
      </div>

      <div className="contentsWrapper">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/1.png`} />
          <CustomText
            text={
              isMobile
                ? 'AI 디지털교과서 e-Learning 콘텐츠는\n 교육 전문가와 AI 기술 전문가의\n 협업을 통해 제작되었어요.'
                : isTablet
                ? 'AI 디지털교과서 e-Learning 콘텐츠는 교육 전문가와\n AI 기술 전문가의 협업을 통해 제작되었어요.'
                : 'AI 디지털교과서 e-Learning 콘텐츠는 교육 전문가와 \nAI 기술 전문가의 협업을 통해 제작되었어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/2.png`} />
          <CustomText
            text={
              isMobile
                ? '기획 단계에서는 각 과목별 교육 목표와 학습자\n 요구를 분석하였으며, 이를 바탕으로 학습자\n 맞춤형 학습 경로를 구현하였답니다!'
                : isTablet
                ? '기획 단계에서는 각 과목별 교육 목표와 학습자\n 요구를 분석하였으며, 이를 바탕으로 학습자\n 맞춤형 학습 경로를 구현하였답니다!'
                : '기획 단계에서는 각 과목별 교육 목표와 학습자 요구를 분석하였으며,\n이를 바탕으로 학습자 맞춤형 학습 경로를 구현하였답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/3.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자의 이해를 돕기 위해 적절한 이미지와\n 그래픽을 풍부하게 사용했어요.\n적용 대상이나 범위를 시각적으로 보여주는\n 다이어그램을 활용하거나 애니메이션을\n 활용하여 학습자가 쉽게 이해할 수 있도록\n 했어요.'
                : isTablet
                ? '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을\n 풍부하게 사용했어요. 적용 대상이나 범위를\n 시각적으로 보여주는 다이어그램을 활용하거나 애니메이션을\n 활용하여 학습자가 쉽게 이해할 수 있도록 했어요.'
                : '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을 풍부하게 사용했어요.\n적용 대상이나 범위를 시각적으로 보여주는 다이어그램을 활용하거나\n애니메이션을 활용하여 학습자가 쉽게 이해할 수 있도록 했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/4.png`} />
          <CustomText
            text={
              isMobile
                ? '다양한 형태로 구성되어 지루함을 방지해요!\n텍스트 설명 외에도 시뮬레이션,\n 인터랙티브 활동 등을 포함하여\n학습자가 몰입할 수 있도록 구성했어요.'
                : isTablet
                ? '다양한 형태로 구성되어 지루함을 방지해요!\n텍스트 설명 외에도 시뮬레이션, 인터랙티브 활동 등을\n 포함하여 학습자가 몰입할 수 있도록 구성했어요.'
                : '다양한 형태로 구성되어 지루함을 방지해요!\n텍스트 설명 외에도 시뮬레이션, 인터랙티브 활동 등을 포함하여\n학습자가 몰입할 수 있도록 구성했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/5.png`} />
          <CustomText
            text={
              isMobile
                ? '중요한 개념을 설명할 때는 인포그래픽을\n 사용하여 복잡한 내용을 시각적으로 간단하게\n 표현할 수 있도록 구성했어요!'
                : isTablet
                ? '중요한 개념을 설명할 때는 인포그래픽을\n 사용하여 복잡한 내용을 시각적으로 간단하게\n 표현할 수 있도록 구성했어요!'
                : '중요한 개념을 설명할 때는 인포그래픽을 사용하여\n복잡한 내용을 시각적으로 간단하게 표현할 수 있도록 구성했어요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/02_ClassroomRevolution/group2/6.png`} />
          <CustomText
            text={
              isMobile
                ? 'AI 기술로 맞춤형 학습을 제공하는\n 디지털교과서, 개인화된 학습 경험과 \n풍부한 e-Learning 콘텐츠를 통해\n 더욱 효과적이고 흥미롭게 학습해보세요!'
                : isTablet
                ? 'AI 기술로 맞춤형 학습을 제공하는 디지털교과서,\n 개인화된 학습 경험과 풍부한 e-Learning 콘텐츠를 통해\n 더욱 효과적이고 흥미롭게 학습해보세요!'
                : 'AI 기술로 맞춤형 학습을 제공하는 디지털교과서, 개인화된 학습 경험과 \n풍부한 e-Learning 콘텐츠를 통해 더욱 효과적이고 흥미롭게 학습해보세요!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledClassroomRevolution>
  );
};

export default ClassroomRevolution;
