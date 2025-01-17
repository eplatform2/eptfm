import { useMediaQuery } from 'react-responsive';

const useResponsiveMax1024 = () => {
  // 태블릿 디바이스의 가로 해상도를 감지
  const isMobileTablet = useMediaQuery({ query: '(max-width:1024px)' });

  return isMobileTablet;
};

export default useResponsiveMax1024;
