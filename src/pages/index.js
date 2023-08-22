// pages/index.js
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ColorModeToggle from '../components/ColorModeToggle';
import BookPage from '../views/BookPage';

const bookPages = {
  page1: {
    text: 'Você acorda sozinho em uma cidade deserta. Seu sistema indica que sua bateria está baixa. Você precisa encontrar uma fonte de energia. Você tem duas opções:',
    options: [
      { label: 'Procurar por uma fonte de energia na cidade.', optionPage: 'page2' },
      { label: 'Tentar sair da cidade e procurar ajuda em outro lugar.', optionPage: 'page9' },
    ],
  },
  page2: {
    text: 'Você decide procurar por uma fonte de energia na cidade. Você encontra um prédio abandonado. Você tem duas opções:',
    image: '/path/to/image.jpg',
    options: [
      { label: 'Entrar no prédio e procurar por uma fonte de energia.', optionPage: 'page3' },
      { label: 'Continuar procurando na cidade.', optionPage: 'page5' },
    ],
  },
  page3: {
    text: 'Você entra no prédio e encontra uma fonte de energia. Mas, ao sair do prédio, você encontra um gato. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ignorar o gato e continuar procurando por ajuda.', optionPage: 'page4' },
      { label: 'Interagir com o gato.', optionPage: 'page4' },
    ],
  },
  page4: {
    text: 'Você decide interagir com o gato. Ele parece amigável e começa a seguir você.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Continuar procurando por ajuda com o gato ao seu lado.', optionPage: 'page5' },
      { label: 'Tentar encontrar comida para o gato antes de continuar sua busca.', optionPage: 'page5' },
    ],
  }, 
  page5: {
    text: 'Você decide continuar procurando na cidade. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Procurar em uma loja de animais abandonada.', optionPage: 'page6' },
      { label: 'Tentar encontrar uma nova cidade.', optionPage: 'page9' },
    ],
  },   
  page6: {
    text: 'Você encontra uma loja de animais abandonada.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Entrar na loja e procurar por comida para o gato.', optionPage: 'page7' },
      { label: 'Continuar procurando por ajuda.', optionPage: 'page5' },
    ],
  },      
  page7: {
    text: 'Você encontra uma loja de animais abandonada.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Entrar na loja e procurar por comida para o gato.', optionPage: 'page7' },
      { label: 'Continuar procurando por ajuda.', optionPage: 'page5' },
    ],
  }, 
  page8: {
    text: 'Você decide tentar consertar o robô. Você encontra as peças necessárias em uma oficina abandonada. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Tentar consertar o robô sozinho.', optionPage: 'page9' },
      { label: 'Pedir ajuda ao gato.', optionPage: 'page9' },
    ],
  },  
  page9: {
    text: 'Você decide tentar encontrar uma nova cidade. Você encontra um mapa em uma loja abandonada. O que você faz?',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Seguir o mapa para a nova cidade.', optionPage: 'page10' },
      { label: 'Continuar procurando por ajuda na cidade atual.', optionPage: 'page5' },
    ],
  },      
  page10: {
    text: 'Você decide seguir o mapa para a nova cidade. No caminho, você encontra um robô que parece precisar de ajuda.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Parar para ajudar o robô.', optionPage: 'page10' },
      { label: 'Continuar seguindo o mapa.', optionPage: 'page5' },
    ],
  }, 
  page11: {
    text: 'Você decide parar para ajudar o robô. Ele precisa de uma peça que você tem em seu inventário.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Dar a peça para o robô.', optionPage: 'page12' },
      { label: 'Recusar-se a ajudar e continuar seguindo o mapa.', optionPage: 'page12' },
    ],
  },    
  page12: {
    text: 'Você decide continuar seguindo o mapa.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Explorar uma área próxima em busca de recursos.', optionPage: 'page13' },
      { label: 'Seguir o mapa.', optionPage: 'page18' },
    ],
  },      
  page13: {
    text: 'Você decide explorar uma área próxima em busca de recursos. Vocês encontram uma fonte de energia e comida. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ficar na área e descansar.', optionPage: 'page14' },
      { label: 'Continuar seguindo o mapa.', optionPage: 'page12' },
    ],
  },  
  page14: {
    text: 'Você decide ficar na área e descansar. Enquanto descansam, vocês ouvem um barulho estranho.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ficar na área e descansar.', optionPage: 'page15' },
      { label: 'Continuar seguindo o mapa.', optionPage: 'page15' },
    ],
  },  
  page15: {
    text: 'Você decide investigar o barulho. Vocês encontram um grupo de robôs hostis. Vocês precisam lutar para sobreviver.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ficar na área e descansar.', optionPage: 'page16' },
      { label: 'Continuar seguindo o mapa.', optionPage: 'page16' },
    ],
  }, 
  page16: {
    text: 'Você decide lutar contra os robôs. Vocês conseguem derrotá-los, mas ficam feridos.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Procurar por um lugar seguro para se esconder e se recuperar.', optionPage: 'page16' },
      { label: 'Continuar seguindo o mapa, mesmo feridos.', optionPage: 'page16' },
    ],
  }, 
  page17: {
    text: 'Você decide procurar por um lugar seguro para se esconder e se curar. Vocês encontram uma caverna e conseguem se curar.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Procurar por um lugar seguro para se esconder e se recuperar.', optionPage: 'page18' },
      { label: 'Continuar seguindo o mapa, mesmo feridos.', optionPage: 'page19' },
    ],
  }, 
  page18: {
    text: 'Você decide continuar seguindo o mapa, mesmo feridos. Vocês encontram uma cidade e conseguem ajuda médica.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Explorar a cidade em busca de recursos.', optionPage: 'page20' },
      { label: 'Seguir em frente e continuar a jornada.', optionPage: 'page21' },
    ],
  }, 
  page19: {
    text: 'Você decide explorar a caverna em busca de recursos. Vocês encontram uma fonte de água e comida.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ficar na caverna e descansar.', optionPage: 'page22' },
      { label: 'Continuar seguindo o mapa.', optionPage: 'page18' },
    ],
  },    
  page20: {
    text: 'Você decide explorar a cidade em busca de recursos. Vocês encontram suprimentos e equipamentos úteis.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Ficar na cidade e descansar.', optionPage: 'page23' },
      { label: 'Seguir em frente e continuar a jornada.', optionPage: 'page21' },
    ],
  },
  page21: {
    text: 'Você decide seguir em frente e continuar a jornada. Vocês encontram um grupo de sobreviventes amigáveis.',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Juntar-se ao grupo e ajudá-los em sua missão.', optionPage: 'page24' },
      { label: 'Continuar sozinho em sua jornada.', optionPage: 'page25' },
    ],
  },   
  page22: {
    text: 'Você decide ficar na caverna e descansar. Vocês se recuperam completamente e estão prontos para continuar a jornada. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Continuar seguindo o mapa.', optionPage: 'page18' },
      { label: 'Explorar a caverna em busca de mais recursos.', optionPage: 'page19' },
    ],
  },   
  page23: {
    text: 'Você decide ficar na cidade e descansar. Vocês se recuperam completamente e estão prontos para continuar a jornada. Você tem duas opções:',
    video: '/path/to/video.mp4',
    options: [
      { label: 'Continuar seguindo o mapa.', optionPage: 'page18' },
      { label: 'Explorar a cidade em busca de mais recursos.', optionPage: 'page20' },
    ],
  },  
  page24: {
    text: 'Você decide juntar-se ao grupo e ajudá-los em sua missão. Juntos, vocês conseguem alcançar seu objetivo e sobreviver em um mundo pós-apocalíptico. Fim.',
    video: '/path/to/video.mp4',
    "options": []
  }, 
  page25: {
    text: 'Você decide continuar sozinho em sua jornada. Você enfrenta muitos desafios, mas consegue sobreviver e encontrar um novo lar. Fim.',
    video: '/path/to/video.mp4',
    "options": []
  },                             
};

export default function Home() {
  const [colorMode, setColorMode] = useState('normal');
  const [userName, setUserName] = useState('[empty]');
  const [currentPage, setCurrentPage] = useState('page1');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'normal' ? 'highContrast' : 'normal');
  };

  const handleOptionSelected = (optionPage) => {
    setCurrentPage(optionPage);
  };

  return (
    <div className={colorMode}>
      <Header>
        <ColorModeToggle onToggle={toggleColorMode} />
      </Header>
      <BookPage
        pageContent={bookPages[currentPage]}
        onOptionSelected={handleOptionSelected}
      />
      <Footer>
        <ColorModeToggle onToggle={toggleColorMode} />
      </Footer>
    </div>
  );
}
