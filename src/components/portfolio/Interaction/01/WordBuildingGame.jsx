import React from 'react';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from './../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';

const StyledWordBuildingGame = styled.div`
  @media (min-width: 1025px) {
    max-width: 1920px;
    position: relative;
    margin: auto;
    .maxWidth1080Wrapper img {
      max-width: 1080px;
      width: 56.25vw;
    }
    .organizationWrap {
      position: absolute;
      left: clamp(0px, 35.05vw, 673px);
      margin-top: clamp(0px, 13vw, 260px);

      .borderWrap {
        background: rgba(0, 41, 79, 0.9);
        border-radius: 100px;
        width: clamp(0px, 11.98vw, 230px);
        height: clamp(0px, 2.19vw, 42px);

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .heroOrganization {
        color: #ffffff;
        font-size: clamp(0px, 1.15vw, 22px);
      }
    }
    .imgWrapper {
      position: relative;
      .consonant {
        position: absolute;
        width: clamp(0px, 15.68vw, 301px);
        left: clamp(0px, 18vw, 384px);
        top: clamp(0px, 7.81vw, 150px);
      }
      .vowel {
        position: absolute;
        width: clamp(0px, 16.41vw, 315px);
        right: clamp(0px, 17.69vw, 378px);
        top: clamp(0px, 6.25vw, 120px);
      }
    }
    .colorWrapper {
      background-color: rgba(172, 158, 255, 0.2);
      padding-top: var(--pc-120px);
      p {
        color: #040404;
      }
    }
  }
  @media (max-width: 1024px) {
    .organizationWrap {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: clamp(68px, 18.13vw, 1000px);

      .borderWrap {
        background: rgba(0, 41, 79, 0.9);
        border-radius: 100px;
        width: clamp(140px, 37.33vw, 1000px);
        height: clamp(24px, 6.4vw, 1000px);

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .heroOrganization {
        color: #ffffff;
        font-size: clamp(12px, 3.2vw, 1000px);
      }
    }
    .imgWrapper {
      position: relative;
      .consonant {
        position: absolute;
        width: clamp(85px, 22.67vw, 1000px);
        left: clamp(19px, 5.07vw, 1000px);
        top: clamp(56px, 14.93vw, 1000px);
      }
      .vowel {
        position: absolute;
        width: clamp(86px, 22.93vw, 1000px);
        right: clamp(23px, 6.13vw, 1000px);
        top: clamp(50px, 13.33vw, 1000px);
      }
    }
    .colorWrapper {
      background-color: rgba(172, 158, 255, 0.2);
      padding-top: var(--mobile-80px);
      p {
        color: #040404;
      }
    }
  }
  .introductionWrapper {
    text-align: center;
  }
`;

