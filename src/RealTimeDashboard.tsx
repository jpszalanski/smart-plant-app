import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';
import './RealTimeDashboard.css';
import SmartPlantDashboard from './SmartPlantDashboard';

const client = generateClient<Schema>();
const { Title } = Typography;

const RealTimeDashboard = () => {
    const [sensorData, setSensorData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.models.SmartPlantData.list();
            setSensorData(data.data);
        };

        fetchData();

        const createSub = client.models.SmartPlantData.onCreate().subscribe({
            next: (data) => setSensorData((prevData) => [...prevData, data]),
            error: (error) => console.warn(error),
        });

        const updateSub = client.models.SmartPlantData.onUpdate().subscribe({
            next: (data) => {
                setSensorData((prevData) =>
                    prevData.map((item) => (item.id === data.id ? data : item))
                );
            },
            error: (error) => console.warn(error),
        });

        const deleteSub = client.models.SmartPlantData.onDelete().subscribe({
            next: (data) => {
                setSensorData((prevData) =>
                    prevData.filter((item) => item.id !== data.id)
                );
            },
            error: (error) => console.warn(error),
        });

        return () => {
            createSub.unsubscribe();
            updateSub.unsubscribe();
            deleteSub.unsubscribe();
        };
    }, []);

    const latestData = sensorData.length > 0 ? sensorData[sensorData.length - 1] : null;

    return (
        <div className="dashboard-container">
            <Title level={2} className="dashboard-title">Smart Plant Dashboard</Title>
            <Row gutter={16}>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Temperatura</Title>
                        <div className="sensor-value">{latestData?.temperature ?? 'N/A'}°C</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Umidade</Title>
                        <div className="sensor-value">{latestData?.humidity ?? 'N/A'}%</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Luminosidade</Title>
                        <div className="sensor-value">{latestData?.light ?? 'N/A'} lux</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Umidade do Solo</Title>
                        <div className="sensor-value">{latestData?.soilMoisture ?? 'N/A'}%</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                    </Card>
                </Col>
            </Row>
            <div className="dashboard-charts">
                <SmartPlantDashboard />
            </div>
        </div>
    );
};

export default RealTimeDashboard;
