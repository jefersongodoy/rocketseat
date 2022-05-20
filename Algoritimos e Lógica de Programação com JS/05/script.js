/*
Capture 10 items para compor a lista de um supermercado.
Após capturar os 10 items, imprima-os, separando
por vírgula.
*/

let cars = []

for (let i = 0; i < 10; i++) {
  let carName = prompt('Digite o nome do seu carro ' + (i + 1) + ' : ')

  cars[i] = carName
}

alert('Seus carros favoritos são: ' + cars)
