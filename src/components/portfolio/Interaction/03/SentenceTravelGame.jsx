import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroOrganization from '../../common/Hero/HeroOrganization';
import HeroImg from '../../common/Hero/HeroImg';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';

const StyledSentenceTravelGame = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;
  .organizationWrapper {
    position: absolute;
    left: 516px;
    top: 334px;
  }

  .introductionWrapper {
    display: grid;
    justify-items: center;
    text-align: center;

    margin-top: 170px;
  }

  .colorWrapper {
    background: rgba(56, 196, 128, 0.15);
    padding-top: 160px;
    margin-bottom: 160px;
    p {
      color: #040404;
    }
  }
`;

const SentenceTravelGame = () => {
  return (
    <StyledSentenceTravelGame>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="relative">
        <div className="organizationWrapper">
          <HeroOrganization />
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/hero.png`}
      />

      <div className="introductionWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/intro.png`} alt="" />
        <div>
          <PortfolioIntroductionTitle
            pcMarginTop={'var(--pc-50px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'다같이 문장 여행을 떠나요!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            pcMarginTop={'34px'}
            pcMarginBottom={'var(--pc-200px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '와글와글, 시끌벅적\n주사위를 굴려 무인도를 탈출하고 우주선을 타고 문장 여행을 떠나보아요!\n모두와 함께하는 재미있는 게임형 학습 콘텐츠!'
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/1/1.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'해당 게임형 학습 콘텐츠는\n선생님과 친구들을 초대해서 문장 여행을 함께 떠날 수 있어요!'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/1/2.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'쉿! 이건 우리들만의 비밀이야!\n비밀번호를 설정해서 함께 하고 싶은 친구들만 다같이 모여 학습을 진행할 수 있답니다!'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/1/3.png`} />
        <CustomText style={{ whiteSpace: 'nowrap' }} text={'빙그르르 숫자 머신을 돌려서\n누가 먼저 주사위를 돌릴 지 정해볼까요?'} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/1/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'주사위를 굴려 문제를 풀고 구슬을 모아 두바퀴를 먼저 도는 학습자가 승리합니다!\n누가누가 먼저 빠르게 여행을 마치게 될까요?'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/1/5.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'‘화살표’ 표시와 ‘플레이 중’ 말풍선을 넣는 등\n학습자들이 차례를 헷갈리지 않도록 친절한 콘텐츠 UI/UX를 제공해요.'}
        />
      </WidthOneContent>

      <div className="colorWrapper">
        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/1.png`} />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/2.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              '‘잠을 잘 자는 것은 중요해요.’,  ‘우리를 괴롭히는 여름 벌레’ 등과 같은 \n짧은 글을 읽고 글의 주제와 내용을 파악하는 연습을 다양하게 진행할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/3.png`} />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/4.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={'적절한 삽화와 실감나는 음성 녹음들을 통해\n듣기 연습을 진행하고 문제를 해결하는 능력을 기를 수 있어요!'}
          />
        </WidthOneContent>
        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/5.png`} />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/6.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={'적절한 삽화와 실감나는 음성 녹음들을 통해\n듣기 연습을 진행하고 문제를 해결하는 능력을 기를 수 있어요!'}
          />
        </WidthOneContent>
        <WidthOneContent $none>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/7.png`} />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/2/8.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              '문제를 풀고 정오답 표시를 통해 즉각적으로 피드백을 받아볼 수 있어요!\n어려운 문제를 해결하면 구슬을 많이 받을 수 있으니 열심히 도전해보아요!'
            }
          />
        </WidthOneContent>
      </div>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/1.png`} />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/2.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/3.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            '‘무인도’, ‘1회쉬기’, ‘우주여행’ 등과 같이 말판의 다양한 이벤트들을 통해\n더욱 더 재미있는 게임형 학습 콘텐츠를 즐길 수 있어요!\n학습도 잡고, 즐거움도 잡고! 일석이조 콘텐츠!'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            '‘토리, 뽀오, 올리, 꼬미’ 안녕!\n귀여운 동물 캐릭터를 학습자들이 직접 선택할 수 있고, \n보다 적극적으로 학습에 참여할 수 있도록 고안했어요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/5.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'학습자들의 게임 이해력을 높이기 위해 단계별 게임 방법을 설명해두었어요.\n친절한 콘텐츠는 학습자에게 많은 귀감을 주죠!'}
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/6.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/03_SentenceTravelGame/3/7.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'자세한 UI/UX 설명을 통해 학습자들이 게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n이제 다 함께 문장 여행을 떠나 볼까요?'}
        />
      </WidthOneContent>
    </StyledSentenceTravelGame>
  );
};

export default SentenceTravelGame;
