// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = 'Domingo';
//     break; //o código irá rodar até o JS encontrar um BREAK
//   case 1:
//     diaSemanaTexto = 'Segunda Feira';
//     break;
//   case 2:
//     diaSemanaTexto = 'Terça Feira';
//     break;
//   case 3:
//     diaSemanaTexto = 'Quarta Feira';
//     break;
//   case 4:
//     diaSemanaTexto = 'Quinta Feira';
//     break;
//   case 5:
//     diaSemanaTexto = 'Sexta Feira';
//     break;
//   case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
// }

// if(diaSemana === 0) {
//   diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//   diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//   diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//   diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//   diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//   diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//   diaSemanaTexto = 'Sábado';
// } else {
//   diaSemanaTexto = '';
// }

function getDiaSemanaTexto (diaSemana) {
  let diaSemanaTexto

  switch(diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda Feira';
      return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça Feira';
        return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta Feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta Feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta Feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto
  }
}

const data = new Date('1994-08-19 17:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemanaTexto);