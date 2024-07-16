import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [smartPlantPotData, setSmartPlantPotdata] = useState<Array<Schema["SmartPlantPotData"]["type"]>>([]);


  function deleteTodo(id: string) {
    client.models.SmartPlantPotData.delete({ id })
  }

  useEffect(() => {
    client.models.SmartPlantPotData.observeQuery().subscribe({
      next: (data) => setSmartPlantPotdata([...data.items]),
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
          <h1>{user?.signInDetails?.loginId}'s todos</h1>
          <h1>My todos</h1>

          <ul>
            {smartPlantPotData.map((plant) => <li
              onClick={() => deleteTodo(plant.id)}
              key={plant.id}>
              {plant.deviceId}
            </li>)}
          </ul>

          <button onClick={signOut}>Sign out</button>
        </main>

      )}
    </Authenticator>
  );

}

export default App;
