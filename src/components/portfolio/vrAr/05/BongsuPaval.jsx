import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { StyledBongsuPaval } from '../../../../assets/styles/portfolio/vrAr/05_BongsuPaval/StyledBongsuPaval';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import CustomText from '../../common/CustomText';
import Img from '../../common/Img';
import WidthImgTwo from '../../common/WidthImgTwo';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import useLongTablet from '../../../hooks/useTabletMax1556';

const BongsuPaval = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  const isLongTablet = useLongTablet();
  return (
    <StyledBongsuPaval>
      <div className="heroWrapper">
        <Breadcrumb />
        <PortfolioTitleWrap
          mobilePaddingTop="50px"
          style={{
            display: 'grid',
            justifyContent: 'center',
          }}
        >
          <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
          <PortfolioFieldTitle
            style={{
              color: '#48C2C5',
              fontFamily: 'NanumSquareEB',
              whiteSpace: 'nowrap',
            }}
            field={'AR'}
            title={isMobileTablet ? '옛 사람들의 통신수단,\n 봉수제도와 파발제도' : '옛 사람들의 통신수단, 봉수제도와 파발제도'}
          />
        </PortfolioTitleWrap>

        <div className="beaconWrapper">
          <div className="top-row">
            <img className="beacon" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/left.png`} alt="" />
            <div className="introudctionWrapper">
              <PortfolioIntroductionTitle title={isMobileTablet ? '불과 연기로 전하는\n 고대의 지혜!' : '불과 연기로 전하는 고대의 지혜!'} />
              <PortfolioIntroductionDescription
                style={{ color: '#767676' }}
                pcMarginBottom={'var(--pc-100px)'}
                mobileMarginTop={'5.33vw'}
                description={
                  isMobileTablet
                    ? '증강현실로 5개의 봉수대를\n 설치하고, 상황에 맞게 연기와\n 횃불을 올려보세요.\n봉수제도와 파발제도를 통해\n 옛 사람들의 통신 방법과\n 지혜를 체험할 수 있습니다.'
                    : '증강현실로 5개의 봉수대를 설치하고, 상황에 맞게 연기와 횃불을 올려보세요.\n봉수제도와 파발제도를 통해 옛 사람들의 통신 방법과 지혜를 체험할 수 있습니다.'
                }
              />

              <img className="pc_beaconCount" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/right.png`} alt="" />
            </div>
          </div>
          <img className="mobile_beaconCount" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/right.png`} alt="" />
        </div>
      </div>

      <div className="textWrapper">
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? "'옛 사람들의 통신수단, 봉수제도와 파발제도'\n 콘텐츠를 개발하며, 우리 팀은 작은 불씨를\n 꺼트리지 않으려고 애쓰는 옛 사람들의\n 심정을 느꼈답니다."
              : "'옛 사람들의 통신수단, 봉수제도와 파발제도' 콘텐츠를 개발하며,\n 우리 팀은 작은 불씨를 꺼트리지 않으려고 애쓰는 옛 사람들의 심정을 느꼈답니다."
          }
        />
      </div>

      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/1.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/2.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobile
              ? '통신 수단이 부족했던 옛날, 봉수대는 멀리서도\n 알아볼 수 있는 불이나 연기를\n 이용해 긴급한 소식을 전했어요.\n낮에는 가축의 똥을 태워 연기로,\n 밤에는 나뭇가지를 태워 불로 상황을 전달했죠.'
              : isTablet
              ? '통신 수단이 부족했던 옛날, 봉수대는 멀리서도\n 알아볼 수 있는 불이나 연기를\n 이용해 긴급한 소식을 전했어요.\n낮에는 가축의 똥을 태워 연기로,\n 밤에는 나뭇가지를 태워 불로 상황을 전달했죠.'
              : '통신 수단이 부족했던 옛날, 봉수대는 멀리서도 알아볼 수 있는\n 불이나 연기를 이용해 긴급한 소식을 전했어요.\n낮에는 가축의 똥을 태워 연기로, 밤에는 나뭇가지를 태워 불로 상황을 전달했죠.'
          }
        />
      </div>
      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/3.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/4.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? '평상시에는 하나의 신호, 적이 국경에 나타날 때는\n 둘, 국경에 근접할 경우 셋, 국경을 침입할 경우 넷,\n적군과 접전할 경우 다섯 개의 신호를 보냈어요.\n 신호의 숫자가 상황을 명확히 전달했답니다!'
              : '평상시에는 하나의 신호, 적이 국경에 나타날 때는 둘, 국경에 근접할 경우 셋, 국경을 침입할 경우 넷,\n적군과 접전할 경우 다섯 개의 신호를 보냈어요. 신호의 숫자가 상황을 명확히 전달했답니다!'
          }
        />
      </div>
      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/5.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/6.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? '소식을 신속히 전달하기 위해\n 파발제도가 생겼어요.\n봉수제도가 구름이나 안개로 신호 전달이\n 어려울 때 이를 보완하는 역할을 했답니다.'
              : '소식을 신속히 전달하기 위해 파발제도가 생겼어요.\n봉수제도가 구름이나 안개로 신호 전달이 어려울 때 이를 보완하는 역할을 했답니다.'
          }
        />
      </div>
      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/7.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/8.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? '파발은 말을 이용한 ‘기발’과 도보를\n 이용한 ‘보발’로 나뉘어요.\n두 방식 모두 빠르고 정확하게 정보를 전달하는 데\n 중요한 역할을 했답니다.\n우리는 ‘타임 어택’ 게임형식을 도입하여,\n 봉수제도와 파발제도의 이해를 도왔어요.'
              : '파발은 말을 이용한 ‘기발’과 도보를 이용한 ‘보발’로 나뉘어요.\n두 방식 모두 빠르고 정확하게 정보를 전달하는 데 중요한 역할을 했답니다.\n우리는 ‘타임 어택’ 게임형식을 도입하여,  봉수제도와 파발제도의 이해를 도왔어요.'
          }
        />
      </div>
      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/9.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/10.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? '주어진 시간 내에 봉수제도와 파발제도의 미션을\n 완료하지 못하면 실패적인 결말을 맞이하고,\n시간 내에 완료하면 성공하는\n 두 가지 결말을 경험할 수 있답니다!\n긴장감 넘치는 게임 형식으로 역사적 통신 수단을\n 체험할 수 있어요.'
              : '주어진 시간 내에 봉수제도와 파발제도의 미션을 완료하지 못하면 실패적인 결말을 맞이하고,\n시간 내에 완료하면 성공하는 두 가지 결말을 경험할 수 있답니다!\n긴장감 넘치는 게임 형식으로 역사적 통신 수단을 체험할 수 있어요.'
          }
        />
      </div>
      <div className="projectDescriptions">
        <WidthImgTwo gap={'var(--pc-40px)'}>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/11.png`} />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/05_BongsuPaval/12.png`} />
        </WidthImgTwo>
        <CustomText
          style={{ textAlign: 'center' }}
          text={
            isMobileTablet
              ? '‘옛 사람들의 통신 수단, 봉수제도와 파발제도’\n 콘텐츠는 단순한 학습을 넘어, 사용자에게\n 몰입감을 주는 VR 체험을 제공해요.\n긴급한 상황에서 봉수대 신호를 보내고,\n 빠른 시간 내에 파발을 통해 문서를 전달하는\n 미션을 통해 옛 통신 방식을 재미있게\n 배울 수 있답니다! 이 콘텐츠와 함께\n 옛 통신 수단의 신비를 체험해보세요!'
              : isLongTablet
              ? '‘옛 사람들의 통신 수단, 봉수제도와 파발제도’ 콘텐츠는 단순한 학습을 넘어, 사용자에게\n 몰입감을 주는 VR 체험을 제공해요. 긴급한 상황에서 봉수대 신호를 보내고,\n 빠른 시간 내에 파발을 통해 문서를 전달하는 미션을 통해 옛 통신 방식을 재미있게\n 배울 수 있답니다! 이 콘텐츠와 함께 옛 통신 수단의 신비를 체험해보세요!'
              : '‘옛 사람들의 통신 수단, 봉수제도와 파발제도’ 콘텐츠는 단순한 학습을 넘어, 사용자에게 몰입감을 주는 VR 체험을 제공해요.\n긴급한 상황에서 봉수대 신호를 보내고, 빠른 시간 내에 파발을 통해 문서를 전달하는 미션을 통해\n옛 통신 방식을 재미있게 배울 수 있답니다! 이 콘텐츠와 함께 옛 통신 수단의 신비를 체험해보세요!'
          }
        />
      </div>
    </StyledBongsuPaval>
  );
};

export default BongsuPaval;
