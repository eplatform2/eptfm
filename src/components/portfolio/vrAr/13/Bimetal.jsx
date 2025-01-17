import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledBimetal } from '../../../../assets/styles/portfolio/vrAr/13_Bimetal/StyledBimetal';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';

const Bimetal = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledBimetal>
      <Breadcrumb />
      <PortfolioTitleWrap style={{ display: 'grid', justifyContent: 'center' }} mobileMarginTop={'var(--mobile-50px)'}>
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', whiteSpace: 'nowrap', fontFamily: 'NanumSquareEB' }}
          field={'AR'}
          title={isMobileTablet ? '열팽창 활용하여\n 바이메탈 만들기' : '열팽창 활용하여 바이메탈 만들기'}
        />
      </PortfolioTitleWrap>

      <div className="fullScreen heroAreaWrapper">
        <div className="introductionWrapper">
          <PortfolioIntroductionTitle
            pcMarginTop={'var(--pc-150px)'}
            mobileMarginTop={'var(--mobile-50px)'}
            style={{ color: '#000000' }}
            title={'열팽창의 마법, 바이메탈'}
          />
          <PortfolioIntroductionDescription
            style={{ color: '#000000' }}
            description={
              isMobileTablet
                ? '각기 다른 금속의 열팽창 특성을 실험하고,\n 온도에 따라 반응하는 구조물을 설계해보세요.\n온도 변화가 가져오는 놀라운 과학의 세계를\n 직접 체험해보세요!'
                : '각기 다른 금속의 열팽창 특성을 실험하고, 온도에 따라 반응하는 구조물을 설계해보세요.\n온도 변화가 가져오는 놀라운 과학의 세계를 직접 체험해보세요!'
            }
          />
        </div>
        <HeroImg
          pcAspectRatio={'1920 / 980'}
          mobileAspectRatio={'370 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/${isMobileTablet ? 'main1_m' : 'main1'}.png`}
        />
      </div>

      <div className="first_contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/1.png`} />
          <CustomText
            text={
              isMobileTablet
                ? "열팽창의 원리를 적용한 이 프로젝트는 저희팀의\n 실험실에서 뜨거운 열정으로 탄생했어요. \n다양한 금속을 테스트하는 과정에서 약간의\n '불꽃놀이'도 경험했지만, 그 덕분에 더 재미있는\n 콘텐츠가 완성되었답니다."
                : "열팽창의 원리를 적용한 이 프로젝트는 저희팀의 실험실에서 뜨거운 열정으로 탄생했어요. 다양한 금속을 테스트하는 과정에서 약간의 '불꽃놀이'도 경험했지만, 그 덕분에 더 재미있는 콘텐츠가 완성되었답니다."
            }
          />
        </WidthImgOneTextsOne>
      </div>
      <div className="contentsWrapper">
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobileTablet
                ? '열팽창의 원리와 각 금속별로 열팽창 정도가\n 다름을 실험을 통해 학습하고, 이를 활용하여\n 구조물의 재료를 선택하거나 바이메탈을\n 만드는 과정을 체험할 수 있어요.'
                : '열팽창의 원리와 각 금속별로 열팽창 정도가 다름을 실험을 통해 학습하고, 이를 활용하여 구조물의 재료를 선택하거나 바이메탈을 만드는 과정을 체험할 수 있어요.'
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/2.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/3.png`} />
          <CustomText
            text={
              isMobileTablet
                ? 'AR(증강현실) 기술을 활용하여 열팽창을 고려한\n 건축물의 안정성을 학습할 수 있어요.'
                : `AR(증강현실) 기술을 활용하여 열팽창을 고려한 건축물의 안정성을 학습할 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobileTablet
                ? '텅스텐, 철, 구리 중에서\n 올바른 건축자재를 선택하지 않으면\n건물이 와장창 무너질 수 있으니 조심해야 해요!'
                : `텅스텐, 철, 구리 중에서 올바른 건축자재를 선택하지 않으면 건물이 와장창 무너질 수 있으니 조심해야 해요!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/5.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '실생활에서 자주 찾아볼 수 있는 토스터기에도\n 바이메탈의 원리가 적용되었다는 사실\n 알고 있었나요?'
                : `실생활에서 자주 찾아볼 수 있는 토스터기에도 바이메탈의 원리가 적용되었다는 사실 알고 있었나요?`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobileTablet
                ? '온도 감지 역할을 하는 바이메탈의 원리를\n 잘 이해하고 직접 구성할 수 있어요.\n 빵이 타지 않게 조심하세요!'
                : `온도 감지 역할을 하는 바이메탈의 원리를 잘 이해하고 직접 구성할 수 있어요. 빵이 타지 않게 조심하세요!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/6.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/13_Bimetal/7.png`} />
          <CustomText
            text={
              isMobileTablet
                ? '열팽창 정도를 확인하고 적절하게 조합해서\n 바이메탈의 비밀을 풀어보세요!'
                : `열팽창 정도를 확인하고 적절하게 조합해서 바이메탈의 비밀을 풀어보세요!`
            }
          />
        </WidthImgOneTextsOne>
      </div>
    </StyledBimetal>
  );
};

export default Bimetal;
