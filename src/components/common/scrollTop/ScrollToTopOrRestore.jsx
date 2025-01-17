import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOrRestore() {
  const location = useLocation();
  const prevLocationRef = useRef(location);
  const savedPositions = useRef({});

  useEffect(() => {
    if (location.pathname !== prevLocationRef.current.pathname) {
      // 페이지 전환이 링크 클릭으로 발생한 경우: 스크롤 맨 위로 이동
      window.scrollTo(0, 0);
    } else {
      // 페이지 전환이 뒤로 가기/앞으로 가기로 발생한 경우: 이전 위치로 복원
      const savedPosition = savedPositions.current[location.key];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      }
    }

    return () => {
      // 현재 페이지의 스크롤 위치를 저장
      savedPositions.current[prevLocationRef.current.key] = window.scrollY;
      // 이전 위치 갱신
      prevLocationRef.current = location;
    };
  }, [location]);

  return null;
}

export default ScrollToTopOrRestore;
