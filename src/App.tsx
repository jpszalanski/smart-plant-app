import './App.css';
import './index.css';
import '@aws-amplify/ui-react/styles.css';
import { Container, CssBaseline, Typography, Button } from '@mui/material';
import { Authenticator } from '@aws-amplify/ui-react';
import CustomAuthenticator from './CustomAuthenticator';
import SmartPlantDashboard from './SmartPlantData';


function App() {
  return (
    <Authenticator components={CustomAuthenticator}>
      {({ signOut, user }) => (
        <Container maxWidth="lg">
          <CssBaseline />
          <header className="app-header">
            <Typography variant="h4" component="h1">
              Olá, {user?.signInDetails?.loginId}
            </Typography>
            <Button variant="contained" color="primary" onClick={signOut}>
              Sign out
            </Button>
          </header>
          <SmartPlantDashboard />
        </Container>
      )}
    </Authenticator>
  );
}

export default App;






