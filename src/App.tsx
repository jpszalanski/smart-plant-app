import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [smartPlantData, setSmartPlantData] = useState<Array<Schema["SmartPlantData"]["type"]>>([]);

  /*
    function deleteTodo(id: string) {
      client.models.SmartPlantData.delete({ id })
    }
      */
  function SensorData() {
    client.models.SmartPlantData.list(),
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
          <h1>Smart Plant Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Light</th>
                <th>Soil Moisture</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {smartPlantData.map((device) => (
                <tr key={device.deviceId}>
                  <td>{device.deviceId}</td>
                  <td>{device.light}</td>
                  <td>{device.soilMoisture}</td>
                  <td>{device.temperature}</td>
                  <td>{device.humidity}</td>
                  <td>{device.createdAt}</td>
                  <td>{device.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
