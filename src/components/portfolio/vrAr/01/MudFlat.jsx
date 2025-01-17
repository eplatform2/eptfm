import React, { useState } from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';

import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import CustomText from '../../common/CustomText';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import HeroImg from '../../common/Hero/HeroImg';
import Img from '../../common/Img';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import { StyledMudFlat } from '../../../../assets/styles/portfolio/vrAr/01_MudFlat/StyledMudFlat';

const MudFlat = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useResponsiveMax1024();
  return (
    <StyledMudFlat>
      <Breadcrumb />
      <div className="fullScreen relative">
        <PortfolioTitleWrap
          $isLoaded={isLoaded}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <PortfolioOrganization style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'NanumSquareEB',
              whiteSpace: 'nowrap',
            }}
            field={'AR'}
            title={'갯벌은 어떤 곳일까?'}
          />
        </PortfolioTitleWrap>

        <HeroImg
          pcHeight={'1920 / 1080'}
          // tabletHeight={''}
          mobileHeight={'375 / 450'}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/${isMobile ? 'main1_mobile' : 'main1'}.png`}
        />
      </div>

      <div className="mainContainer">
        <img className="woman" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/woman.png`} alt="" />
        <div className="introductionWrap">
          <div>
            <PortfolioIntroductionTitle title={'갯벌 생물 채집 달인에 도전!'} />
            <PortfolioIntroductionDescription
              pcMarginTop={'60px'}
              mobileMarginTop={'5.33vw'}
              description={
                "'갯벌은 어떤 곳일까?' 콘텐츠는 갯벌의 중요성을\n체험적으로 학습할 수 있도록 설계되었어요. \n갯벌 탐방을 통해 얻은 생생한 데이터를 바탕으로\n시나리오를 구성하고, 갯벌 생물들을 실감나게 \n재현하기 위해 전문가의 자문을 받았답니다!"
              }
            />
          </div>
        </div>
      </div>
      <div className="fullScreen watchContainer">
        <p className="watchTitle NanumSquareEB">시계형 조작부</p>
        <div className="centerAlignment">
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/01_mulsigye.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/02_mulsigye.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/03_mulsigye.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/04_mulsigye.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/05_mulsigye.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/06_mulsigye.png`} alt="" />
        </div>

        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobile
              ? '시계형 조작부를 통해 바다 모형의 밀물과 썰물을\n 변화시켜 시간이 흐름에 따라 바다와 갯벌 환경이\n 변화하는 모습을 이해할 수 있어요.'
              : '시계형 조작부를 통해 바다 모형의 밀물과 썰물을 변화시켜\n시간이 흐름에 따라 바다와 갯벌 환경이 변화하는 모습을 이해할 수 있어요.'
          }
        />
      </div>

      <div className="maxWidth1100Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_1.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobile
                ? '우리팀은 학습자들이 ‘갯벌은 어떤 곳일까?’\n 콘텐츠를 통해 밀물과 썰물의 변화, 갯벌의 생태계,\n 환경 정화 기능 등 갯벌의 다양한 측면을\n자연스럽게 학습할 수 있도록 하기 위해\n 많은 노력을 기울였어요.'
                : '우리팀은 학습자들이 ‘갯벌은 어떤 곳일까?’ 콘텐츠를 통해\n밀물과 썰물의 변화, 갯벌의 생태계, 환경 정화 기능 등 갯벌의 다양한 측면을\n자연스럽게 학습할 수 있도록 하기 위해 많은 노력을 기울였어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_2.png`} />
          <CustomText
            text={
              isMobile
                ? '뿐만 아니라, 갯벌 체험에서 꼭 주의해야 할\n 사항들도 학습자들이 기억할 수 있도록\n 안전 유의 사항의 내용을 넣었죠.'
                : '뿐만 아니라, 갯벌 체험에서 꼭 주의해야 할 사항들도\n학습자들이 기억할 수 있도록 안전 유의 사항의 내용을 넣었죠.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_3.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 캐릭터를 직접 움직이며 갯벌에\n 서식하는 다양한 생물들을 채집할 수 있어요.\n자연과의 공생! 갯벌에 사는 다양한 생물\n 친구들을 만나볼까요?'
                : '학습자들은 캐릭터를 직접 움직이며 갯벌에 서식하는 다양한 생물들을 채집할 수 있어요.\n자연과의 공생! 갯벌에 사는 다양한 생물 친구들을 만나볼까요?'
            }
          />
        </WidthOneContent>
      </div>

      <div className="fullScreen gridContainer">
        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/01_reed.png`} alt="" />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/02_cockle.png`} alt="" />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/03_octopus.png`} alt="" />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/04_SandBubblerCrabs.png`} alt="" />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/05_SuaedaJaponica.png`} alt="" />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/06_HoodedCrane.png`} alt="" />
          </li>
        </ul>
        <CustomText
          text={
            isMobile
              ? '엽낭게, 농게, 칠게, 꼬막, 짱둥어,\n 검은머리갈매기, 염생식물 등 다양한 생물을\n AR을 통해 실감 나게 관찰해보세요!'
              : '엽낭게, 농게, 칠게, 꼬막, 짱둥어, 검은머리갈매기, 염생식물 등\n다양한 생물을 AR을 통해 실감 나게 관찰해보세요!'
          }
        />
      </div>

      <div className="maxWidth1100Wrapper">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_4.png`} />
          <CustomText
            text={
              isMobile
                ? '갯벌에 빠지거나, 시간 내에 안전 지대로\n 돌아가지 못하면 발생하는 위험 이벤트들을\n 경험해보세요! 안전이 최고! 갯벌에서의\n 위험상황 대비 방법을 학습할 수 있답니다.'
                : '갯벌에 빠지거나, 시간 내에 안전 지대로 돌아가지 못하면 \n발생하는 위험 이벤트들을 경험해보세요!\n안전이 최고! 갯벌에서의 위험상황 대비 방법을 학습할 수 있답니다.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_5.png`} />
          <CustomText
            text={
              isMobile
                ? '천연기념물의 흑두루미와 검은머리갈매기의\n 울음소리도 들어보세요!\n꺄륵 꺄륵 하며 우는 소리를 들으면\n 진짜 갯벌에 와있는 기분이 들어요.'
                : '천연기념물의 흑두루미와 검은머리갈매기의 울음소리도 들어보세요!\n꺄륵 꺄륵 하며 우는 소리를 들으면 진짜 갯벌에 와있는 기분이 들어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/group1_6.png`} />
          <CustomText
            text={
              isMobile
                ? '갯벌 생물 도감을 통해 갯벌이 생물들에게\n 중요한 역할을 한다는 사실을 배울 수 있어요.\n갯벌의 환경 정화 기능과 그 중요성을\n 같이 이해해볼까요?'
                : '갯벌 생물 도감을 통해 갯벌이 생물들에게 중요한 역할을 한다는 사실을 배울 수 있어요.\n갯벌의 환경 정화 기능과 그 중요성을 같이 이해해볼까요?'
            }
          />
        </WidthOneContent>
      </div>
      <WidthOneContent $last>
        <img className="man" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/01_MudFlat/man.png`} alt="" />
        <CustomText
          text={
            isMobile
              ? '갯벌의 생태적 중요성을 자연스럽게 배우고,\n갯벌 환경을 체험하며 환경 보존의\n 필요성을 느낄 수 있어요.\n갯벌의 비밀을 탐험하며 환경 보호를 배워보세요!'
              : '갯벌의 생태적 중요성을 자연스럽게 배우고,\n갯벌 환경을 체험하며 환경 보존의 필요성을 느낄 수 있어요.\n갯벌의 비밀을 탐험하며 환경 보호를 배워보세요!'
          }
        />
      </WidthOneContent>
    </StyledMudFlat>
  );
};

export default MudFlat;
