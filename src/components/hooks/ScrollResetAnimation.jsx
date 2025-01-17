import React, { useEffect, useRef } from 'react';

const ScrollResetAnimation = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);

  const removeAllAnimateClasses = (ref) => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll('.animate');
      elements.forEach((el) => el.classList.remove('animate')); // animate 클래스 제거
    }
  };

  const addAllAnimateClasses = (ref) => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll('.element'); // 애니메이션 대상 요소들
      elements.forEach((el) => el.classList.add('animate')); // animate 클래스 추가
    }
  };

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          // 영역이 뷰포트 위로 완전히 넘어가면 (스크롤로 영역 위로 넘어갔을 때)
          removeAllAnimateClasses(entry.target);
        } else if (entry.isIntersecting) {
          // 영역이 뷰포트 안으로 들어왔을 때
          addAllAnimateClasses(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.1, // 10%만 보이면 트리거
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 각 영역에 대한 옵저버 설정
    if (aRef.current) observer.observe(aRef.current);
    if (bRef.current) observer.observe(bRef.current);
    if (cRef.current) observer.observe(cRef.current);

    // 클린업
    return () => {
      if (aRef.current) observer.unobserve(aRef.current);
      if (bRef.current) observer.unobserve(bRef.current);
      if (cRef.current) observer.unobserve(cRef.current);
    };
  }, []);

  return (
    <div>
      <div ref={aRef} style={{ height: '3000px', backgroundColor: 'lightgray' }}>
        <h2>A 영역 (20개 애니메이션)</h2>
        {/* 애니메이션 대상 요소들 */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="element animate">
            A 영역 요소 {i + 1}
          </div>
        ))}
      </div>

      <div ref={bRef} style={{ height: '3000px', backgroundColor: 'lightblue' }}>
        <h2>B 영역 (10개 애니메이션)</h2>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="element animate">
            B 영역 요소 {i + 1}
          </div>
        ))}
      </div>

      <div ref={cRef} style={{ height: '3000px', backgroundColor: 'lightgreen' }}>
        <h2>C 영역 (50개 애니메이션)</h2>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="element animate">
            C 영역 요소 {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollResetAnimation;
