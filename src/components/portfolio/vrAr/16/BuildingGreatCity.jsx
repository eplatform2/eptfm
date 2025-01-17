import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledBuildingGreatCity } from '../../../../assets/styles/portfolio/vrAr/16_BuildingGreatCity/StyledBuildingGreatCity';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';

const BuildingGreatCity = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledBuildingGreatCity>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        mobileMarginTop={'50px'}
        pcMarginBottom={'80px'}
        mobileMarginBottom={'40px'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }}
          field={'AR'}
          title={isMobileTablet ? '나만의 살기 좋은\n 도시 만들기' : '나만의 살기 좋은 도시 만들기'}
        />
      </PortfolioTitleWrap>

      <div className="heroWrapper">
        <div className="introductionWrapper">
          <PortfolioIntroductionTitle
            pcMarginTop={'clamp(10px,6vw,)118px'}
            mobileMarginTop={''}
            style={{ color: '#FFFFFF' }}
            title={'꿈의 도시를 영차 영차 설계!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#FFFFFF' }}
            pcMarginTop={'34px'}
            mobileMarginTop={'5.33vw'}
            description={
              isMobileTablet
                ? '교통, 주거, 상공업, 환경기초시설, 환경, 의료와\n 건강, 사회와 문화 등 다양한 요소를 고려하여\n 최고의 도시를 만들어 보세요. 도시 설계의\n 마스터가 되어 나만의 이상향을 구축해보세요!'
                : '교통, 주거, 상공업, 환경기초시설, 환경, 의료와 건강, \n사회와 문화 등 다양한 요소를 고려하여 최고의 도시를 \n만들어 보세요. 도시 설계의 마스터가 되어 나만의 \n이상향을 구축해보세요!'
            }
          />
        </div>
        <img
          className="satellite"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/${
            isMobileTablet ? 'satellite_m' : 'satellite'
          }.png`}
          alt=""
        />
        <HeroImg
          pcAspectRatio={'1920 / 980'}
          mobileAspectRatio={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <div className="customTextWrapper">
        <CustomText
          text={
            isMobile
              ? '이 프로젝트는 저희 팀이 여러 도시를 탐방하며,\n 각 도시의 매력을 분석하고 적용한 결과물이에요. \n도시에 대한 깊은 이해를 바탕으로,\n 여러분도 자신만의 도시를 설계해보세요.\n도시를 설계하는 과정에서 느끼는 즐거움과\n 도전의 기쁨을 함께 경험해보세요!'
              : isTablet
              ? '이 프로젝트는 저희 팀이 여러 도시를 탐방하며,\n 각 도시의 매력을 분석하고 적용한 결과물이에요. \n도시에 대한 깊은 이해를 바탕으로,\n 여러분도 자신만의 도시를 설계해보세요.\n도시를 설계하는 과정에서 느끼는 즐거움과\n 도전의 기쁨을 함께 경험해보세요!'
              : '이 프로젝트는 저희 팀이 여러 도시를 탐방하며, 각 도시의 매력을 분석하고 적용한 결과물이에요. \n도시에 대한 깊은 이해를 바탕으로, 여러분도 자신만의 도시를 설계해보세요.\n도시를 설계하는 과정에서 느끼는 즐거움과 도전의 기쁨을 함께 경험해보세요!'
          }
        />
      </div>

      <div className="contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/1.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 ‘나만의 살기 좋은 도시 만들기’\n콘텐츠를 통해 도시의 계획자이자 건설자로서\n주어진 자원을 활용하여 지속 가능한 도시를 \n만드는 경험을 할 수 있어요!'
                : isTablet
                ? '학습자들은 ‘나만의 살기 좋은 도시 만들기’\n콘텐츠를 통해 도시의 계획자이자 건설자로서\n주어진 자원을 활용하여 지속 가능한 도시를 \n만드는 경험을 할 수 있어요!'
                : `학습자들은 ‘나만의 살기 좋은 도시 만들기’ 콘텐츠를 통해 도시의 계획자이자 건설자로서 주어진 자원을 활용하여 지속 가능한 도시를 만드는 경험을 할 수 있어요!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '도시 설계의 시작, 도시 계획의 첫걸음!\n살기 좋은 도시의 조건은 무엇일까요?'
                : isTablet
                ? '도시 설계의 시작, 도시 계획의 첫걸음!\n살기 좋은 도시의 조건은 무엇일까요?'
                : `도시 설계의 시작, 도시 계획의 첫걸음! 살기 좋은 도시의 조건은 무엇일까요?`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/2.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/3.png`} />
          <CustomText
            text={
              isMobile
                ? '인프라 구축은 도시의 혈관을 만드는 것!\n길이 시원하게 뚫려있는 도시를 계획해 볼까요?'
                : isTablet
                ? '인프라 구축은 도시의 혈관을 만드는 것!\n길이 시원하게 뚫려있는 도시를 계획해 볼까요?'
                : `인프라 구축은 도시의 혈관을 만드는 것! 길이 시원하게 뚫려있는 도시를 계획해 볼까요?`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '다양한 주거 지역을 설계할 수 있어요.\n고층 아파트, 단독 주택 등 주거지를 \n학습자 마음대로 배치할 수 있죠!'
                : isTablet
                ? '다양한 주거 지역을 설계할 수 있어요.\n고층 아파트, 단독 주택 등 주거지를 \n학습자 마음대로 배치할 수 있죠!'
                : `다양한 주거 지역을 설계할 수 있어요. 고층 아파트, 단독 주택 등 주거지를 학습자 마음대로 배치할 수 있죠!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/5.png`} />
          <CustomText
            text={
              isMobile
                ? '상업 지역은 도시의 심장!\n병원, 영화관, 도서관 등 상업 시설을 배치하고\n경제 활성화 계획을 세워보세요.'
                : isTablet
                ? '상업 지역은 도시의 심장!\n병원, 영화관, 도서관 등 상업 시설을 배치하고\n경제 활성화 계획을 세워보세요.'
                : `상업 지역은 도시의 심장! 병원, 영화관, 도서관 등 상업 시설을 배치하고 경제 활성화 계획을 세워보세요.`
            }
          />
        </WidthImgOneTextsOne>
      </div>
      <div className="customTag">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/group1_1.png`} />
          <CustomText
            style={{ color: '#292929' }}
            text={
              isMobile
                ? 'AR로 직접 눈앞에서 인프라를 확인할 수 있어요.\n학습자들이 만든 도시를 나의 책상위에 띄워\n 자세히 관찰할 수 있답니다!'
                : isTablet
                ? 'AR로 직접 눈앞에서 인프라를 확인할 수 있어요.\n학습자들이 만든 도시를 나의 책상위에 띄워\n 자세히 관찰할 수 있답니다!'
                : 'AR로 직접 눈앞에서 인프라를 확인할 수 있어요.\n학습자들이 만든 도시를 나의 책상위에 띄워 자세히 관찰할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/group1_2.png`} />
          <CustomText
            style={{ color: '#292929' }}
            text={
              isMobile
                ? 'AR로 미래를 내다보는 도시 설계!\n혁신과 발전, 그 끝없는 가능성을 설계해볼까요?'
                : isTablet
                ? 'AR로 미래를 내다보는 도시 설계!\n혁신과 발전, 그 끝없는 가능성을 설계해볼까요?'
                : 'AR로 미래를 내다보는 도시 설계!\n혁신과 발전, 그 끝없는 가능성을 설계해볼까요?'
            }
          />
        </WidthOneContent>
      </div>
      <div className="contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/6.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 앞서 배운 살기 좋은 도시의 요건들을\n 고민해보며 자신만의 도시를 설계할 수 있는\n 기회를 제공받아요.'
                : isTablet
                ? '학습자들은 앞서 배운 살기 좋은 도시의 요건들을\n 고민해보며 자신만의 도시를 설계할 수 있는 기회를 제공받아요.'
                : `학습자들은 앞서 배운 살기 좋은 도시의 요건들을 고민해보며 자신만의 도시를 설계할 수 있는 기회를 제공받아요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '다양한 인프라와 주거, 상업, 산업 지역의\n중요성을 이해하고, 지속 가능한 발전과 \n친환경 도시 설계의 필요성을 학습해요.'
                : isTablet
                ? '다양한 인프라와 주거, 상업, 산업 지역의\n중요성을 이해하고, 지속 가능한 발전과 \n친환경 도시 설계의 필요성을 학습해요.'
                : `다양한 인프라와 주거, 상업, 산업 지역의 중요성을 이해하고, 지속 가능한 발전과 친환경 도시 설계의 필요성을 학습해요.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/7.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/16_BuildingGreatCity/8.png`} />
          <CustomText
            text={
              isMobile
                ? '나만의 살기 좋은 도시를 만드는\n 신나는 여정이 기다리고 있어요!\n환경과 경제, 두 마리 토끼를 잡으며\n최고의 도시를 만들어보세요!'
                : isTablet
                ? '나만의 살기 좋은 도시를 만드는\n 신나는 여정이 기다리고 있어요!\n환경과 경제, 두 마리 토끼를 잡으며\n최고의 도시를 만들어보세요!'
                : `나만의 살기 좋은 도시를 만드는 신나는 여정이 기다리고 있어요! 환경과 경제, 두 마리 토끼를 잡으며\n최고의 도시를 만들어보세요!`
            }
          />
        </WidthImgOneTextsOne>
      </div>
    </StyledBuildingGreatCity>
  );
};

export default BuildingGreatCity;
