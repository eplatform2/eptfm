import React, { useEffect, useState } from 'react';
import { PortfolioListBox } from '../../../assets/styles/portfolio/portfolioList.styled';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import useResponsiveMax1024 from './../../hooks/useResponsiveMax1024';
import useMobile from '../../hooks/useMobile';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import PortfolioLists from '../common/PortfolioLists';
import PortfolioListTitle from './common/PortfolioListTitle';
import PortfolioListField from './common/PortfolioListField';

const ELearningPortfolioList = () => {
  const [portfolioItems, updatePortfolioItems] = useState({});
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();

  useEffect(() => {
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
  }, [isMobile, isMobileTablet]);

  const refs = useIntersectionObserver(0.5);
  return (
    <>
      <Breadcrumb />
      <PortfolioListBox>
        <div className="topTitleBox">
          <PortfolioListTitle ref={(el) => (refs.current[0] = { ref: el })} />
          <PortfolioListField field={'e-Learning'} ref={(el) => (refs.current[1] = { ref: el })} />
        </div>

        <ul className="slideUp" ref={(el) => (refs.current[2] = { ref: el })}>
          {Array.isArray(portfolioItems) && portfolioItems.map((item, index) => <PortfolioLists data={item} key={index} index={index} />)}
        </ul>
      </PortfolioListBox>
    </>
  );
};

export default ELearningPortfolioList;
