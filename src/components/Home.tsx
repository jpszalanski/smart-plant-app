import React, { useEffect } from 'react';
import { Container, Row,  Image } from 'react-bootstrap';
import Parallax from 'parallax-js';
import '../styles/Home.css';
import '../styles/Footer.css';

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
            <Image src="/smartplant-pot-paralax.png" alt="Smart Plant Pot" fluid className="hero-image" />
          </div>
          <div data-depth="0.6" className="layer">
            <div className="text-layer">
              <h1 className="title1">Smart PlantPot</h1>
              <p className="subtitle">O cuidado perfeito para suas plantas, agora automatizado</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
