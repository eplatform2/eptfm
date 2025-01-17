import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCategoryLi } from '../../../../assets/styles/common/portfolioListModal/categoryLi';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const CategoryLi = ({ name, setPortfolioListModalStatus, link }) => {
  return (
    <StyledCategoryLi>
      <Link onClick={() => setPortfolioListModalStatus(false)} to={link}>
        <p>{renderTextWithLineBreaks(name)}</p>
        <img className="move" src={`${process.env.PUBLIC_URL}/assets/images/common/move.png`} alt="" />
      </Link>
    </StyledCategoryLi>
  );
};

export default CategoryLi;
