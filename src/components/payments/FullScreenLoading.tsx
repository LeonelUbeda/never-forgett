import { Spin } from 'antd';
import Logo from '../../images/logo-dark.svg';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const FullScreenLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img src={Logo} className="w-20 mb-6" alt="Neverforgett Logo" />
      <Spin size="large" indicator={loadingIcon} />
    </div>
  );
};

export default FullScreenLoading;
