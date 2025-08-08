function validarTelefone(telefone) {
  // Remove todos os caracteres que não forem números
  const numero = telefone.replace(/\D/g, '');
  
  // Regra 1: deve ter 10 ou 11 dígitos
  if (numero.length !== 10 && numero.length !== 11) {
    return { valido: false, mensagem: 'O número deve ter 10 ou 11 dígitos.' };
  }

  // Regra 2: DDD entre 11 e 99
  const ddd = parseInt(numero.substring(0, 2));
  if (ddd < 11 || ddd > 99) {
    return { valido: false, mensagem: 'DDD inválido.' };
  }

  // Regra 3: se for celular (11 dígitos), deve começar com 9
  if (numero.length === 11 && numero[2] !== '9') {
    return { valido: false, mensagem: 'Número de celular deve começar com 9.' };
  }

  return { valido: true, mensagem: 'Telefone válido!' };
}

function validarDoacao(doacao){
  const number = doacao
  if(number < 10){
    return {valido: true, message: 'Valor mínimo para doação: R$10,00.'}
  }else{
    return true
  }
}

module.exports = { validarTelefone, validarDoacao };