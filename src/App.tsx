import { Layout, Button } from 'antd';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import RealTimeDashboard from './RealTimeDashboard';
import CustomAuthenticator from './CustomAuthenticator';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Authenticator components={CustomAuthenticator}>
      {({ signOut, user }) => (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <div className="user-info">
              <span>Olá, {user?.signInDetails?.loginId}</span>
              <Button onClick={signOut} style={{ marginLeft: '20px' }}>Sign Out</Button>
            </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <RealTimeDashboard />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Smart Plant Dashboard ©2024 Created by Jeferson Aguiar</Footer>
        </Layout>
      )}
    </Authenticator>
  );
}

export default App;
