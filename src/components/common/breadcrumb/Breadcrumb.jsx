import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledBreadcrumbBox = styled.div`
  font-family: 'Roboto-Medium';
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: auto;

  ul {
    display: flex;
    width: 80%;
    margin: auto;

    list-style: none;
    li {
      margin-right: 13px;
      color: #767676;
      height: 18.75px;
      font-size: var(--pc-breadCrumb-font);

      a {
        text-decoration: none;
        color: #767676;
      }
    }
  }

  @media (min-width: 1025px) {
    padding-top: var(--pc-88px);
    margin-bottom: var(--pc-73px);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const Breadcrumb = ({ style, font }) => {
  const location = useLocation();
  let contentTitleEnglish = '';
  let contentTitleKorean = '';
  // console.log(111, location.pathname);
  // console.log(location.pathname.split('/'));

  let mainCategory = location.pathname.split('/')[1];
  let subCategory = location.pathname.split('/')[2];

  if (mainCategory === 'portfolio') {
    mainCategory = 'PORTFOLIO';
  } else if (mainCategory === 'contactUs') {
    mainCategory = 'CONTACT US';
  } else if (mainCategory === 'business') {
    mainCategory = 'BUSINESS';
  } else if (mainCategory === 'about') {
    mainCategory = 'ABOUT';
  }

  if (subCategory === 'VrAr') {
    subCategory = 'VR/AR';
  }
  const contentTitle = decodeURIComponent(location.pathname.split('/')[3]);
  if (contentTitle.includes('I')) {
    contentTitleEnglish = contentTitle.split('I')[0];
    contentTitleKorean = contentTitle.split('I')[1];

    if (contentTitleKorean === ' 갯벌은 어떤 곳일까') {
      contentTitleKorean += '?';
    }
  }
  //만약 | 가 있으면 | 를 기준으로 두개로 나눠서 왼쪽은  a폰트, 오른쪽은 b폰트
  // 한글

  // console.log(mainCategory, subCategory, contentTitle);
  return (
    <StyledBreadcrumbBox style={style}>
      <ul>
        <li>
          <Link to={'/'} style={font}>
            HOME
          </Link>
        </li>
        <li style={font}>{'>'}</li>
        <li style={font}>{mainCategory}</li>

        {subCategory === undefined ? (
          ''
        ) : (
          <>
            <li style={font}>{'>'}</li>
            <li>
              <Link style={font} to={`/portfolio/${subCategory === 'VR/AR' ? 'VrAr' : subCategory}`}>
                {subCategory === 'InteractionGame' ? 'INTERACTION GAME' : subCategory}
              </Link>
            </li>
          </>
        )}

        {contentTitle === undefined || contentTitle === 'undefined' ? (
          ''
        ) : (
          <>
            <li style={font}>{'>'}</li>

            <li className="NanumSquareB" style={font}>
              {contentTitle.includes('I') ? (
                <>
                  {contentTitleEnglish}
                  <span className="NanumSquareR">|</span>
                  {contentTitleKorean}
                </>
              ) : (
                <>{contentTitle}</>
              )}
            </li>
          </>
        )}
      </ul>

      {/* <ol class="breadcrumb breadcrumb-style2 mb-0">
        <li class="breadcrumb-item">
          <Link to={'/'}>HOME</Link>
        </li>
        <li class="breadcrumb-item">
          <a>{{ title }}</a>
        </li>
        <li class="breadcrumb-item active">{{ subTitle }}</li>
      </ol> */}
    </StyledBreadcrumbBox>
  );
};

export default Breadcrumb;
