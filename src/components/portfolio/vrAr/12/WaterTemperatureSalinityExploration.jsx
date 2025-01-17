import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import CustomWrapImg from '../../common/CustomWrapImg';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledWaterTemperatureSalinityExploration } from '../../../../assets/styles/portfolio/vrAr/12_WaterTemperature/StyledWaterTemperature';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';

const WaterTemperatureSalinityExploration = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();
  const isTablet = useTablet();
  return (
    <StyledWaterTemperatureSalinityExploration>
      <div className="fullScreen mainImgContainer relative">
        <Breadcrumb font={{ color: '#FFFFFF' }} style={{ position: 'absolute' }} />

        <PortfolioTitleWrap
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
            style={{ color: '#44EFF3', whiteSpace: 'nowrap', fontFamily: 'NanumSquareEB' }}
            field={'VR'}
            title={isMobileTablet ? '바닷속 생물 채집과\n 수온, 염분 탐사' : '바닷속 생물 채집과 수온, 염분 탐사'}
          />
        </PortfolioTitleWrap>
        <HeroImg
          pcAspectRatio={'1920 / 1420'}
          mobileAspectRatio={'370 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/${
            isMobileTablet ? 'main_m' : 'main'
          }.png`}
        />
        <div className="rectangular">
          <PortfolioIntroductionTitle mobileMarginTop={'var(--mobile-50px)'} style={{ color: '#1E4F91' }} title={'물고기와 함께 떠나는 바다 탐험!'} />
          <PortfolioIntroductionDescription
            style={{ color: '#1E4F91' }}
            description={
              isMobileTablet
                ? '동해, 홍해, 북극해의 수온과 염분을 직접\n 측정하고, 다양한 해양 생물을 채집해보세요.\n과학적 발견의 즐거움을 만끽하며\n 바다의 비밀을  파헤쳐보세요!'
                : '동해, 홍해, 북극해의 수온과 염분을 직접 측정하고,\n다양한 해양 생물을 채집해보세요.\n과학적 발견의 즐거움을 만끽하며 바다의 비밀을 \n파헤쳐보세요!'
            }
          />
        </div>
      </div>
      <WidthOneContent>
        <img
          className="dolphin"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/1.png`}
          alt=""
        />
        <CustomText
          text={
            isMobileTablet
              ? '이 콘텐츠를 만들기 위해 저희 팀은 물고기와\n 함께 수중 탐사대가 된 듯한 기분을 느꼈답니다.\n덕분에 진정한 바다 탐험의 매력을\n 담아낼 수 있었어요. 이젠 여러분도\n 가상 현실에서 바닷속 탐험가가 되어보세요!'
              : '이 콘텐츠를 만들기 위해 저희 팀은 물고기와 함께 수중 탐사대가 된 듯한 기분을 느꼈답니다.\n덕분에 진정한 바다 탐험의 매력을 담아낼 수 있었어요. 이젠 여러분도 가상 현실에서 바닷속 탐험가가 되어보세요!'
          }
        />
      </WidthOneContent>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/2.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들이 “바닷속 생물 채집과 수온, 염분\n 탐사” 콘텐츠를 통해 물고기를 잡으면서 해수의\n 연직 수온 분포와 온도를 탐사하고,\n 해수에 녹아있는 물질과 염분의 차이를\n 학습할 수 있도록 구성했어요.'
                : isTablet
                ? '학습자들이 “바닷속 생물 채집과 수온, 염분 탐사”\n 콘텐츠를 통해 물고기를 잡으면서 해수의\n 연직 수온 분포와 온도를 탐사하고,\n 해수에 녹아있는 물질과 염분의 차이를\n 학습할 수 있도록 구성했어요.'
                : '학습자들이 “바닷속 생물 채집과 수온, 염분 탐사” 콘텐츠를 통해 물고기를 잡으면서\n해수의 연직 수온 분포와 온도를 탐사하고, 해수에 녹아있는 물질과 염분의 차이를 학습할 수 있도록 구성했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/3.png`} />
          <CustomText
            text={
              isMobileTablet
                ? 'VR 기술을 활용하여 다양한 바닷속 생물과 함께\n 해양 과학의 신비를 탐헐할 수 있어요.\n다양한 해양 환경과 수온 분포를 이해하고,\n 물고기의 서식지를 탐사할 수 있답니다.'
                : 'VR 기술을 활용하여 다양한 바닷속 생물과 함께 해양 과학의 신비를 탐헐할 수 있어요.\n다양한 해양 환경과 수온 분포를 이해하고, 물고기의 서식지를 탐사할 수 있답니다.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/4.png`} />
          <CustomText
            text={
              isMobile
                ? '동해의 다양한 수온 분포와 물고기의 서식지를\n 체험할 수 있어요. 고등어 잡으러 동해로!\n 물렁가시붉은새우와 향고래도 함께\n 발견해보세요.'
                : isTablet
                ? '동해의 다양한 수온 분포와 물고기의 서식지를\n 체험할 수 있어요. 고등어 잡으러 동해로!\n 물렁가시붉은새우와 향고래도 함께 발견해보세요.'
                : '동해의 다양한 수온 분포와 물고기의 서식지를 체험할 수 있어요.\n고등어 잡으러 동해로! 물렁가시붉은새우와 향고래도 함께 발견해보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/5.png`} />
          <CustomText
            text={
              isMobile
                ? '깊은 바닷속으로 여행을 떠나볼까요?\n은지느러미상어와 초롱아귀도 만나 볼 수\n 있어요. 홍해의 고유한 해양 생태계와\n 온도 변화를 경험해보세요.'
                : isTablet
                ? '깊은 바닷속으로 여행을 떠나볼까요?\n은지느러미상어와 초롱아귀도 만나 볼 수 있어요.\n 홍해의 고유한 해양 생태계와\n 온도 변화를 경험해보세요.'
                : '깊은 바닷속으로 여행을 떠나볼까요?\n은지느러미상어와 초롱아귀도 만나 볼 수 있어요.\n 홍해의 고유한 해양 생태계와 온도 변화를 경험해보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/6.png`} />
          <CustomText
            text={
              isMobile
                ? '북극해는 전체적으로 온도가 비슷해 연직\n 분포가 나타나지 않는다는 것을 알고 있나요?\n북극해에서 북대서양대구와 검정가자미 그리고\n 그린란드상어를 잡아보세요!'
                : isTablet
                ? '북극해는 전체적으로 온도가 비슷해 연직 분포가\n 나타나지 않는다는 것을 알고 있나요?\n북극해에서 북대서양대구와 검정가자미 그리고\n 그린란드상어를 잡아보세요!'
                : '북극해는 전체적으로 온도가 비슷해 연직 분포가 나타나지 않는다는 것을 알고 있나요?\n북극해에서 북대서양대구와 검정가자미 그리고 그린란드상어를 잡아보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/7.png`} />
          <CustomText
            text={
              isMobile
                ? '모든 물고기를 잡으면 도감이 완성되고\n 연구실이 열린답니다. 채취한 동해, 홍해,\n 북극해의 해수를 연구실로 가져와보세요.\n모든 물고기를 잡았다면, 이제 연구실에서\n 해수의 비밀을 파헤쳐볼 차례에요!'
                : isTablet
                ? '모든 물고기를 잡으면 도감이 완성되고\n 연구실이 열린답니다. 채취한 동해, 홍해,\n 북극해의 해수를 연구실로 가져와보세요.\n모든 물고기를 잡았다면, 이제 연구실에서 해수의\n 비밀을 파헤쳐볼 차례에요!'
                : '모든 물고기를 잡으면 도감이 완성되고 연구실이 열린답니다.\n채취한 동해, 홍해, 북극해의 해수를 연구실로 가져와보세요.\n모든 물고기를 잡았다면, 이제 연구실에서 해수의 비밀을 파헤쳐볼 차례에요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/8.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 해수에 녹아 있는 물질을 실험을\n 통해 확인할 수 있어요. 각 해수의 염분비를\n 그래프로 시각화하고 분석해요. 바닷물이 왜 짠지 궁금하지 않나요? 해수에 어떤 물질이\n 녹아 있는지 실험으로 알아보세요!'
                : isTablet
                ? '학습자들은 해수에 녹아 있는 물질을 실험을 통해\n 확인할 수 있어요. 각 해수의 염분비를 그래프로\n 시각화하고 분석해요. 바닷물이 왜 짠지 궁금하지\n 않나요? 해수에 어떤 물질이 녹아 있는지\n 실험으로 알아보세요!'
                : '학습자들은 해수에 녹아 있는 물질을 실험을 통해 확인할 수 있어요.\n각 해수의 염분비를 그래프로 시각화하고 분석해요.\n바닷물이 왜 짠지 궁금하지 않나요? 해수에 어떤 물질이 녹아 있는지 실험으로 알아보세요!'
            }
          />
        </WidthOneContent>
      </div>

      <CustomWrapImg src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/12_WaterTemperatureSalinityExploration/bottom.png`} />
    </StyledWaterTemperatureSalinityExploration>
  );
};

export default WaterTemperatureSalinityExploration;
