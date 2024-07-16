//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import SmartPlantData from './SmartPlantData';
import '@aws-amplify/ui-react/styles.css'

//const client = generateClient<Schema>();

function App() {


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Olá, {user?.signInDetails?.loginId}</h1>
          <SmartPlantData />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
