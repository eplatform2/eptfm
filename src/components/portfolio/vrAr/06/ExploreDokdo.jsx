import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import WidthImgOneTextsOne from '../../common/WidthImgOneTextsOne';
import { StyledExploreDokdo } from '../../../../assets/styles/portfolio/vrAr/06_ExploreDokdo/StyledExploreDokdo';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';

const ExploreDokdo = () => {
  const isMobTab = useResponsiveMax1024();
  return (
    <StyledExploreDokdo>
      <Breadcrumb />
      <div className="fullScreen heroArea">
        <PortfolioTitleWrap
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
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
            title={'우리 땅, 독도 탐험하기'}
          />
        </PortfolioTitleWrap>
        <img className="manOnEarth" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/main2.png`} alt="" />
        <HeroImg
          pcHeight={'1920 / 900'}
          mobileHeight={'375 / 450'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/${isMobTab ? 'main_m' : 'main'}.png`}
        />
      </div>

      <div className="pcMaxWidth1260Wrapper introductionWrapper">
        <PortfolioIntroductionTitle title={'하늘과 바다를 넘나드는 모험!'} />
        <PortfolioIntroductionDescription
          style={{ color: '#767676' }}
          description={
            isMobTab
              ? '드론을 조정해 3D 모델링된 독도를\n 자유롭게 탐험할 수 있어요.\n독도의 멋진 지형과 바다 속 모습을 관찰하며,\n 독도의 가치를 이해하고 친근하게 느껴보세요!'
              : '드론을 조정해 3D 모델링된 독도를 자유롭게 탐험할 수 있어요.\n독도의 멋진 지형과 바다 속 모습을 관찰하며, 독도의 가치를 이해하고 친근하게 느껴보세요!'
          }
        />
      </div>
      <div className="pcMaxWidth1260Wrapper contentsWrapper">
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/1.png`} />
          <CustomText
            text={
              isMobTab
                ? `‘우리 땅, 독도 탐험하기’ 콘텐츠는\n 독도의 지리적 환경과 자연환경은\n VR을 통해 실감나게 탐험할 수 있는 기회를\n 제공해요. 드론을 조종하며 자유롭게 독도를\n 탐험하는 과정에서 독도의 가치와 중요성을\n 재미있고 생동감 있게 학습할 수 있답니다!`
                : `‘우리 땅, 독도 탐험하기’ 콘텐츠는 독도의 지리적 환경과 자연환경은 VR을 통해 실감나게 탐험할 수 있는 기회를 제공해요. 드론을 조종하며 자유롭게 독도를 탐험하는 과정에서 독도의 가치와 중요성을 재미있고 생동감 있게 학습할 수 있답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobTab
                ? `이 콘텐츠를 개발하면서 우리 팀은\n 독도의 아름다움을 최대한 생생하게\n 전달하기 위해 많은 노력을 기울였어요.\n 팀원들은 드론 조종 전문가가 되기 위해\n 수많은 시뮬레이션을 돌리며,\n 실제 독도의 데이터를 기반으로\n 3D 모델링을 정교하게 작업했답니다.`
                : `이 콘텐츠를 개발하면서 우리 팀은 독도의 아름다움을 최대한 생생하게 전달하기 위해 많은 노력을 기울였어요. 팀원들은 드론 조종 전문가가 되기 위해 수많은 시뮬레이션을 돌리며, 실제 독도의 데이터를 기반으로 3D 모델링을 정교하게 작업했답니다.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/2.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/3.png`} />
          <CustomText
            text={
              isMobTab
                ? `모델링된 독도에서 독도의 지리적 환경 지명과\n 자연환경을 학습할 수 있어요. \n주요 지명을 찾아가며 그 유래와 독도의\n 특성을 확인할 수 있답니다!`
                : `모델링된 독도에서 독도의 지리적 환경 지명과 자연환경을 학습할 수 있어요. 주요 지명을 찾아가며 그 유래와 독도의 특성을 확인할 수 있답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobTab
                ? `독도의 경관을 체험하며 독도의 자연적 \n아름다움을 느끼고, 이 아름다움이 단지\n 관광 자원으로서가 아니라 소중한 국토로서의 \n가치를 지닌다는 것을 이해할 수 있어요.`
                : `독도의 경관을 체험하며 독도의 자연적 아름다움을 느끼고, 이 아름다움이 단지 관광 자원으로서가 아니라 소중한 국토로서의 가치를 지닌다는 것을 이해할 수 있어요.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/4.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/5.png`} />
          <CustomText
            text={
              isMobTab
                ? `독도 주변의 바닷속 환경을 360도 영상으로 \n확인하여 독도의 소중한 해양 생태계도\n 살펴볼 수 있답니다!`
                : `독도 주변의 바닷속 환경을 360도 영상으로 확인하여 독도의 소중한 해양 생태계도 살펴볼 수 있답니다!`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <CustomText
            text={
              isMobTab
                ? `독도의 해양 생태계와 육상 생태계를 탐험하면서,\n 자연환경을 보존하는 것이 왜 중요한지를\n 깨달을 수 있어요. 독도의 다양한 생물종과 \n그들의 생태적 역할을 이해함으로써 생태계의\n 균형을 유지하는 중요성 또한 배울 수 있어요.`
                : `독도의 해양 생태계와 육상 생태계를 탐험하면서, 자연환경을 보존하는 것이 왜 중요한지를 깨달을 수 있어요. 독도의 다양한 생물종과 그들의 생태적 역할을 이해함으로써 생태계의 균형을 유지하는 중요성 또한 배울 수 있어요.`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/6.png`} />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/7.png`} />
          <CustomText
            text={
              isMobTab
                ? `독도의 지리적 위치가 경제적으로 어떤 이점을\n 가지고 있는지, 어업이나 해양 자원 탐사에서 \n어떤 중요성을 지니는지에 대해 알 수 있어요.`
                : `독도의 지리적 위치가 경제적으로 어떤 이점을 가지고 있는지, 어업이나 해양 자원 탐사에서 어떤 중요성을 지니는지에 대해 알 수 있어요.`
            }
          />
        </WidthImgOneTextsOne>
        <WidthImgOneTextsOne last>
          <CustomText
            text={
              isMobTab
                ? `드론을 조종하여 3D로 정밀하게 모델링된\n 독도를 자유롭게 탐험하며 살펴보세요!\n“독도를 이렇게 생생하게 느끼다니,\n 마치 독도로 휴가를 다녀온 기분이에요!” 라는\n 말을 할 수 있게 된답니다!`
                : `드론을 조종하여 3D로 정밀하게 모델링된 독도를 자유롭게 탐험하며 살펴보세요! “독도를 이렇게 생생하게 느끼다니, 마치 독도로 휴가를 다녀온 기분이에요!” 라는 말을 할 수 있게 된답니다!`
            }
          />
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/06_ExploreDokdo/8.png`} />
        </WidthImgOneTextsOne>
      </div>
    </StyledExploreDokdo>
  );
};

export default ExploreDokdo;
