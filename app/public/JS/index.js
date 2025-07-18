
const slides = [
    {
      imagem: '../images/home-image.jpg',
      titulo: 'A ÁGUA COMO RECURSO <span>ESSENCIAL PARA A VIDA</span>',
      botao: 'Clique para saber mais'
    },
    {
      imagem: '../images/img-noticie01.jpg',
      titulo: 'PRESERVE <span>NOSSOS RIOS</span>',
      botao: 'Saiba como ajudar'
    },
    {
      imagem: '../images/img-noticie02.jpg',
      titulo: 'CONSCIENTIZAÇÃO <span>COMEÇA EM CASA</span>',
      botao: 'Veja dicas práticas'
    },
  ];

  let slideAtual = 0;
  const container = document.getElementById('carousel-container');

  function criarSlideHTML(slideData) {
    const slide = document.createElement('section');
    slide.className = 'home-container';
    slide.style.backgroundImage = `url('${slideData.imagem}')`;
    slide.innerHTML = `
      <article class="content">
        <h2>${slideData.titulo}</h2>
        <button class="btn">${slideData.botao}</button>
      </article>
    `;
    return slide;
  }

  function trocarSlide() {
    const proximoIndex = (slideAtual + 1) % slides.length;

    const wrapper = document.createElement('div');
    wrapper.className = 'slide-wrapper';

    const slideAtualHTML = criarSlideHTML(slides[slideAtual]);
    const proximoSlideHTML = criarSlideHTML(slides[proximoIndex]);

    wrapper.appendChild(slideAtualHTML);
    wrapper.appendChild(proximoSlideHTML);

    container.innerHTML = '';
    container.appendChild(wrapper);

    // Força o DOM a aplicar o layout antes da animação
    setTimeout(() => {
      wrapper.style.transform = 'translateX(-100%)';
    }, 50);

    // Depois que a animação acabar, troca o slide
    setTimeout(() => {
      container.innerHTML = '';
      container.appendChild(criarSlideHTML(slides[proximoIndex]));
      slideAtual = proximoIndex;
    }, 1050); // tempo = duração da animação + margem
  }

  // Inicia com o primeiro slide
  container.appendChild(criarSlideHTML(slides[slideAtual]));

  // Troca a cada 5 segundos
  setInterval(trocarSlide, 5000);
