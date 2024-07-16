import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";


const client = generateClient<Schema>();

const SmartPlantData = () => {
    const [smartPlantData, setSmartPlantData] = useState<Array<Schema["SmartPlantData"]["type"]>>([]);


    const fetchSensorData = async () => {
        const { data: items, errors } = await client.models.SmartPlantData.list();
        setSmartPlantData(items);
        console.log(errors);
    };


    useEffect(() => {
        fetchSensorData();
    }, []);

    return (
        <main>
            <h1>Smart Plant Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Luminosidade</th>
                        <th>Humidade Solo</th>
                        <th>Temperatura</th>
                        <th>Humidade</th>
                        <th>Atualizado</th>
                    </tr>
                </thead>
                <tbody>
                    {smartPlantData.map((device) => (
                        <tr key={device.deviceId}>
                            <td>{device.deviceId}</td>
                            <td>{device.light} lux</td>
                            <td>{device.soilMoisture}%</td>
                            <td>{device.temperature}°C</td>
                            <td>{device.humidity}%</td>
                            <td>{device.updatedAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default SmartPlantData;
