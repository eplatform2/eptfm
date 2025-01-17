import { useMediaQuery } from 'react-responsive';

const useTablet = () => {
  // 태블릿 디바이스의 가로 해상도를 감지
  // const isTablet = useMediaQuery({ query: '(min-width:481px) and (max-width:1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width:701px) and (max-width:1024px)' });

  return isTablet;
};

export default useTablet;
