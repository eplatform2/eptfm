import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import { StyledMayor } from '../../../../assets/styles/portfolio/vrAr/11_Mayor/StyledMayor';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import HeroImg from '../../common/Hero/HeroImg';
import CustomText from './../../common/CustomText';
import Img from './../../common/Img';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';

const Mayor = () => {
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();
  const isTablet = useTablet();
  return (
    <StyledMayor>
      <div className="fullScreen ellipseWrapper">
        <img
          className="ellipse_left"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/ellipse/${
            isMobileTablet ? 'ellipse_left_m' : 'ellipse_left'
          }.png`}
          alt=""
        />
        <img
          className="ellipse_right"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/ellipse/${
            isMobileTablet ? 'ellipse_right_m' : 'ellipse_right'
          }.png`}
          alt=""
        />
      </div>
      <Breadcrumb />

      <PortfolioTitleWrap
        pcMarginBottom={'var(--pc-80px)'}
        mobilePaddingTop={'50px'}
        mobileMarginBottom={'40px'}
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
          title={isMobileTablet ? '직접 만드는 민주적인\n 선거! 시장 출마하기' : '직접 만드는 민주적인 선거! 시장 출마하기'}
        />
      </PortfolioTitleWrap>

      <div className="heroAreaWrapper">
        <div className="heroTexts">
          <PortfolioIntroductionTitle
            pcMarginTop={'clamp(10px,6vw,118px)'}
            mobileMarginTop={'60px'}
            style={{ color: '#292929' }}
            title={isMobileTablet ? '민주주의의 꽃, 시장 선거 체험!' : '민주주의의 꽃, 시장 선거 체험!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#292929' }}
            pcMarginTop={'34px'}
            mobileMarginTop={'5.33vw'}
            description={
              isMobileTablet
                ? '시장의 선거 과정에 출마하여 정당 가입부터\n 선거일까지 체험해보세요.\n청소년도 참여 가능한 정당 활동과 투표\n 방법을 배울 수 있습니다.'
                : '시장의 선거 과정에 출마하여 정당 가입부터 선거일까지 체험해보세요.\n청소년도 참여 가능한 정당 활동과 투표 방법을 배울 수 있습니다.'
            }
          />
        </div>
        <div className="heroImg">
          <HeroImg
            pcAspectRatio={'442 / 560'}
            mobileAspectRatio={'204 / 259'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/${isMobileTablet ? 'main1_m' : 'main1'}.png`}
          />
        </div>
      </div>

      <div className="fullScreen introductionWrapper">
        <img className="megaphone" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/megaphone.png`} alt="" />
        <div className="introTextsWrapper">
          <CustomText
            text={
              isMobileTablet
                ? "'직접 만드는 민주적인 선거! 시장 출마하기'를\n 제작하면서, 우리 팀은 가상 선거 운동을 하며\n 자칭 '최고의 후보'가 되기 위해 열띤 토론을\n 벌였죠. 여러분도 시장 선거에 도전해보세요.\n 민주주의의 과정을 직접 체험할 수 있습니다!"
                : "'직접 만드는 민주적인 선거! 시장 출마하기'를 제작하면서, 우리 팀은 가상 선거 운동을 하며 자칭 '최고의 후보'가 되기 위해 열띤 토론을 벌였죠. 여러분도 시장 선거에 도전해보세요. 민주주의의 과정을 직접 체험할 수 있습니다!"
            }
          />
        </div>
      </div>

      <ul className="fourElement">
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group1_1.png`} alt="" />
          <p>거리  유세하기</p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group1_2.png`} alt="" />
          <p>명함 배부하기</p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group1_3.png`} alt="" />
          <p>공개 연설하기</p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group1_4.png`} alt="" />
          <p>선거 현수막 제작</p>
        </li>
      </ul>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_1.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '“직접 만드는 민주적인 선거! 시장출마하기”\n 콘텐츠를 제작하기 위해 우리팀은 방대한 선거\n 자료들을 조사하느라 밤을 세웠답니다.\nVR 기술을 활용해 생생한 체험을 제공하며,\n 교육적인 요소를 강화하려고 많은 노력을 했어요.\n다양한 연령대의 학습자가 재미있고\n 쉽게 이해할 수 있도록 인터랙티브\n 요소를 추가했답니다!'
                : '“직접 만드는 민주적인 선거! 시장출마하기” 콘텐츠를 제작하기 위해\n우리팀은 방대한 선거 자료들을 조사하느라 밤을 세웠답니다.\nVR 기술을 활용해 생생한 체험을 제공하며, 교육적인 요소를 강화하려고 많은 노력을 했어요.\n다양한 연령대의 학습자가 재미있고 쉽게 이해할 수 있도록 인터랙티브 요소를 추가했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_2.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '선거과정을 한눈에 살펴보고 각각의\n 과정에 대해 자세히 학습하고 선거의\n 중요성을 깨달을 수 있어요.\n 후보자, 정당 그리고 유권자가 각각의 선거\n 과정에서 어떤 역할을 하는지 알아볼 수 있어요.'
                : '선거과정을 한눈에 살펴보고 각각의 과정에 대해 자세히 학습하고 선거의 중요성을 깨달을 수 있어요.\n 후보자, 정당 그리고 유권자가 각각의 선거 과정에서 어떤 역할을 하는지 알아볼 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_3.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 시장 후보로서 지킬 공약을\n 선택하고, 이를 통해 유권자들에게 지지를 호소할 수 있어요. 공약은 단순한 약속이 아닙니다.\n 유권자들의 꿈을 현실로 만드는 설계도 입니다.\n꿈이 큰 만큼 공약도 멋지게 선택해보세요!'
                : isTablet
                ? '학습자들은 시장 후보로서 지킬 공약을 선택하고,\n 이를 통해 유권자들에게 지지를 호소할 수 있어요.\n공약은 단순한 약속이 아닙니다.\n 유권자들의 꿈을 현실로 만드는 설계도 입니다.\n꿈이 큰 만큼 공약도 멋지게 선택해보세요!'
                : '학습자들은 시장 후보로서 지킬 공약을 선택하고, 이를 통해 유권자들에게 지지를 호소할 수 있어요.\n공약은 단순한 약속이 아닙니다. 유권자들의 꿈을 현실로 만드는 설계도 입니다.\n꿈이 큰 만큼 공약도 멋지게 선택해보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_4.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '학습자들의 이름을 넣은 선거 포스터를\n 만들어볼 수 있어요!\n정말 후보자가 된 기분,\n 마치 슈퍼스타가 된 느낌이죠?'
                : '학습자들의 이름을 넣은 선거 포스터를 만들어볼 수 있어요!\n정말 후보자가 된 기분, 마치 슈퍼스타가 된 느낌이죠?'
            }
          />
        </WidthOneContent>
      </div>
      <div className="AC9EFF">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group3_1.png`} />
          <CustomText
            style={{ color: '#292929' }}
            text={`잠깐! 잘 생각하고 선택해야해요!\n학습자들의 선택에 따라서\n유권자 박탈 여부도 결정된답니다.`}
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            style={{ color: '#292929' }}
            text={
              isMobileTablet
                ? `학습자들이 어떤 공약을 선택하느냐에 따라\n NPC들의 반응이 달라요.\n다양한 유권자들을 만나며\n 자신의 공약을 어필해보세요!`
                : `학습자들이 어떤 공약을 선택하느냐에 따라 NPC들의 반응이 달라요. 다양한 유권자들을 만나며 자신의 공약을 어필해보세요!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group3_2.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group3_3.png`} />
          <CustomText
            style={{ color: '#292929' }}
            text={
              isMobileTablet
                ? `거리로 나가서 지지자들과 함께 현란한\n 선거운동도 할 수 있답니다! \n나의 공약을 외치며 유권자들의\n 마음을 사로잡아보세요.`
                : `거리로 나가서 지지자들과 함께 현란한 선거운동도 할 수 있답니다! 나의 공약을 외치며 유권자들의 마음을 사로잡아보세요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            style={{ color: '#292929' }}
            text={`간혹 엉뚱한 선거 운동을 선택하게 되면 지지율이 떨어질 수 있으니 유의해야해요! 어떤 선거 운동이 지지율 상승에 도움이 될지 많은 고민을 해야한답니다!`}
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group3_4.png`} />
        </WidthImgOneTextsOne>
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_5.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '다양한 선거운동을 통해 유권자들에게\n 지지를 호소할 수 있어요.\n거리 유세, SNS 활용 뿐만 아니라 TV에서\n 토론회를 할 수도 있답니다!'
                : '다양한 선거운동을 통해 유권자들에게 지지를 호소할 수 있어요.\n거리 유세, SNS 활용 뿐만 아니라 TV에서 토론회를 할 수도 있답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_6.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '선거일에 투표소에서 기표하는 방법을 직접\n 체험해 볼 수 있어요. 투표소에서 한 표\n 한 표가 모여 결과를 만든답니다.\n 잊지 않고 무효표가 되는 경우도 확인해보세요!'
                : '선거일에 투표소에서 기표하는 방법을 직접 체험해 볼 수 있어요.\n투표소에서 한 표 한 표가 모여 결과를 만든답니다. 잊지 않고 무효표가 되는 경우도 확인해보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/11_Mayor/group2_7.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '개표 결과에 따라 당락이 결정되요.\n 당선되면 기쁨을 만끽하고, 낙선되면 다음 기회를\n 준비하게 된답니다. 당선의 기쁨은\n 이루 말할 수 없죠! 그러나 낙선해도 괜찮아요.\n 학습자들은 이미 훌륭한 경험을 쌓았으니까요!'
                : '개표 결과에 따라 당락이 결정되요. 당선되면 기쁨을 만끽하고, 낙선되면 다음 기회를 준비하게 된답니다.\n당선의 기쁨은 이루 말할 수 없죠! 그러나 낙선해도 괜찮아요. 학습자들은 이미 훌륭한 경험을 쌓았으니까요!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledMayor>
  );
};

export default Mayor;
