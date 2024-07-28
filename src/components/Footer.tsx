import React from 'react';
import { Flex, Text } from '@aws-amplify/ui-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <Flex className="footer" justifyContent="center" alignItems="center">
      <Text>Smart Plant Dashboard ©2024 Criado por Jeferson Aguiar</Text>
    </Flex>
  );
};

export default Footer;
