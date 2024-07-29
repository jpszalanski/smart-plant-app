import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
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
import '../styles/SmartPlantDashboard.css';


const client = generateClient<Schema>({
    authMode: 'identityPool',
});
const { Title } = Typography;

const SmartPlantDashboard = () => {
    const [sensorData, setSensorData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.models.SmartPlantData.list();
            const sortedData = data.data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            setSensorData(sortedData);
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard-charts">
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Temperatura (°C)</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis
                                    dataKey="createdAt"
                                    tickFormatter={(tick) => new Date(tick).toLocaleString()}
                                    type="number"
                                    domain={['auto', 'auto']}
                                    scale="time"
                                />
                                <YAxis unit="°C" />
                                <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} formatter={(value) => `${value}°C`} />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Umidade (%)</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis
                                    dataKey="createdAt"
                                    tickFormatter={(tick) => new Date(tick).toLocaleString()}
                                    type="number"
                                    domain={['auto', 'auto']}
                                    scale="time"
                                />
                                <YAxis unit="%" />
                                <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} formatter={(value) => `${value}%`} />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Luminosidade (lux)</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="light" stroke="#ffc658" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis
                                    dataKey="createdAt"
                                    tickFormatter={(tick) => new Date(tick).toLocaleString()}
                                    type="number"
                                    domain={['auto', 'auto']}
                                    scale="time"
                                />
                                <YAxis unit="lux" />
                                <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} formatter={(value) => `${value} lux`} />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="sensor-card">
                        <Title level={4}>Histórico de Umidade do Solo (%)</Title>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={sensorData}>
                                <Line type="monotone" dataKey="soilMoisture" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis
                                    dataKey="createdAt"
                                    tickFormatter={(tick) => new Date(tick).toLocaleString()}
                                    type="number"
                                    domain={['auto', 'auto']}
                                    scale="time"
                                />
                                <YAxis unit="%" />
                                <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} formatter={(value) => `${value}%`} />
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
