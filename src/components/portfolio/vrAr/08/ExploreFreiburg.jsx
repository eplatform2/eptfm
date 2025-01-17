import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import ZigZagImgTexts from '../../common/ZigZagImgTexts';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import { Zigzag } from '../../../../assets/styles/portfolio/common/zigZag.styled';
import { StyledExploreFreiburg } from '../../../../assets/styles/portfolio/vrAr/08_ExploreFreiburg/StyledExploreFreiburg';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import HeroImg from '../../common/Hero/HeroImg';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';
import CustomText from '../../common/CustomText';
import useMobile from '../../../hooks/useMobile';

const ExploreFreiburg = () => {
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();

  return (
    <StyledExploreFreiburg>
      <Breadcrumb />
      <PortfolioTitleWrap mobileMarginTop={'var(--mobile-50px)'} style={{ display: 'grid', justifyContent: 'center' }}>
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle
          style={{
            color: '#48C2C5',
            fontFamily: 'NanumSquareEB',
            whiteSpace: 'nowrap',
          }}
          field={'VR'}
          title={isMobileTablet ? '세계의 환경 수도\n 프라이부르크 구경하기' : '세계의 환경 수도 프라이부르크 구경하기'}
        />
      </PortfolioTitleWrap>
      <div className="heroWrapper">
        <HeroImg
          pcAspectRatio={'837 / 328'}
          mobileAspectRatio={'327 / 129'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/${isMobileTablet ? 'main1_m' : 'main1'}.png`}
        />
      </div>

      <PortfolioIntroductionTitle
        style={{ textAlign: 'center' }}
        title={isMobileTablet ? '독일의 환경 수도, 생태도시\n 프라이부르크로 떠나는 여행!' : '독일의 환경 수도, 생태도시 프라이부르크로 떠나는 여행!'}
      />
      <PortfolioIntroductionDescription
        style={{ color: '#767676', textAlign: 'center' }}
        description={
          isMobileTablet
            ? '가상의 프라이부르크에서\n 친환경 생태도시의 생활공간을 체험해보세요.\n여행을 통해 지속 가능한 도시의\n 미래를 만나보세요.'
            : '가상의 프라이부르크에서 친환경 생태도시의 생활공간을 체험해보세요.\n여행을 통해 지속 가능한 도시의 미래를 만나보세요.'
        }
      />

      <WidthOneContent $first>
        <img className="main2" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/main2.png`} alt="" />
        <CustomText
          style={{ whiteSpace: 'nowrap' }}
          text={
            isMobileTablet
              ? '메타버스 공간에서 자유롭게 이동하며\n NPC와 대화해보세요.\n가상의 프라이부르크를 자유롭게\n 여행하며 친환경 생태도시의\n 일상생활을 체험할 수 있답니다!'
              : '메타버스 공간에서 자유롭게 이동하며 NPC와 대화해보세요.\n가상의 프라이부르크를 자유롭게 여행하며 친환경 생태도시의 일상생활을 체험할 수 있답니다!'
          }
        />
      </WidthOneContent>
      <div className="fullScreen fff6df relative">
        <img className="bicycleGirl" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side1.png`} alt="" />
        <p className="topText NanumSquareB">
          {isMobileTablet ? (
            <>
              이제 여러분도 집에서 친환경 도시를
              <br /> 탐험하며, 녹색 미래를 경험해보세요!
            </>
          ) : (
            <>이제 여러분도 집에서 친환경 도시를 탐험하며, 녹색 미래를 경험해보세요!</>
          )}
        </p>
        <Zigzag>
          <ZigZagImgTexts
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_1.png`}
            text={
              isMobile
                ? 'VR 기술을 활용하여 학습자가 실제로\n 프라이부르크를 방문한 것처럼 생생한\n체험을 할 수 있도록 세밀하게 도시를\n 재현했어요!'
                : 'VR 기술을 활용하여 학습자가 실제로\n 프라이부르크를 방문한 것처럼 생생한\n체험을 할 수 있도록 세밀하게 도시를 재현했어요!'
            }
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-130px)'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_2.png`}
            text={'여러차례의 테스트를 통해\n사용자 경험을 최적화 했답니다!'}
          />
          <ZigZagImgTexts
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_3.png`}
            text={
              isMobile
                ? '학습자가 프라이부르크의 친환경 정책을\n직접 경험하고 이해할 수 있도록 하는 것이\n콘텐츠 개발 과정에서 가장 중점을 둔\n 부분이에요.'
                : '학습자가 프라이부르크의 친환경 정책을\n직접 경험하고 이해할 수 있도록 하는 것이\n콘텐츠 개발 과정에서 가장 중점을 둔 부분이에요.'
            }
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-100px)'}
            pcMarginBottom={'var(--pc-160px)'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_4.png`}
            text={
              isMobileTablet
                ? '이러한 노력을 통해 학습자는 재미있고 유익하게\n 지속 가능한 도시의 모델을 배울 수 있어요.\n프라이부르크의 숨은 매력을 발견해보세요!'
                : '이러한 노력을 통해 학습자는 재미있고\n유익하게 지속 가능한 도시의 모델을 배울 수 있어요.\n프라이부르크의 숨은 매력을 발견해보세요!'
            }
          />

          {/* <div className="left">
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_1.png`}
              text={'VR 기술을 활용하여 학습자가 실제로\n 프라이부르크를 방문한 것처럼 생생한\n체험을 할 수 있도록 세밀하게 도시를 재현했어요!'}
            />
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_3.png`}
              text={
                '학습자가 프라이부르크의 친환경 정책을\n직접 경험하고 이해할 수 있도록 하는 것이\n콘텐츠 개발 과정에서 가장 중점을 둔 부분이에요.'
              }
            />
          </div>
          <div className="right">
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_2.png`}
              text={'여러차례의 테스트를 통해\n사용자 경험을 최적화 했답니다!'}
            />
            <ZigZagImgTexts
              src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_4.png`}
              text={
                '이러한 노력을 통해 학습자는 재미있고\n유익하게 지속 가능한 도시의 모델을 배울 수 있어요.\n프라이부르크의 숨은 매력을 발견해보세요!'
              }
            />
          </div> */}
        </Zigzag>
      </div>

      <WidthOneContent $first>
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_1.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '자전거와 트램을 이용한\n 친환경 교통정책을 체험할 수 있어요.\n여기는 자전거와 트램 천국!'
              : '자전거와 트램을 이용한 친환경 교통정책을 체험할 수 있어요.\n여기는 자전거와 트램 천국!'
          }
        />
      </WidthOneContent>
      <div className="sideImgWrapper">
        <img
          className="yellowCharacter"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side/yellowCharacter.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_2.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '자동차가 다닐 수 없는 보행자 전용 구역을\n 걸으며, 걷기 좋은 도시의 매력을\n만끽할 수 있어요. 차 없는 거리,\n 여유로운 보행의 즐거움을 느껴보세요!'
              : '자동차가 다닐 수 없는 보행자 전용 구역을 걸으며, 걷기 좋은 도시의 매력을\n만끽할 수 있어요. 차 없는 거리, 여유로운 보행의 즐거움을 느껴보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_3.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '도심의 기온을 조절하고 시민들의\n 쉼터가 되어주는 수로를 통해 자연이 주는\n 혜택을 체험할 수 있어요.\n 도심 속 오아시스, 베힐레 수로!'
              : '도심의 기온을 조절하고 시민들의 쉼터가 되어주는 수로를 통해\n자연이 주는 혜택을 체험할 수 있어요. 도심 속 오아시스, 베힐레 수로!'
          }
        />
      </WidthOneContent>
      <div className="sideImgWrapper">
        <img
          className="skyblueCharacter"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side/skyblueCharacter.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_4.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '에너지 자립마을 보방에 위치한 패시브 하우스\n 단지와 솔라 주차장을 방문해서\n지속 가능한 에너지 사용을 경험할 수 있어요.\n 태양이 만드는 에너지 자립으로 자동차도\n 포기한 재미있는 주민들의 이야기도 들어보세요!'
              : '에너지 자립마을 보방에 위치한 패시브 하우스 단지와 솔라 주차장을 방문해서\n지속 가능한 에너지 사용을 경험할 수 있어요. 태양이 만드는 에너지 자립으로\n자동차도 포기한 재미있는 주민들의 이야기도 들어보세요!'
          }
        />
      </WidthOneContent>
      <WidthOneContent>
        {/* <img className="left3" src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side4.png`} alt="" /> */}
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_5.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '세계 최초 회전형 태양광 주택을 탐험하며\n 에너지 생산의 혁신을 학습해보세요.\n돌아가는 태양광 주택, 헬리오트롭!'
              : '세계 최초 회전형 태양광 주택을 탐험하며 에너지 생산의 혁신을 학습해보세요.\n돌아가는 태양광 주택, 헬리오트롭!'
          }
        />
      </WidthOneContent>
      <div className="sideImgWrapper">
        <img
          className="greenCharacter"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/side/greenCharacter.png`}
          alt=""
        />
      </div>
      <WidthOneContent>
        <Img pcMaxWidth={'785'} src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group2_6.png`} />
        <CustomText
          text={
            isMobileTablet
              ? '탄소제로 축구장과 축구장에 설치된\n 태양광 발전소를 통해 스포츠와\n 환경의 만남을 체험할 수 있어요.\n 탄소제로 축구의 미래를 확인해보세요!'
              : '탄소제로 축구장과 축구장에 설치된 태양광 발전소를 통해 스포츠와 환경의\n만남을 체험할 수 있어요. 탄소제로 축구의 미래를 확인해보세요!'
          }
        />
      </WidthOneContent>

      <div className="fullScreen fff6df relative">
        <Zigzag $pcPaddingTop={'var(--pc-160px)'} $mobilePaddingTop={'var(--mobile-80px)'}>
          <ZigZagImgTexts
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_5.png`}
            text={
              isMobileTablet
                ? '프라이부르크 콘텐츠에 등장하는\n 귀여운 솔라의 미션을 해결하면서\n 마을을 돌아다닐 수 있어요.'
                : '프라이부르크 콘텐츠에 등장하는 귀여운 솔라의\n미션을 해결하면서 마을을 돌아다닐 수 있어요.'
            }
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-130px)'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_6.png`}
            text={'빵집에서 프레첼을 구매해서\n숨어있는 퀘스트를 해결해보세요!'}
          />
          <ZigZagImgTexts
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_7.png`}
            text={'검은 숲의 비밀을 찾아서\n미션을 해결하고, 검은 숲을 탐험해보세요.'}
          />
          <ZigZagImgTexts
            pcMarginTop={'var(--pc-100px)'}
            pcMarginBottom={'var(--pc-160px)'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/08_ExploreFreiburg/group1_8.png`}
            text={'편리한 퀘스트 확인 창으로\n학습자들의 편의성도 도모했답니다!'}
          />
        </Zigzag>
      </div>
    </StyledExploreFreiburg>
  );
};

export default ExploreFreiburg;
