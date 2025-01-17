import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePc from './../../hooks/usePc';

const StyledWidthImgOneTextsOne = styled.div`
  position: relative;
  text-align: left;

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: var(--pc-100px);

    p {
      display: grid;
      align-items: center;
    }
    padding-top: ${(props) => props.$pcPaddingTop};
    margin: auto;
    margin-bottom: ${(props) => {
      if (props.$last) return 'var(--pc-200px)';
      return 'var(--pc-160px)';
    }};

    max-width: ${(props) => {
      if (props.$pcMaxWidth) return '1260px';
    }};
    width: ${(props) => {
      if (props.$pcMaxWidth) return (props.$pcMaxWidth / 1920) * 100 + 'vw';
    }};
  }

  @media (max-width: 1024px) {
    /* margin: 0 30px; */
    margin: 0 var(--mobile-margin);
    display: grid;
    img {
      width: 100%;
      order: 1;
      margin-bottom: var(--mobile-24px);
    }

    /* 삭제예정 */
    .texts {
      order: 2;
      width: 100%;
      white-space: nowrap;

      color: #767676;
      text-align: center;

      font-size: var(--mobile-content-common-font-size);
      line-height: var(--mobile-content-common-line-height);
    }

    p {
      order: 2;
      text-align: center;
    }
    padding-top: ${(props) => props.$mobilePaddingTop};

    margin-bottom: ${(props) => {
      if (props.$last) return 'var(--mobile-142px)';
      return 'var(--mobile-80px)';
    }};
  }
`;

const WidthImgOneTextsOne = ({ children, style, pcPaddingTop, tabletPaddingTop, mobilePaddingTop, last, pcMaxWidth }) => {
  const wrapperRef = useRef(null);
  const pcResolution = usePc();

  useEffect(() => {
    if (pcResolution) {
      const children = wrapperRef.current.children;
      const firstElementTag = children[0].tagName.toLowerCase();
      const secondElementTag = children[1].tagName.toLowerCase();

      if (firstElementTag === 'p' && secondElementTag === 'img') {
        wrapperRef.current.style.justifyContent = 'space-between';
      } else if (firstElementTag === 'img' && secondElementTag === 'p') {
        wrapperRef.current.style.justifyContent = 'start';
      }
      // console.log('안뇽');
    } else {
      wrapperRef.current.style.justifyContent = '';
    }
  }, [pcResolution]);
  return (
    <StyledWidthImgOneTextsOne
      style={style}
      $pcPaddingTop={pcPaddingTop}
      $tabletPaddingTop={tabletPaddingTop}
      $mobilePaddingTop={mobilePaddingTop}
      $last={last}
      $pcMaxWidth={pcMaxWidth}
      ref={wrapperRef}
    >
      {children}
    </StyledWidthImgOneTextsOne>
  );
};

export default WidthImgOneTextsOne;
