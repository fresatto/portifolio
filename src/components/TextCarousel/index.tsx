import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Container } from "./styles";

const phrases = ["Desenvolvedor React", "Desenvolvedor React Native"];

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Rastreia a frase atual
  const containerRef = useRef<HTMLDivElement>(null); // Referência ao container das letras

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentPhrase = phrases[currentIndex];
    const letters = currentPhrase
      .split("")
      .map((letter) => `<span>${letter}</span>`);

    // Atualiza o container com as letras
    container.innerHTML = letters.join("");

    const spans = container.querySelectorAll("span");

    // Animação de entrada das letras
    gsap.fromTo(
      spans,
      {
        // top: 10,
        opacity: 0,
        x: () => Math.random() * 400 - 200, // Posição inicial aleatória no eixo X
        y: () => Math.random() * 400 - 200, // Posição inicial aleatória no eixo Y
        rotation: () => Math.random() * 720 - 360, // Rotação inicial aleatória
      },
      {
        top: 0,
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.05, // Intervalo entre cada letra
        ease: "power3.out",
      }
    );

    // Configura o timer para a animação de saída e a próxima frase
    const timer = setTimeout(() => {
      gsap.to(spans, {
        opacity: 0,
        x: () => Math.random() * 200 - 100, // Posição de saída aleatória no eixo X
        y: () => Math.random() * 200 - 100, // Posição de saída aleatória no eixo Y
        rotation: () => Math.random() * 360, // Rotação de saída aleatória
        duration: 1,
        stagger: 0.05,
        ease: "power3.in",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Próxima frase
        },
      });
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente ou ao mudar o índice
  }, [currentIndex]);

  return <Container ref={containerRef}></Container>;
};

export default TextCarousel;
