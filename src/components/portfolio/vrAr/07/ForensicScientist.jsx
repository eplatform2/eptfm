import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledForensicScientist } from '../../../../assets/styles/portfolio/vrAr/07_ForensicScientist/StyledForensicScientist';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import CustomText from '../../common/CustomText';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import Img from '../../common/Img';

const ForensicScientist = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobileTablet = useResponsiveMax1024();
  return (
    <>
      <StyledForensicScientist>
        <Breadcrumb style={{ position: 'absolute' }} font={{ color: '#FFFFFF' }} />
        <PortfolioTitleWrap
          // $isLoaded={isLoaded}
          pcMarginTop={'var(--pc-180px)'}
          mobileMarginTop={'var(--mobile-50px)'}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <PortfolioOrganization style={{ color: '#FFFFFF', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{ color: '#FFFFFF', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }}
            field={'VR'}
            title={isMobileTablet ? '과학수사요원이 되어\n 범인을 찾아라!' : '과학수사요원이 되어 범인을 찾아라!'}
          />
        </PortfolioTitleWrap>
        <div className="heroWrapper">
          <HeroImg
            style={{ fontSize: 0 }}
            pcAspectRatio={'1920 / 1400'}
            mobileAspectRatio={'375 / 470'}
            // isLoaded={isLoaded}
            // setIsLoaded={setIsLoaded}
            src={
              isMobileTablet
                ? `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/hero_m.png`
                : `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/hero.png`
            }
          />
        </div>

        <div className="mainBackgroundImg">
          <PortfolioIntroductionTitle
            style={{ color: '#292929', textAlign: 'center' }}
            pcPaddingTop={'var(--pc-200px)'}
            mobileMarginTop={'var(--mobile-80px)'}
            title={isMobileTablet ? '크로마토그래피로\n 범인을 찾는 과학수사 체험!' : '크로마토그래피로 범인을 찾는 과학수사 체험!'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#292929', textAlign: 'center' }}
            description={
              isMobileTablet
                ? '과학수사요원이 되어 혼합물 분리 방법을 배우고,\n 혈흔 분석, 족적 확인, 지문 채취 등\n 다양한 과학수사 과정을 체험해보세요.'
                : '과학수사요원이 되어 혼합물 분리 방법을 배우고,\n 혈흔 분석, 족적 확인, 지문 채취 등 다양한 과학수사 과정을 체험해보세요.'
            }
          />
          <img className="powder" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/main3.png`} alt="" />
        </div>

        <div className="orderWrapper">
          <div className="introduction_text2_Wrapper">
            <CustomText
              text={
                "'과학수사요원이 되어 범인을 찾아라!' 콘텐츠를 제작하면서, 우리 팀은 CSI 요원이 된 듯한 기분이었어요. 잉크를 분리하는 크로마토그래피 실험 중에는 누가 내 커피를 훔쳐 마셨는지까지 알아낼 뻔 했어요."
              }
            />
          </div>

          <div className="sideImgsWrapper">
            <img className="magnifier" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/side1.png`} alt="" />
            <img className="blood_1" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/side2.png`} alt="" />
          </div>
        </div>

        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/1.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '‘과학수사요원이 되어 범인을 잡아라!’ 콘텐츠를\n 통해 학습자가 과학수사요원이 되어 범죄 현장을\n 조사하고, 증거를 수집하며 최종적으로 범인을\n 검거하는 과정까지 체험할 수 있어요.'
                : '‘과학수사요원이 되어 범인을 잡아라!’ 콘텐츠를 통해 학습자가 과학수사요원이 되어 범죄 현장을 조사하고,\n증거를 수집하며 최종적으로 범인을 검거하는 과정까지 체험할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/2.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? 'VR을 통해 현실감 넘치는 범죄 현장을 둘러보고,\n 과학적인 방법을 활용해 범인을 찾아가는\n 재미와 교육적 가치를 동시에 제공한답니다!\n현장에서 발견된 증거들을 사진 촬영하여\n 발생 사건 분석 보고서를 확인 할 수 있어요.'
                : 'VR을 통해 현실감 넘치는 범죄 현장을 둘러보고, 과학적인 방법을 활용해\n범인을 찾아가는 재미와 교육적 가치를 동시에 제공한답니다!\n현장에서 발견된 증거들을 사진 촬영하여 발생 사건 분석 보고서를 확인 할 수 있어요.'
            }
          />
        </WidthOneContent>
        <div className="relative">
          <img className="book" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/book.png`} alt="" />
        </div>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/3.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '현장에서 수집한 지문을 수집하여\n 국립과학수사연구원으로 전달할 수 있어요.\n지문 데이터베이스와 비교하여 범인을\n 특정하는 데 사용된답니다!\n지문 하나가 진실을 밝혀낼 수 있어요.\n 손끝에서 시작되는 추적의 여정!'
                : '현장에서 수집한 지문을 수집하여 국립과학수사연구원으로 전달할 수 있어요.\n지문 데이터베이스와 비교하여 범인을 특정하는 데 사용된답니다!\n지문 하나가 진실을 밝혀낼 수 있어요. 손끝에서 시작되는 추적의 여정!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/4.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '혈청을 사용한 혈흔 확인 실험을 통해\n 혈액형을 분석하고,\n 이를 기반으로 범인의 특성을 추정할 수 있어요.\n이 범죄는 피로 쓰여진 퍼즐이다!\n 혈액형 분석으로 그 퍼즐을 맞춰보세요!'
                : '혈청을 사용한 혈흔 확인 실험을 통해 혈액형을 분석하고, 이를 기반으로 범인의 특성을 추정할 수 있어요.\n이 범죄는 피로 쓰여진 퍼즐이다! 혈액형 분석으로 그 퍼즐을 맞춰보세요!'
            }
          />
        </WidthOneContent>
        <div className="footsWrapper">
          <img
            className="foots"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/${isMobileTablet ? 'foots_m' : 'foots'}.png`}
            alt=""
          />
        </div>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/5.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '현장에 남아있는 족적을 통해\n 신발 크기와 종류를 예측할 수 있고,\n 범인의 이동 경로와 신장을 추정할 수 있어요.\n발자국은 말을 하지 않지만,\n 우리가 찾는 진실을 속삭인답니다!'
                : '현장에 남아있는 족적을 통해 신발 크기와 종류를 예측할 수 있고, 범인의 이동 경로와 신장을 추정할 수 있어요.\n발자국은 말을 하지 않지만, 우리가 찾는 진실을 속삭인답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/6.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '현장에서 발견된 머리카락을 통해 곱슬,\n 직모 여부와 염색 여부를 판단해보세요.\n용의자의 외모를 특정하는 데\n 중요한 단서가 된답니다.\n머리카락 한 올이 수사의 방향을 결정짓기도 해요.\n 여러분의 관찰력이 빛날 차례에요!'
                : '현장에서 발견된 머리카락을 통해 곱슬, 직모 여부와 염색 여부를 판단해보세요.\n용의자의 외모를 특정하는 데 중요한 단서가 된답니다.\n머리카락 한 올이 수사의 방향을 결정짓기도 해요. 여러분의 관찰력이 빛날 차례에요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/7.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '현관에서 범인이 흘린 수첩을 발견해보세요! \n이 수첩은 크로마토그래피 실험에서\n 중요한 단서로 활용된답니다.\n범인의 비밀이 담긴 수첩을 찾으면,\n 수첩 속 글자가 여러분들의 열쇠가 될 수 있어요!'
                : '현관에서 범인이 흘린 수첩을 발견해보세요! \n이 수첩은 크로마토그래피 실험에서 중요한 단서로 활용된답니다.\n범인의 비밀이 담긴 수첩을 찾으면, 수첩 속 글자가 여러분들의 열쇠가 될 수 있어요!'
            }
          />
        </WidthOneContent>
        <div className="relative">
          <img
            className="blood_2"
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/${isMobileTablet ? 'blood_m' : 'blood'}.png`}
            alt=""
          />
        </div>
        <WidthOneContent $last>
          <Img pcMaxWidth={'790'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/07_ForensicScientist/8.png`} />
          <CustomText
            style={{ whiteSpace: 'nowrap' }}
            text={
              isMobileTablet
                ? '크로마토그래피를 통해 혼합물을\n 어떻게 분리할 수 있는지 학습할 수 있어요.\n우리 팀은 학습자들이 몰입할 수 있도록\n 디테일한 부분까지 신경 썼답니다.\n크로마토그래피 실험은\n 마치 실험실에 있는 듯한 현실감을\n 주기 위해 여러번의 테스트를 거쳤어요!\n‘과학수사요원이 되어 범인을 찾아라’ 콘텐츠를\n 통해 과학수사의 매력을 체험해보세요.'
                : '크로마토그래피를 통해 혼합물을 어떻게 분리할 수 있는지 학습할 수 있어요.\n우리 팀은 학습자들이 몰입할 수 있도록 디테일한 부분까지 신경 썼답니다.\n크로마토그래피 실험은 마치 실험실에 있는 듯한 현실감을 주기 위해 여러번의 테스트를 거쳤어요!\n‘과학수사요원이 되어 범인을 찾아라’ 콘텐츠를 통해 과학수사의 매력을 체험해보세요.'
            }
          />
        </WidthOneContent>
      </StyledForensicScientist>
    </>
  );
};

export default ForensicScientist;
