import React from 'react';
import Breadcrumb from '../../../common/breadcrumb/Breadcrumb';
import CustomText from '../../common/CustomText';
import { WidthOneContent } from '../../../../assets/styles/portfolio/common/widthOneContent.styled';
import HeroImg from '../../common/Hero/HeroImg';
import { StyledCivilTrial } from '../../../../assets/styles/portfolio/vrAr/15_CivilTrial/StyledCivilTrial';
import PortfolioTitleWrap from '../../common/portfolioTitle/PortfolioTitleWrap';
import PortfolioOrganization from '../../common/portfolioTitle/PortfolioOrganization';
import PortfolioFieldTitle from '../../common/portfolioTitle/PortfolioFieldTitle';
import useResponsiveMax1024 from '../../../hooks/useResponsiveMax1024';
import useTablet from '../../../hooks/useTablet';
import useMobile from '../../../hooks/useMobile';
import PortfolioIntroductionTitle from '../../common/portfolioIntroduction/PortfolioIntroductionTitle';
import PortfolioIntroductionDescription from '../../common/portfolioIntroduction/PortfolioIntroductionDescription';
import Img from '../../common/Img';

const CivilTrial = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isMobileTablet = useResponsiveMax1024();
  return (
    <StyledCivilTrial>
      <Breadcrumb />

      <PortfolioTitleWrap style={{ display: 'grid', justifyContent: 'center' }} mobileMarginTop={'50px'} mobileMarginBottom={'40px'}>
        <PortfolioOrganization style={{ color: '#999999', fontFamily: 'NanumSquareEB' }} organization={'한국교육학술정보원'} />
        <PortfolioFieldTitle style={{ color: '#48C2C5', fontFamily: 'NanumSquareEB' }} field={'AR'} title={'나도 할 수 있다, 민사 재판'} />
      </PortfolioTitleWrap>

      <div className="heroWrapper">
        <div className="mobileTextsImg">
          <div className="heroTextsWrapper">
            <PortfolioIntroductionTitle
              style={{ color: '#FFFFFF' }}
              title={isMobileTablet ? '법정 드라마의 주인공이 되어\n 재판을 체험하자!' : '법정 드라마의 주인공이 \n되어 재판을 체험하자!'}
            />
            <PortfolioIntroductionDescription
              style={{ color: '#FFFFFF' }}
              description={
                isMobileTablet
                  ? '원고 소송대리인이나 검사로서 재판에 참여하고,\n 증인을 신문하며 승소를 위한 전략을 세워보세요.\n 법정을 무대로 펼쳐지는 드라마틱한 \n재판의 세계로 뛰어들어보세요!'
                  : '원고 소송대리인이나 검사로서 재판에\n참여하고, 증인을 신문하며 승소를\n 위한 전략을 세워보세요.\n 법정을 무대로 펼쳐지는 드라마틱한 \n재판의 세계로 뛰어들어보세요!'
              }
            />
          </div>
          <HeroImg
            mobileAspectRatio={'375 / 310'}
            src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/heroTexts.png`}
          />
        </div>
        <HeroImg
          pcAspectRatio={'1660 / 800'}
          mobileAspectRatio={'375 / 250'}
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/${isMobileTablet ? 'hero_m' : 'hero'}.png`}
        />
      </div>

      <div className="introductionWrapper2">
        <img
          className="introductionImg"
          src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/introduction.png`}
          alt=""
        />
        <div className="alignCenter">
          <CustomText
            text={
              isMobile
                ? "이 프로젝트는 마치 드라마 '수사반장'의\n 주인공이 된 것 같은 기분으로 개발되었어요. \n법정에서의 치열한 공방을 가상 현실에서\n 체험하면서, 진짜 변호사나 검사가 된 듯한\n 몰입감을 느껴보세요! 흥미진진한 법정 드라마의\n 주인공이 될 수 있답니다!"
                : isTablet
                ? "이 프로젝트는 마치 드라마 '수사반장'의 주인공이 된 것 같은\n 기분으로 개발되었어요. \n법정에서의 치열한 공방을 가상 현실에서 체험하면서, \n진짜 변호사나 검사가 된 듯한 몰입감을 느껴보세요!\n흥미진진한 법정 드라마의 주인공이 될 수 있답니다!"
                : "이 프로젝트는 마치 드라마 '수사반장'의 주인공이 된 것 같은\n 기분으로 개발되었어요. \n법정에서의 치열한 공방을 가상 현실에서 체험하면서, \n진짜 변호사나 검사가 된 듯한 몰입감을 느껴보세요!\n흥미진진한 법정 드라마의 주인공이 될 수 있답니다!"
            }
          />
        </div>
      </div>

      <div className="contentsWrapper">
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/1.png`} />
          <CustomText
            text={
              isMobile
                ? '우리 팀은 VR 기술을 통해 학습자들이\n 법정 현장을 직접 체험하는 듯한 몰입감을 \n느낄  수 있도록 이 콘텐츠를 제작했답니다!\n다양한 인터랙티브 요소를 추가해 학습자들이\n 재미있고 효과적으로 학습할 수 있어요.'
                : isTablet
                ? '우리 팀은 VR 기술을 통해 학습자들이\n 법정 현장을 직접 체험하는 듯한 몰입감을 \n느낄  수 있도록 이 콘텐츠를 제작했답니다!\n다양한 인터랙티브 요소를 추가해 학습자들이\n 재미있고 효과적으로 학습할 수 있어요.'
                : '우리 팀은 VR 기술을 통해 학습자들이 법정 현장을 직접 체험하는 듯한 몰입감을 \n느낄  수 있도록 이 콘텐츠를 제작했답니다!\n다양한 인터랙티브 요소를 추가해 학습자들이 재미있고 효과적으로 학습할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/2.png`} />
          <CustomText
            text={
              isMobile
                ? '학습자들은 가상의 사건을 보면서 사건의 개요를\n 파악하고, 원고와 피고의 입장에서\n 사건의 전개를 이해할 수 있어요.'
                : isTablet
                ? '학습자들은 가상의 사건을 보면서 사건의 개요를 파악하고,\n 원고와 피고의 입장에서 사건의 전개를 이해할 수 있어요.'
                : '학습자들은 가상의 사건을 보면서 사건의 개요를 파악하고,\n원고와 피고의 입장에서 사건의 전개를 이해할 수 있어요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/3.png`} />
          <CustomText
            text={
              isMobile
                ? '민사재판의 전반적인 절차를 체험할 수 있어요.\n소송 제기, 답변서 작성, 증거 수집, 증인 신문,\n 변론 등의 법적 절차를 학습할 수 있죠.'
                : isTablet
                ? '민사재판의 전반적인 절차를 체험할 수 있어요.\n소송 제기, 답변서 작성, 증거 수집, 증인 신문,\n 변론 등의 법적 절차를 학습할 수 있죠.'
                : '민사재판의 전반적인 절차를 체험할 수 있어요.\n소송 제기, 답변서 작성, 증거 수집, 증인 신문, 변론 등의 법적 절차를 학습할 수 있죠.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/4.png`} />
          <CustomText
            text={
              isMobile
                ? '원고와 피고가 각각 자신의 주장에\n 유리한 증거를 수집하여 제출할 수 있어요.\n탐정이 된 기분으로 증거를 수집해 보세요!\n 누가 더 강력한 증거를 제출 할까요?'
                : isTablet
                ? '원고와 피고가 각각 자신의 주장에\n 유리한 증거를 수집하여 제출할 수 있어요.\n탐정이 된 기분으로 증거를 수집해 보세요!\n 누가 더 강력한 증거를 제출 할까요?'
                : '원고와 피고가 각각 자신의 주장에 유리한 증거를 수집하여 제출할 수 있어요.\n탐정이 된 기분으로 증거를 수집해 보세요! 누가 더 강력한 증거를 제출 할까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/5.png`} />
          <CustomText
            text={
              isMobile
                ? '증인 신문에서 적용할 법리가 무엇인지\n 곰곰히 생각하고 선택할 수 있어요.\n변호사의 스킬을 발휘할 시간!\n 논리적인 변론으로 법정을 사로잡아 보세요.'
                : isTablet
                ? '증인 신문에서 적용할 법리가 무엇인지\n 곰곰히 생각하고 선택할 수 있어요.\n변호사의 스킬을 발휘할 시간!\n 논리적인 변론으로 법정을 사로잡아 보세요.'
                : '증인 신문에서 적용할 법리가 무엇인지 곰곰히 생각하고 선택할 수 있어요.\n변호사의 스킬을 발휘할 시간! 논리적인 변론으로 법정을 사로잡아 보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/6.png`} />
          <CustomText
            text={
              isMobile
                ? '증인을 신문하여 사건에 대한 사실을 밝힐 수도\n 있답니다! 증인을 선택하고, 질문을 선택하여\n 증인을 신문해보세요.\n법정에서 증인을 신문하는 순간, 긴장감 최고조!\n 올바른 질문으로 진실을 밝혀보세요.'
                : isTablet
                ? '증인을 신문하여 사건에 대한 사실을 밝힐 수도 있답니다!\n 증인을 선택하고, 질문을 선택하여 증인을 신문해보세요.\n법정에서 증인을 신문하는 순간, 긴장감 최고조!\n 올바른 질문으로 진실을 밝혀보세요.'
                : '증인을 신문하여 사건에 대한 사실을 밝힐 수도 있답니다!\n증인을 선택하고, 질문을 선택하여 증인을 신문해보세요.\n법정에서 증인을 신문하는 순간, 긴장감 최고조! 올바른 질문으로 진실을 밝혀보세요.'
            }
          />
        </WidthOneContent>
        <WidthOneContent>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/7.png`} />
          <CustomText
            text={
              isMobile
                ? '재판부가 모든 증거와 주장을 검토한 후 판결을\n 내려요. 법정에서 판결을 듣고, 판결문의 내용을\n 확인할 수 있어요. 드디어 판결의 순간!\n 내가 원고라면, 승소할까요?\n 피고라면, 무죄일까요?'
                : isTablet
                ? '재판부가 모든 증거와 주장을 검토한 후 판결을\n 내려요. 법정에서 판결을 듣고, 판결문의 내용을\n 확인할 수 있어요. 드디어 판결의 순간!\n 내가 원고라면, 승소할까요? 피고라면, 무죄일까요?'
                : '재판부가 모든 증거와 주장을 검토한 후 판결을 내려요.\n법정에서 판결을 듣고, 판결문의 내용을 확인할 수 있어요.\n드디어 판결의 순간! 내가 원고라면, 승소할까요? 피고라면, 무죄일까요?'
            }
          />
        </WidthOneContent>
        <WidthOneContent $last>
          <Img src={`${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/detail/15_CivilTrial/8.png`} />
          <CustomText
            text={
              isMobile
                ? '민사재판, 이제 어렵지 않아요! \n가상의 법정에서 직접 경험하며,\n 법정 절차와 권리를 익혀보세요.'
                : isTablet
                ? '민사재판, 이제 어렵지 않아요! 가상의 법정에서\n 직접 경험하며, 법정 절차와 권리를 익혀보세요.'
                : '민사재판, 이제 어렵지 않아요! \n가상의 법정에서 직접 경험하며, 법정 절차와 권리를 익혀보세요.'
            }
          />
        </WidthOneContent>
      </div>
    </StyledCivilTrial>
  );
};

export default CivilTrial;
