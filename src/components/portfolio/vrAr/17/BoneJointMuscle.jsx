import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import ZigZagImgTexts from '../../common/ZigZagImgTexts';
import { Zigzag } from '../../../../assets/styles/portfolio/common/zigZag.styled';
import { StyledBoneJointMuscle } from '../../../../assets/styles/portfolio/vrAr/17_BoneJointMuscle/StyledBoneJointMuscle';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useMobile from '../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from './../../common/Img';
import CustomText from '../../common/CustomText';
import useLongTablet from '../../../hooks/useTabletMax1556';

const BoneJointMuscle = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isLongTablet = useLongTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledBoneJointMuscle>
      <Breadcrumb />

      <PortfolioTitleWrap
        style={{ display: 'grid', justifyContent: 'center' }}
        pcMarginBottom={'var(--pc-80px)'}
        mobileMarginTop={'var(--mobile-50px)'}
        mobileMarginBottom={'var(--mobile-40px)'}
      >
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }}
          field={'AR'}
          title={isMobileTablet ? '뼈, 관절, 근육!\n 우리 몸을 움직이는 세박자' : '뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}
        />
      </PortfolioTitleWrap>

      <div className="fullScreen heroWrapper">
        <div className="rectangle">
          <div className="introductionWrapper">
            <div>
              <PortfolioIntroductionTitle style={{ color: '#FFFFFF' }} title={'관절의 움직임을 따라 춤추는\n뼈의 하모니를 경험해보세요!'} />
              <PortfolioIntroductionDescription
                style={{ color: '#FFFFFF' }}
                description={
                  isMobileTablet
                    ? "'뼈, 관절,근육! 우리 몸을 움직이는 세 박자' \n콘텐츠를 제작하면서, 우리 팀은 학습자들이 \n몸의 구조와 기능을 재미있고 흥미롭게 \n학습할 수 있도록 많은 고민을 했어요."
                    : "'뼈, 관절,근육! 우리 몸을 움직이는 세 박자' \n콘텐츠를 제작하면서, 우리 팀은 학습자들이 \n몸의 구조와 기능을 재미있고 흥미롭게 \n학습할 수 있도록 많은 고민을 했어요."
                }
              />
            </div>
          </div>
        </div>
        <HeroImg
          pcAspectRatio={'1150 / 760'}
          mobileAspectRatio={'1024 / 1230'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent $first>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_1.png`} />
          <CustomText
            text={
              isMobile
                ? '뼈를 직접 조립하고, 관절을 움직이며,\n 근육의 변화를 관찰하는 과정에서 학습자가\n 직접 체험하고 느낄 수 있도록\n 다양한 인터랙션을 설계했어요.'
                : isTablet
                ? '뼈를 직접 조립하고, 관절을 움직이며,\n 근육의 변화를 관찰하는 과정에서 학습자가 직접 체험하고\n 느낄 수 있도록 다양한 인터랙션을 설계했어요.'
                : '뼈를 직접 조립하고, 관절을 움직이며, 근육의 변화를 관찰하는 과정에서\n학습자가 직접 체험하고 느낄 수 있도록 다양한 인터랙션을 설계했어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_2.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자는 머리뼈, 목뼈, 팔뼈, 갈비뼈,\n 척추뼈(등뼈), 다리뼈 등 우리 몸의 주요 뼈들을\n 직접 조립해보며 뼈의 구조와\n 기능을 학습할 수 있어요.'
                : isTablet
                ? '학습자는 머리뼈, 목뼈, 팔뼈, 갈비뼈,\n 척추뼈(등뼈), 다리뼈 등 우리 몸의 주요 뼈들을\n 직접 조립해보며 뼈의 구조와 기능을 학습할 수 있어요.'
                : '학습자는 머리뼈, 목뼈, 팔뼈, 갈비뼈, 척추뼈(등뼈), 다리뼈 등\n우리 몸의 주요 뼈들을 직접 조립해보며 뼈의 구조와 기능을 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_3.png`} />
          <CustomText
            text={
              isMobile
                ? 'AR로 직접 탐험하는 뼈의 세계! \n두개골에서 발끝까지 우리몸을 지탱하는 뼈들을\n 자세히 살펴볼까요?'
                : isTablet
                ? 'AR로 직접 탐험하는 뼈의 세계! \n두개골에서 발끝까지 우리몸을 지탱하는 뼈들을\n 자세히 살펴볼까요?'
                : 'AR로 직접 탐험하는 뼈의 세계! \n두개골에서 발끝까지 우리몸을 지탱하는 뼈들을 자세히 살펴볼까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_4.png`} />
          <CustomText
            text={
              isMobile
                ? '인체의 다양한 관절 종류와 그 기능을\n 학습할 수 있어요. 구부리고 펴는 관절,\n 회전하는 관절 등 다양한 관절의 움직임을\n AR로 확인할 수 있답니다!'
                : isTablet
                ? '인체의 다양한 관절 종류와 그 기능을 학습할 수 있어요.\n 구부리고 펴는 관절, 회전하는 관절 등 다양한 관절의 움직임을\n AR로 확인할 수 있답니다!'
                : '인체의 다양한 관절 종류와 그 기능을 학습할 수 있어요.\n구부리고 펴는 관절, 회전하는 관절 등 다양한 관절의 움직임을 AR로 확인할 수 있답니다!'
            }
          />
        </WidthOneContent>
      </div>

      <div className="fullScreen fff6df">
        <Zigzag $pcPaddingTop={'var(--pc-160px)'}>
          <ZigZagImgTexts
            style={{ color: '#040404' }}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_1.png`}
            text={'관절을 구성하는 연골, 인대, 활액 등의\n구조에 대해 학습할 수 있어요.'}
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-130px)'}
            style={{ color: '#040404' }}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_2.png`}
            text={'AR을 통해 관절의 단면을 시각적으로 확인하고\n각 구성 요소의 역할을 배울 수도 있답니다!'}
          />
          <ZigZagImgTexts
            style={{ color: '#040404' }}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_3.png`}
            text={'관절의 건강을 유지하고\n관절 질환을 예방하는 방법을 학습해요.'}
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-100px)'}
            pcMarginBottom={'var(--pc-160px)'}
            style={{ color: '#040404' }}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_4.png`}
            text={
              isMobile
                ? 'AR로 배우는 관절 건강 비법!\n관절을 보호하고 건강하게 유지하는 방법을\n 배워볼까요?'
                : isTablet
                ? 'AR로 배우는 관절 건강 비법! 관절을 보호하고\n 건강하게 유지하는 방법을 배워볼까요?'
                : isLongTablet
                ? 'AR로 배우는 관절 건강 비법!\n관절을 보호하고 건강하게 유지하는 방법을\n 배워볼까요?'
                : 'AR로 배우는 관절 건강 비법!\n관절을 보호하고 건강하게 유지하는 방법을 배워볼까요?'
            }
          />
          {/* <div className="left">
            <ZigZagImgTexts
              style={{ color: '#040404' }}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_1.png`}
              text={'관절을 구성하는 연골, 인대, 활액 등의\n구조에 대해 학습할 수 있어요.'}
            />
            <ZigZagImgTexts
              style={{ color: '#040404' }}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_2.png`}
              text={'관절의 건강을 유지하고\n관절 질환을 예방하는 방법을 학습해요.'}
            />
          </div>
          <div className="right">
            <ZigZagImgTexts
              style={{ color: '#040404' }}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_3.png`}
              text={'AR을 통해 관절의 단면을 시각적으로 확인하고\n각 구성 요소의 역할을 배울 수도 있답니다!'}
            />
            <ZigZagImgTexts
              style={{ color: '#040404' }}
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group2_4.png`}
              text={'AR로 배우는 관절 건강 비법!\n관절을 보호하고 건강하게 유지하는 방법을 배워볼까요?'}
            />
          </div> */}
        </Zigzag>
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_5.png`} />
          <CustomText
            text={
              isMobile
                ? '인체를 움직이게 하는 근육의 구조와 기능을\n 학습할 수 있어요!\n 주요 근육의 위치와 이름을 AR로 확인하고,\n 각 근육의 역할을 배울 수 있답니다.'
                : isTablet
                ? '인체를 움직이게 하는 근육의 구조와 기능을\n 학습할 수 있어요! 주요 근육의 위치와 이름을\n AR로 확인하고, 각 근육의 역할을 배울 수 있답니다.'
                : '인체를 움직이게 하는 근육의 구조와 기능을 학습할 수 있어요!\n주요 근육의 위치와 이름을 AR로 확인하고, 각 근육의 역할을 배울 수 있답니다.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_6.png`} />
          <CustomText
            text={
              isMobile
                ? '근육이 어떻게 수축하고 이완하는지 알고\n 있나요?\n 근육의 작용 원리를 AR 애니메이션을\n 통해 시각적으로 확인할 수 있어요.\n근육이 어떻게 작용하는지 직접 눈으로\n 확인해보세요!'
                : isTablet
                ? '근육이 어떻게 수축하고 이완하는지 알고 있나요?\n근육의 작용 원리를 AR 애니메이션을 통해\n 시각적으로 확인할 수 있어요.\n근육이 어떻게 작용하는지 직접 눈으로 확인해보세요!'
                : '근육이 어떻게 수축하고 이완하는지 알고 있나요?\n근육의 작용 원리를 AR 애니메이션을 통해 시각적으로 확인할 수 있어요.\n근육이 어떻게 작용하는지 직접 눈으로 확인해보세요!'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/17_BoneJointMuscle/group1_7.png`} />
          <CustomText
            text={
              isMobile
                ? '걷기, 공차기, 점프하기\n 그리고 춤추는 해골친구를 만나보세요!\n인체의 놀라운 구조와 기능을 눈앞에서 확인하는\n 신나는 여정이 기다리고 있답니다!'
                : isTablet
                ? '걷기, 공차기, 점프하기\n 그리고 춤추는 해골친구를 만나보세요!\n인체의 놀라운 구조와 기능을 눈앞에서 확인하는\n 신나는 여정이 기다리고 있답니다!'
                : '걷기, 공차기, 점프하기 그리고 춤추는 해골친구를 만나보세요!\n인체의 놀라운 구조와 기능을 눈앞에서 확인하는 신나는 여정이 기다리고 있답니다!'
            }
          />
        </WidthOneContent>
      </div>
    </StyledBoneJointMuscle>
  );
};

export default BoneJointMuscle;
