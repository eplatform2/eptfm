import React, { useEffect, useState } from 'react';
import { PortfolioListBox } from '../../../assets/styles/portfolio/portfolioList.styled';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import useResponsiveMax1024 from './../../hooks/useResponsiveMax1024';
import useMobile from '../../hooks/useMobile';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import PortfolioLists from '../common/PortfolioLists';
import PortfolioListTitle from './common/PortfolioListTitle';
import PortfolioListField from './common/PortfolioListField';

const RnDPortfolioList = () => {
  const [portfolioItems, updatePortfolioItems] = useState({});
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();

  useEffect(() => {
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
          <PortfolioListField field={'R&D'} ref={(el) => (refs.current[1] = { ref: el })} />
        </div>

        <ul className="slideUp" ref={(el) => (refs.current[2] = { ref: el })}>
          {Array.isArray(portfolioItems) && portfolioItems.map((item, index) => <PortfolioLists data={item} key={index} index={index} />)}
        </ul>
      </PortfolioListBox>
    </>
  );
};

export default RnDPortfolioList;
