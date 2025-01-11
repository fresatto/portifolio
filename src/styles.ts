import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  position: relative;
  z-index: 10;

  ${({ theme }) => theme.media.largeDesktop} {
    padding: 50px;
    background: #eee;
  }

  ${({ theme }) => theme.media.containerLarge} {
    padding: 100px 250px;
    background: #eee;
  }

  #tsparticles {
    position: absolute; /* Posiciona o canvas de partículas */
    top: 0;
    left: 0;
    width: 100%; /* Preenche toda a largura */
    height: 100%; /* Preenche toda a altura */
    z-index: -1; /* Fica atrás de todo o conteúdo */
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;

  section {
    padding: 16px;
    background: #fff;
    flex: 1;
    height: 100%;
  }
`;
