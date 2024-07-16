import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [smartPlantData, setSmartPlantData] = useState<Array<Schema["SmartPlantData"]["type"]>>([]);

  function deleteTodo(id: string) {
    client.models.SmartPlantData.delete({ id });
  }

  useEffect(() => {
    client.models.SmartPlantData.list().then((data) => {
      setSmartPlantData(data.items);
    });

    const subscription = client.models.SmartPlantData.observeQuery().subscribe({
      next: (data) => setSmartPlantData(data.items),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Olá, {user?.signInDetails?.loginId}</h1>
          <h1>Smart Plant Dashboard</h1>
          <ul>
            {smartPlantData.map((device) => (
              <li key={device.id}>{device.id}</li>
            ))}
          </ul>

          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
