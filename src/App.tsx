//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import SmartPlantData from './SmartPlantData';
import '@aws-amplify/ui-react/styles.css'
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('pt');

//const client = generateClient<Schema>();

function App() {


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <td><h2>Olá, {user?.signInDetails?.loginId}</h2></td>
          <td><button onClick={signOut}>Sign out</button></td>

          <th> <SmartPlantData /></th>

        </main>
      )}
    </Authenticator>
  );
}

export default App;
