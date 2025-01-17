import React, { useState } from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import { StyledEcosystemRestoration } from '../../../../assets/styles/portfolio/vrAr/02_EcosystemRestoration/StyledEcosystemRestoration';
import Img from '../../common/Img';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import CustomText from '../../common/CustomText';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';

const EcosystemRestoration = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useResponsiveMax1024();
  return (
    <>
      <Breadcrumb />
      <StyledEcosystemRestoration>
        <div className="smallScreen titleWrap">
          <PortfolioTitleWrap $isLoaded={isLoaded} pcMarginBottom={'80px'} mobileMarginTop={'50px'} mobileMarginBottom={'40px'}>
            <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
            <PortfolioFieldTitle
              style={{
                color: '#48c2c5',
                fontFamily: 'NanumSquareEB',
                whiteSpace: 'nowrap',
              }}
              field={'AR'}
              title={'미션! 생태계를 복원하라'}
            />
          </PortfolioTitleWrap>
        </div>
        <div className="heroWrapper">
          <HeroImg
            pcHeight={'1260 / 760'}
            tabletHeight={''}
            mobileHeight={'375 / 226'}
            maxwidth={'1260px'}
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/${isMobile ? '1_mobile' : '1'}.png`}
          />
        </div>

        <img
          className="eagleCloud"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/eagleCloud.png`}
          alt=""
        />
        <div className="introductionArea">
          <div className="left">
            <div className="introduction">
              <PortfolioIntroductionTitle title={'늑대의 귀환, 자연의 균형을 되찾다!'} />
              <PortfolioIntroductionDescription
                pcMarginTop={'60px'}
                mobileMarginTop={'5.33vw'}
                description={'옐로스톤 국립공원에서 펼쳐지는 생태계 복원의\n 대서사시 자연의 아름다움을 다시 꽃피우세요!'}
              />
            </div>
          </div>
          <div className="right">
            <img
              className="animals"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/animals.png`}
              alt=""
            />
            <img
              className="wolf"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/group/2_wolf.png`}
              alt=""
            />
            <img
              className="fox"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/group/2_fox.png`}
              alt=""
            />
            <img
              className="beaver"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/group/2_beaver.png`}
              alt=""
            />
            <img
              className="tree1"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/group/2_tree1.png`}
              alt=""
            />
            <img
              className="tree2"
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/group/2_tree2.png`}
              alt=""
            />
          </div>
        </div>

        <div className="contentsWrapper">
          <WidthImgOneTextsOne>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/2.png`} />
            <CustomText
              text={
                isMobile
                  ? `이 프로젝트는 생태계 평형의 의미를 이해하고,\n 인간의 개입이 얼마나 큰 영향을\n 미치는지 생생하게 보여준답니다.\n 생태계 복원이 얼마나 어렵고,\n 동시에 얼마나 보람찬 일인지 깨닫을 수 있어요.\n미국 옐로스톤 국립공원에서 늑대의 귀환을 통해\n 생태계 복원의 중요성을 배워보세요!`
                  : `이 프로젝트는 생태계 평형의 의미를 이해하고, 인간의 개입이 얼마나 큰 영향을 미치는지 생생하게 보여준답니다.  생태계 복원이 얼마나 어렵고, 동시에 얼마나 보람찬 일인지 깨닫을 수 있어요. 미국 옐로스톤 국립공원에서 늑대의 귀환을 통해 생태계 복원의 중요성을 배워보세요!`
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <CustomText
              text={
                isMobile
                  ? `책상 위에 펼쳐진 옐로스톤 국립공원과\n 호주 생태계를 증강현실(AR)로 만날 수 있어요.\n 다양한 생물을 풀어놓고, 토끼 수를 조절하며\n 생태계 평형을 회복시켜 보세요.\n자연을 사랑하는 우리,\n 오늘은 가상 현실로도 그 사랑을 실천해 보아요!`
                  : `책상 위에 펼쳐진 옐로스톤 국립공원과 호주 생태계를 증강현실(AR)로 만날 수 있어요. 다양한 생물을 풀어놓고, 토끼 수를 조절하며 생태계 평형을 회복시켜 보세요. 자연을 사랑하는 우리, 오늘은 가상 현실로도 그 사랑을 실천해 보아요!`
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/3.png`} />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/4.png`} />
            <CustomText
              text={
                isMobile
                  ? `기존 생태계에서 생물이 멸종하여\n 평형이 깨진 상황을 체험해보세요.\n 늑대가 사라진 후 황폐화 된 국립 공원생태계에\n 다시 늑대를 풀어놓고, 시간이 지나며 점차 \n회복되는 과정을 관찰할 수 있어요. \n‘늑대는 영웅이 될 수 있다!’ 라는 사실을\n 직접 체험해 볼 수 있답니다!`
                  : `기존 생태계에서 생물이 멸종하여 평형이 깨진 상황을 체험해보세요. 늑대가 사라진 후 황폐화 된 국립 공원 생태계에 다시 늑대를 풀어놓고, 시간이 지나며 점차 회복되는 과정을 관찰할 수 있어요. ‘늑대는 영웅이 될 수 있다!’ 라는 사실을 직접 체험해 볼 수 있답니다!`
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <CustomText
              text={
                isMobile
                  ? `‘미션! 생태계를 복원하라’ 콘텐츠를 개발하면서\n 우리팀은 실제 옐로스톤 프로젝트의 방대한\n 데이터를 분석하고 적용하는 데 많은 노력을\n 기울였어요. 제작 과정은 도전적이었지만,\n 이를 통해 진정성 있는 교육 콘텐츠를 제공할\n 수 있게 되었죠.\n 열정과 헌신이 담긴 AR 교육 콘텐츠를 통해\n 자연의 복잡함과 아름다움을 이해해보세요.`
                  : `‘미션! 생태계를 복원하라’ 콘텐츠를 개발하면서 우리팀은 실제 옐로스톤 프로젝트의 방대한 데이터를 분석하고 적용하는 데 많은 노력을 기울였어요. 제작 과정은 도전적이었지만, 이를 통해 진정성 있는 교육 콘텐츠를 제공할 수 있게 되었죠. 열정과 헌신이 담긴 AR 교육 콘텐츠를 통해 자연의 복잡함과 아름다움을 이해해보세요.`
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/5.png`} />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/6.png`} />
            <CustomText
              text={
                isMobile
                  ? `‘미션! 생태계를 복원하라’ 콘텐츠를\n 복습할 수 있는 퀴즈를 제공하고 있어요.\n 옐로스톤 국립 공원에서 생태계 평형이\n 회복된 과정을 ‘빈칸 채우기’ 활동을 통해\n 학습 내용을 되짚어 볼 수 있어요.`
                  : `‘미션! 생태계를 복원하라’ 콘텐츠를 복습할 수 있는 퀴즈를 제공하고 있어요. 옐로스톤 국립 공원에서 생태계 평형이 회복된 과정을 ‘빈칸 채우기’ 활동을 통해 학습 내용을 되짚어 볼 수 있어요.`
              }
            />
          </WidthImgOneTextsOne>
          <WidthImgOneTextsOne last>
            <CustomText
              text={
                isMobile
                  ? `생태계 평행에 영향을 주는 자연적인 요인과\n 인위적인 요인을 분류하는 퀴즈로 자연 환경 파괴,\n 산업 발달에 따른 오염, 과도한 사냥 등으로\n 생물 다양성이 감소되어 환경 변화가\n 생태계의 평형에 영향을 주게 된다는 결론을 통해\n 더 깊이 있는 이해를 도모해요. `
                  : `생태계 평행에 영향을 주는 자연적인 요인과 인위적인 요인을 분류하는 퀴즈로 자연 환경 파괴, 산업 발달에 따른 오염, 과도한 사냥 등으로 생물 다양성이 감소되어 환경 변화가 생태계의 평형에 영향을 주게 된다는 결론을 통해 더 깊이 있는 이해를 도모해요. `
              }
            />
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/02_EcosystemRestoration/7.png`} />
          </WidthImgOneTextsOne>
        </div>
      </StyledEcosystemRestoration>
    </>
  );
};

export default EcosystemRestoration;
