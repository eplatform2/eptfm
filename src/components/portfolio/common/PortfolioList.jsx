import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PortfolioListBox } from '../../../assets/styles/portfolio/portfolioList.styled';
import PortfolioLists from './PortfolioLists';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import useResponsiveMax1024 from './../../hooks/useResponsiveMax1024';
import useMobile from '../../hooks/useMobile';
import useTablet from '../../hooks/useTablet';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { config } from '../../../config';
import usePc2 from '../../hooks/usePc2';

const PortfolioList = (data) => {
  const location = useLocation();
  const [listTitle, updateListTitle] = useState('');
  const [portfolioItems, updatePortfolioItems] = useState({});
  const isMobileTablet = useResponsiveMax1024();
  const isPc = usePc2();
  const isMobile = useMobile();
  const isTablet = useTablet();

  useEffect(() => {
    if (location.pathname.split('/')[2] === 'VrAr') {
      updateListTitle('VR/AR');
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
    } else if (location.pathname.split('/')[2] === 'e-Learning') {
      updateListTitle('e-Learning');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img1.png`,
          pfItemBigTitle: '농식품공무원교육원',
          pfItemSmallTitle: '저수지·댐 안전관리 및 재해예방',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교사가 이끄는 교실혁명',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img3.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: `사이버어울림(기술·가정, 진로와 직업, ${isMobile ? '\n' : ''}한문)`,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '사이버어울림(영어, 체육)',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img5.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '정보공시 입력 지침 안내와 시스템매뉴얼',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img6.png`,
          pfItemBigTitle: '화학물질안전원',
          pfItemSmallTitle: '화학물질안전에 대하여',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img7.png`,
          pfItemBigTitle: '동북아역사재단',
          pfItemSmallTitle: '처음 만나는 동아시아사',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/e-Learning/List/list2_img8.png`,
          pfItemBigTitle: '아동권리보장원',
          pfItemSmallTitle: '위탁모를 위한 양육 길잡이',
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'R&D' && isPc === false) {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img1.png`,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: `${
            isMobile ? '친환경 소비의 첫걸음, 환경표지인증을 통한\n 더 나은 선택' : '친환경 소비의 첫걸음, 환경표지인증을 통한 더 나은 선택'
          }`,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
        // {
        //   pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img3.png`,
        //   pfItemBigTitle: '환경부',
        //   pfItemSmallTitle: config.rnd3,
        // },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'R&D' && isPc === true) {
      updateListTitle('R&D');
      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img1.png`,
          pfItemBigTitle: '환경산업기술원',
          pfItemSmallTitle: `${
            isMobile ? '친환경 소비의 첫걸음, 환경표지인증을 통한\n 더 나은 선택' : '친환경 소비의 첫걸음, 환경표지인증을 통한 더 나은 선택'
          }`,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: '교실혁명 강의교안',
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/R&D/list/list3_img3.png`,
          pfItemBigTitle: '환경부',
          pfItemSmallTitle: config.rnd3,
        },
      ];
      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'InteractionGame' && isPc === true) {
      updateListTitle('INTERACTION GAME');

      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img1.png`,
          pfItemBigTitle: '환경교육학술정보원',
          pfItemSmallTitle: config.interactionGame1,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame2,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img3.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame3,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img4.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame4,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img5.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame5,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img6.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame6,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img7.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame7,
        },
      ];

      updatePortfolioItems(portfolioItems2);
    } else if (location.pathname.split('/')[2] === 'InteractionGame' && isPc === false) {
      updateListTitle('INTERACTION GAME');

      const portfolioItems2 = [
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img1.png`,
          pfItemBigTitle: '환경교육학술정보원',
          pfItemSmallTitle: config.interactionGame1,
        },
        {
          pfItemImg: `${process.env.PUBLIC_URL}/assets/images/portfolio/InteractionGame/list/list4_img2.png`,
          pfItemBigTitle: '한국교육학술정보원',
          pfItemSmallTitle: config.interactionGame2,
        },
      ];

      updatePortfolioItems(portfolioItems2);
    }
  }, [location.pathname, isMobile, isTablet, isMobileTablet]);

  // 높이값 설정을 위해
  // const ulRef = useRef(null);
  // const [liHeight, setLiHeight] = useState(0);
  // const [initialUlHeight, setInitialUlHeight] = useState(0);
  // const [finalUlHeight, setFinalUlHeight] = useState(0);

  // // 각 li의 높이 계산
  // const calculateHeight = () => {
  //   if (ulRef.current) {
  //     const ulHeight = ulRef.current.offsetHeight;

  //     if (ulHeight !== 200) {
  //       console.log(ulHeight);
  //       setFinalUlHeight(ulHeight);
  //     }

  //     // const listItems = ulRef.current.children;
  //     // const heights = Array.from(listItems).map((li) => li.offsetHeight);
  //     // if (heights.length !== 0 && heights[0] !== 0) {
  //     //   console.log('li 개별 높이:', heights);
  //     //   // console.log('li 개별 높이:', heights[0]);
  //     //   // console.log('갯수', heights.length);
  //     //   setLiHeight(heights[0]);
  //     // }
  //   }
  // };

  // useEffect(() => {
  //   // console.log('initialUlHeight: ', initialUlHeight);
  //   // if()
  // }, [initialUlHeight]);

  // useEffect(() => {
  //   // 컴포넌트가 마운트되면 높이 계산
  //   calculateHeight();

  //   // 반응형을 위한 리사이즈 이벤트 리스너
  //   window.addEventListener('resize', calculateHeight);
  //   return () => window.removeEventListener('resize', calculateHeight);
  // }, [portfolioItems]);

  const refs = useIntersectionObserver(0.1);

  useEffect(() => {
    if (listTitle !== null && listTitle !== '') {
      // console.log('잉', listTitle);
      // setShouldObserve(true);
    } else {
      // setShouldObserve(false);
    }
  }, [listTitle]);

  return (
    <>
      <Breadcrumb />
      <PortfolioListBox>
        {/* <PortfolioListBox> */}
        <div className="topTitleBox">
          {/* <p className="slideUp pageTitle robotoMedium" ref={(el) => (refs.current[0] = { ref: el })}> */}
          <p className="pageTitle robotoMedium">PORTFOLIO</p>
          {/* <p className="slideUp fieldTitle RobotoLight" ref={(el) => (refs.current[1] = { ref: el })}> */}
          <p className="fieldTitle RobotoLight">{listTitle}</p>
        </div>

        {/* <ul ref={ulRef}> */}
        <ul>{Array.isArray(portfolioItems) && portfolioItems.map((item, index) => <PortfolioLists data={item} key={index} index={index} />)}</ul>
      </PortfolioListBox>

      {/* {listTitle && (
        // <PortfolioListBox $list={listTitle}>
        <PortfolioListBox>
          <div className="topTitleBox">
            <p className="pageTitle robotoMedium">PORTFOLIO</p>
            <p className="fieldTitle RobotoLight">{listTitle}</p>
          </div>

          <ul>{Array.isArray(portfolioItems) && portfolioItems.map((item, index) => <PortfolioLists data={item} key={index} index={index} />)}</ul>
        </PortfolioListBox>
      )} */}
    </>
  );
};

export default PortfolioList;
