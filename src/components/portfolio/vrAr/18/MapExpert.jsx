import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledMapExpert } from '../../../../assets/styles/portfolio/vrAr/18_MapExpert/StyledMapExpert';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import Img from '../../common/Img';

const MapExpert = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledMapExpert>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }}
          field={'AR'}
          title={isMobileTablet ? '지도를 볼 줄 아는,\n 나는 지도박사' : '지도를 볼 줄 아는, 나는 지도박사'}
        />
      </PortfolioTitleWrap>

      <div className="fullScreen heroWrapper">
        <p className="heroTexts">
          지도를 자로 잴 수 있다고?
          <br /> 놀라운 축척의 세계
        </p>
        <HeroImg
          pcAspectRatio={'1920 / 840'}
          mobileAspectRatio={'1024 / 1236'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>
      <div className="gridWrapper">
        <div className="customTextsWrapper">
          <CustomText
            text={
              isMobile
                ? "'지도를 볼 줄 아는, 나는 지도박사' 콘텐츠를\n 제작하면서, 우리 팀은 지도를 단순히 보는\n 것에서 벗어나 학습자가 직접 만들고 측정해보는 체험형 학습을 제공하기 위해 노력했어요.\n 지도의 기호와 범례를 직접 만들어보니,\n 마치 비밀 암호를 해독하는 기분이었어요!"
                : isTablet
                ? "'지도를 볼 줄 아는, 나는 지도박사' 콘텐츠를 제작하면서,\n 우리 팀은 지도를 단순히 보는 것에서 벗어나\n 학습자가 직접 만들고 측정해보는 체험형 학습을\n 제공하기 위해 노력했어요. 지도의 기호와 범례를 직접\n 만들어보니, 마치 비밀 암호를 해독하는 기분이었어요!"
                : "'지도를 볼 줄 아는, 나는 지도박사' 콘텐츠를 제작하면서, 우리 팀은 지도를 단순히 보는 것에서 벗어나\n학습자가 직접 만들고 측정해보는 체험형 학습을 제공하기 위해 노력했어요.\n지도의 기호와 범례를 직접 만들어보니, 마치 비밀 암호를 해독하는 기분이었어요!"
            }
          />
        </div>
        <img className="introductionImg" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/main2.png`} alt="" />
      </div>

      <div className="customMaxWidthWrapper">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/1.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자는 영상 지도를 참고하여 주요 도로,\n 일반 도로, 병원, 시청, 학교, 주택, 할인점 등의 \n범례에 맞는 기호를 통해 지도를 만들 수 있어요. \n지도의 비밀 기호를 풀어가며\n 나만의 지도를 완성할 수 있답니다!'
                : isTablet
                ? '학습자는 영상 지도를 참고하여 주요 도로, 일반 도로,\n 병원, 시청, 학교, 주택, 할인점 등의 범례에 맞는 기호를\n 통해 지도를 만들 수 있어요. 지도의 비밀 기호를\n 풀어가며 나만의 지도를 완성할 수 있답니다!'
                : '학습자는 영상 지도를 참고하여 주요 도로, 일반 도로, 병원, 시청, 학교, 주택, 할인점 등의 \n범례에 맞는 기호를 통해 지도를 만들 수 있어요. \n지도의 비밀 기호를 풀어가며 나만의 지도를 완성할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/2.png`} />
          <CustomText
            text={
              isMobile
                ? '지도에서 볼 수 있는 다양한 구성 요소인\n 축적, 방위, 범례, 등고선 등을 학습할 수 있어요.'
                : isTablet
                ? '지도에서 볼 수 있는 다양한 구성 요소인\n 축적, 방위, 범례, 등고선 등을 학습할 수 있어요.'
                : '지도에서 볼 수 있는 다양한 구성 요소인 축적, 방위, 범례, 등고선 등을 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/3.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR을 통해 실제 지도 위에 구성 요소를 표시하고,\n 각 요소의 역항을 학습해볼까요?\nAR 지도 속으로! 지도의 기본 구성 요소를\n 하나씩 살펴보며 지도 박사가 되어보세요!'
                : isTablet
                ? 'AR을 통해 실제 지도 위에 구성 요소를 표시하고,\n 각 요소의 역항을 학습해볼까요?\nAR 지도 속으로! 지도의 기본 구성 요소를\n 하나씩 살펴보며 지도 박사가 되어보세요!'
                : 'AR을 통해 실제 지도 위에 구성 요소를 표시하고, 각 요소의 역항을 학습해볼까요?\nAR 지도 속으로! 지도의 기본 구성 요소를 하나씩 살펴보며 지도 박사가 되어보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/4.png`} />
          <CustomText
            text={
              isMobile
                ? '지도의 방위를 이해하고, 나침반을 사용해\n 방위를 찾는 법을 체험해 볼 수 있어요.'
                : isTablet
                ? '지도의 방위를 이해하고, 나침반을 사용해\n 방위를 찾는 법을 체험해 볼 수 있어요.'
                : '지도의 방위를 이해하고, 나침반을 사용해 방위를 찾는 법을 체험해 볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/5.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR 지도를 책상에 띄워 나침반을 사용해\n 도전과제를 해결해보세요.\n최단거리를 이동해 목적지에 도착하여\n 미션을 해결할 수 있답니다!'
                : isTablet
                ? 'AR 지도를 책상에 띄워 나침반을 사용해\n 도전과제를 해결해보세요.\n최단거리를 이동해 목적지에 도착하여\n 미션을 해결할 수 있답니다!'
                : 'AR 지도를 책상에 띄워 나침반을 사용해 도전과제를 해결해보세요.\n최단거리를 이동해 목적지에 도착하여 미션을 해결할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/6.png`} />
          <CustomText
            text={
              isMobile
                ? '축척은 지도의 특정 길이가 실제 거리에서\n 얼마나 되는지를 나타내는 비율이에요.\n지도의 축적과 방위를 이해하고, 실제 거리를\n 계산하는 방법을 학습할 수 있어요.'
                : isTablet
                ? '축척은 지도의 특정 길이가 실제 거리에서\n 얼마나 되는지를 나타내는 비율이에요.\n지도의 축적과 방위를 이해하고, 실제 거리를\n 계산하는 방법을 학습할 수 있어요.'
                : '축척은 지도의 특정 길이가 실제 거리에서 얼마나 되는지를 나타내는 비율이에요.\n지도의 축적과 방위를 이해하고, 실제 거리를 계산하는 방법을 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/18_MapExpert/7.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR을 통해 다양한 축척을 시각적으로 비교하고,\n축척이 다른 지도에서 같은 거리가\n 어떻게 표현되는지 체험해보세요!'
                : isTablet
                ? 'AR을 통해 다양한 축척을 시각적으로 비교하고, 축척이 다른\n 지도에서 같은 거리가 어떻게 표현되는지 체험해보세요!'
                : 'AR을 통해 다양한 축척을 시각적으로 비교하고,\n축척이 다른 지도에서 같은 거리가 어떻게 표현되는지 체험해보세요!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledMapExpert>
  );
};

export default MapExpert;
