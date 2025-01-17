import React from 'react';
import styled from 'styled-components';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { config } from '../../../../config';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';
import WidthImgTwo from '../../common/WidthImgTwo';

const StyledSurfaceTreatmentIndustryTextBook = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;

  .heroWrapper {
    position: relative;
  }

  .introductionWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 100px;

    img {
      width: 596px;
      height: 414px;
      margin-right: 100px;
    }
  }

  .ghsWrapper {
    text-align: center;
    margin-bottom: clamp(0px, 10.42vw, 200px);
  }

  .backgroundWrapper {
    position: relative;
  }

  .background {
    position: relative;
    z-index: -1;
    width: 100%;
    display: grid;
  }

  .twoImgWrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    margin-bottom: var(--pc-160px);
    max-width: 1500px;
    width: clamp(0px, 78.13vw, 1500px);
    p {
      text-align: center;
      margin-bottom: 160px;
      color: #292929;
    }
    &:last-child {
      margin-bottom: var(--pc-200px);
    }
  }
  .marginTop200 {
    margin-top: 200px;
  }
`;

const SurfaceTreatmentIndustryTextBook = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledSurfaceTreatmentIndustryTextBook>
      <Breadcrumb />
      <div className="heroWrapper">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            top: 'clamp(0px, 17.19vw, 330px)',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }} organization={'환경부'} />
          <PortfolioFieldTitle style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }} title={config.rnd3} />
        </PortfolioTitleWrap>
        <HeroImg
          pcHeight={'1920 / 1000'}
          // mobileHeight={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/${
            isMobileTablet ? 'hero_m' : 'hero'
          }.png`}
        />
      </div>

      <div className="centerAlignment">
        <PortfolioIntroductionTitle
          pcMarginTop={'var(--pc-200px)'}
          mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
          style={{ color: '#292929' }}
          title={'표면처리 업종 : 전문가로 거듭나는 실무 가이드'}
        />
        <PortfolioIntroductionDescription
          style={{ color: '#767676' }}
          pcMarginTop={'34px'}
          pcMarginBottom={'var(--pc-100px)'}
          mobileMarginBottom={'var(--mobile-80px)'}
          description={
            isMobileTablet
              ? '표면처리 업종 종사자를 위한 교재는 현장에서 바로 적용할 수 있는 실무 중심의 가이드를 제공해요.\n다양한 표면처리 기술, 안전관리 등을 체계적으로 다루어 업계 전문가로 성장할 수 있도록 도와준답니다!'
              : '표면처리 업종 종사자를 위한 교재는 현장에서 바로 적용할 수 있는 실무 중심의 가이드를 제공해요.\n다양한 표면처리 기술, 안전관리 등을 체계적으로 다루어 업계 전문가로 성장할 수 있도록 도와준답니다!'
          }
        />
      </div>

      <div className="introductionWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/intro.png`} alt="" />
        <div>
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            // pcMarginBottom={'clamp(0px, 0.73vw, 14px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '우리 팀은 표면처리 업종과 화학물질 관리 분야에서 최신 정보를\n반영하기 위해서 폭넓은 연구와 데이터를 수집했어요.\n국내외의 관련 법규, 산업 동향, 최신 기술을 심도 있게 분석하여 교재의 \n내용이 실무에 직접 적용 될 수 있도록 설계했답니다!\n\n우리 팀의 열정과 노력이 담긴 이 교재가, 여러분의 현장에서 실질적인\n가이드가 되고, 더 나은 작업 환경을 만드는 데 기여하길 기대합니다!'
            }
          />
        </div>
      </div>

      <div className="ghsWrapper">
        <img
          className="ghs"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/ghs.png`}
          alt=""
        />
      </div>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_1.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_2.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '화학물질의 정의와 필요성을 설명하는 그래픽과 함께 주요 개념을 간략히 소개해요.\n화학물질을 물리적 상태, 화학적 특성, 사용 용도에 따라 분류하는 표와 일러스트를 제공한답니다!'
              : '화학물질의 정의와 필요성을 설명하는 그래픽과 함께 주요 개념을 간략히 소개해요.\n화학물질을 물리적 상태, 화학적 특성, 사용 용도에 따라 분류하는 표와 일러스트를 제공한답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_3.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '일상적이고 산업적인 화학물질 노출 사례들을 이미지와 함께 설명해요.\n노출 시 중증도를 경미함, 중간, 심각으로 분류하는 그래프와 설명이 포함되었어요.\n각각의 화학물질은 노출 시 다른 영향을 미친답니다.\n경미한 경우에서부터 심각한 상태까지의 대처법을 숙지하고 대비하세요!'
              : '일상적이고 산업적인 화학물질 노출 사례들을 이미지와 함께 설명해요.\n노출 시 중증도를 경미함, 중간, 심각으로 분류하는 그래프와 설명이 포함되었어요.\n각각의 화학물질은 노출 시 다른 영향을 미친답니다.\n경미한 경우에서부터 심각한 상태까지의 대처법을 숙지하고 대비하세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_5.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_6.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '화학물질을 안전하게 보관하고 취급하는 시설의 구조와 작동 원리를 \n어떻게 하면 잘 전달 할 수 있을까 고민을 수십번, 수백번 했답니다!\n법적 준수 사항과 위반 시 발생할 수 있는 문제를 시물레이션으로 친절하게 설명해요.'
              : '화학물질을 안전하게 보관하고 취급하는 시설의 구조와 작동 원리를 \n어떻게 하면 잘 전달 할 수 있을까 고민을 수십번, 수백번 했답니다!\n법적 준수 사항과 위반 시 발생할 수 있는 문제를 시물레이션으로 친절하게 설명해요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_7.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/1/1_8.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '국내외 화학사고 사례를 나열하고 각 사고의 원인과 결과를 분석하는 자료를 제공해요.\n화학사고는 사전 예방이 최선의 방어랍니다!\n과거 사례를 통해 사고의 원인을 분석하고 교훈을 얻어보세요!'
              : '국내외 화학사고 사례를 나열하고 각 사고의 원인과 결과를 분석하는 자료를 제공해요.\n화학사고는 사전 예방이 최선의 방어랍니다!\n과거 사례를 통해 사고의 원인을 분석하고 교훈을 얻어보세요!'
          }
        />
      </WidthOneContent>

      <div className="twoImgWrapper marginTop200">
        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/1_1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/1_2.png`} />
        </WidthImgTwo>
        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/1_3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/1_4.png`} />
        </WidthImgTwo>
        <CustomText
          className="customText customText2"
          text={
            isMobileTablet
              ? '교재 개발에는 화학, 안전 관리, 산업 공정 전문가들이 참여하여 이론적 지식과 현장 경험을 조화롭게 담았어요.\n각자의 전문성을 바탕으로 실무자들이 직면할 수 있는 다양한 상황을 반영하고,\n그에 대한 실질적인 해결책과 내용들을 제시할 수 있도록 많은 노력을 기울였답니다!'
              : '교재 개발에는 화학, 안전 관리, 산업 공정 전문가들이 참여하여 이론적 지식과 현장 경험을 조화롭게 담았어요.\n각자의 전문성을 바탕으로 실무자들이 직면할 수 있는 다양한 상황을 반영하고,\n그에 대한 실질적인 해결책과 내용들을 제시할 수 있도록 많은 노력을 기울였답니다!'
          }
        />

        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/2_1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/2_2.png`} />
        </WidthImgTwo>
        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/2_3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/2_4.png`} />
        </WidthImgTwo>
        <CustomText
          className="customText customText2"
          text={
            isMobileTablet
              ? '교재의 모든 내용이 실무에 직접적으로 도움이 될 수 있도록 하는 데 주안점을 두었어요.\n내용의 정확성 및 실용성을 지속적으로 개선하고 \n실무자의 입장에서 필요한 정보를 빠짐없이 담기 위해 반복적인 검토와 수정 과정을 거쳤어요.'
              : '교재의 모든 내용이 실무에 직접적으로 도움이 될 수 있도록 하는 데 주안점을 두었어요.\n내용의 정확성 및 실용성을 지속적으로 개선하고 \n실무자의 입장에서 필요한 정보를 빠짐없이 담기 위해 반복적인 검토와 수정 과정을 거쳤어요.'
          }
        />

        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/3_1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/3_2.png`} />
        </WidthImgTwo>
        <WidthImgTwo gap="var(--pc-100px)">
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/3_3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/2/3_4.png`} />
        </WidthImgTwo>
        <CustomText
          className="customText customText2"
          text={
            isMobileTablet
              ? '내용의 전달력을 극대화하기 위해 시각적 요소에도 많은 공을 들였어요.\n학습자가 쉽게 내용을 이해하고 기억할 수 있도록 직관적이고 깔끔한 화면 구성을 만들었어요.\n우리 팀의 열정과 노력이 담긴 이 교재가 더 나은 작업 환경을 만드는 데 기여하길 기대해요!'
              : '내용의 전달력을 극대화하기 위해 시각적 요소에도 많은 공을 들였어요.\n학습자가 쉽게 내용을 이해하고 기억할 수 있도록 직관적이고 깔끔한 화면 구성을 만들었어요.\n우리 팀의 열정과 노력이 담긴 이 교재가 더 나은 작업 환경을 만드는 데 기여하길 기대해요!'
          }
        />
      </div>

      <div className="backgroundWrapper">
        <img
          className="background"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/detail/03_SurfaceTreatmentIndustryTextBook/background.png`}
          alt=""
        />
      </div>
    </StyledSurfaceTreatmentIndustryTextBook>
  );
};

export default SurfaceTreatmentIndustryTextBook;
