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

const StyledShapeDomino = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;
  .organizationWrapper {
    position: absolute;
    left: 552px;
    top: 346px;
  }

  .imgWrapper {
    position: relative;

    img:nth-child(1) {
      position: absolute;
      left: 309px;
    }
    img:nth-child(2) {
      position: absolute;
      left: 0;
      top: 378px;
    }
    img:nth-child(3) {
      position: absolute;
      top: 200px;
      right: 0px;
    }
  }

  .introductionWrapper {
    display: grid;
    justify-items: center;
    text-align: center;

    margin-top: 323px;
  }

  .sideImgWrapper {
    position: relative;

    .rectangle {
      position: absolute;
      left: 89px;
      bottom: 296px;
    }
    .ellipse {
      position: absolute;
      right: 80px;
      bottom: 94px;
    }
    .triangle {
      position: absolute;
      left: 68px;
      top: 685px;
    }
  }
`;

const ShapeDomino = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledShapeDomino>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="relative">
        <div className="organizationWrapper">
          <HeroOrganization />
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/hero.png`}
      />

      <div className="imgWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/intro/1.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/intro/2.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/intro/3.png`} alt="" />
      </div>
      <div className="introductionWrapper">
        <div>
          <PortfolioIntroductionTitle
            // pcMarginTop={'var(--pc-50px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'도형 카드를 연결해요!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            pcMarginTop={'34px'}
            pcMarginBottom={'416px'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '같은 도형 그림카드나 같은 도형의 특성이 쓰인 카드를 찾아보아요.\n꼬리에 꼬리를 무는 도형 도미노 콘텐츠!\n재미있게 도형을 학습하러 함께 떠나볼까요?'
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/1.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'해당 게임형 학습 콘텐츠는\n선생님과 친구들을 초대해서 문장 여행을 함께 떠날 수 있어요!'}
        />
      </WidthOneContent>
      <div className="sideImgWrapper">
        <img
          className="rectangle"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/side/rectangle.png`}
          alt=""
        />
        <img
          className="ellipse"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/side/ellipse.png`}
          alt=""
        />
        <img
          className="triangle"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/side/triangle.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/2.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={'쉿! 이건 우리들만의 비밀이야!\n비밀번호를 설정해서 함께 하고 싶은 친구들만 다같이 모여 학습을 진행할 수 있답니다!'}
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/3.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '각각의 프로필을 통해서 남은 시간과 가지고 있는 카드 개수를 확인할 수 있어요.\n학습자가 가진 카드들도 확인할 수 있답니다!'
              : '각각의 프로필을 통해서 남은 시간과 가지고 있는 카드 개수를 확인할 수 있어요.\n학습자가 가진 카드들도 확인할 수 있답니다!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '회전, 확인, 취소 버튼을 넣어서 학습자들이 도미노 카드 콘텐츠를 \n편리하게 플레이 할 수 있도록 설계 했답니다!'
              : '회전, 확인, 취소 버튼을 넣어서 학습자들이 도미노 카드 콘텐츠를 \n편리하게 플레이 할 수 있도록 설계 했답니다!'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/5.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/6.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '도미노 판을 드래그 하거나 스크롤을 이용해서 상하좌우로 움직일 수 있어요.\n어디에 카드를 붙여야 하는지 잘 살펴보아요!'
              : '도미노 판을 드래그 하거나 스크롤을 이용해서 상하좌우로 움직일 수 있어요.\n어디에 카드를 붙여야 하는지 잘 살펴보아요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/7.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/8.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '카드를 모두 사용하는 학습자가 승리해요!\n도미노를 모두 완성하지 못하거나 게임에 승리하지 못해도 \n화이팅 넘치게 다시 도전할 수 있도록 학습자를 격려한답니다.'
              : '카드를 모두 사용하는 학습자가 승리해요!\n도미노를 모두 완성하지 못하거나 게임에 승리하지 못해도 \n화이팅 넘치게 다시 도전할 수 있도록 학습자를 격려한답니다.'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/9.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/10.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/11.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/06_ShapeDomino/1/12.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n도형을 잘 보고 도미노를 완성하러 떠나볼까요?'
              : '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n도형을 잘 보고 도미노를 완성하러 떠나볼까요?'
          }
        />
      </WidthOneContent>
    </StyledShapeDomino>
  );
};

export default ShapeDomino;
