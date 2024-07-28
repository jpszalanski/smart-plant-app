import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Container fluid className="home-container">
      <Row className="hero-section align-items-center">
        <Col md={6} className="text-center text-md-left">
          <h1 className="title">SmartPlantPot</h1>
          <p className="subtitle">O cuidado perfeito para suas plantas, agora automatizado</p>
          <Button variant="success" size="lg" className="cta-button">Descubra Mais</Button>
        </Col>
        <Col md={6}>
          <Image src="/smartplant-pot.jpg" alt="Smart Plant Pot" fluid className="hero-image" />
        </Col>
      </Row>
      <Row className="features-section">
        <Col>
          <h2>Principais Características</h2>
          <ul className="features-list">
            <li>Irrigação Automática Inteligente</li>
            <li>Controle de Luz Otimizado</li>
            <li>Monitoramento de Nutrientes em Tempo Real</li>
            <li>Controle Remoto via App para iOS e Página Web</li>
            <li>Reconhecimento de Plantas com Inteligência Artificial</li>
            <li>Assistente de Cuidados com Base nos Dados dos Sensores</li>
          </ul>
        </Col>
      </Row>
      <Row className="benefits-section">
        <Col>
          <h2>Benefícios do SmartPlantPot</h2>
          <p>Com o SmartPlantPot, suas plantas recebem o cuidado ideal, onde quer que você esteja. Nossa tecnologia de ponta garante que suas plantas cresçam saudáveis e fortes, sem que você precise se preocupar com a manutenção diária.</p>
          <p>Imagine poder monitorar e ajustar as condições das suas plantas diretamente do seu smartphone. Nossa solução automatizada cuida de tudo, desde a irrigação até o ajuste de luz, proporcionando um ambiente perfeito para o crescimento das suas plantas.</p>
          <p>Experimente a conveniência e a inovação do SmartPlantPot e veja suas plantas prosperarem como nunca antes!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
