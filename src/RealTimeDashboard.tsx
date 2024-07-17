import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';
import './RealTimeDashboard.css';

const client = generateClient<Schema>();
const { Title, Text } = Typography;

const RealTimeDashboard = () => {
    const [sensorData, setSensorData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.models.SmartPlantData.list();
            setSensorData(data.data);
        };

        const sub = client.models.SmartPlantData.observeQuery().subscribe({
            next: ({ items }) => setSensorData(items),
        });

        fetchData();

        return () => sub.unsubscribe();
    }, []);

    const latestData = sensorData.length > 0 ? sensorData[sensorData.length - 1] : null;

    return (
        <div className="dashboard-container">
            <Row gutter={16}>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Temperature</Title>
                        <div className="sensor-value">{latestData?.temperature ?? 'N/A'}°C</div>
                        <Text type="secondary">{latestData?.updatedAt ? `Last updated: ${new Date(latestData.updatedAt).toLocaleString()}` : 'No data'}</Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Humidity</Title>
                        <div className="sensor-value">{latestData?.humidity ?? 'N/A'}%</div>
                        <Text type="secondary">{latestData?.updatedAt ? `Last updated: ${new Date(latestData.updatedAt).toLocaleString()}` : 'No data'}</Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Light</Title>
                        <div className="sensor-value">{latestData?.light ?? 'N/A'} lux</div>
                        <Text type="secondary">{latestData?.updatedAt ? `Last updated: ${new Date(latestData.updatedAt).toLocaleString()}` : 'No data'}</Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Soil Moisture</Title>
                        <div className="sensor-value">{latestData?.soilMoisture ?? 'N/A'}%</div>
                        <Text type="secondary">{latestData?.updatedAt ? `Last updated: ${new Date(latestData.updatedAt).toLocaleString()}` : 'No data'}</Text>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default RealTimeDashboard;
