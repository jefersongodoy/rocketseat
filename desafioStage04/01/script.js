/*
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let n1 = prompt('Digite o primeiro número')
n1 = Number(n1)

let n2 = prompt('Digite o segundo número')
n2 = Number(n2)

let sum = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = (n1 / n2).toFixed(2)
let res = n1 % n2

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${res}`)

if (res % 2 === 0) {
  alert(`A soma dos dois números é PAR`)
} else {
  alert(`A soma dos dois números é IMPAR`)
}

if (n1 === n2) {
  alert(`Os dois números são IGUAIS`)
} else {
  alert(`Os dois números são DIFERENTES`)
}
