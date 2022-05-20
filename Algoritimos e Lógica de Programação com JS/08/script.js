/*
  Crie uma lista de pacientes

  Cada paciente deerá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos.
*/

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180
  }
]

/*
let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name)
}
alert(patientsNames)
*/

let patientsNames = []
let patientsAges = []
let patientsWeight = []
let patientsHeight = []

for (let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(`
  O paciente ${patientsNames}, tem ${patientsAges} anos, pesa ${patientsWeight} kg e tem ${patientsWeight} de altura.
`)
