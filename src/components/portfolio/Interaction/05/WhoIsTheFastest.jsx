import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import HeroOrganization from '../../common/Hero/HeroOrganization';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';

const StyledWhoIsTheFastest = styled.div`
  max-width: 1920px;
  position: relative;
  margin: auto;
  .organizationWrapper {
    position: absolute;
    left: 497px;
    top: 385px;
  }

  .introductionWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 200px;
    margin-bottom: 200px;
    img {
      width: 367px;
      height: 330px;
      margin-right: 100px;
    }
  }
`;

const WhoIsTheFastest = () => {
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledWhoIsTheFastest>
      <Breadcrumb font={{ color: '#292929' }} style={{ position: 'absolute', zIndex: '0' }} />
      <div className="relative">
        <div className="organizationWrapper">
          <HeroOrganization />
        </div>
      </div>
      <HeroImg
        pcHeight={'1920 / 1116'}
        // mobileHeight={'375 / 450'}
        src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/hero.png`}
      />
      <div className="introductionWrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/intro.png`} alt="" />
        <div>
          <PortfolioIntroductionTitle
            // pcMarginTop={'var(--pc-40px)'}
            // mobileMarginTop={'clamp(110px, 29.33vw, 1000px)'}
            style={{ color: '#292929' }}
            title={'누구보다 빠르게, 카드 모으기!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#767676' }}
            // pcMarginTop={'34px'}
            pcMarginBottom={'clamp(0px, 0.73vw, 14px)'}
            // mobileMarginBottom={'var(--mobile-80px)'}
            description={
              '누가누가 카드를 제일 많이 모을까?\n같은 모양과 같은 특성을 가진 카드가 보이면 주저말고 종을 쳐서 카드를 모아요!\n땡! 누가 카드를 다 가져가게 될까요?'
            }
          />
        </div>
      </div>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/1.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '비장한 누가누가 빠르나 카드 게임의 무대!\n카드를 옆으로 슬라이드 해서 넘기고 가운데의 벨을 눌러 카드를 모을 수 있어요.'
              : '비장한 누가누가 빠르나 카드 게임의 무대!\n카드를 옆으로 슬라이드 해서 넘기고 가운데의 벨을 눌러 카드를 모을 수 있어요.'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/2.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/3.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '같은 모양이거나 같은 특성을 가진 도형의 카드가 나왔을 때만 벨을 눌러야해요.\n그렇지 않으면 카드 한 장을 상대에게 빼앗긴답니다!'
              : '같은 모양이거나 같은 특성을 가진 도형의 카드가 나왔을 때만 벨을 눌러야해요.\n그렇지 않으면 카드 한 장을 상대에게 빼앗긴답니다!'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/4.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '바닥과 상단에 들어오는 불빛으로 학습자들이 자신의 차례를 알 수 있어요.\n파란 불빛은 나, 빨간 불빛은 상대예요.'
              : '바닥과 상단에 들어오는 불빛으로 학습자들이 자신의 차례를 알 수 있어요.\n파란 불빛은 나, 빨간 불빛은 상대예요.'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/5.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '벨을 누를 때 학습자가 선택한 캐릭터의\n손이 나오는 애니메이션과 효과음으로 흥미로운 학습을 유도한답니다!'
              : '벨을 누를 때 학습자가 선택한 캐릭터의\n손이 나오는 애니메이션과 효과음으로 흥미로운 학습을 유도한답니다!'
          }
        />
      </WidthOneContent>

      <WidthOneContent $none>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/6.png`} />
      </WidthOneContent>
      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/7.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '화면에 뜨는 ‘잘했어요!’, ‘아쉬워요’ 문구를 통해서\n카드를 누가 가져가는지 알 수 있어요.'
              : '화면에 뜨는 ‘잘했어요!’, ‘아쉬워요’ 문구를 통해서\n카드를 누가 가져가는지 알 수 있어요.'
          }
        />
      </WidthOneContent>

      <WidthOneContent>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/8.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/9.png`} />
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
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/10.png`} />
      </WidthOneContent>
      <WidthOneContent $last>
        <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/detail/05_WhoIsTheFastest/1/11.png`} />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n빠르고 정확하게 카드 모으기 출발!'
              : '자세한 UI/UX 설명을 통해 학습자들이 \n게임 콘텐츠를 진행하면서 어려움이 없도록 설계했어요.\n빠르고 정확하게 카드 모으기 출발!'
          }
        />
      </WidthOneContent>
    </StyledWhoIsTheFastest>
  );
};

export default WhoIsTheFastest;
