import { Layout, Menu, Typography } from 'antd';
import './App.css';

import SmartPlantDashboard from './SmartPlantData'


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Dashboard</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Typography.Title level={2}>Smart Plant Dashboard</Typography.Title>
          <SmartPlantDashboard />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Smart Plant Dashboard ©2024</Footer>
    </Layout>
  );
}

export default App;