import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './SmartPlantDashboard.css';

const client = generateClient<Schema>();
const { Title } = Typography;

const SmartPlantDashboard = () => {
    const [sensorData, setSensorData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.models.SmartPlantData.list();
            setSensorData(data.data);
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard-charts">
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Temperatura</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="createdAt" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Umidade</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="createdAt" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Luminosidade</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="light" stroke="#ffc658" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="createdAt" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Umidade do Solo</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="soilMoisture" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="createdAt" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SmartPlantDashboard;
