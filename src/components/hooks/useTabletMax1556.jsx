import { useMediaQuery } from 'react-responsive';

const useLongTablet = () => {
  const isTablet = useMediaQuery({ query: '(min-width:1025px) and (max-width:1556px)' });

  return isTablet;
};

export default useLongTablet;
