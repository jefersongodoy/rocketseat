/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

  ---

  O progama deverá capturar o número digitado pelo usuário e mostrar o seguinte cenário:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encrrada.
*/

/*
Dados de etrada do usuário
1. número desejado
2. item da lista

Variáveis
1. opção de digitada
2. lista de itens
*/

let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`
      Olá usuário! Digite da opção desejada
  
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa
  `)
  )

  switch (option) {
    case 1:
      //sequência aqui
      let item = prompt('Digite o nome do item')
      items.push(item)
      break
    case 2:
      //sequência 2
      if (items.length == 0) {
        alert('Não existem itens cadastrados')
      } else {
        alert(items)
      }
      break
    case 3:
      alert('Tchau')
      break
    default:
      //caminho padrão quando não é um dos asos acima
      alert('Opção inválida. Tente novamente')
  }
}
