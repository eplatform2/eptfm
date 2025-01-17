import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledInformationDisclosure } from '../../../../assets/styles/portfolio/eLearning/05_InformationDisclosure/StyledInformationDisclosure';
import Img from '../../common/Img';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from './../../common/CustomText';

const InformationDisclosure = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledInformationDisclosure>
      <Breadcrumb />

      <div className="portfolioTitleWrapper">
        <PortfolioTitleWrap
          style={{
            position: isMobileTablet ? '' : 'absolute',
            display: 'grid',
            justifyContent: 'center',
          }}
          pcMarginTop={'130px'}
          mobileMarginTop={'var(--mobile-50px)'}
          mobileMarginBottom={'var(--mobile-8px)'}
        >
          <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }}
            title={'정보공시 입력 지침 안내와\n 시스템매뉴얼'}
          />
        </PortfolioTitleWrap>
      </div>

      <div className="heroImgWrapper">
        <HeroImg
          pcAspectRatio={'1526 / 1074'}
          mobileAspectRatio={'375 / 327'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/${
            isMobileTablet ? 'hero_m' : 'hero'
          }.png`}
        />
      </div>

      <div className="introductionWrapper">
        <PortfolioIntroductionTitle
          style={{ color: '#4F4F4F' }}
          title={isMobileTablet ? '정보공시로\n 투명한 학교 운영을 알아보세요!' : '정보공시로 투명한 학교 운영을 알아보세요!'}
        />
        <PortfolioIntroductionDescription
          style={{ color: '#767676' }}
          description={
            isMobile
              ? '학교의 다양한 정보를 쉽게 이해하고 분석하는\n 방법을 익히며, 학생, 학부모, 교사가\n 함께 투명하고 효율적인 학교 운영에\n 참여할 수 있도록 돕는 콘텐츠에요.'
              : isTablet
              ? '학교의 다양한 정보를 쉽게 이해하고 분석하는 방법을 익히며,\n 학생, 학부모, 교사가 함께 투명하고 효율적인 학교 운영에\n 참여할 수 있도록 돕는 콘텐츠에요.'
              : '학교의 다양한 정보를 쉽게 이해하고 분석하는 방법을 익히며,\n학생, 학부모, 교사가 함께 투명하고 효율적인 학교 운영에 참여할 수 있도록 돕는 콘텐츠에요.'
          }
        />
      </div>
      <div className="customMaxWidth1257">
        <WidthOneContent>
          <Img
            pcMaxWidth={'1257'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group1_1.png`}
          />
          <CustomText
            text={
              isMobile
                ? '이 콘텐츠는 정보공시의 정의와 필요성에 대해\n 설명해요. 정보공시는 학교의 투명성과\n 신뢰성을 높이고, 교육의 질을 향상시키는 데\n 중요한 역할을 해요!'
                : isTablet
                ? '이 콘텐츠는 정보공시의 정의와 필요성에 대해 설명해요.\n 정보공시는 학교의 투명성과 신뢰성을 높이고,\n 교육의 질을 향상시키는 데 중요한 역할을 해요!'
                : '이 콘텐츠는 정보공시의 정의와 필요성에 대해 설명해요.\n정보공시는 학교의 투명성과 신뢰성을 높이고, 교육의 질을 향상시키는 데 중요한 역할을 해요!'
            }
          />
        </WidthOneContent>

        <WidthImgOneTextsOne>
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_1.png`} />
          <CustomText
            text={
              isMobile
                ? '우리 팀은 인터랙티브 모듈을 통해 학습자가\n 정보공시의 사례화 효과를 시각적으로\n 학습할 수 있도록 콘텐츠를 제작하려\n 많은 노력을 기울였어요.'
                : isTablet
                ? '우리 팀은 인터랙티브 모듈을 통해 학습자가\n 정보공시의 사례화 효과를 시각적으로 학습할 수 있도록\n 콘텐츠를 제작하려 많은 노력을 기울였어요.'
                : `우리 팀은 인터랙티브 모듈을 통해 학습자가 정보공시의 사례화 효과를 시각적으로 학습할 수 있도록 콘텐츠를 제작하려 많은 노력을 기울였어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '학교의 조직 구조, 교직원 현황, 학급 편성,\n주요 교육 활동 등 학교 운영에 관한\n정보를 공개한답니다!'
                : isTablet
                ? '학교의 조직 구조, 교직원 현황, 학급 편성, 주요 교육\n 활동 등 학교 운영에 관한 정보를 공개한답니다!'
                : `학교의 조직 구조, 교직원 현황, 학급 편성, 주요 교육 활동 등 학교 운영에 관한 정보를 공개한답니다!`
            }
          />
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_2.png`} />
        </WidthImgOneTextsOne>

        <WidthImgOneTextsOne>
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_3.png`} />
          <CustomText
            text={
              isMobile
                ? '가상의 학교 운영 데이터를 분석하고,\n이를 바탕으로 학교 운영의 투명성을 확인하는\n 활동을 진행할 수 있어요.'
                : isTablet
                ? '가상의 학교 운영 데이터를 분석하고,\n이를 바탕으로 학교 운영의 투명성을 확인하는\n 활동을 진행할 수 있어요.'
                : `가상의 학교 운영 데이터를 분석하고, 이를 바탕으로 학교 운영의 투명성을 확인하는 활동을 진행할 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '뿐만 아니라 학교의 전반적인 운영 상황,\n교육 성과, 학생의 학업 성취도 등을 투명하게\n 공개하고, 이를 통해 교육의 질을 높이는 데\n 목적을 두고 있음을 뚜렷하게 확인할 수 있답니다!'
                : isTablet
                ? '뿐만 아니라 학교의 전반적인 운영 상황,\n교육 성과, 학생의 학업 성취도 등을 투명하게\n 공개하고, 이를 통해 교육의 질을 높이는 데\n 목적을 두고 있음을 뚜렷하게 확인할 수 있답니다!'
                : `뿐만 아니라 학교의 전반적인 운영 상황, 교육 성과, 학생의 학업 성취도 등을 투명하게 공개하고, 이를 통해 교육의 질을 높이는 데 목적을 두고 있음을 뚜렷하게 확인할 수 있답니다!`
            }
          />
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_5.png`} />
          <CustomText
            text={
              isMobile
                ? '해당 정보공시를 입력하는 분들을 위해\n세세한 주의사항들도 설명해준답니다!'
                : isTablet
                ? '해당 정보공시를 입력하는 분들을 위해\n세세한 주의사항들도 설명해준답니다!'
                : `해당 정보공시를 입력하는 분들을 위해 세세한 주의사항들도 설명해준답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobile
                ? '다양한 학생 지원 프로그램의 효과를 분석하고,\n 이를 통해 학생 복지 향상 방안을\n모색할 수 있어요.'
                : isTablet
                ? '다양한 학생 지원 프로그램의 효과를 분석하고,\n 이를 통해 학생 복지 향상 방안을 모색할 수 있어요.'
                : `다양한 학생 지원 프로그램의 효과를 분석하고, 이를 통해 학생 복지 향상 방안을 모색할 수 있어요.`
            }
          />
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_6.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_7.png`} />
          <CustomText
            text={
              isMobile
                ? '학부모와 지역사회의 참여와\n 협력의 중요성에 대해도 알 수 있어요.'
                : isTablet
                ? '학부모와 지역사회의 참여와\n 협력의 중요성에 대해도 알 수 있어요.'
                : `학부모와 지역사회의 참여와 협력의 중요성에 대해도 알 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <CustomText
            text={
              isMobile
                ? '다양한 학생 지원 프로그램의 효과를 분석하고,\n 이를 통해 학생 복지 향상 방안을\n모색할 수 있어요!'
                : isTablet
                ? '다양한 학생 지원 프로그램의 효과를 분석하고,\n 이를 통해 학생 복지 향상 방안을 모색할 수 있어요!'
                : `다양한 학생 지원 프로그램의 효과를 분석하고, 이를 통해 학생 복지 향상 방안을 모색할 수 있어요!`
            }
          />
          <Img pcMaxWidth={'700'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/05_InformationDisclosure/group2_8.png`} />
        </WidthImgOneTextsOne>
      </div>
    </StyledInformationDisclosure>
  );
};

export default InformationDisclosure;
