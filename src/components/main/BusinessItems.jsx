import React, { forwardRef } from 'react';
import useResponsiveMax1024 from '../hooks/useResponsiveMax1024';
import { StyledBusinessItems } from '../../assets/styles/main/businessItems.styled';

const BusinessItems = forwardRef((props, ref) => {
  // const [isHovered, setIsHovered] = useSta

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const isMobile = useResponsiveMax1024();
  return (
    <StyledBusinessItems className="slideUp" ref={ref} $first={props.first} $last={props.last}>
      <div className="hoverOff">
        <div className="background"></div>
        <p className="basicText">{props && props.text}</p>
        <div className="hoverTexts">
          <p>{props && props.text}</p>
          <br />
          <p>{renderTextWithLineBreaks(props && props.hoverText)}</p>
        </div>
        <img src={props && props.img} alt="" />
      </div>

      <div className="hoverOn">
        <img src={isMobile ? props && props.mobile_hoverImg : props && props.hoverImg} alt="" />
        <div>
          <p>{props && props.text}</p>
          <p>{renderTextWithLineBreaks(props && props.hoverText)}</p>
        </div>
      </div>
    </StyledBusinessItems>
  );
});

export default BusinessItems;
