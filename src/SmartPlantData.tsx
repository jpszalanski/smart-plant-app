// SmartPlantDashboard.tsx
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';

const client = generateClient<Schema>();

const SmartPlantDashboard = () => {
    const [smartPlantData, setSmartPlantData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchSmartPlantData = async () => {
            const data = await client.models.SmartPlantData.list();
            setSmartPlantData(data.data); // Acessa os dados diretamente da propriedade data
        };

        fetchSmartPlantData();

        // Subscribe to changes in SmartPlantData
        const createSub = client.models.SmartPlantData.onCreate().subscribe({
            next: (data) => {
                setSmartPlantData((prevData) => [...prevData, data]);
            },
            error: (error) => console.warn(error),
        });

        const updateSub = client.models.SmartPlantData.onUpdate().subscribe({
            next: (data) => {
                setSmartPlantData((prevData) =>
                    prevData.map((item) => (item.id === data.id ? data : item))
                );
            },
            error: (error) => console.warn(error),
        });

        const deleteSub = client.models.SmartPlantData.onDelete().subscribe({
            next: (data) => {
                setSmartPlantData((prevData) => prevData.filter((item) => item.id !== data.id));
            },
            error: (error) => console.warn(error),
        });

        return () => {
            createSub.unsubscribe();
            updateSub.unsubscribe();
            deleteSub.unsubscribe();
        };
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Smart Plant Dashboard
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                    <Typography variant="h6">Light</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={smartPlantData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="updatedAt" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="light" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                    <Typography variant="h6">Soil Moisture</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={smartPlantData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="updatedAt" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="soilMoisture" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                    <Typography variant="h6">Temperature</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={smartPlantData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="updatedAt" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                    <Typography variant="h6">Humidity</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={smartPlantData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="updatedAt" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="humidity" stroke="#387908" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SmartPlantDashboard;
