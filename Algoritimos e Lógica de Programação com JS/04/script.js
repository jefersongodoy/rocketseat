/*
  Solicitar o nome do aluno e as 3 notas
  do bimenstre e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6 

  Se o aluno passou no bimestre, dar os parabéns.

  Se o alino não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em amobs os casos, mostre uma mensagem com o
  nome do aluno e a nota
*/
let yourName = prompt('Digite seu nome:')
let firstNote = prompt('Digite a primera nota:')
let secondNote = prompt('Digiete a segunda nota:')
let thirdNote = prompt('Digite a terceira nota:')

let average = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3

/*let result = average > 6*/

average = average.toFixed(2)

if (average > 6) {
  alert(
    yourName +
      ', você está de PARABÉNS, sua média é ' +
      average +
      ', passou de ano!!!!'
  )
} else {
  alert(
    yourName +
      ', você pode melhorar, sua média é ' +
      average +
      ', continue estudando!'
  )
}
