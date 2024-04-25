/*
IF pode ser usado sozinho
ELSE sempre é usado com o IF
posso ter VÁRIOS ELSE IF na checagem
só posso ter UM ELSE na checagem
podemos usar condições sem ELSE IF, apenas com IF ELSE
 */

const hora = 110;

if (hora >= 0 && hora <= 11) {
  console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa Noite!');
} else {
  console.log('Olá!');
}