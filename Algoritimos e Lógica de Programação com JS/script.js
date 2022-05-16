/*
Capture 10 items para compor a lista de um supermercado.
Após capturar os 10 items, imprima-os, separando
por vírgula.
*/

let itemName

for (let item = 0; item < 10; item++) {
  itemName = prompt('Digite o item ' + (item + 1))
}

alert(itemName)
