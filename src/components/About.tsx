import React from 'react';
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <Flex direction="column" className="about-container">
      <Heading level={2} className="title">Sobre Nós</Heading>
      <Text className="description">
        A SmartPlantPot é dedicada a trazer inovação e praticidade para o cuidado com plantas. Nossa missão é garantir que suas plantas 
        recebam o cuidado perfeito, utilizando o que há de mais moderno em tecnologia para proporcionar um ambiente saudável e otimizado.
      </Text>
    </Flex>
  );
};

export default About;
