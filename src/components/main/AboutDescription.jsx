import React, { forwardRef, useEffect, useState } from 'react';
import { StyledAboutDescription } from '../../assets/styles/main/aboutDescription.styled';
import useFastIntersectionObserver from '../hooks/useFastIntersectionObserver';

const AboutDescription = forwardRef((props, ref) => {
  const [valueBox, setValueBox] = useState('');
  const childRefs = useFastIntersectionObserver();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (props.textsTitle === 'VALUE' && window.innerWidth > 1025) {
      setValueBox('marginLeft182');
    } else {
      setValueBox('');
    }
  }, [props.textsTitle]);

  // 순차적으로 childRefs의 요소들이 실행되게 하는 로직
  // useEffect(() => {
  //   if (ref && ref.current) {
  //     // 타이머로 순차적으로 애니메이션 실행 예시
  //     const timers = [];

  //     // 각 ref 요소에 애니메이션 클래스 추가
  //     childRefs.current.forEach((child, index) => {
  //       timers.push(
  //         setTimeout(() => {
  //           if (child.ref) {
  //             // child.ref.classList.add('fadeIn'); // 애니메이션 클래스 추가
  //           }
  //         }, index * 500) // 각 요소가 500ms 간격으로 실행됨
  //       );
  //     });

  //     // 컴포넌트가 언마운트되면 타이머 클리어
  //     return () => {
  //       timers.forEach((timer) => clearTimeout(timer));
  //     };
  //   }
  // }, [childRefs, ref]);

  return (
    <StyledAboutDescription className="opacity0" ref={ref} $textsTitle={props.textsTitle}>
      {props.img && <img className="cube" src={props && props.img} ref={(el) => (childRefs.current[0] = { ref: el })} loading="lazy" alt="" />}
      <div className={`textsBoxContainer ${valueBox}`}>
        {/* <p className="textsTitle"> */}
        <p className="textsTitle" ref={(el) => (childRefs.current[1] = { ref: el })}>
          {props && props.textsTitle}
        </p>
        <p className="textsSubTitle" ref={(el) => (childRefs.current[2] = { ref: el })}>
          {props && props.textsSubTitle}
        </p>
        <p className="textsContents" ref={(el) => (childRefs.current[3] = { ref: el })}>
          {renderTextWithLineBreaks(props && props.textsContents)}
        </p>
      </div>
    </StyledAboutDescription>
  );
});

export default AboutDescription;
