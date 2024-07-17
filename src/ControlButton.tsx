import React, { useState, useEffect } from 'react';
import { IoTDataPlaneClient, PublishCommand } from '@aws-sdk/client-iot-data-plane';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import "./index.css";
import '@aws-amplify/ui-react/styles.css';


const ControlButton: React.FC = () => {
    const [iotClient, setIotClient] = useState<IoTDataPlaneClient | null>(null);

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const credentials = fromCognitoIdentityPool({
                    client: new CognitoIdentityClient({ region: "us-east-1" }),
                    identityPoolId: "us-east-1:52c00a4d-1a87-4a8f-a5f7-408be5b4fb9d",
                });

                const client = new IoTDataPlaneClient({
                    region: "us-east-1",
                    credentials,
                });

                setIotClient(client);
            } catch (error) {
                console.error('Error fetching client:', error);
            }
        };

        fetchClient();
    }, []);

    const handleClick = async () => {
        if (!iotClient) {
            console.error('IoT client not initialized');
            return;
        }

        const payload = '1';

        const command = new PublishCommand({
            topic: "$aws/things/SmartPlantPot/shadow/control",
            payload: new TextEncoder().encode(JSON.stringify(payload)),
        });

        try {
            const response = await iotClient.send(command);
            console.log('Message published:', response);
        } catch (error) {
            console.error('Error publishing message:', error);
        }
    };

    return (
        <button onClick={handleClick}>
            Acionar Irrigação
        </button>
    );
};

export default ControlButton;
