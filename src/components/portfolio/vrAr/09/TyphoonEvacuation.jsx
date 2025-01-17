import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledTyphoonEvacuation } from '../../../../assets/styles/portfolio/vrAr/09_TyphoonEvacuation/StyledTyphoonEvacuation';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';

const TyphoonEvacuation = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();
  const isTablet = useTablet();
  return (
    <StyledTyphoonEvacuation>
      <Breadcrumb />

      <PortfolioTitleWrap
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
        style={{ display: 'grid', justifyContent: 'center' }}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{
            color: '#48C2C5',
            fontFamily: 'NanumSquareEB',
            whiteSpace: 'nowrap',
          }}
          field={'VR'}
          title={'태풍 대피요령 알아보기'}
        />
      </PortfolioTitleWrap>

      <div className="relative">
        <div className="introductionWrapper">
          <PortfolioIntroductionTitle
            pcMarginTop={'clamp(0px, 6.15vw, 118px)'}
            mobileMarginTop={'var(--mobile-60px)'}
            style={{ color: '#FFFFFF' }}
            title={'태풍을 대비하는 생존 가이드!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#FFFFFF' }}
            mobileMarginTop={'5.33vw'}
            description={
              isMobileTablet
                ? '태풍의 강도에 따른 도시 피해를 간접 체험하고,\n 대피 요령을 학습해보세요.\n자연재해 발생 시 안전하게 피해를\n 최소화하는 방법을 배울 수 있습니다.'
                : '태풍의 강도에 따른 도시 피해를 간접 체험하고, 대피 요령을 학습해보세요.\n자연재해 발생 시 안전하게 피해를 최소화하는 방법을 배울 수 있습니다.'
            }
          />
        </div>

        <HeroImg
          pcAspectRatio={'1920 / 1080'}
          mobileAspectRatio={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/${isMobileTablet ? 'main_m' : 'main'}.png`}
        />
      </div>

      <div className="textWrapper">
        <CustomText
          text={
            isMobileTablet
              ? "'태풍 대피요령 알아보기'를 개발하면서,\n 우리 팀은 가상의 태풍 속에서\n 우산을 펴고 다녔죠.\n여러분도 가상 태풍을 체험하며,\n 안전한 대피 요령을 익혀보세요!"
              : "'태풍 대피요령 알아보기'를 개발하면서, 우리 팀은 가상의 태풍 속에서 우산을 펴고 다녔죠.\n여러분도 가상 태풍을 체험하며, 안전한 대피 요령을 익혀보세요!"
          }
        />
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/1.png`} />
          <CustomText
            text={
              isMobile
                ? '“태풍 대피요령 알아보기” 콘텐츠 제작을 하며\n 우리는 태풍의 강도와 그에 따른 피해 상황을\n 생생하게 재현하려고 많은 노력을 쏟아\n 부었어요.\n가상의 태풍 상황 속에서 실제 대피 요령을\n 배우며, 안전한 대피 방법을 체험할 수 있도록\n 구성했답니다!'
                : isTablet
                ? '“태풍 대피요령 알아보기” 콘텐츠 제작을 하며\n 우리는 태풍의 강도와 그에 따른 피해 상황을\n 생생하게 재현하려고 많은 노력을 쏟아 부었어요.\n가상의 태풍 상황 속에서 실제 대피 요령을\n 배우며, 안전한 대피 방법을 체험할 수 있도록\n 구성했답니다!'
                : '“태풍 대피요령 알아보기” 콘텐츠 제작을 하며 우리는 태풍의 강도와\n그에 따른 피해 상황을 생생하게 재현하려고 많은 노력을 쏟아 부었어요.\n가상의 태풍 상황 속에서 실제 대피 요령을 배우며, 안전한 대피 방법을 체험할 수 있도록 구성했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/2.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '태풍 ‘제비’는 세찬 바람을 동반하여\n 나무를 흔들기 시작했어요.\n바람이 휘몰아치는 ‘어빙’은 물건들을\n 이리저리 날릴 만큼 위험한 태풍이었죠.'
                : '태풍 ‘제비’는 세찬 바람을 동반하여 나무를 흔들기 시작했어요.\n바람이 휘몰아치는 ‘어빙’은 물건들을 이리저리 날릴 만큼 위험한 태풍이었죠.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/3.png`} />
          <CustomText
            text={
              isMobile
                ? '곤파스는 정말 강력한 태풍이었어요.\n 너무 강력해서 전봇대가 쓰러질 정도였어요.\n매미는 그야말로 초강력! 도시 전체가\n 휘청거렸죠.'
                : isTablet
                ? '곤파스는 정말 강력한 태풍이었어요.\n 너무 강력해서 전봇대가 쓰러질 정도였어요.\n매미는 그야말로 초강력! 도시 전체가 휘청거렸죠.'
                : '곤파스는 정말 강력한 태풍이었어요. 너무 강력해서 전봇대가 쓰러질 정도였어요.\n매미는 그야말로 초강력! 도시 전체가 휘청거렸죠.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/4.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '학습자는 캐릭터를 직접 움직여서\n 태풍의 강도별 피해를 관찰 할 수 있고,\n피해를 최소화 하기 위해\n 다양한 미션을 해결해볼 수 있어요.'
                : '학습자는 캐릭터를 직접 움직여서 태풍의 강도별 피해를 관찰 할 수 있고,\n피해를 최소화 하기 위해 다양한 미션을 해결해볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/5.png`} />
          <CustomText
            text={
              isMobile
                ? '자전거나 입간판 처럼 날아갈 수 있는 물건을\n 단단히 묶어 고정하고 쓰러진 전봇대,\n 전깃줄 등 감전의 위험이 있는 사물들 만지지\n 않기 그리고 낙하물이 있는 아래로 걷지 않기 등\n 외부 대피 방안에 대해 자연스럽게 학습할 수 \n있어요.'
                : isTablet
                ? '자전거나 입간판 처럼 날아갈 수 있는 물건을\n 단단히 묶어 고정하고 쓰러진 전봇대,\n 전깃줄 등 감전의 위험이 있는 사물들 만지지 않기\n그리고 낙하물이 있는 아래로 걷지 않기 등 외부\n 대피 방안에 대해 자연스럽게 학습할 수 있어요.'
                : '자전거나 입간판 처럼 날아갈 수 있는 물건을 단단히 묶어 고정하고\n쓰러진 전봇대, 전깃줄 등 감전의 위험이 있는 사물들 만지지 않기\n그리고 낙하물이 있는 아래로 걷지 않기 등 외부 대피 방안에 대해 자연스럽게 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/09_TyphoonEvacuation/6.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '모든 퀘스트를 완료하면,\n 행정안전부의 태풍대피요령에 대해서도\n 학습할 수 있어요. 안전하게 대피하는\n 법을 익히며, 자연의 힘을 체험해보는\n 모험을 시작해보세요!'
                : '모든 퀘스트를 완료하면, 행정안전부의 태풍대피요령에 대해서도 학습할 수 있어요.\n안전하게 대피하는 법을 익히며, 자연의 힘을 체험해보는 모험을 시작해보세요!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledTyphoonEvacuation>
  );
};

export default TyphoonEvacuation;
