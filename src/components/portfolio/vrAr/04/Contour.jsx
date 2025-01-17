import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import Img from '../../common/Img';
import CustomWrapImg from '../../common/CustomWrapImg';
import HeroVideo from '../../common/Hero/HeroVideo';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledContour } from '../../../../assets/styles/portfolio/vrAr/04_Contour/StyledContour';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import HeroImg from '../../common/Hero/HeroImg';
import CustomText from '../../common/CustomText';

const Contour = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledContour>
      <Breadcrumb />

      <div className="fullScreen relative">
        <PortfolioTitleWrap
          // $isLoaded={isLoaded}
          // pcMarginTop={'380px'}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{
              color: '#FFFFFF',
              fontFamily: 'NanumSquareEB',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
            field={'AR'}
            title={isMobileTablet ? '땅의 높낮이를 나타내는\n 등고선' : '땅의 높낮이를 나타내는 등고선'}
          />
        </PortfolioTitleWrap>

        <HeroVideo
          // isLoaded={isLoaded}
          // setIsLoaded={setIsLoaded}
          pcHeight={'1920 / 1080'}
          mobileHeight={'375 / 450'}
          src={isMobileTablet ? `${process.env.PUBLIC_URL}/assets/videos/M_contour.mp4` : `${process.env.PUBLIC_URL}/assets/videos/contour.mp4`}
        />
      </div>
      <div className="introductionArea">
        <HeroImg
          pcAspectRatio={'1200 / 277'}
          mobileAspectRatio={'315 / 73'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/${isMobileTablet ? 'contourModel_m' : 'contourModel'}.png`}
        />
        <PortfolioIntroductionTitle
          pcMarginTop={'60px'}
          mobileMarginTop={'30px'}
          mobileMarginBottom={'clamp(20px, 5vw, 60px)'}
          title={'등고선을 통해 배우는 높낮이의 비밀!'}
        />
        <PortfolioIntroductionDescription
          pcMarginTop={'34px'}
          style={{ color: '#767676' }}
          description={
            isMobileTablet
              ? '높이별 색 구분, 높낮이, 경사를 생생하게\n 경험하며 등고선의 원리를 이해할 수 있습니다.'
              : '높이별 색 구분, 높낮이, 경사를 생생하게 경험하며 등고선의 원리를 이해할 수 있습니다.'
          }
        />
      </div>

      <div className="contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/1.png`} />
          <CustomText
            text={
              isMobile
                ? `우리팀은 실제 산의 등고선을 정밀하게\n 반영하기 위해 다양한 지형 데이터를 분석했어요.\n지형 데이터를 다루다 보니,\n 우리팀도 산 전문가가 다 되었답니다!`
                : isTablet
                ? `우리팀은 실제 산의 등고선을 정밀하게 반영하기\n 위해 다양한 지형 데이터를 분석했어요.\n지형 데이터를 다루다 보니, 우리팀도\n산 전문가가 다 되었답니다!`
                : `우리팀은 실제 산의 등고선을 정밀하게 반영하기 위해 다양한 지형 데이터를 분석했어요. 지형 데이터를 다루다 보니, 우리팀도 산 전문가가 다 되었답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? `학습자는 평면 지도에 선을 긋는 간단한 \n작업으로 등고선의 개념을 배울 수 있어요.\n등고선의 신비한 세계를 같이 시작해볼까요?`
                : isTablet
                ? `학습자는 평면 지도에 선을 긋는 간단한 \n작업으로 등고선의 개념을 배울 수 있어요.\n등고선의 신비한 세계를 같이 시작해볼까요?`
                : `학습자는 평면 지도에 선을 긋는 간단한 작업으로 등고선의 개념을 배울 수 있어요. 등고선의 신비한 세계를 같이 시작해볼까요?`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/2.png`} />
        </WidthImgOneTextsOne>
      </div>
      <div className="fullScreen relative">
        <img className="backImg" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/back.png`} alt="" />
      </div>

      <div className="contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/3.png`} />
          <CustomText
            text={
              isMobile
                ? `평면 지도로 등고선의 개념을 익힌 후,\n증강현실(AR) 기술을 활용하여 등고선을\n자세히 살펴볼 수 있어요!`
                : isTablet
                ? `평면 지도로 등고선의 개념을 익힌 후,\n증강현실(AR) 기술을 활용하여 등고선을\n자세히 살펴볼 수 있어요!`
                : `평면 지도로 등고선의 개념을 익힌 후, 증강현실(AR) 기술을 활용하여 등고선을 자세히 살펴볼 수 있어요!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? `학습자는 높이에 맞춰 등고선 색을 넣어 지형의\n 높낮이를 직관적으로 이해할 수 있어요.\n낮으면 낮을 수록 어떤 색을 칠해야 할까요?`
                : isTablet
                ? `학습자는 높이에 맞춰 등고선 색을 넣어 지형의\n 높낮이를 직관적으로 이해할 수 있어요.\n낮으면 낮을 수록 어떤 색을 칠해야 할까요?`
                : `학습자는 높이에 맞춰 등고선 색을 넣어 지형의 높낮이를 직관적으로 이해할 수 있어요. 낮으면 낮을 수록 어떤 색을 칠해야 할까요?`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/5.png`} />
          <CustomText
            text={
              isMobile
                ? `버튼 하나로 눈앞에 펼쳐지는 그래프!\n실제 산의 모습을 반영한 그래프와 함께\n학습자는 등고선이 지형을 어떻게 나타내는지\n명확하게 이해할 수 있어요.`
                : isTablet
                ? `버튼 하나로 눈앞에 펼쳐지는 그래프!\n실제 산의 모습을 반영한 그래프와 함께\n학습자는 등고선이 지형을 어떻게 나타내는지\n명확하게 이해할 수 있어요.`
                : `버튼 하나로 눈앞에 펼쳐지는 그래프! 실제 산의 모습을 반영한 그래프와 함께 학습자는 등고선이 지형을 어떻게 나타내는지 명확하게 이해할 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <CustomText
            text={
              isMobile
                ? `마지막으로, 재미있는 문제 풀이 시간!\n계곡과 능선, 고점과 저점, 완만함과 가파름을\n분별하는 여섯가지 문제를 통해 학습을\n복습하고 확인할 수 있어요!`
                : isTablet
                ? `마지막으로, 재미있는 문제 풀이 시간!\n계곡과 능선, 고점과 저점, 완만함과 가파름을\n분별하는 여섯가지 문제를 통해 학습을\n복습하고 확인할 수 있어요!`
                : `마지막으로, 재미있는 문제 풀이 시간! 계곡과 능선, 고점과 저점, 완만함과 가파름을 분별하는 여섯가지 문제를 통해 학습을 복습하고 확인할 수 있어요!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/group1/6.png`} />
        </WidthImgOneTextsOne>
      </div>

      <CustomWrapImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/04_Contour/contourMap.png`} />
    </StyledContour>
  );
};

export default Contour;
