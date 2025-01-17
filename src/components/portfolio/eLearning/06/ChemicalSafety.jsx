import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomWrapImg from '../../common/CustomWrapImg';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledChemicalSafety } from '../../../../assets/styles/portfolio/eLearning/06_ChemicalSafety/StyledChemicalSafety';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';

const ChemicalSafety = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledChemicalSafety>
      <div className="heroArea">
        <Breadcrumb style={{ position: 'absolute' }} />

        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          pcMarginTop={'180px'}
          mobileMarginTop={'var(--mobile-50px)'}
        >
          <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'화학물질안전원'} />
          <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'화학물질안전에 대하여'} />
        </PortfolioTitleWrap>

        <div className="introductionWrapper">
          <PortfolioIntroductionTitle
            style={{ color: '#ffffff' }}
            title={
              isMobileTablet
                ? '화학물질의 특성과 위험성,\n 안전한 사용방법을 학습하며\n실질적인 안전 관리 지식을 쌓아보세요!'
                : '화학물질의 특성과 위험성, 안전한 사용방법을 학습하며\n실질적인 안전 관리 지식을 쌓아보세요!'
            }
          />
          <PortfolioIntroductionDescription
            style={{ color: '#ffffff' }}
            pcMarginTop={'34px'}
            mobileMarginTop={'5.33vw'}
            description={
              isMobile
                ? '이 콘텐츠는 화학물질의 특성과 위험성, 안전한\n 사용 방법을 학습할 수 있도록 설계되었어요.'
                : isTablet
                ? '이 콘텐츠는 화학물질의 특성과 위험성, \n안전한 사용 방법을 학습할 수 있도록 설계되었어요.'
                : '이 콘텐츠는 화학물질의 특성과 위험성, \n안전한 사용 방법을 학습할 수 있도록 설계되었어요.'
            }
          />
        </div>

        <HeroImg
          pcAspectRatio={'1920 / 1967'}
          mobileAspectRatio={'375 / 668'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <WidthOneContent $first>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group1/1.png`} />
        <CustomText
          text={
            isMobile
              ? '우리팀은 학습자가 산업 현장에서나\n 일상생활에서 화학물질을 안전하게\n 다룰 수 있는 지식과 기술을 이해하고\n 사고 예방과 안전 관리를 위한 실질적인\n 정보를 습득할 수 있도록 설계했어요.'
              : isTablet
              ? '우리팀은 학습자가 산업 현장에서나 일상생활에서\n 화학물질을 안전하게 다룰 수 있는 지식과 기술을\n 이해하고 사고 예방과 안전 관리를 위한\n 실질적인 정보를 습득할 수 있도록 설계했어요.'
              : '우리팀은 학습자가 산업 현장에서나 일상생활에서 화학물질을\n안전하게 다룰 수 있는 지식과 기술을 이해하고\n사고 예방과 안전 관리를 위한 실질적인 정보를 습득할 수 있도록 설계했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group1/2.png`} />
        <CustomText
          text={
            isMobile
              ? '학습자의 이해를 돕기 위해 적절한 이미지와\n 그래픽을 풍부하게 사용했어요.\n화학물질의 위험성 표기를 설명할 때는\n 아이콘으로 시각적으로 보여주고,\n응급처치 방법을 설명할 때는 단계별로 사진과\n 일러스트를 활용했답니다!'
              : isTablet
              ? '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을\n 풍부하게 사용했어요. 화학물질의 위험성 표기를\n 설명할 때는 아이콘으로 시각적으로 보여주고,\n응급처치 방법을 설명할 때는 단계별로 사진과\n 일러스트를 활용했답니다!'
              : '학습자의 이해를 돕기 위해 적절한 이미지와 그래픽을 풍부하게 사용했어요.\n화학물질의 위험성 표기를 설명할 때는 아이콘으로 시각적으로 보여주고,\n응급처치 방법을 설명할 때는 단계별로 사진과 일러스트를 활용했답니다!'
          }
        />
      </WidthOneContent>
      <div className="fullScreen relative">
        <img
          className="side1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/side/${
            isMobileTablet ? 'side1' : 'side1_pc'
          }.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group1/3.png`} />
        <CustomText
          text={
            isMobile
              ? '학습 내용은 다양한 형태로 구성되어\n 학습자의 지루함을 줄여줘요.\n텍스트 설명 외에도 사진, 애니메이션,\n 인터랙티브 시뮬레이션 등을 포함하여 학습자가\n 몰입할 수 있는 환경을 제공해요.'
              : isTablet
              ? '학습 내용은 다양한 형태로 구성되어 학습자의 지루함을\n 줄여줘요. 텍스트 설명 외에도 사진, 애니메이션,\n 인터랙티브 시뮬레이션 등을 포함하여 학습자가\n 몰입할 수 있는 환경을 제공해요.'
              : '학습 내용은 다양한 형태로 구성되어 학습자의 지루함을 줄여줘요.\n텍스트 설명 외에도 사진, 애니메이션, 인터랙티브 시뮬레이션 등을 포함하여\n학습자가 몰입할 수 있는 환경을 제공해요.'
          }
        />
      </WidthOneContent>
      <div className="fullScreen group2Area">
        <div className="nationFlag">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/nationalFlag.png`} />
          {/* <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/korea.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/nepal.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/vietnam.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/indonesia.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/cambodia.png`} /> */}
        </div>

        <div className="grid">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/2.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group2/4.png`} />
        </div>
        <div className="customPadding">
          <CustomText
            style={{ textAlign: 'center' }}
            text={
              isMobile
                ? '한국어 뿐만 아니라 캄보디아어, 네팔어,\n 인도네시아어로도 학습할 수 있어요.\n우리 팀은 다양한 언어를 사용하는 학습자들이\n 언어의 장벽 없이 화학물질 안전 지식을\n 습득할 수 있도록 지원하기 위해 노력한답니다!'
                : isTablet
                ? '한국어 뿐만 아니라 캄보디아어, 네팔어,\n 인도네시아어로도 학습할 수 있어요.\n우리 팀은 다양한 언어를 사용하는 학습자들이\n 언어의 장벽 없이 화학물질 안전 지식을\n 습득할 수 있도록 지원하기 위해 노력한답니다!'
                : '한국어 뿐만 아니라 캄보디아어, 네팔어, 인도네시아어로도 학습할 수 있어요.\n우리 팀은 다양한 언어를 사용하는 학습자들이 언어의 장벽 없이\n화학물질 안전 지식을 습득할 수 있도록 지원하기 위해 노력한답니다!'
            }
          />
        </div>
      </div>
      <WidthOneContent $first>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group1/4.png`} />
        <CustomText
          text={
            isMobile
              ? '위험성 분류와 표기법, 응급처치 방법 등의\n 실용적인 내용은 현장에서 바로 적용할 수 있도록\n 구체적으로 설명하고, 시청각 자료를 풍부하게\n 활용하여 이해를 도울 수 있도록 설계했어요.'
              : isTablet
              ? '위험성 분류와 표기법, 응급처치 방법 등의\n 실용적인 내용은 현장에서 바로 적용할 수 있도록\n 구체적으로 설명하고, 시청각 자료를 풍부하게\n 활용하여 이해를 도울 수 있도록 설계했어요.'
              : '위험성 분류와 표기법, 응급처치 방법 등의 실용적인 내용은\n현장에서 바로 적용할 수 있도록 구체적으로 설명하고,\n시청각 자료를 풍부하게 활용하여 이해를 도울 수 있도록 설계했어요.'
          }
        />
      </WidthOneContent>
      <div className="fullScreen relative">
        <img className="side2" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/side/side2.png`} alt="" />
      </div>
      <WidthOneContent $last>
        <Img pcMaxWidth={'1260'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/group1/5.png`} />
        <CustomText
          text={
            isMobile
              ? '‘화학물질 안전’ 콘텐츠는 단순한 교육을 넘어,\n 안전한 미래를 만들어 가는 첫걸음이에요.\n이 콘텐츠를 통해 자신의 주변과\n 산업 현장에서의 안전을 지켜볼까요?'
              : isTablet
              ? '‘화학물질 안전’ 콘텐츠는 단순한 교육을 넘어,\n 안전한 미래를 만들어 가는 첫걸음이에요.\n이 콘텐츠를 통해 자신의 주변과\n 산업 현장에서의 안전을 지켜볼까요?'
              : '‘화학물질 안전’ 콘텐츠는 단순한 교육을 넘어, 안전한 미래를 만들어 가는 첫걸음이에요.\n이 콘텐츠를 통해 자신의 주변과 산업 현장에서의 안전을 지켜볼까요?'
          }
        />
      </WidthOneContent>

      <CustomWrapImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/detail/06_ChemicalSafety/footer.png`} />
    </StyledChemicalSafety>
  );
};

export default ChemicalSafety;
