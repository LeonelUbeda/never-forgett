import React, { useState } from 'react';
import './main-layout.scss';
import { Layout, Menu, Drawer, Button, Row } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo-dark.svg';

import { DollarCircleOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      ></Drawer>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme="light"
          className="mobileHidden bg-gray-00"
          collapsible
          breakpoint="lg"
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Row justify="center">
            <Link to="/">
              <img
                src={Logo}
                className={` my-4 ${collapsed ? 'w-10' : 'w-20'}`}
                alt="NeverForgett logo"
              />
            </Link>
          </Row>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              icon={<DollarCircleOutlined />}
              title="Payments"
            >
              <Menu.Item key="3">
                <Link to="/payments/">See all</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/payments/groups">Groups</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<SettingOutlined />} unselectable="on">
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Button type="primary" onClick={showDrawer} className="">
              Open
            </Button>
          </Header>
          <Content className="bg-white m-0 md:m-5 p-3">{children}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
