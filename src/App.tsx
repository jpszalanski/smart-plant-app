//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import { components } from './CustomAuthenticator'; // Import custom components and form fields
import SmartPlantData from './SmartPlantData';
import './App.css';
import '@aws-amplify/ui-react/styles.css'

function App() {
  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <td><h2>Olá, {user?.signInDetails?.loginId}</h2></td>
          <td><button onClick={signOut}>Sign out</button></td>
          <th> <SmartPlantData /></th>
        </main>
      )
      }
    </Authenticator >
  );
}

export default App;
