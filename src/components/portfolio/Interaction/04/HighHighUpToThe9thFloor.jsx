import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroOrganization from '../../common/Hero/HeroOrganization';
import HeroImg from '../../common/Hero/HeroImg';
import styled from 'styled-components';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
const StyledHighHighUpToThe9thFloor = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;
  .organizationWrapper {
    position: absolute;
    left: 516px;
    top: 334px;
  }

  .introductionWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 160px;
    margin-bottom: 185px;
    img {
      width: 167px;
      height: 253px;
      margin-right: 114px;
    }
  }
`;

const HighHighUpToThe9thFloor = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledHighHighUpToThe9thFloor>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="relative">
        <div className="organizationWrapper">
          <HeroOrganization />
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/hero.png`}
      />

      <div className="introductionWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/intro.png`} alt="" />
        <div>
          <PortfolioIntroductionTitle
            pcMarginTop={'var(--pc-40px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'9개의 선물을 누가 먼저 쌓을까?'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            // pcMarginTop={'34px'}
            pcMarginBottom={'clamp(0px, 0.73vw, 14px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '주사위를 굴려 모험을 떠나며 선물 박스를 쌓아 올리고, 빼고!\n재미있는 게임 형태로 10보다 작은 수들의 덧셈과 뺄셈을 자연스럽게\n학습할 수 있어요!'
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/1.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '휘리릭 주사위를 굴려서\n선물 상자를 모으는 모험을 같이 떠나볼까요?'
              : '휘리릭 주사위를 굴려서\n선물 상자를 모으는 모험을 같이 떠나볼까요?'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/2.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '주사위를 굴려 나온 숫자만큼 말이 이동해요.\n말판에 적힌 +, - 숫자만큼 선물상자를 쌓거나 뺄 수 있답니다!'
              : '주사위를 굴려 나온 숫자만큼 말이 이동해요.\n말판에 적힌 +, - 숫자만큼 선물상자를 쌓거나 뺄 수 있답니다!'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/3.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '‘선물 1개를 찾았어요.’, ‘선물 2개를 놓쳤어요.’와 같은 말풍선을 통해서 \n학습자들이 선물을 몇개를 얻고 잃었는지 확인할 수 있어요!'
              : '‘선물 1개를 찾았어요.’, ‘선물 2개를 놓쳤어요.’와 같은 말풍선을 통해서 \n학습자들이 선물을 몇개를 얻고 잃었는지 확인할 수 있어요!'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/5.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '주사위를 굴렸다고 해서 늘 앞으로 전진할 수 있는 것은 아니랍니다!\n물 웅덩이를 피해 조심히 모험하세요!'
              : '주사위를 굴렸다고 해서 늘 앞으로 전진할 수 있는 것은 아니랍니다!\n물 웅덩이를 피해 조심히 모험하세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/6.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '캐릭터들이 움직이고 선물이 쌓이고 빠지는 \n재미있는 애니메이션과 효과음이 학습자들의 학습 참여를 도모해요!'
              : '캐릭터들이 움직이고 선물이 쌓이고 빠지는 \n재미있는 애니메이션과 효과음이 학습자들의 학습 참여를 도모해요!'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/7.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/8.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '9개의 선물상자를 먼저 쌓는 학습자가 게임에서 승리한답니다!\n누가누가 먼저 쌓아 올릴지 대결해볼까요?'
              : '9개의 선물상자를 먼저 쌓는 학습자가 게임에서 승리한답니다!\n누가누가 먼저 쌓아 올릴지 대결해볼까요?'
          }
        />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/9.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/10.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '걱정 말아요! 선물상자를 먼저 쌓아올리지 못하더라도\n다시 도전할 수 있도록 학습자를 격려한답니다.'
              : '걱정 말아요! 선물상자를 먼저 쌓아올리지 못하더라도\n다시 도전할 수 있도록 학습자를 격려한답니다.'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/11.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/12.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/13.png`} />
      </WidthOneContent>
      <WidthOneContent $last>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/04_HighHighUpToThe9thFloor/1/14.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '자세한 UI/UX 설명을 통해 학습자들이 게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n선물 상자를 모으러 다함께 출발!'
              : '자세한 UI/UX 설명을 통해 학습자들이 게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n선물 상자를 모으러 다함께 출발!'
          }
        />
      </WidthOneContent>
    </StyledHighHighUpToThe9thFloor>
  );
};

export default HighHighUpToThe9thFloor;
