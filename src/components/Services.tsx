import React from 'react';
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <Flex direction="column" className="services-container">
      <Heading level={2} className="title">Our Services</Heading>
      <Text className="description">
        We offer a wide range of services to meet your needs. From consulting to implementation,
        our team is here to help you every step of the way.
      </Text>
    </Flex>
  );
};

export default Services;
