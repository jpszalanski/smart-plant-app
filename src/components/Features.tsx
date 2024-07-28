import React from 'react';
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
import '../styles/Features.css';

const Features: React.FC = () => {
  return (
    <Flex direction="column" className="features-container">
      <Heading level={2} className="title">Características</Heading>
      <Text className="description">
        O SmartPlantPot oferece uma gama de funcionalidades que garantem o cuidado ideal para suas plantas:
      </Text>
      <ul className="features-list">
        <li>Irrigação Automática Inteligente</li>
        <li>Controle de Luz Otimizado</li>
        <li>Monitoramento de Nutrientes em Tempo Real</li>
        <li>Controle Remoto via App para iOS e Página Web</li>
        <li>Reconhecimento de Plantas com Inteligência Artificial</li>
        <li>Assistente de Cuidados com Base nos Dados dos Sensores</li>
      </ul>
    </Flex>
  );
};

export default Features;
