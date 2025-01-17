import React from 'react';
import styled from 'styled-components';
import { config } from '../../config';

const StyledContactTextsLinkWrapper = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    max-width: 1260px;
    width: 100%;
    text-align: left;
    margin-bottom: 80px;

    .c1 {
      p:first-child {
        color: #292929;
        font-size: var(--pc-32px);
      }
      p:last-child {
        color: #767676;
        font-size: var(--pc-font-size-22px);
        margin-top: 28px;
      }
    }

    .c2 {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        border: 1px solid #767676;
        /* width: clamp(300px, 15.63vw, 380px); */
        width: clamp(0px, 19.79vw, 380px);
        height: var(--pc-90px);
        color: #767676;
        cursor: pointer;
        background-color: transparent;
        position: relative;
        .popupText {
          font-size: var(--pc-font-size-26px);
        }
      }
    }
    .moveIcon {
      position: absolute;
      right: 0;
      margin-right: var(--pc-34px);

      width: clamp(0px, 1.88vw, 36px);
    }
  }
  @media (max-width: 1024px) {
    text-align: left;
    margin-bottom: 50px;
    word-break: keep-all;

    .c1 {
      p:first-child {
        color: #292929;
        font-size: var(--mobile-font-size-22px);
        line-height: var(--mobile-line-height-30px);

        letter-spacing: -0.02em;

        margin-bottom: 10px;
      }
      p:last-child {
        color: #767676;
        font-size: var(--mobile-content-common-font-size);
        line-height: var(--mobile-content-common-line-height);
        letter-spacing: -0.02em;
        max-width: 500px;
      }
    }

    .c2 {
      button {
        border-radius: 50px;
        border: 1px solid #767676;
        color: #767676;
        padding: 15px 0;
        cursor: pointer;
        background-color: transparent;
        margin-top: 30px;
        margin-bottom: 50px;
        width: 315px;

        position: relative;
        display: flex;
        align-items: center;
        .popupText {
          width: 100%;
          color: #767676;
          text-align: center;
          font-size: 18px;
          line-height: 26px;
          /* font-size: clamp(18px, 4vw, 50px);
          line-height: clamp(26px, 6vw, 50px); */
          letter-spacing: -0.02em;
        }

        .moveIcon {
          /* width: clamp(26px, 6.93vw, 1000px); */
          width: 26px;
          position: absolute;
          right: 0;
          margin-right: clamp(17px, 4.53vw, 1000px);
        }
      }
    }
  }
`;

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const ContactTextsLinkBox = (data) => {
  const btnClick = () => {
    if (data.clickOption === 'mail') {
      // 모달 on
      data.setModalStatus(true);
    } else {
      window.open(config.Naver_Map_URL, '_blank');
    }
  };
  return (
    <StyledContactTextsLinkWrapper>
      <div className="c1">
        <p className="NanumSquareEB">{data.mainText}</p>
        <p className="NanumSquareB">{renderTextWithLineBreaks(data.subText)}</p>
      </div>
      <div className="c2">
        <button
          className="NanumSquareEB"
          onClick={() => {
            btnClick();
          }}
        >
          <p className="popupText">{data.popupText}</p>
          <img className="moveIcon" src={`${process.env.PUBLIC_URL}/assets/images/contact/moveIcon.png`} alt="" />
        </button>
      </div>
    </StyledContactTextsLinkWrapper>
  );
};

export default ContactTextsLinkBox;