const WordBuildingGame = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledWordBuildingGame>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="organizationWrap">
        <div className="borderWrap">
          <div className="heroOrganization NanumSquareB">한국교육학술정보원</div>
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // tabletHeight={''}
        mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
      />
      <div className="imgWrapper">
        <img
          className="consonant"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/consonant.png`}
          alt=""
        />
        <img
          className="vowel"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/vowel.png`}
          alt=""
        />
      </div>
      <div className="introductionWrapper">
        <PortfolioIntroductionTitle
          pcMarginTop={'var(--pc-200px)'}
          mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
          style={{ color: '#292929' }}
          title={'아슬아슬, 낱말 만들기!'}
        />
        <PortfolioIntroductionDescription
          style={{ color: '#767676' }}
          pcMarginTop={'34px'}
          pcMarginBottom={'var(--pc-200px)'}
          mobileMarginBottom={'var(--mobile-80px)'}
          description={
            isMobileTablet
              ? '제한시간 안에 나무 블럭을 뽑아\n ‘시장에 가면 볼 수 있는 물건’의 단어들을\n 상대보다 먼저 완성해볼까요?\n조심조심 나무블럭을 뽑아보아요!'
              : '제한시간 안에 나무 블럭을 뽑아\n ‘시장에 가면 볼 수 있는 물건’의 단어들을 상대보다 먼저 완성해볼까요?\n조심조심 나무블럭을 뽑아보아요!'
          }
        />
      </div>

      <div className="maxWidth1080Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/1.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '학습자가 맞춰야 하는 글자의 자모음을 찾아\n 드래그 하여 나무 블록을 뺄 수 있어요.\n 맞춰야 하는 글자를 확인하여 조심조심\n나무블럭이 쓰러지지 않게 뽑아야 한답니다!'
                : '학습자가 맞춰야 하는 글자의 자모음을 찾아 드래그 하여 나무 블록을 뺄 수 있어요.\n 맞춰야 하는 글자를 확인하여 조심조심 나무블럭이 쓰러지지 않게 뽑아야 한답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/2.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '단어를 맞출 때 마다 별을 모을 수 있어요.\n 세 개의 별을 먼저 모으면 게임에서\n승리할 수 있답니다!\n 누가누가 먼저 별을 다 모을지 대결해볼까요?'
                : '단어를 맞출 때 마다 별을 모을 수 있어요.\n 세 개의 별을 먼저 모으면 게임에서 승리할 수 있답니다!\n 누가누가 먼저 별을 다 모을지 대결해볼까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/3.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '학습자들의 흥미 유발과 성취감을 위해\n자모음을 얻거나, 단어를 완성했을 때\n재미있는 효과음과 애니메이션이 나오도록\n디자인 및 설계 되었어요!'
                : '학습자들의 흥미 유발과 성취감을 위해 자모음을 얻거나,\n 단어를 완성했을 때 재미있는 효과음과 애니메이션이 나오도록\n디자인 및 설계 되었어요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/4.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '학습자들이 모은 자모음을 가지고\n‘시장에 가면 볼 수 있는 물건’ 단어를\n자모음 카드를 드래그 해서 맞출 수 있어요.\n어떤 자모음이 필요할까요?'
                : '학습자들이 모은 자모음을 가지고 ‘시장에 가면 볼 수 있는 물건’ 단어를\n자모음 카드를 드래그 해서 맞출 수 있어요.\n어떤 자모음이 필요할까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/5.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '모은 자모음 카드들은 계속 계속\n자모음 칸에 모이고 쌓여요.\n이 자모음 카드들은 다음 단어를 만들 때\n사용할 수 있답니다!'
                : '모은 자모음 카드들은 계속 계속 자모음 칸에 모이고 쌓여요.\n이 자모음 카드들은 다음 단어를 만들 때 사용할 수 있답니다!'
            }
          />
        </WidthOneContent>

        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/6.png`} />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group1/7.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '단어를 먼저 완성하는 학습자가 승리해요!\n나무블록을 쓰러뜨리거나 단어를 먼저\n만들지 못해도, 다시 도전할 수 있도록\n학습자를 격려한답니다.'
                : '단어를 먼저 완성하는 학습자가 승리해요!\n나무블록을 쓰러뜨리거나 단어를 먼저 만들지 못해도,\n 다시 도전할 수 있도록 학습자를 격려한답니다.'
            }
          />
        </WidthOneContent>

        <div className="colorWrapper">
          <WidthOneContent>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group2/1.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접\n선택할 수 있고, 보다 적극적으로\n학습에 참여할 수 있도록 고안했어요.'
                  : '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접 선택할 수 있고,\n 보다 적극적으로 학습에 참여할 수 있도록 고안했어요.'
              }
            />
          </WidthOneContent>
          <WidthOneContent>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group2/2.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '학습자들의 게임 이해력을 높이기 위해\n단계별 게임 방법을 설명해두었어요.'
                  : '학습자들의 게임 이해력을 높이기 위해 단계별 게임 방법을 설명해두었어요.\n 친절한 콘텐츠는 학습자에게 많은 귀감을 주죠!'
              }
            />
          </WidthOneContent>
          <WidthOneContent $none>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group2/3.png`} />
          </WidthOneContent>
          <WidthOneContent $last>
            <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/01_WordBuildingGame/group2/4.png`} />
            <CustomText
              style={{ whiteSpace: 'nowrap' }}
              text={
                isMobileTablet
                  ? '자세한 UI/UX 설명을 통해\n학습자들이 게임 콘텐츠를 진행하면서\n어려움이 없도록 설계했어요.\n지금부터 단어 만들기를 하러 떠나볼까요?'
                  : '자세한 UI/UX 설명을 통해\n학습자들이 게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n지금부터 단어 만들기를 하러 떠나볼까요?'
              }
            />
          </WidthOneContent>
        </div>
      </div>
    </StyledWordBuildingGame>
  );
};

export default WordBuildingGame;
