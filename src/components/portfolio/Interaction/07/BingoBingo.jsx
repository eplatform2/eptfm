import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroOrganization from '../../common/Hero/HeroOrganization';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';

const StyledBingoBingo = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;
  .organizationWrapper {
    position: absolute;
    left: 646px;
    top: 332px;
  }
  .introductionWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 160px 0;
    img {
      width: 517px;
      height: 435px;
      margin-right: 100px;
    }
  }
`;

const BingoBingo = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledBingoBingo>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="relative">
        <div className="organizationWrapper">
          <HeroOrganization />
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/hero.png`}
      />

      <div className="introductionWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/intro.png`} alt="" />
        <div>
          <PortfolioIntroductionTitle
            // pcMarginTop={'var(--pc-40px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'숫자로 즐기는 빙고 모험!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            // pcMarginTop={'34px'}
            pcMarginBottom={'clamp(0px, 0.73vw, 14px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '주사위를 굴려 나온 숫자만큼 앞으로 전진!\n도착한 칸의 덧셈과 뺄셈 문제를 풀어보세요.\n과연 여러분의 계산 실력은?\n빙고판을 채우며 승리로 다가가보세요.'
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/1.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'주사위를 던져 나온 눈의 수만큼 게임판 위의 말들이 이동해요.\n칸에는 덧셈 뺄셈 문제들이 숨어있어요!'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/2.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '정답을 맞히면 해당하는 숫자가 학습자의 빙고판에 뿅! 색칠됩니다.\n수학적 사고력을 발휘해서 문제를 풀어보아요!'
              : '정답을 맞히면 해당하는 숫자가 학습자의 빙고판에 뿅! 색칠됩니다.\n수학적 사고력을 발휘해서 문제를 풀어보아요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/3.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '빙고판에 이미 색칠된 문제들은 주사위를 한 번 더 던지게끔 설계되어\n보다 다양한 문제들을 풀어볼 수 있어요.'
              : '빙고판에 이미 색칠된 문제들은 주사위를 한 번 더 던지게끔 설계되어\n보다 다양한 문제들을 풀어볼 수 있어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '정해진 빙고 형태를 가장 먼저 완성한 학습자가 승리하게 됩니다!\n친구보다 한 발 앞서 빙고를 외쳐보세요!'
              : '정해진 빙고 형태를 가장 먼저 완성한 학습자가 승리하게 됩니다!\n친구보다 한 발 앞서 빙고를 외쳐보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/5.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접 선택할 수 있고, \n보다 적극적으로 학습에 참여할 수 있도록 고안했어요.'
              : '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접 선택할 수 있고, \n보다 적극적으로 학습에 참여할 수 있도록 고안했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/6.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '학습자들의 게임 이해력을 높이기 위해 단계별 게임 방법을 설명해두었어요.\n친절한 콘텐츠는 학습자에게 많은 귀감을 주죠!'
              : '학습자들의 게임 이해력을 높이기 위해 단계별 게임 방법을 설명해두었어요.\n친절한 콘텐츠는 학습자에게 많은 귀감을 주죠!'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/7.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/07_BingoBingo/1/8.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n빙고, 빙고! 다같이 힘차게 외쳐볼까요?'
              : '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n빙고, 빙고! 다같이 힘차게 외쳐볼까요?'
          }
        />
      </WidthOneContent>
    </StyledBingoBingo>
  );
};

export default BingoBingo;
