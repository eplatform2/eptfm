import React from 'react';
import { Link } from 'react-router-dom';

const NavBox = ({ title, link, activeLink, setShowDropDown }) => {
  // console.log(activeLink);
  const clickTest = () => {
    if (setShowDropDown !== undefined) {
      setShowDropDown(false);
    }
  };

  return (
    <>
      <li>
        <Link onClick={() => clickTest()} className={activeLink === link ? 'active' : ''} to={link}>
          {title}
        </Link>
      </li>
    </>
  );
};

export default NavBox;
