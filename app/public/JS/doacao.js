 const botoes = document.querySelectorAll('.btn');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // Remove a classe "ativo" de todos os botões
      botoes.forEach(b => b.classList.remove('ativo'));

      // Adiciona a classe "ativo" ao botão clicado
      botao.classList.add('ativo');
    });
  });