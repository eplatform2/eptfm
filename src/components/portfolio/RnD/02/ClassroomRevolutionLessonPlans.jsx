import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import HeroImg from '../../common/Hero/HeroImg';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledClassroomRevolutionLessonPlans } from '../../../../assets/styles/portfolio/R&D/02_ClassroomRevolutionLessonPlans/StyledClassroomRevolutionLessonPlans';
import Img from '../../common/Img';
import WidthImgTwo from './../../common/WidthImgTwo';
// import useLongTablet from '../../../hooks/useTabletMax1556';

const ClassroomRevolutionLessonPlans = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  // const isLongTablet = useLongTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledClassroomRevolutionLessonPlans>
      <Breadcrumb />

      <div className="fullScreen heroWrapper">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={'교실혁명 강의교안'} />
        </PortfolioTitleWrap>

        <HeroImg
          pcAspectRatio={'1920 / 1000'}
          mobileAspectRatio={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/${
            isMobileTablet ? 'hero_m' : 'hero'
          }.png`}
        />
      </div>

      <div className="fullScreen introductionArea">
        {/* <div> */}
        <span className="leftSpan">AI가 이끄는</span>
        <img
          className="robotImg1"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/1.png`}
          alt=""
        />
        <span className="rightSpan">새로운 학습 시대</span>
        {/* </div> */}
      </div>

      <div className="customTextWrapper">
        <CustomText
          text={
            isMobile
              ? "우리 팀은 '교사가 이끄는 교실혁명'이라는\n 주제의 강의교안을 개발하였습니다.\n 이 강의교안은 AI 기술을 활용하여 학생들에게\n 맞춤형 교육을 제공하며, 교사들이\n 더욱 효과적으로 가르칠 수 있도록 지원합니다."
              : isTablet
              ? "우리 팀은 '교사가 이끄는 교실혁명'이라는\n 주제의 강의교안을 개발하였습니다.\n 이 강의교안은 AI 기술을 활용하여 학생들에게\n 맞춤형 교육을 제공하며, 교사들이\n 더욱 효과적으로 가르칠 수 있도록 지원합니다."
              : "우리 팀은 '교사가 이끄는 교실혁명'이라는 주제의 강의교안을 개발하였습니다. 이 강의교안은\nAI 기술을 활용하여 학생들에게 맞춤형 교육을 제공하며, 교사들이 더욱 효과적으로 가르칠 수 있도록 지원합니다."
          }
        />
      </div>
      <div className="introductionArea2">
        <div className="aiBook">
          <img
            className="ai"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/2_1.png`}
            alt=""
          />
          <img
            className="book"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/2_2.png`}
            alt=""
          />
        </div>
        <CustomText
          text={
            isMobile
              ? '이 강의교안을 만들기 위해 우리 팀은\n AI 알고리즘을 통해 수많은 학습 데이터를\n 분석하고, 이를 바탕으로 최적화된 학습 경로를\n 제시하는 데 많은 시간을 투자했습니다. \n\n우리의 목표는 학생들이 단순히 지식을\n 습득하는 것을 넘어서, 문제 해결과\n 창의적 사고를 촉진하는 데에 있습니다.'
              : isTablet
              ? '이 강의교안을 만들기 위해 우리 팀은 AI 알고리즘을 통해\n 수많은 학습 데이터를 분석하고, 이를 바탕으로 최적화된\n 학습 경로를 제시하는 데 많은 시간을 투자했습니다. \n\n우리의 목표는 학생들이 단순히 지식을 습득하는 것을 넘어서,\n 문제 해결과 창의적 사고를 촉진하는 데에 있습니다.'
              : '이 강의교안을 만들기 위해 우리 팀은 AI 알고리즘을 통해 \n수많은 학습 데이터를 분석하고, 이를 바탕으로 최적화된 \n학습 경로를 제시하는 데 많은 시간을 투자했습니다. \n\n우리의 목표는 학생들이 단순히 지식을 습득하는 것을 \n넘어서, 문제 해결과 창의적 사고를 촉진하는 데에 있습니다.'
          }
        />
        <img
          className="robot2"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/introduction/3.png`}
          alt=""
        />
      </div>
      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          {isMobileTablet ? (
            <>
              <img
                className="leftImg"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group1/1_1_m.png`}
                alt=""
              />
              <img
                className="rightImg"
                src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group1/1_2_m.png`}
                alt=""
              />
            </>
          ) : (
            <>
              <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group1/1.png`} />
            </>
          )}
          <CustomText
            text={
              isMobile
                ? '이론적 내용을 학습한 후, 교사들이 직접 수업\n 계획을 세우고 실습해볼 수 있는 기회를 제공해요.\n피드백을 통해 개선할 점을 발견하고\n 성장할 수 있도록 돕는답니다!'
                : isTablet
                ? '이론적 내용을 학습한 후, 교사들이 직접 수업\n 계획을 세우고 실습해볼 수 있는 기회를 제공해요.\n피드백을 통해 개선할 점을 발견하고\n 성장할 수 있도록 돕는답니다!'
                : '이론적 내용을 학습한 후, 교사들이 직접 수업 계획을 세우고 실습해볼 수 있는 기회를 제공해요.\n피드백을 통해 개선할 점을 발견하고 성장할 수 있도록 돕는답니다!'
            }
          />
        </WidthOneContent>
      </div>

      <div className="smallScreen">
        <div className="twoImgWrapper">
          <WidthImgTwo gap="var(--pc-100px)">
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_1.png`} />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_2.png`} />
          </WidthImgTwo>
          <CustomText
            className="customText customText2"
            text={
              isMobile
                ? '교사들이 즉시 사용할 수 있는\n 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지,\n 평가 루브릭 등을 포함해요.'
                : isTablet
                ? '교사들이 즉시 사용할 수 있는\n 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지,\n 평가 루브릭 등을 포함해요.'
                : '교사들이 즉시 사용할 수 있는 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지, 평가 루브릭 등을 포함해요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <WidthImgTwo gap="var(--pc-100px)">
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_3.png`} />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_4.png`} />
          </WidthImgTwo>

          <CustomText
            className="customText customText2"
            text={
              isMobile
                ? '교사들이 즉시 사용할 수 있는\n 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지,\n 평가 루브릭 등을 포함해요.'
                : isTablet
                ? '교사들이 즉시 사용할 수 있는\n 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지,\n 평가 루브릭 등을 포함해요.'
                : '교사들이 즉시 사용할 수 있는 다양한 디지털 도구와 수업 자료에 대해 설명해요.\n수업 설계에 도움이 되는 이론, 템플릿, 활동지, 평가 루브릭 등을 포함해요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <WidthImgTwo gap="var(--pc-100px)">
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_5.png`} />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_6.png`} />
          </WidthImgTwo>
          <CustomText
            className="customText customText2"
            text={
              isMobile
                ? '교육 전문가와 현직 교사들의\n 협력으로 개발 된 콘텐츠!\n다양한 교사들의 의견을 수렴하고, 교실 현장의\n 실제 필요와 어려움을 반영하려 노력했어요.'
                : isTablet
                ? '교육 전문가와 현직 교사들의 협력으로 개발 된 콘텐츠!\n다양한 교사들의 의견을 수렴하고, 교실 현장의\n 실제 필요와 어려움을 반영하려 노력했어요.'
                : '교육 전문가와 현직 교사들의 협력으로 개발 된 콘텐츠!\n다양한 교사들의 의견을 수렴하고, 교실 현장의 실제 필요와 어려움을 반영하려 노력했어요.'
            }
          />
        </div>
        <div className="twoImgWrapper">
          <WidthImgTwo gap="var(--pc-100px)">
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_7.png`} />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/02_ClassroomRevolutionLessonPlans/group2/group2_8.png`} />
          </WidthImgTwo>
          <CustomText
            className="customText customText2"
            text={
              isMobile
                ? '‘교사가 이끄는 교실혁명 강의교안’은 교사들이\n 미래 교육의 주역으로서 자신의 교육 철학을\n 재검토하고 새로운 도전에 대비하는\n 기회를 제공한답니다!'
                : isTablet
                ? '‘교사가 이끄는 교실혁명 강의교안’은 교사들이\n 미래 교육의 주역으로서 자신의 교육 철학을 재검토하고\n 새로운 도전에 대비하는 기회를 제공한답니다!'
                : '‘교사가 이끄는 교실혁명 강의교안’은 교사들이 미래 교육의 주역으로서 \n자신의 교육 철학을 재검토하고 새로운 도전에 대비하는 기회를 제공한답니다!'
            }
          />
        </div>
      </div>
    </StyledClassroomRevolutionLessonPlans>
  );
};

export default ClassroomRevolutionLessonPlans;
