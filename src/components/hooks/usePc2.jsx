import { useMediaQuery } from 'react-responsive';

const usePc2 = () => {
  const isPC2 = useMediaQuery({ query: '(min-width:1556px)' });
  return isPC2;
};

export default usePc2;
