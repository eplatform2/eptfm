import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import { StyledFrenchClimateLifestyle } from '../../../../assets/styles/portfolio/vrAr/10_FrenchClimate/StyledFrenchClimate';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';

const FrenchClimateLifestyle = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledFrenchClimateLifestyle>
      <Breadcrumb />
      <PortfolioTitleWrap
        pcMarginBottom={'80px'}
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
          title={isMobileTablet ? '모네의 작품으로 알아보는\n 프랑스 기후와 주민생활' : '모네의 작품으로 알아보는 프랑스 기후와 주민생활'}
        />
      </PortfolioTitleWrap>

      <div className="heroWrapper">
        <div className="left">
          <HeroImg
            pcAspectRatio={'960 / 900'}
            mobileAspectRatio={'375 / 400'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/${
              isMobileTablet ? 'main1_m' : 'main1'
            }.png`}
          />
        </div>
        <div className="right">
          <div className="monetImg">
            <HeroImg
              pcAspectRatio={'312 / 379'}
              mobileAspectRatio={'174 / 212'}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/${
                isMobileTablet ? 'main2_m' : 'main2'
              }.png`}
            />
          </div>
          <div className="introductionWrapper">
            <PortfolioIntroductionTitle
              mobileMarginTop={'var(--mobile-60px)'}
              style={{ color: '#292929' }}
              title={isMobileTablet ? '모네의 그림 속에서 만나는\n 프랑스의 기후와 생활!' : '모네의 그림 속에서 만나는\n 프랑스의 기후와 생활!'}
            />
            <PortfolioIntroductionDescription
              style={{ color: '#767676' }}
              mobileMarginTop={'5.33vw'}
              description={
                isMobileTablet
                  ? '모네의 작품을 감상하며 프랑스의 다양한\n 기후와 지리를 학습해보세요.\n 서안 해양성 기후와 지중해성 기후의 특성을\n 예술과 함께 즐길 수 있습니다.'
                  : '모네의 작품을 감상하며 프랑스의 다양한 기후와 지리를\n 학습해보세요.\n 서안 해양성 기후와 지중해성 기후의 특성을 예술과 함께\n 즐길 수 있습니다.'
              }
            />
          </div>
        </div>
      </div>

      <div className="textsImgswrapper">
        <div className="TextWrapper">
          <CustomText
            text={
              isMobileTablet
                ? "'모네의 작품으로 알아보는 프랑스 기후와\n 주민생활'을 만들면서, 우리 팀은 모네의\n 화폭 속으로 여행을 떠났습니다.\n아, 그림 속 풍경을 보다가 커피를 엎지르는\n 일도 있었죠. 여러분도 모네의 작품을 통해\n 프랑스의 기후를 즐겨보세요!"
                : "'모네의 작품으로 알아보는 프랑스 기후와 주민생활'을 만들면서, 우리 팀은 모네의 화폭 속으로 여행을 떠났습니다.\n아, 그림 속 풍경을 보다가 커피를 엎지르는 일도 있었죠. 여러분도 모네의 작품을 통해 프랑스의 기후를 즐겨보세요!"
            }
          />
        </div>
        <div className="group1_Wrapper">
          <img
            className="group1_2_img"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group1_2.png`}
            alt=""
          />
          <img
            className="group1_1_img"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group1_1.png`}
            alt=""
          />
        </div>
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_1.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '우리팀은 “모네의 작품으로 알아보는 프랑스\n 기후와 주민 생활” 콘텐츠를 VR로 구현하기 위해\n 미디어 아트 기술을 활용하여\n 그림을 생동감 있게 재현했어요.\n프랑스의 기후와 생활상을 쉽게 이해할 수 있도록\n 스토리텔링 요소를 가미했답니다!'
                : '우리팀은 “모네의 작품으로 알아보는 프랑스 기후와 주민 생활” 콘텐츠를\nVR로 구현하기 위해 미디어 아트 기술을 활용하여 그림을 생동감 있게 재현했어요.\n프랑스의 기후와 생활상을 쉽게 이해할 수 있도록 스토리텔링 요소를 가미했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_2.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '모네의 작품을 감상하면서 프랑스의 기후와\n 다양한 지리 정보를 학습할 수 있어요.\n서안 해양성 기후와 지중해성 기후의 특징과\n 관련 생활상을 작품을 통해 이해할 수 있답니다!'
                : '모네의 작품을 감상하면서 프랑스의 기후와 다양한 지리 정보를 학습할 수 있어요.\n서안 해양성 기후와 지중해성 기후의 특징과 관련 생활상을 작품을 통해 이해할 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_3.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '모네가 오랜 기간 머물렀던 지베르니에서 그린\n 수련 시리즈는 서안 해양성 기후의 온화한\n 기후화 연중 일정한 강수량을 잘 보여줘요.\n수련 연못에 비치는 초록빛 자연을 담아내어\n 기후의 온화함을 시각적으로 느껴볼 수 있어요.'
                : '모네가 오랜 기간 머물렀던 지베르니에서 그린 수련 시리즈는\n서안 해양성 기후의 온화한 기후화 연중 일정한 강수량을 잘 보여줘요.\n수련 연못에 비치는 초록빛 자연을 담아내어 기후의 온화함을 시각적으로 느껴볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_4.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '건초더미를 다양한 시각과 기후 조건에서 그려낸\n 시리즈로, 계절과 시간에 따른 기후 변화를\n 생생하게 볼 수 있답니다!'
                : '건초더미를 다양한 시각과 기후 조건에서 그려낸 시리즈로,\n계절과 시간에 따른 기후 변화를 생생하게 볼 수 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_5.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '모네가 보트 위에서 작업하면 그린 작품을 통해\n학습자들은 아르장퇴유의 온화한 기후와\n 고요한 강을 체험할 수 있어요.\n아루장퇴유 강가의 풍경이 담긴 작품은\n 강 주변의 자연과 일상생활을 잘 보여준답니다!'
                : '모네가 보트 위에서 작업하면 그린 작품을 통해\n학습자들은 아르장퇴유의 온화한 기후와 고요한 강을 체험할 수 있어요.\n아루장퇴유 강가의 풍경이 담긴 작품은 강 주변의 자연과 일상생활을 잘 보여준답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_6.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '밀밭을 가로지르는 길을 그린 작품을 통해 \n학습자들은 온화한 기후가 만들어낸\n 풍성한 밀밭을 볼 수 있어요.'
                : '밀밭을 가로지르는 길을 그린 작품을 통해 \n학습자들은 온화한 기후가 만들어낸 풍성한 밀밭을 볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_7.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '푸르빌 언덕에서 내려다 본\n 풍경이 궁금하지 않나요?\n이 작품을 통해 서안 해양성 기후의 영향을 받은\n 자연을 맘껏 둘러봐보세요!'
                : '푸르빌 언덕에서 내려다 본 풍경이 궁금하지 않나요?\n이 작품을 통해 서안 해양성 기후의 영향을 받은 자연을 맘껏 둘러봐보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_8.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '태양빛이 강하게 비추는 에스테렐 산맥을\n 그린 이 작품을 통해 학습자들은 지중해성\n 기후의 특징을 살펴볼 수 있어요.'
                : '태양빛이 강하게 비추는 에스테렐 산맥을 그린 이 작품을 통해\n학습자들은 지중해성 기후의 특징을 살펴볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_9.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '모네의 작품을 통해 살펴본 프랑스의 다양한\n 기후를 한눈에 복습할 수 있어요.\n각 지역별 대표 작품과 기후적 특징을\n 다시 한번 정리하며, 학습자가 이해한\n 내용을 확인할 수 있어요.'
                : '모네의 작품을 통해 살펴본 프랑스의 다양한 기후를 한눈에 복습할 수 있어요.\n각 지역별 대표 작품과 기후적 특징을 다시 한번 정리하며, 학습자가 이해한 내용을 확인할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/10_FrenchClimateLifestyle/group2_10.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '프랑스의 주요 지역과 그 지역의 기후를\n 표시한 인터랙티브 지도를 통해\n모네의 작품을 한번 더 살펴보세요!'
                : '프랑스의 주요 지역과 그 지역의 기후를 표시한 인터랙티브 지도를 통해\n모네의 작품을 한번 더 살펴보세요!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledFrenchClimateLifestyle>
  );
};

export default FrenchClimateLifestyle;
