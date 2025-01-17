import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import Img from '../../common/Img';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledParentingGuide } from '../../../../assets/styles/portfolio/eLearning/08_ParentingGuide/StyledParentingGuide';
import CustomText from '../../common/CustomText';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';

const ParentingGuide = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledParentingGuide>
      <Breadcrumb />

      <div className="fullScreen heroArea">
        <PortfolioTitleWrap
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          pcMarginTop={'var(--pc-90px)'}
          mobileMarginTop={'var(--mobile-50px)'}
        >
          <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'아동권리보장원'} />
          <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'위탁모를 위한 양육 길잡이'} />
        </PortfolioTitleWrap>
        <HeroImg
          pcAspectRatio={'1920 / 1080'}
          mobileAspectRatio={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>
      <div className="relative">
        <img
          className="backImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/background1.png`}
          alt=""
        />
      </div>
      <div className="introductionWrapper">
        <img
          className="babyHeart"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group2/1.png`}
          alt=""
        />
        <PortfolioIntroductionTitle
          style={{ color: '#4F4F4F' }}
          title={
            isMobileTablet
              ? '위탁모와 입양 부모를 위한\n 실질적이고 따뜻한 양육 가이드,\n아이와 함께하는 새로운 여정의 길잡이'
              : '위탁모와 입양 부모를 위한 실질적이고 따뜻한 양육 가이드,\n아이와 함께하는 새로운 여정의 길잡이'
          }
        />
        <PortfolioIntroductionDescription
          style={{ color: '#4F4F4F' }}
          pcMarginBottom={'var(--pc-200px)'}
          mobileMarginBottom={'var(--mobile-80px)'}
          description={
            isMobileTablet
              ? '우리 팀은 입양과 위탁 보호의 중요한 역할을\n 사회에 알리고, 이를 지원하는 실질적인 정보를\n 제공하기 위해 많은 노력을 했어요.'
              : '우리 팀은 입양과 위탁 보호의 중요한 역할을 사회에 알리고, \n이를 지원하는 실질적인 정보를 제공하기 위해 많은 노력을 했어요.'
          }
        />
      </div>

      <div className="customMaxWidth1060">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/1.png`} />
          <CustomText
            text={
              isMobile
                ? '위탁모와 입양 가정의 특수한 상황과 요구를\n 고려하여, 아이들이 새로운 환경에 잘 적응하고\n 성장할 수 있도록 필요한 지식과 기술을\n 제공해요.'
                : isTablet
                ? '위탁모와 입양 가정의 특수한 상황과 요구를\n 고려하여, 아이들이 새로운 환경에 잘 적응하고\n 성장할 수 있도록 필요한 지식과 기술을 제공해요.'
                : '위탁모와 입양 가정의 특수한 상황과 요구를 고려하여,\n아이들이 새로운 환경에 잘 적응하고 성장할 수 있도록 필요한 지식과 기술을 제공해요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/2.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자는 입양 및 위탁 보호의 개념과 절차,\n그리고 그들이 아동에게 미치는 영향에 대해\n 학습할 수 있어요.'
                : isTablet
                ? '학습자는 입양 및 위탁 보호의 개념과 절차,\n그리고 그들이 아동에게 미치는 영향에 대해\n 학습할 수 있어요.'
                : '학습자는 입양 및 위탁 보호의 개념과 절차,\n그리고 그들이 아동에게 미치는 영향에 대해 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/3.png`} />
          <CustomText
            text={
              isMobile
                ? '법적, 사회적 측면에서 입양과 위탁 보호가\n 갖는 중요성과 역할을 학습하고,\n아동의 정서적 필요를 이해하고,\n 상처받은 마음을 치유하는 법을\n 배울 수 있답니다!'
                : isTablet
                ? '법적, 사회적 측면에서 입양과 위탁 보호가 갖는 중요성과\n 역할을 학습하고, 아동의 정서적 필요를 이해하고,\n 상처받은 마음을 치유하는 법을 배울 수 있답니다!'
                : '법적, 사회적 측면에서 입양과 위탁 보호가 갖는 중요성과 역할을 학습하고,\n아동의 정서적 필요를 이해하고, 상처받은 마음을 치유하는 법을 배울 수 있답니다!'
            }
          />
        </WidthOneContent>

        <div className="backImgTwo">
          <Img
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/${
              isMobileTablet ? 'background2_m' : 'background2'
            }.png`}
          />
        </div>

        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/4.png`} />
          <CustomText
            text={
              isMobile
                ? '국가와 지역사회에서 제공하는 다양한 지원\n 프로그램과 리소스를 안내해요.\n생활 환경을 아이들에게 친숙하게 만드는\n 다양한 팁도 확인해볼 수 있답니다!'
                : isTablet
                ? '국가와 지역사회에서 제공하는 다양한 지원\n 프로그램과 리소스를 안내해요.\n생활 환경을 아이들에게 친숙하게 만드는\n 다양한 팁도 확인해볼 수 있답니다!'
                : '국가와 지역사회에서 제공하는 다양한 지원 프로그램과 리소스를 안내해요.\n생활 환경을 아이들에게 친숙하게 만드는 다양한 팁도 확인해볼 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/5.png`} />
          <CustomText
            text={
              isMobile
                ? '아이들의 발달 단계에 맞는 양육 방법과\n 건강 관리, 교육 및 생활 습관 지도에 대한\n 구체적인 조언을 확인해볼 수 있어요.'
                : isTablet
                ? '아이들의 발달 단계에 맞는 양육 방법과\n 건강 관리, 교육 및 생활 습관 지도에 대한\n 구체적인 조언을 확인해볼 수 있어요.'
                : '아이들의 발달 단계에 맞는 양육 방법과 건강 관리, 교육 및 생활 습관 \n지도에 대한 구체적인 조언을 확인해볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group1/6.png`} />
          <CustomText
            text={
              isMobile
                ? '위탁모와 입양 가정의 특별한 여정,\n 그들의 역할이 얼마나 중요한지 그들이\n 마주하게 되는 도전과 보람을 이해해볼까요?'
                : isTablet
                ? '위탁모와 입양 가정의 특별한 여정,\n 그들의 역할이 얼마나 중요한지 그들이\n 마주하게 되는 도전과 보람을 이해해볼까요?'
                : '위탁모와 입양 가정의 특별한 여정,\n 그들의 역할이 얼마나 중요한지 그들이 마주하게 되는 도전과 보람을 이해해볼까요?'
            }
          />
        </WidthOneContent>
      </div>
      <div className="sole">
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/08_ParentingGuide/group2/2.png`} />
      </div>
    </StyledParentingGuide>
  );
};

export default ParentingGuide;
