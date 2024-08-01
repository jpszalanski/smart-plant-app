import { useState, useEffect } from 'react';
import { Row, Col, Typography, Space } from 'antd';
import Gauge from 'react-gauge-chart';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource.ts';
import '../styles/RealTimeDashboard.css';
import SmartPlantDashboard from '../components/SmartPlantDashboard';
import ControlButton from '../components/ControlButton';

const { Title, Text } = Typography;


const client = generateClient<Schema>({
    authMode: 'identityPool',
});



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

        // Subscribe to creation 
        const createSub = client.models.SmartPlantDataRealTime.onCreate().subscribe({
            next: (data) => console.log(data),
            error: (error) => console.warn(error),
        });

        // Subscribe to update 
        const updateSub = client.models.SmartPlantDataRealTime.onUpdate().subscribe({
            next: (data) => console.log(data),
            error: (error) => console.warn(error),
        });

        // Subscribe to deletion 
        const deleteSub = client.models.SmartPlantDataRealTime.onDelete().subscribe({
            next: (data) => console.log(data),
            error: (error) => console.warn(error),
        });

        return () => {
            sub.unsubscribe();
            createSub.unsubscribe();
            updateSub.unsubscribe();
            deleteSub.unsubscribe();
        };

    }, []);

    return (
        <div className="dashboard-container">
            <Title level={2} className="dashboard-title">Smart Plant Dashboard</Title>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="gauge-card">
                        <Title level={4}>Temperatura</Title>
                        <Gauge 
                            id="temperature-gauge"
                            nrOfLevels={20}
                            percent={latestData?.temperature ? latestData.temperature / 100 : 0} 
                            textColor="#000000"
                            formatTextValue={(value: number) => `${(value * 100).toFixed(1)}°C`} 
                        />
                        <Text type="secondary">
                            {latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}
                        </Text>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="gauge-card">
                        <Title level={4}>Umidade</Title>
                        <Gauge
                            id="humidity-gauge"
                            nrOfLevels={20}
                            percent={latestData?.humidity ? latestData.humidity / 100 : 0} 
                            textColor="#000000"
                            formatTextValue={(value: number) => `${(value * 100).toFixed(1)}%`} 
                        />
                        <Text type="secondary">
                            {latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}
                        </Text>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="gauge-card">
                        <Title level={4}>Luminosidade</Title>
                        <Gauge
                            id="light-gauge"
                            nrOfLevels={20}
                            percent={latestData?.lightLevel ? latestData.lightLevel / 4096 : 0} 
                            textColor="#000000"
                            formatTextValue={(value: number) => `${(value * 4096).toFixed(0)} lux`} 
                        />
                        <Text type="secondary">
                            {latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}
                        </Text>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="gauge-card">
                        <Title level={4}>Umidade do Solo</Title>
                        <Gauge
                            id="soil-moisture-gauge"
                            nrOfLevels={20}
                            percent={latestData?.soilMoisture ? latestData.soilMoisture / 100 : 0} 
                            textColor="#000000"
                            formatTextValue={(value: number) => `${(value * 100).toFixed(1)}%`} 
                        />
                        <Text type="secondary">
                            {latestData?.updatedAt ? `Última atualização: ${new Date(latestData.updatedAt).toLocaleString()}` : 'Sem dados'}
                        </Text>
                        <Space direction="vertical" style={{ marginTop: '10px' }}>
                            <ControlButton action={true} label="Acionar Irrigação" />
                            <ControlButton action={false} label="Desligar Irrigação" />
                        </Space>
                    </div>
                </Col>
            </Row>
            <div className="dashboard-charts">
                <SmartPlantDashboard />
            </div>
        </div>
    );
};
export default RealTimeDashboard;
