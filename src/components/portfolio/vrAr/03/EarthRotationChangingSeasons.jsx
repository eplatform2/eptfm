import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import HeroVideo from '../../common/Hero/HeroVideo';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { StyledEarthRotationChangingSeasons } from './../../../../assets/styles/portfolio/vrAr/03_EarthRotationChangingSeasons/StyledEarthRotationChangingSeasons';
import useMobile from '../../../hooks/useMobile';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import useTablet from '../../../hooks/useTablet';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';

const EarthRotationChangingSeasons = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();

  return (
    <>
      <Breadcrumb />
      <StyledEarthRotationChangingSeasons>
        <div className="fullScreen relative">
          <PortfolioTitleWrap
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <PortfolioOrganization style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
            <PortfolioFieldTitle
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'NanumSquareEB',
                whiteSpace: 'nowrap',
              }}
              field={'AR'}
              title={'지구의 공전과 계절의 변화'}
            />
          </PortfolioTitleWrap>
          <HeroVideo
            // isLoaded={isLoaded}
            // setIsLoaded={setIsLoaded}
            pcHeight={'1920 / 1080'}
            mobileHeight={'375 / 450'}
            src={
              isMobileTablet
                ? `${process.env.PUBLIC_URL}/assets/videos/M_EarthRevolution.mp4`
                : `${process.env.PUBLIC_URL}/assets/videos/EarthRevolution.mp4`
            }
          />
        </div>
        <img
          className="mainImg"
          src={
            isMobileTablet
              ? `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/mobile_backgroundImg.png`
              : `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/backgroundImg.png`
          }
          alt=""
        />

        <div className="mainDescription">
          <img className="globe" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/2.png`} alt="" />
          <div className="mainDescriptionTextBox">
            <PortfolioIntroductionTitle
              title={isMobile ? '태양 주위를 도는 지구의 춤,\n 계절의 비밀을 풀다!' : '태양 주위를 도는 지구의 춤, 계절의 비밀을 풀다!'}
            />
            <PortfolioIntroductionDescription
              pcMarginTop={'60px'}
              mobileMarginTop={'5.33vw'}
              description={
                isMobile
                  ? '책상 위에서 증강현실로\n 지구의 자전과 공전을 탐험하세요.\n 계절의 변화를 눈앞에서 확인하며,\n 극지방과 적도 지방의 계절 차이를\n 생생하게 경험해보세요.'
                  : '책상 위에서 증강현실로 지구의 자전과 공전을 탐험하세요.\n 계절의 변화를 눈앞에서 확인하며, 극지방과 적도 지방의 계절 차이를 생생하게 경험해보세요.'
              }
            />
            {/* <p className="title NanumSquareEB">
              {isMobileTablet ? (
                <>
                  태양 주위를 도는 지구의 춤,
                  <br /> 계절의 비밀을 풀다!
                </>
              ) : (
                <>태양 주위를 도는 지구의 춤, 계절의 비밀을 풀다!</>
              )}
            </p>
            <p className="subTexts NanumSquareB">
              {isMobile ? (
                <>
                  책상 위에서 증강현실로
                  <br /> 지구의 자전과 공전을 탐험하세요.
                  <br /> 계절의 변화를 눈앞에서 확인하며,
                  <br /> 극지방과 적도 지방의 계절 차이를
                  <br /> 생생하게 경험해보세요.
                </>
              ) : isTablet ? (
                <>
                  책상 위에서 증강현실로 지구의 자전과 공전을 탐험하세요.
                  <br /> 계절의 변화를 눈앞에서 확인하며, 극지방과 적도 지방의
                  <br /> 계절 차이를 생생하게 경험해보세요.
                </>
              ) : (
                <>
                  책상 위에서 증강현실로 지구의 자전과 공전을 탐험하세요.
                  <br /> 계절의 변화를 눈앞에서 확인하며, 극지방과 적도 지방의 계절 차이를 생생하게 경험해보세요.
                </>
              )}
            </p> */}
          </div>
        </div>

        <div className="contentsWrapper">
          <WidthImgOneTextsOne mobilePaddingTop={'var(--mobile-80px)'}>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/3.png`} />
            <CustomText
              text={
                isMobile
                  ? "'지구의 공전과 계절의 변화' 콘텐츠를 제작하면서\n 우리팀은 자전축의 기울기의 마법 같은 효과를\n 담아내기  위해 노력했어요.\n 지구본을 굴려보고 코드가 얽히고\n 설켜 진정한 '자전축'이 무엇인지 체감했답니다."
                  : isTablet
                  ? "'지구의 공전과 계절의 변화' 콘텐츠를 제작하면서\n 우리팀은 자전축의 기울기의 마법 같은 효과를\n 담아내기  위해 노력했어요. 지구본을 굴려보고 코드가 얽히고\n 설켜 진정한 '자전축'이 무엇인지 체감했답니다."
                  : "'지구의 공전과 계절의 변화' 콘텐츠를 제작하면서 우리팀은 자전축의 기울기의 마법 같은 효과를  담아내기  위해 노력했어요. 지구본을 굴려보고 코드가 얽히고 설켜 진정한 '자전축'이 무엇인지 체감했답니다."
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <CustomText
              text={
                isMobile
                  ? '자전축이 23.5도 기울어진 채 태양을 중심으로\n 공전하는 지구를 책상 위에 증강하여\n 관찰할 수 있어요. 지구의 공전 궤도를 따라\n 공전하는 모습과 자전축이 지구의 공전궤도면에\n 대해 기울어져 있는 이유를\n 생생하게 배울 수 있어요!'
                  : isTablet
                  ? '자전축이 23.5도 기울어진 채 태양을 중심으로\n 공전하는 지구를 책상 위에 증강하여 관찰할 수 있어요.\n 지구의 공전 궤도를 따라 공전하는 모습과 자전축이\n 지구의 공전궤도면에 대해 기울어져 있는 이유를\n 생생하게 배울 수 있어요!'
                  : '자전축이 23.5도 기울어진 채 태양을 중심으로 공전하는 지구를 책상 위에 증강하여 관찰할 수 있어요. 지구의 공전 궤도를 따라 공전하는 모습과 자전축이 지구의 공전궤도면에 대해 기울어져 있는 이유를 생생하게 배울 수 있어요!'
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/4.png`} />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/5.png`} />
            <CustomText
              text={
                isMobile
                  ? '자전축이 기울어지지 않았다면 계절 변화가\n 어떻게 달라지는지 학습할 수 있어요. \n각 계절 ‘봄, 여름, 가을, 겨울’ 에서 태양의 \n남중 고도가 달라지지 않는 모습을 확인하며,\n 지구의 불변의 태양을 경험할 수 있답니다.'
                  : isTablet
                  ? '자전축이 기울어지지 않았다면 계절 변화가\n 어떻게 달라지는지 학습할 수 있어요. \n각 계절 ‘봄, 여름, 가을, 겨울’ 에서 태양의 \n남중 고도가 달라지지 않는 모습을 확인하며,\n 지구의 불변의 태양을 경험할 수 있답니다.'
                  : '자전축이 기울어지지 않았다면 계절 변화가 어떻게 달라지는지 학습할 수 있어요. 각 계절 ‘봄, 여름, 가을, 겨울’ 에서 태양의 남중 고도가 달라지지 않는 모습을 확인하며, 지구의 불변의 태양을 경험할 수 있답니다.'
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <CustomText
              text={
                isMobile
                  ? '자전축이 기울어진 덕분에\n ‘봄, 여름, 가을, 겨울’의 태양 남중 고도가\n 달라지는 모습을 학습할 수 있어요.\n 각 계절의 태양 위치와 낮 동안의 태양의 움직임을\n 관찰하고, 춘분, 하지, 추분, 동지의 \n낮의 길이와 기온 변화를 확인 할 수 있어요.'
                  : isTablet
                  ? '자전축이 기울어진 덕분에\n ‘봄, 여름, 가을, 겨울’의 태양 남중 고도가\n 달라지는 모습을 학습할 수 있어요.\n 각 계절의 태양 위치와 낮 동안의 태양의 움직임을\n 관찰하고, 춘분, 하지, 추분, 동지의 \n낮의 길이와 기온 변화를 확인 할 수 있어요.'
                  : '자전축이 기울어진 덕분에 ‘봄, 여름, 가을, 겨울’의 태양 남중 고도가 달라지는 모습을 학습할 수 있어요. 각 계절의 태양 위치와 낮 동안의 태양의 움직임을 관찰하고, 춘분, 하지, 추분, 동지의 낮의 길이와 기온 변화를 확인 할 수 있어요.'
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/6.png`} />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/7.png`} />
            <CustomText
              text={
                isMobile
                  ? '노르웨이의 노르카프는 북극권에 위치한 \n지역으로, 여름에 태양이 하루종일 지지 않는 \n백야 현상을 관찰할 수 있어요.\n 증강된 지표면 위에서 노르카프의 하짓날\n 태양 움직임을 알아보며,\n 지구의 자전축 기울기로 인해 발생하는\n 독특한 현상을 체험해 보세요!'
                  : isTablet
                  ? '노르웨이의 노르카프는 북극권에 위치한 지역으로,\n 여름에 태양이 하루종일 지지 않는 \n백야 현상을 관찰할 수 있어요.\n 증강된 지표면 위에서 노르카프의 하짓날 태양 움직임을\n 알아보며, 지구의 자전축 기울기로 인해\n 발생하는 독특한 현상을 체험해 보세요!'
                  : '노르웨이의 노르카프는 북극권에 위치한 지역으로, 여름에 태양이 하루종일 지지 않는 백야 현상을 관찰할 수 있어요. 증강된 지표면 위에서 노르카프의 하짓날 태양 움직임을 알아보며, 지구의 자전축 기울기로 인해 발생하는 독특한 현상을 체험해 보세요!'
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <CustomText
              text={
                isMobile
                  ? '적도 지방에 위치한 우간다의 수도 캄팔라는\n 춘분날에 태양이 거의 머리 위 정점에 오르는\n 모습을 볼 수 있어요. 증강된 지표면 위에서\n 캄팔라의 춘분날 태양의 움직임을 살펴보고,\n 적도 지방의 계절 변화와\n 낮의 길이를 학습할 수 있어요.'
                  : isTablet
                  ? '적도 지방에 위치한 우간다의 수도 캄팔라는\n 춘분날에 태양이 거의 머리 위 정점에 오르는\n 모습을 볼 수 있어요. 증강된 지표면 위에서\n 캄팔라의 춘분날 태양의 움직임을 살펴보고,\n 적도 지방의 계절 변화와\n 낮의 길이를 학습할 수 있어요.'
                  : '적도 지방에 위치한 우간다의 수도 캄팔라는 춘분 날에 태양이 거의 머리 위 정점에 오르는 모습을 볼 수 있어요. 증강된 지표면 위에서 캄팔라의 춘분날 태양의 움직임을 살펴보고, 적도 지방의 계절 변화와 낮의 길이를 학습할 수 있어요.'
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/8.png`} />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne last>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/03_EarthRotationChangingSeasons/9.png`} />
            <CustomText
              text={
                isMobile
                  ? '이 콘텐츠는 여러분의 책상 위에서 계절의 변화를\n 손쉽게 이해할 수 있게 한답니다.\n증강현실(AR)을 통해 지구의 자전축과 \n공전궤도를 실제로 보는 듯한 경험을 제공하며\n“지구의 변화를 내 눈 앞에서!” 라는 느낌을 줘요.\n지구과학의 복잡한 개념을 직관적으로 이해하고,\n 우주의 아름다움을 느껴보세요!'
                  : isTablet
                  ? '이 콘텐츠는 여러분의 책상 위에서 계절의 변화를\n 손쉽게 이해할 수 있게 한답니다.\n증강현실(AR)을 통해 지구의 자전축과 \n공전궤도를 실제로 보는 듯한 경험을 제공하며\n“지구의 변화를 내 눈 앞에서!” 라는 느낌을 줘요.\n지구과학의 복잡한 개념을 직관적으로 이해하고,\n 우주의 아름다움을 느껴보세요!'
                  : '이 콘텐츠는 여러분의 책상 위에서 계절의 변화를 손쉽게 이해할 수 있게 한답니다. 증강현실(AR)을 통해 지구의 자전축과 공전궤도를 실제로 보는 듯한 경험을 제공하며 “지구의 변화를 내 눈 앞에서!” 라는 느낌을 줘요. 지구과학의 복잡한 개념을 직관적으로 이해하고, 우주의 아름다움을 느껴보세요!'
              }
            />
          </WidthImgOneTextsOne>
        </div>
      </StyledEarthRotationChangingSeasons>
    </>
  );
};

export default EarthRotationChangingSeasons;
