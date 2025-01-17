import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

// const PortfolioLists = forwardRef(({ data }, ref) => {
const PortfolioLists = ({ data }) => {
  const location = useLocation();
  // const refs = useIntersectionObserver(100);
  // console.log('Ref', ref);

  return (
    // <li className="slideUp" ref={(el) => (refs.current[0] = { ref: el })}>
    <li>
      <Link to={`/portfolio/${location.pathname.split('/')[2]}/${data.pfItemSmallTitle}`}>
        <div className="thumbnail">
          <img src={`${data.pfItemImg}`} loading="lazy" alt="" />
        </div>
        <div className="thumbnailTexts">
          <p className="NanumSquareB">{data.pfItemBigTitle}</p>
          <p className="NanumSquareEB">{renderTextWithLineBreaks(data.pfItemSmallTitle)}</p>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioLists;
