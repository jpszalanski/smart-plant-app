import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [smartPlantData, setSmartPlantData] = useState<Array<Schema["SmartPlantData"]["type"]>>([]);


  function deleteTodo(id: string) {
    client.models.SmartPlantData.delete({ id })
  }

  useEffect(() => {
    client.models.SmartPlantData.observeQuery().subscribe({
      next: (data) => setSmartPlantData([...data.items]),
    });
  }, []);
  /*
    function createTodo() {
      client.models.SmartPlantPotData.create({
        content: "Todo content",
        isDone: true,
      });
    }
  */
  return (

    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Olá, {user?.signInDetails?.loginId}</h1>
          <h1>My todos</h1>

          <ul>
            {smartPlantData.map((device) => <li
              onClick={() => deleteTodo(device.id)}
              key={device.id}>
              {device.deviceId}
            </li>)}
          </ul>

          <button onClick={signOut}>Sign out</button>
        </main>

      )}
    </Authenticator>
  );

}

export default App;
