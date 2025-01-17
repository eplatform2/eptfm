import React from 'react';
import { FooterBox } from '../../../assets/styles/common/footer.styled';
import SocialMediaLink from './SocialMediaLink';

const Footer = () => {
  return (
    <FooterBox>
      <div className="socialMediaLinkWrapper">
        <SocialMediaLink href={'https://www.youtube.com/@eplatform'} src={`${process.env.PUBLIC_URL}/assets/images/common/youtube.png`} />
        <SocialMediaLink href={'https://www.instagram.com/e_platform0225/'} src={`${process.env.PUBLIC_URL}/assets/images/common/insta.png`} />
      </div>
      <div className="footerContainer">
        <img id="footerImg" src={`${process.env.PUBLIC_URL}/assets/images/common/bottom_logo.png`} alt="" />
        {/* <div id="info">
          <div className="telFaxMail">
            <span className="number">Tel : 02. 6949. 5622</span>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="number">Fax : 02. 6949. 5623</span>
            <span className="customSpan">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="mail">Mail : eplatform@naver.com</span>
          </div>
          <div className="address">
            <span>Address : 경기도 고양시 덕양구 청초로 10 B동 1112호</span>
          </div>
        </div> */}
        <div className="companyInfo">
          <div className="pcDisplayFlex">
            <p>
              Tel : 02. 6949. 5622<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>Fax : 02. 6949. 5623
            </p>
            <span className="customSpan">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <p className="mail">Mail : eplatform@naver.com </p>
          </div>
          <p>Address : 경기도 고양시 덕양구 청초로 10 B동 1111호, 1112호</p>
        </div>
        <div className="copyright">ⓒ EPLATFORM ALL RIGHTS RESERVED.</div>
      </div>
    </FooterBox>
  );
};

export default Footer;
