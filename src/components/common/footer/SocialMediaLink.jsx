import React from 'react';
import styled from 'styled-components';

const StyledSocialMediaLink = styled.a`
  display: inline-block;
  img {
    display: block;
    width: auto;
    height: auto;
  }
`;

const SocialMediaLink = (data) => {
  return (
    <StyledSocialMediaLink href={data.href} target="_blank" rel="noopener noreferrer">
      <img src={data.src} alt="" />
    </StyledSocialMediaLink>
  );
};

export default SocialMediaLink;
