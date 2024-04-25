/*
OPERADOR TERNARIO
CONDIÇÃO ? VALOR PARA VERDADEIRO : VALOR PARA FALSO
*/

const pontuacaoUsuario = 19;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário NORMAL'; //CONDIÇÃO ? VALOR PARA VERDADEIRO : VALOR PARA FALSO
//console.log(nivelUsuario);

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário NORMAL');
}