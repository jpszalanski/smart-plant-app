import { Layout, Button } from 'antd';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../styles/Login.css';
import RealTimeDashboard from '../components/RealTimeDashboard';
import CustomAuthenticator from '../custom/CustomAuthenticator';

const { Header, Content } = Layout;

function Login() {
  return (
    <Authenticator components={CustomAuthenticator}>
      {({ signOut, user }) => (
        <Layout className="layout">
          <Header>
            <div className="logo" >
              <img src="/logo.png" alt="SmartPlantPot" />
            </div>
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
        
        </Layout>
      )}
    </Authenticator>
  );
}

export default Login;
