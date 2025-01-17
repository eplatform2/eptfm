import styled from 'styled-components';

const StyledCategoryUl = styled.ul`
  @media (min-width: 1557px) {
    .customMarginTop {
      margin-top: 68px;
    }

    li:last-child {
      margin-bottom: 0px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    margin-top: ${(props) => {
      // if(props.$tablet) return props.$tablet;
      // return '68px';
    }};
  }

  @media (max-width: 1024px) {
    margin-bottom: ${(props) => {
      if (props.$last) return 'var(--mobile-160px)';
      return 'var(--mobile-80px)';
    }};

    li:last-child {
      margin-bottom: 0px;
    }
  }
`;

const CategoryUl = (data) => {
  return <StyledCategoryUl $last={data.last}>{data.children}</StyledCategoryUl>;
};

export default CategoryUl;
