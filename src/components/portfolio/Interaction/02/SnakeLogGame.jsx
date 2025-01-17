import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroImg from '../../common/Hero/HeroImg';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroOrganization from './../../common/Hero/HeroOrganization';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';

const StyledSnakeLogGame = styled.div`
  @media (min-width: 1025px) {
    position: relative;
    max-width: 1920px;
    margin: auto;
    .maxWidth1080Wrapper img {
      width: clamp(0px, 56.25vw, 1080px);
    }
    .introductionWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: clamp(0px, 17.4vw, 334px);
        height: clamp(0px, 11.88vw, 228px);
        margin-right: var(--pc-100px);
      }
    }
    .organizationWrapper {
      position: absolute;
      left: clamp(0px, 28.85vw, 554px);
      top: clamp(0px, 17.81vw, 342px);
    }

    .sideWrapper {
      position: relative;
      .left {
        position: absolute;
        left: 0;
        top: 300px;

        width: clamp(0px, 18.07vw, 347px);
      }
      .right {
        position: absolute;
        right: 0;
        top: -128px;

        width: clamp(0px, 24.27vw, 466px);
      }
    }
    .colorWrapper {
      background: rgba(205, 239, 237, 0.48);
      padding-top: var(--pc-160px);
      margin-bottom: var(--pc-160px);
      p {
        color: #040404;
      }
    }
  }
  @media (max-width: 1024px) {
    position: relative;
    .introductionWrapper {
      margin-top: var(--mobile-80px);
      margin-bottom: var(--mobile-80px);

      text-align: center;
      justify-content: center;
      align-items: center;
      img {
        width: clamp(118px, 31.47vw, 1000px);
        height: clamp(80px, 21.33vw, 1000px);

        margin-bottom: var(--mobile-30px);
      }
    }

    .organizationWrapper {
      position: absolute;
      left: clamp(115px, 30.67vw, 1000px);
      top: clamp(195px, 52vw, 1000px);
    }

    .sideWrapper {
      position: relative;
      .left {
        position: absolute;
        left: 0;
        top: clamp(184px, 49.07vw, 1000px);

        width: clamp(66px, 17.6vw, 1000px);
      }
      .right {
        position: absolute;
        right: 0;
        /* top: -66px; */
        top: clamp(-66px, -17.6vw, -1000px);

        width: clamp(131px, 34.93vw, 1000px);
      }
    }
    .colorWrapper {
      background: rgba(205, 239, 237, 0.48);
      padding-top: var(--mobile-80px);
      margin-bottom: var(--mobile-80px);
      p {
        color: #040404;
      }
    }
  }
`;

