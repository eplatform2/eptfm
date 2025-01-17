import React, { useEffect, useState } from 'react';
import { HeaderBox } from '../../../assets/styles/common/header.styled';
import NavBox from './NavBox';
import { Link } from 'react-router-dom';
import useResponsiveMax1024 from '../../hooks/useResponsiveMax1024';
import { StyledDropDown } from '../../../assets/styles/common/dropdown.styled';
import usePc from '../../hooks/usePc';

const Header = (data) => {
  const isMobTab = useResponsiveMax1024();
  const isUsePc = usePc();
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClick = () => {
    setShowDropDown(true);
  };
  const dropDownClose = () => {
    setShowDropDown(false);
  };
  const mobileListButtonClick = () => {
    // portfolioListModalStatus={portfolioListModalStatus}
    // setPortfolioListModalStatus={setPortfolioListModalStatus}
    if (data.portfolioListModalStatus === false) {
      data.setPortfolioListModalStatus(true);
    }
    // alert(data.portfolioListModalStatus);
  };

  useEffect(() => {
    if (showDropDown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showDropDown]);

  useEffect(() => {
    if (isUsePc) {
      setShowDropDown(false);
    }
  }, [isUsePc]);

  return (
    <>
      <HeaderBox id="header" className={`robotoMedium ${data.headerClass}`}>
        <div id="headerContainer">
          <Link to={'/'}>
            <img id="logoImg" src={`${process.env.PUBLIC_URL}/assets/images/common/logo.png`} alt="" />
          </Link>
          {isMobTab && data.activeLink === 'portfolio' && (
            <span>
              <img
                className="mobileListButton"
                onClick={() => mobileListButtonClick()}
                src={`${process.env.PUBLIC_URL}/assets/images/common/portfolioListButton_m.png`}
                alt=""
              />
            </span>
          )}
          <span>
            {isMobTab && showDropDown ? (
              <img id="xBtn" onClick={() => dropDownClose()} src={`${process.env.PUBLIC_URL}/assets/images/common/xBtn.png`} alt="" />
            ) : (
              <img id="dropDownImg" onClick={() => dropDownClick()} src={`${process.env.PUBLIC_URL}/assets/images/common/dropdown.png`} alt="" />
            )}

            <ul>
              {/* <NavBox title={'ABOUT US'} link={'about'} activeLink={data.activeLink} />
              <NavBox title={'BUSINESS'} link={'business'} activeLink={data.activeLink} /> */}
              <NavBox title={'ABOUT US'} link={'/#about'} />
              <NavBox title={'BUSINESS'} link={'/#business'} />
              <li className={`dropdown`}>
                <p className={data.activeLink === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>
                <div className="dropdown-content robotoRegular">
                  <Link to={'portfolio/InteractionGame'}>INTERACTION GAME</Link>
                  <Link to={'portfolio/VrAr'}>VR/AR</Link>
                  <Link to={'portfolio/e-Learning'}>e-Learning</Link>
                  <Link to={'portfolio/R&D'}>R&D</Link>
                </div>
              </li>
              <NavBox title={'CONTACT US'} link={'contactUs'} activeLink={data.activeLink} />
            </ul>
          </span>
        </div>
      </HeaderBox>

      <StyledDropDown $show={showDropDown}>
        <ul>
          <NavBox setShowDropDown={setShowDropDown} title={'ABOUT US'} link={'/#about'} />
          <NavBox setShowDropDown={setShowDropDown} title={'BUSINESS'} link={'/#business'} />
          <li className="portfolioLi">
            <p className={data.activeLink === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>

            <Link onClick={() => dropDownClose()} to={'portfolio/InteractionGame'}>
              INTERACTION GAME
            </Link>
            <Link onClick={() => dropDownClose()} to={'portfolio/VrAr'}>
              VR/AR
            </Link>
            <Link onClick={() => dropDownClose()} to={'portfolio/e-Learning'}>
              e-Learning
            </Link>
            <Link onClick={() => dropDownClose()} to={'portfolio/R&D'}>
              R&D
            </Link>
          </li>
          <NavBox setShowDropDown={setShowDropDown} title={'CONTACT US'} link={'contactUs'} activeLink={data.activeLink} />
        </ul>
        <div className="dim" onClick={() => dropDownClose()}></div>
      </StyledDropDown>
    </>
  );
};

export default Header;
