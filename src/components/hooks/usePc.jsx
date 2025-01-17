import { useMediaQuery } from 'react-responsive';

const usePc = () => {
  const isPC = useMediaQuery({ query: '(min-width:1025px)' });

  return isPC;
};

export default usePc;
