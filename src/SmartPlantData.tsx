import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Line, Gauge } from '@ant-design/charts';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

const SmartPlantDashboard = () => {
    const [smartPlantData, setSmartPlantData] = useState<Array<Schema['SmartPlantData']['type']>>([]);

    useEffect(() => {
        const fetchSmartPlantData = async () => {
            const data = await client.models.SmartPlantData.list();
            setSmartPlantData(data.data);
        };

        fetchSmartPlantData();
    }, []);

    // Pega o valor de soilMoisture do último registro e garante que seja um número válido
    const soilMoistureValue = smartPlantData.length > 0 ? smartPlantData[smartPlantData.length - 1].soilMoisture ?? 0 : 0;

    const temperatureConfig = {
        data: smartPlantData,
        xField: 'updatedAt',
        yField: 'temperature',
        smooth: true,
        lineStyle: {
            lineWidth: 2,
        },
    };

    const humidityConfig = {
        data: smartPlantData,
        xField: 'updatedAt',
        yField: 'humidity',
        smooth: true,
        lineStyle: {
            lineWidth: 2,
        },
    };

    const lightConfig = {
        data: smartPlantData,
        xField: 'updatedAt',
        yField: 'light',
        smooth: true,
        lineStyle: {
            lineWidth: 2,
        },
    };

    const soilMoistureConfig = {
        percent: soilMoistureValue / 100, // o Gauge precisa de um valor de 0 a 1
        range: {
            ticks: [0, 0.25, 0.5, 0.75, 1],
            color: 'l(0) 0:#f0f0f0 1:#30BF78',
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#30BF78',
                },
            },
            pin: {
                style: {
                    stroke: '#30BF78',
                },
            },
        },
        axis: {
            label: {
                formatter: (v: string) => `${(Number(v) * 100).toFixed(0)}%`,
            },
            subTickLine: {
                count: 3,
            },
        },
        statistic: {
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '44px',
                },
                formatter: () => `${soilMoistureValue}%`,
            },
        },
    };

    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Temperature" bordered={false}>
                        <Line {...temperatureConfig} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Humidity" bordered={false}>
                        <Line {...humidityConfig} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Light Intensity" bordered={false}>
                        <Line {...lightConfig} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={12}>
                    <Card title="Soil Moisture" bordered={false}>
                        <Gauge {...soilMoistureConfig} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SmartPlantDashboard;