const SnakeLogGame = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledSnakeLogGame>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="organizationWrapper">
        <HeroOrganization />
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // tabletHeight={''}
        mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
      />
      <div className="introductionWrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/1/${
            isMobileTablet ? 'snake_m' : 'snake'
          }.png`}
          alt=""
        />
        <div>
          <PortfolioIntroductionTitle
            pcMarginTop={'var(--pc-200px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'앗, 뱀 머리를 조심해요!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            pcMarginTop={'clamp(0px, 1.77vw, 34px)'}
            pcMarginBottom={'var(--pc-200px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              isMobileTablet
                ? '주사위를 잘 돌려서 요리조리 뱀을 피하고,\n  튼튼한 통나무를 찾아 보세요!\n쉽고 재미있게 국어 학습을 할 수 있어요!'
                : '주사위를 잘 돌려서 요리조리 뱀을 피하고,  튼튼한 통나무를 찾아 보세요!\n쉽고 재미있게 국어 학습을 할 수 있어요!'
            }
          />
        </div>
      </div>

      <div className="sideWrapper">
        <img
          className="left"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/1/side/${
            isMobileTablet ? 'left_m' : 'left'
          }.png`}
          alt=""
        />
        <img
          className="right"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/1/side/${
            isMobileTablet ? 'right_m' : 'right'
          }.png`}
          alt=""
        />
      </div>

      <div className="maxWidth1080Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/1/1.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '주사위를 굴려 말판을 이동하고,\n ‘?’ 말판에 도착하면 등장하는\n재미있는 국어 문제를 풀어보세요!'
                : '주사위를 굴려 말판을 이동하고, ‘?’ 말판에 도착하면 등장하는\n재미있는 국어 문제를 풀어보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/1/2.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '숫자 5가 나왔네요!\n주사위를 돌려 나오는 수 만큼 말이 이동해요.\n뱀의 머리를 밟으면 꼬리까지 내려오니\n 뱀을 조심조심 잘 피해야해요!'
                : '숫자 5가 나왔네요!\n주사위를 돌려 나오는 수 만큼 말이 이동해요.\n뱀의 머리를 밟으면 꼬리까지 내려오니 뱀을 조심조심 잘 피해야해요!'
            }
          />
        </WidthOneContent>

        <div className="colorWrapper">
          <WidthOneContent $none>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/2/1.png`} />
          </WidthOneContent>
          <WidthOneContent>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/2/2.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '자칫 어렵게 느껴질 수 있는\n 문장부호의 명칭과 위치에 대해서도\n재미있는 퀴즈 형식을 통해 학습할 수 있어요.\n국어 마스터가 되는 그 날까지!'
                  : '자칫 어렵게 느껴질 수 있는 문장부호의 명칭과 위치에 대해서도\n재미있는 퀴즈 형식을 통해 학습할 수 있어요.\n국어 마스터가 되는 그 날까지!'
              }
            />
          </WidthOneContent>
          <WidthOneContent $none>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/2/3.png`} />
          </WidthOneContent>
          <WidthOneContent>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/2/4.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '어떤 문장이 띄어쓰기 어법에 맞게\n 쓰여진 것인지 정답을 맞춰 볼까요?\n바로 확인할 수 있는 정오답을 통해\n 인터랙티브한 학습을 진행할 수 있답니다!'
                  : '어떤 문장이 띄어쓰기 어법에 맞게 쓰여진 것인지 정답을 맞춰 볼까요?\n바로 확인할 수 있는 정오답을 통해 인터랙티브한 학습을 진행할 수 있답니다!'
              }
            />
          </WidthOneContent>

          <WidthOneContent>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/2/5.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '발표를 할 때 어떤 자세로 발표해야 하는지\n그리고 책을 읽을 땐 어떤 자세로 책을\n 읽어야 하는지 등과 같은\n 교실에서 지녀야할 태도도 학습할 수 있어요.'
                  : '발표를 할 때 어떤 자세로 발표해야 하는지\n그리고 책을 읽을 땐 어떤 자세로 책을 읽어야 하는지 등과 같은\n학습자들이 교실에서 지녀야할 태도도 학습할 수 있어요.'
              }
            />
          </WidthOneContent>
        </div>

        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/3/1.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접\n 선택할 수 있고, 보다 적극적으로\n 학습에 참여할 수 있도록 고안했어요.'
                : '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접 선택할 수 있고, \n보다 적극적으로 학습에 참여할 수 있도록 고안했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/3/2.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '학습자들의 게임 이해력을 높이기 위해\n 단계별 게임 방법을 설명해두었어요.\n'
                : '학습자들의 게임 이해력을 높이기 위해 단계별 게임 방법을 설명해두었어요.\n친절한 콘텐츠는 학습자에게 많은 귀감을 주죠!'
            }
          />
        </WidthOneContent>

        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/3/3.png`} />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/02_SnakeLogGame/3/4.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '자세한 UI/UX 설명을 통해\n학습자들이 게임 콘텐츠를 진행하면서\n 어려움이 없도록 설계했어요.\n요리조리 뱀을 피하며 국어 문제를 풀어볼까요?'
                : '자세한 UI/UX 설명을 통해\n학습자들이 게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n요리조리 뱀을 피하며 국어 문제를 풀어볼까요?'
            }
          />
        </WidthOneContent>
      </div>
    </StyledSnakeLogGame>
  );
};

export default SnakeLogGame;
