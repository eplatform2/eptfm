import { useEffect, useRef } from 'react';
import usePc from './usePc';

const useFastIntersectionObserver = () => {
  const isPc = usePc();
  const refs = useRef([]);
  useEffect(() => {
    // Intersection Observer 콜백 함수
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // const index = refs.current.indexOf(entry.target);
        const index = refs.current.findIndex((ref) => ref?.ref === entry.target);
        // console.log(321, refs.current[0].ref);
        // console.log(123, refs.current[0].name);

        if (entry.isIntersecting && isPc && index !== -1) {
          // const delay = index * 0.1;
          // entry.target.style.transitionDelay = `${delay}s`;
          entry.target.style.transitionDelay = `0s`;

          let arr = entry.target.classList.value.split(' ');

          if (entry.target.classList.value === 'slideUp') {
            entry.target.classList.add('animate');
          } else if (entry.target.classList.value === 'imgCover') {
            entry.target.classList.add('topAnimate');
          } else if (arr.includes('opacity0')) {
            entry.target.classList.add('opacity1translateY0');
            // console.log('entry: ', entry.target.classList.value);
          } else {
            entry.target.classList.add('opacity1translateY0');
          }
        }
        // 모바일,태블릿일때
        else if (entry.isIntersecting && !isPc) {
          entry.target.classList.add('opacity1translateY0');
        } else {
          // 텍스트가 화면에서 벗어나면 클래스 제거 (반복을 위해)
          // 이거 잠시 주석처리함.
          // entry.target.classList.remove('opacity1translateY0');
        }
      });
    };

    // 옵저버 옵션 설정
    const observerOptions = {
      root: null, // 뷰포트를 기준으로 감시
      threshold: 0.1, // 텍스트가 10% 이상 보일 때 애니메이션 트리거
    };

    // 옵저버 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    refs.current.forEach((refObj) => {
      if (refObj && refObj.ref) {
        observer.observe(refObj.ref);
      }
    });
    return () => {
      refs.current.forEach((refObj) => {
        if (refObj && refObj.ref) {
          observer.observe(refObj.ref);
        }
      });
    };
  }, []);

  return refs;
};

export default useFastIntersectionObserver;
