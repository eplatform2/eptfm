import React, { useEffect, useState } from 'react';
import { PortfolioListBox } from '../../../assets/styles/portfolio/portfolioList.styled';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import useResponsiveMax1024 from './../../hooks/useResponsiveMax1024';
import useMobile from '../../hooks/useMobile';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import PortfolioLists from '../common/PortfolioLists';
import PortfolioListTitle from './common/PortfolioListTitle';
import PortfolioListField from './common/PortfolioListField';
import { Link, useLocation } from 'react-router-dom';

const VrArPortfolioList = () => {
  const [portfolioItems, updatePortfolioItems] = useState({});
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();

  useEffect(() => {
    const portfolioItems2 = [
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img1.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 갯벌은 어떤 곳일까?',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img2.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 미션! 생태계를 복원하라',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img3.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 지구의 공전과 계절의 변화',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img4.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 땅의 높낮이를 나타내는 등고선',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img5.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'AR I 옛 사람들의 통신수단, 봉수제도와\n 파발제도' : 'AR I 옛 사람들의 통신수단, 봉수제도와 파발제도'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img6.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'VR I 우리 땅, 독도 탐험하기',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img7.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobileTablet ? 'VR I 과학수사요원이 되어 범인을 찾아라!' : 'VR I 과학수사요원이 되어 범인을 찾아라!'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img8.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'VR I 세계의 환경 수도 프라이부르크\n 구경하기' : 'VR I 세계의 환경 수도 프라이부르크 구경하기'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img9.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'VR I 태풍 대피요령 알아보기',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img10.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img11.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'VR I 직접 만드는 민주적인 선거! 시장\n 출마하기' : 'VR I 직접 만드는 민주적인 선거! 시장 출마하기'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img12.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobileTablet ? 'VR I 바닷속 생물 채집과 수온, 염분 탐사' : 'VR I 바닷속 생물 채집과 수온, 염분 탐사'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img13.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 열팽창 활용하여 바이메탈 만들기',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img14.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'AR I 별의 색과 밝기를 이용한 별의 특성\n 알아보기' : 'AR I 별의 색과 밝기를 이용한 별의 특성 알아보기'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img15.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 나도 할 수 있다, 민사 재판',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img16.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 나만의 살기 좋은 도시 만들기',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img17.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'AR I 뼈, 관절, 근육! 우리 몸을 움직이는\n 세박자' : 'AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}`,
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img18.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'AR I 지도를 볼 줄 아는, 나는 지도박사',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img19.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: 'VR I 나만의 생존가방 준비하기',
      },
      {
        pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/VrAr/List/list1_img20.png`,
        pfItemBigTitle: '한국교육학술정보원',
        pfItemSmallTitle: `${isMobile ? 'VR I 이중섭 작품을 통해 알아보는 6·25\n 전쟁' : 'VR I 이중섭 작품을 통해 알아보는 6·25 전쟁'}`,
      },
    ];
    updatePortfolioItems(portfolioItems2);
  }, [isMobile, isMobileTablet]);

  const refs = useIntersectionObserver(0.5);

  // test
  const location = useLocation();
  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  console.log(portfolioItems.length);
  return (
    <>
      <Breadcrumb />
      <PortfolioListBox>
        <div className="topTitleBox">
          <PortfolioListTitle ref={(el) => (refs.current[0] = { ref: el })} />
          <PortfolioListField field={'VR/AR'} ref={(el) => (refs.current[1] = { ref: el })} />
        </div>

        <ul className="slideUp" ref={(el) => (refs.current[2] = { ref: el })}>
          {/* {portfolioItems} */}
          {/* <li className="slideUp" ref={(el) => (refs.current[3] = { ref: el })}>
            <Link to={`/portfolio/${location.pathname.split('/')[2]}/${portfolioItems[0].pfItemSmallTitle}`}>
              <div className="thumbnail">
                <img src={`${portfolioItems[0].pfItemImg}`} loading="lazy" alt="" />
              </div>
              <div className="thumbnailTexts">
                <p className="NanumSquareB">{portfolioItems[0].pfItemBigTitle}</p>
                <p className="NanumSquareEB">{renderTextWithLineBreaks(portfolioItems[0].pfItemSmallTitle)}</p>
              </div>
            </Link>
          </li> */}

          {portfolioItems !== undefined && (
            <>{Array.isArray(portfolioItems) && portfolioItems.map((item, index) => <PortfolioLists data={item} key={index} index={index} />)}</>
          )}
        </ul>
      </PortfolioListBox>
    </>
  );
};

export default VrArPortfolioList;
