import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import CustomText from '../../common/CustomText';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledKoreanWar } from '../../../../assets/styles/portfolio/vrAr/20_KoreanWar/StyledKoreanWar';
import useMobile from './../../../hooks/useMobile';
import useTablet from '../../../hooks/useTablet';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import Img from '../../common/Img';

const KoreanWar = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledKoreanWar>
      <div className="fullScreen heroArea relative">
        <Breadcrumb style={{ position: 'absolute' }} />

        <div className="titleWrapper">
          <PortfolioTitleWrap
            mobileMarginTop={'var(--mobile-50px)'}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <PortfolioOrganization style={{ color: '#292929', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
            <PortfolioFieldTitle
              style={{ color: '#292929', fontFamily: 'NanumSquareEB', whiteSpace: 'nowrap' }}
              field={'VR'}
              title={isMobileTablet ? '이중섭 작품을 통해\n 알아보는 6·25 전쟁' : '이중섭 작품을 통해 알아보는 6·25 전쟁'}
            />
          </PortfolioTitleWrap>
        </div>

        <div className="gridWrapper">
          <div className="customTextWrapper">
            <CustomText
              style={{
                textAlign: 'center',
                color: '#292929',
              }}
              text={
                isMobileTablet
                  ? '이중섭의 그림 속에서 6·25의 전쟁의\n 슬픔과 희망을 탐험하세요.\n전쟁의 역사를 예술로 배워보는 시간!'
                  : '이중섭의 그림 속에서 6·25의 전쟁의 슬픔과 희망을 탐험하세요.\n전쟁의 역사를 예술로 배워보는 시간!'
              }
            />
          </div>

          <HeroImg
            pcAspectRatio={'1920 / 1504'}
            mobileAspectRatio={'1024 / 1167'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
          />
        </div>
      </div>

      <div className="introductionArea">
        <img className="introudctionImg1" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/1.png`} alt="" />
        <img className="introudctionImg2" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/2.png`} alt="" />
        <img className="introudctionImg3" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group1/3.png`} alt="" />
        <CustomText
          text={
            isMobile
              ? "'이중섭 그림을 통해 알아보는 625 전쟁'\n 콘텐츠는 전쟁의 참상을 예술적으로 표현하고,\n 이를 통해 학습자들이 역사적 사건을\n 더 깊이 이해할 수 있도록 기획되었어요.\n\n이중섭의 작품에 담긴 감정을 체험함으로써,\n전쟁의 아픔을 공감하고 현재의 평화와 \n자유의 가치를 다시 한번 되새겨볼까요?"
              : isTablet
              ? "'이중섭 그림을 통해 알아보는 625 전쟁' 콘텐츠는 전쟁의\n 참상을 예술적으로 표현하고, 이를 통해 학습자들이\n 역사적 사건을 더 깊이 이해할 수 있도록 기획되었어요.\n\n이중섭의 작품에 담긴 감정을 체험함으로써,\n전쟁의 아픔을 공감하고 현재의 평화와 \n자유의 가치를 다시 한번 되새겨볼까요?"
              : "'이중섭 그림을 통해 알아보는 625 전쟁' 콘텐츠는\n전쟁의 참상을 예술적으로 표현하고, 이를 통해 학습자들이\n역사적 사건을 더 깊이 이해할 수 있도록 기획되었어요.\n\n이중섭의 작품에 담긴 감정을 체험함으로써,\n전쟁의 아픔을 공감하고 현재의 평화와 \n자유의 가치를 다시 한번 되새겨볼까요?"
          }
        />
      </div>

      <div className="maxWidth1260Wrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/1.png`} />
          <CustomText
            text={
              isMobile
                ? '‘이중섭 그림을 통해 알아보는 6.25 전쟁’\n 콘텐츠를 제작하면서 우리팀은 이중섭 화가의\n 섬세한 붓질과 깊은 감정을\n VR로 재현하는 데 중점을 두었어요.'
                : isTablet
                ? '‘이중섭 그림을 통해 알아보는 6.25 전쟁’ 콘텐츠를\n 제작하면서 우리팀은 이중섭 화가의 섬세한 붓질과\n 깊은 감정을 VR로 재현하는 데 중점을 두었어요.'
                : '‘이중섭 그림을 통해 알아보는 6.25 전쟁’ 콘텐츠를 제작하면서 우리팀은\n이중섭 화가의 섬세한 붓질과 깊은 감정을 VR로 재현하는 데 중점을 두었어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/2.png`} />
          <CustomText
            text={
              isMobile
                ? '고화질 스캔과 3D 모델링 기술을 활용하여,\n 학습자가 마치 그림 속에 들어간 것처럼\n생생한 경험을 할 수 있도록 제작하려고\n 많은 노력을 했답니다!'
                : isTablet
                ? '고화질 스캔과 3D 모델링 기술을 활용하여, 학습자가\n 마치 그림 속에 들어간 것처럼 생생한 경험을 할 수 있도록\n 제작하려고 많은 노력을 했답니다!'
                : '고화질 스캔과 3D 모델링 기술을 활용하여, 학습자가 마치 그림 속에 들어간 것처럼\n생생한 경험을 할 수 있도록 제작하려고 많은 노력을 했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/3.png`} />
          <CustomText
            text={
              isMobile
                ? '‘가난의 방’ 작품은 우리에게 진정한 가난의\n 의미를 다시금 일깨워줘요.\n‘가난의 방’에서 느껴지는 좁은 공간의 답답함과\n 인물들의 절박한 감정을 VR환경에서 생생하게\n 전달하기 위해 많은 노력을 기울였어요.'
                : isTablet
                ? '‘가난의 방’ 작품은 우리에게 진정한 가난의 의미를\n 다시금 일깨워줘요. ‘가난의 방’에서 느껴지는 좁은 공간의\n 답답함과 인물들의 절박한 감정을 VR환경에서 생생하게\n 전달하기 위해 많은 노력을 기울였어요.'
                : '‘가난의 방’ 작품은 우리에게 진정한 가난의 의미를 다시금 일깨워줘요.\n‘가난의 방’에서 느껴지는 좁은 공간의 답답함과 인물들의 절박한 감정을\nVR환경에서 생생하게 전달하기 위해 많은 노력을 기울였어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/4.png`} />
          <CustomText
            text={
              isMobile
                ? '‘환상의 방’은 이중섭의 작품 중에서도 특히나\n 독특한 분위기를 자아내는 작품이에요.\n작품 속의 몽환적인 분위기를 디지털 공간에서도\n 그대로 재현했어요. 전쟁과 현실의 고통에서\n 잠시 벗어나고 싶은 사람들의 마음을\n 살펴보세요.'
                : isTablet
                ? '‘환상의 방’은 이중섭의 작품 중에서도 특히나\n 독특한 분위기를 자아내는 작품이에요.\n작품 속의 몽환적인 분위기를 디지털 공간에서도\n 그대로 재현했어요. 전쟁과 현실의 고통에서\n 잠시 벗어나고 싶은 사람들의 마음을 살펴보세요.'
                : '‘환상의 방’은 이중섭의 작품 중에서도 특히나 독특한 분위기를 자아내는 작품이에요.\n작품 속의 몽환적인 분위기를 디지털 공간에서도 그대로 재현했어요.\n전쟁과 현실의 고통에서 잠시 벗어나고 싶은 사람들의 마음을 살펴보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/5.png`} />
          <CustomText
            text={
              isMobile
                ? '아이들의 순수한 모습과 밝은 분위기를\n 표현하기 위해 작품의 색채와 질감을 세심하게\n 재현했어요. 가장 중요한 포인트 중 하나는,\n 학습자들이 이 방에서 느낄 수 있는 감정적\n 교감을 극대화 하는 것이었어요.\n 그 시대의 아이들이  지금도 이곳에서\n 놀고 있는 것 같은 느낌을 주고자 노력했답니다!'
                : isTablet
                ? '아이들의 순수한 모습과 밝은 분위기를 표현하기 위해\n 작품의 색채와 질감을 세심하게 재현했어요.\n 가장 중요한 포인트 중 하나는, 학습자들이 이 방에서\n 느낄 수 있는 감정적 교감을 극대화 하는 것이었어요.\n 그 시대의 아이들이 지금도 이곳에서 놀고 있는 것 같은\n 느낌을 주고자 노력했답니다!'
                : '아이들의 순수한 모습과 밝은 분위기를 표현하기 위해 작품의 색채와 질감을 세심하게 재현했어요.\n가장 중요한 포인트 중 하나는, 학습자들이 이 방에서 느낄 수 있는 감정적 교감을\n극대화 하는 것이었어요. 그 시대의 아이들이 지금도 이곳에서 놀고 있는 것 같은 느낌을 주고자 노력했답니다!'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/6.png`} />
          <CustomText
            text={
              isMobile
                ? '‘길 떠나는 가족’을 기획할 때, 우리팀은 당시\n 피난민들이 겪었던 감정과 상황을 최대한\n 실감나게 재현하려 했어요. 작품의 색감과 질감,\n 그리고 인물들의 표정까지 세심하게 디지털로\n 복원하였고, VR 환경에서 작품을 감상할 때\n 학습자들이 직접 그 시대로 돌아간 듯한 몰입감을\n 느낄 수 있도록 신경썼어요.'
                : isTablet
                ? '‘길 떠나는 가족’을 기획할 때, 우리팀은 당시 피난민들이\n 겪었던 감정과 상황을 최대한 실감나게 재현하려 했어요.\n 작품의 색감과 질감, 그리고 인물들의 표정까지 세심하게\n 디지털로 복원하였고, VR 환경에서 작품을 감상할 때\n 학습자들이 직접 그 시대로 돌아간 듯한 몰입감을\n 느낄 수 있도록 신경썼어요.'
                : '‘길 떠나는 가족’을 기획할 때, 우리팀은 당시 피난민들이 겪었던 감정과 상황을 최대한 실감나게 재현하려 했어요.\n작품의 색감과 질감, 그리고 인물들의 표정까지 세심하게 디지털로 복원하였고,\nVR 환경에서 작품을 감상할 때 학습자들이 직접 그 시대로 돌아간 듯한 몰입감을 느낄 수 있도록 신경썼어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/20_KoreanWar/group2/7.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자는 이 콘텐츠를 통해\n 단순한 역사적 사실의 나열이 아닌,\n예술작품을 통해 전쟁과 사회를 이해하는 깊은\n 경험을 느낄 수 있어요.'
                : isTablet
                ? '학습자는 이 콘텐츠를 통해 단순한 역사적 사실의\n 나열이 아닌, 예술작품을 통해 전쟁과 사회를\n 이해하는 깊은 경험을 느낄 수 있어요.'
                : '학습자는 이 콘텐츠를 통해 단순한 역사적 사실의 나열이 아닌,\n예술작품을 통해 전쟁과 사회를 이해하는 깊은 경험을 느낄 수 있어요.'
            }
          />
        </WidthOneContent>
      </div>
    </StyledKoreanWar>
  );
};

export default KoreanWar;
