 const botoes = document.querySelectorAll('.btn');
 const campoValor = document.getElementById('valorSelecionado');
 const inputManual = document.getElementById('inputManual');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {

      botoes.forEach(b => b.classList.remove('ativo'));

      botao.classList.add('ativo');

      campoValor.value = botao.dataset.valor;

      
      console.log('Valor selecionado:', campoValor.value);
      
      
      
    });
  });
  
  inputManual.addEventListener('input', () => {

    botoes.forEach(b => b.classList.remove('ativo'));

    campoValor.value = inputManual.value;

    console.log('Valor manual:', campoValor.value);
  });

  inputManual.value = '';