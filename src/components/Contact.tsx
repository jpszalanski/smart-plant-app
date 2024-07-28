import React from 'react';
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <Flex direction="column" className="contact-container">
      <Heading level={2} className="title">Contato</Heading>
      <Text className="description">

      </Text>
    </Flex>
  );
};

export default Contact;
