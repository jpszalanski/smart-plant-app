import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Space } from 'antd';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource.ts';
import '../styles/RealTimeDashboard.css';
import SmartPlantDashboard from '../components/SmartPlantDashboard';
import ControlButton from '../components/ControlButton';


const client = generateClient<Schema>({
    authMode: 'identityPool',
});
const { Title } = Typography;


const RealTimeDashboard = () => {
    const [latestData, setLatestData] = useState<Schema['SmartPlantDataRealTime']['type'] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.models.SmartPlantDataRealTime.list();
            if (data.data.length > 0) {
                setLatestData(data.data[0]);  // Assumindo que sempre terá apenas um item por device
            }
        };


        fetchData();

        const sub = client.models.SmartPlantDataRealTime.observeQuery().subscribe({
            next: ({ items }) => {
                if (items.length > 0) {
                    setLatestData(items[0]);  // Assumindo que sempre terá apenas um item por device
                }
            },
            error: (error) => console.warn(error),
        });

        return () => {
            sub.unsubscribe();
        };

    }, []);

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
                        <div className="sensor-value">{latestData?.lightLevel ?? 'N/A'} lux</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="sensor-card">
                        <Title level={4}>Umidade do Solo</Title>
                        <div className="sensor-value">{latestData?.soilMoisture ?? 'N/A'}%</div>
                        <Typography.Text type="secondary">{latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}</Typography.Text>
                        <Space direction="vertical" style={{ marginTop: '10px' }}>
                            <ControlButton action={true} label="Acionar Irrigação" />
                            <ControlButton action={false} label="Desligar Irrigação" />
                        </Space>
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
