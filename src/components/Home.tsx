import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Parallax from 'parallax-js';
import '../styles/Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    if (scene) {
      new Parallax(scene);
    }
  }, []);

  return (
    <Container fluid className="home-container">
      <Row className="hero-section align-items-center">
        <div id="scene">
          <div data-depth="0.2" className="layer">
            <Image src="/smartplant-pot.webp" alt="Smart Plant Pot" fluid className="hero-image" />
          </div>
          <div data-depth="0.6" className="layer">
            <div className="text-layer">
              <h1 className="title1">Smart PlantPot</h1>
              <p className="subtitle">O cuidado perfeito para suas plantas, agora automatizado</p>
            </div>
          </div>
        </div>
      </Row>
      <Row className="benefits-section">
        <Col>
          <h2>Benefícios do SmartPlantPot</h2>
          <p>Com o SmartPlantPot, suas plantas recebem o cuidado ideal.</p>
          <p>Imagine poder monitorar e ajustar as condições das suas plantas diretamente do seu smartphone. Nossa solução automatizada cuida de tudo, desde a irrigação até o ajuste de luz, proporcionando um ambiente perfeito para o crescimento das suas plantas.</p>
        </Col>
      </Row>
      <Row className="benefits-section">
        <Col>
          <h2>Principais Características</h2>
          <ul className="features-list">
            <p>Irrigação Automática Inteligente</p>
            <p>Controle de Luz Otimizado</p>
            <p>Monitoramento de Nutrientes em Tempo Real</p>
            <p>Controle Remoto via App para iOS e Página Web</p>
            <p>Reconhecimento de Plantas com Inteligência Artificial</p>
            <p>Assistente de Cuidados com Base nos Dados dos Sensores</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
