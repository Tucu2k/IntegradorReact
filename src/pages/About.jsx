import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <Container className="about-container text-center text-light py-5">
      <h1 className="about-title mb-4">🚀 Nuestra Historia</h1>
      <p className="about-text">
        AstroBits nació como un pequeño local de hardware fundado por un grupo de apasionados por la tecnología y el gaming.
        Lo que comenzó como un simple punto de encuentro entre entusiastas de PC y jugadores, rápidamente se transformó en una
        comunidad dedicada a llevar el mejor rendimiento y la mejor experiencia a cada equipo armado.
      </p>
      <p className="about-text">
        Con el tiempo, nuestra pasión y compromiso nos impulsaron a crecer. Hoy, AstroBits es el 
        <strong> proveedor de confianza de empresas, streamers, creadores de contenido y eventos de gaming </strong> 
        en toda la región. Desde los componentes más potentes hasta los periféricos más innovadores, 
        nos especializamos en ofrecer <strong>soluciones de hardware a la medida de cada necesidad.</strong>
      </p>
      <p className="about-text">
        Pero algo no cambió: seguimos manteniendo ese espíritu original de cercanía, atención personalizada y amor por cada build. 
        Porque para nosotros, cada cliente no es solo una venta, sino parte de una gran tripulación que viaja junto a nosotros hacia nuevas galaxias tecnológicas. 🌌
      </p>
    </Container>
  );
}
