import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledSurvivalBag } from '../../../../assets/styles/portfolio/vrAr/19_SurvivalBag/StyledSurvivalBag';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import Img from '../../common/Img';

const SurvivalBag = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledSurvivalBag>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }} field={'VR'} title={'나만의 생존가방 준비하기'} />
      </PortfolioTitleWrap>

      <div className="fullScreen relative">
        <p className="mainTitle NanumSquareEB">
          {isMobileTablet ? (
            <>
              지진 발생!
              <br /> 올바른 대피 방법은 무엇일까?
            </>
          ) : (
            '지진 발생! 올바른 대피 방법은 무엇일까?'
          )}
        </p>
        <HeroImg
          pcAspectRatio={'1920 / 900'}
          mobileAspectRatio={'1024 / 1224'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>
      <div className="fullScreen backImgContainer">
        <img className="backImg" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/backImg.png`} alt="" />

        <WidthOneContent $first>
          <img className="exitImg" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/Vector.png`} alt="" />
          <CustomText
            text={
              isMobile
                ? "'나만의 생존가방 준비하기' 콘텐츠는 현실적인\n 재난 상황을 체험하면서 생존에 필요한 지식과\n 기술을 학습할 수 있도록 설계되었어요.\n 지진 대피 요령을 학습하고 생존가방을 꾸리는\n 과정을 체험해서 진짜 재난 상황에서도\n 당황하지 않고 대처할 수 있답니다!"
                : isTablet
                ? "'나만의 생존가방 준비하기' 콘텐츠는 현실적인 재난 상황을\n 체험하면서 생존에 필요한 지식과 기술을 학습할 수\n 있도록 설계되었어요. 지진 대피 요령을 학습하고\n 생존가방을 꾸리는 과정을 체험해서 진짜 재난 상황에서도\n 당황하지 않고 대처할 수 있답니다!"
                : "'나만의 생존가방 준비하기' 콘텐츠는 현실적인 재난 상황을 체험하면서 생존에 필요한 지식과 기술을\n학습할 수 있도록 설계되었어요. 지진 대피 요령을 학습하고 생존가방을 꾸리는 과정을 체험해서\n진짜 재난 상황에서도 당황하지 않고 대처할 수 있답니다!"
            }
          />
        </WidthOneContent>
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/1.png`} />
          <CustomText
            text={
              isMobile
                ? '우리 팀은 ‘나만의 생존가방 준비하기’ 콘텐츠에\n 재난 상황에서 필요한 생존가방을 준비하는\n 과정을 체험할 수 있도록 설계했어요.\n학습자들은 가상의 생존가방을 구성하면서\n 필수 아이템들을 학습하고, 다양한 재난 상황에\n 맞춘 생존 전략을 익힐 수 있답니다!'
                : isTablet
                ? '우리 팀은 ‘나만의 생존가방 준비하기’ 콘텐츠에\n 재난 상황에서 필요한 생존가방을 준비하는\n 과정을 체험할 수 있도록 설계했어요.\n학습자들은 가상의 생존가방을 구성하면서\n 필수 아이템들을 학습하고, 다양한 재난 상황에\n 맞춘 생존 전략을 익힐 수 있답니다!'
                : '우리 팀은 ‘나만의 생존가방 준비하기’ 콘텐츠에 재난 상황에서 필요한\n생존가방을 준비하는 과정을 체험할 수 있도록 설계했어요.\n학습자들은 가상의 생존가방을 구성하면서 필수 아이템들을 학습하고,\n다양한 재난 상황에 맞춘 생존 전략을 익힐 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/2.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR로 지진 상황을 체험하면서 재난 발생 시\n 생존가방의 중요성을 깨닫을 수 있어요.\n생존가방 구성의 기본 원칙과 필수 아이템들에\n 대해 학습해 볼까요?'
                : isTablet
                ? 'AR로 지진 상황을 체험하면서 재난 발생 시\n 생존가방의 중요성을 깨닫을 수 있어요.\n생존가방 구성의 기본 원칙과 필수 아이템들에\n 대해 학습해 볼까요?'
                : 'AR로 지진 상황을 체험하면서 재난 발생 시 생존가방의 중요성을 깨닫을 수 있어요.\n생존가방 구성의 기본 원칙과 필수 아이템들에 대해 학습해 볼까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/3.png`} />
          <CustomText
            text={
              isMobile
                ? '어떤 생존가방을 챙겨야 할까요?\n학습자들의 필요에 따라 추가해야 할 아이템들을\n 선택해서 올바른 생존가방 아이템을 챙겨보세요!'
                : isTablet
                ? '어떤 생존가방을 챙겨야 할까요?\n학습자들의 필요에 따라 추가해야 할 아이템들을\n 선택해서 올바른 생존가방 아이템을 챙겨보세요!'
                : '어떤 생존가방을 챙겨야 할까요?\n학습자들의 필요에 따라 추가해야 할 아이템들을 선택해서 올바른 생존가방 아이템을 챙겨보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/4.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR을 통해 물, 비상식량, 응급 키트, 손전등,\n 라디오, 방진 마스크, 헬멧 등\n필수 아이템을 생존가방에 추가해야 해요.'
                : isTablet
                ? 'AR을 통해 물, 비상식량, 응급 키트, 손전등, 라디오, 방진\n 마스크, 헬멧 등 필수 아이템을 생존가방에 추가해야 해요.'
                : 'AR을 통해 물, 비상식량, 응급 키트, 손전등, 라디오, 방진 마스크, 헬멧 등\n필수 아이템을 생존가방에 추가해야 해요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/5.png`} />
          <CustomText
            text={
              isMobile
                ? '실내에서 지진이 발생했을 때는 책상 아래로\n 몸을 숨겨야해요! 그리고 우리 주변에서 쉽게\n 찾을 수 있는 비상 물품이 무엇이 있는지\n 같이 살펴보아요.'
                : isTablet
                ? '실내에서 지진이 발생했을 때는 책상 아래로\n 몸을 숨겨야해요! 그리고 우리 주변에서 쉽게 찾을 수 있는\n 비상 물품이 무엇이 있는지 같이 살펴보아요.'
                : '실내에서 지진이 발생했을 때는 책상 아래로 몸을 숨겨야해요!\n그리고 우리 주변에서 쉽게 찾을 수 있는 비상 물품이 무엇이 있는지 같이 살펴보아요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/6.png`} />
          <CustomText
            text={
              isMobile
                ? '물건을 다 챙겼다면, 실외에서 지진이 발생했을\n 때의 대피 요령을 학습할 수 있어요.\nAR 기술을 통해 가방을 챙겨\n 공터로 대피해보세요!'
                : isTablet
                ? '물건을 다 챙겼다면, 실외에서 지진이 발생했을\n 때의 대피 요령을 학습할 수 있어요.\n AR 기술을 통해 가방을 챙겨 공터로 대피해보세요!'
                : '물건을 다 챙겼다면, 실외에서 지진이 발생했을 때의 대피 요령을 학습할 수 있어요.\nAR 기술을 통해 가방을 챙겨 공터로 대피해보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/7.png`} />
          <CustomText
            text={
              isMobile
                ? '신발장 세우기 등 간단한 미니게임을 통해 지진의\n 위험성을 한 번 더 상기시킬 수 있어요.\n무시무시한 지진의 상황, 신발장을 세울 수\n 있도록 노력해보세요!'
                : isTablet
                ? '신발장 세우기 등 간단한 미니게임을 통해 지진의 위험성을\n 한 번 더 상기시킬 수 있어요. 무시무시한 지진의 상황,\n 신발장을 세울 수 있도록 노력해보세요!'
                : '신발장 세우기 등 간단한 미니게임을 통해 지진의 위험성을 한 번 더 상기시킬 수 있어요.\n무시무시한 지진의 상황, 신발장을 세울 수 있도록 노력해보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/19_SurvivalBag/8.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자의 참여를 유도하기 위해 인터랙티브한\n 요소를 많이 추가했답니다!\n지진 대비, 나만의 생존가방 준비하기! 안전을\n 위해 지금 바로 시작해볼까요?'
                : isTablet
                ? '학습자의 참여를 유도하기 위해 인터랙티브한 요소를 많이\n 추가했답니다! 지진 대비, 나만의 생존가방 준비하기!\n 안전을 위해 지금 바로 시작해볼까요?'
                : '학습자의 참여를 유도하기 위해 인터랙티브한 요소를 많이 추가했답니다!\n지진 대비, 나만의 생존가방 준비하기! 안전을 위해 지금 바로 시작해볼까요?'
            }
          />
        </WidthOneContent>
      </div>
    </StyledSurvivalBag>
  );
};

export default SurvivalBag;
