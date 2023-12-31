import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#007bff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};
