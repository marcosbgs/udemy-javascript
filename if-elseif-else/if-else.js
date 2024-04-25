let num1 = parseFloat(prompt('Digite um número: '));
let num2 = parseFloat(prompt('Digite outro número: '));
let media = (num1 + num2) / 2;

if (media > 4) {
    alert(`Parabéns, você foi aprovado. Sua média é ${media}`);
} else {
    alert(`Desculpe, você não foi aprovado. Sua média foi ${media}`);
}