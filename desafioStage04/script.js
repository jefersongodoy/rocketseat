/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: 'Chaves',
    firstNote: 7,
    secondNote: 8
  },
  {
    name: 'Kiko',
    firstNote: 4,
    secondNote: 3
  },
  {
    name: 'Chiquinha',
    firstNote: 9,
    secondNote: 8
  }
]

function averages(firstNote, secondNote) {
  return (Number(firstNote) + Number(secondNote)) / 2
}

const showStudent = student => {
  if ((student.firstNote + student.secondNote) / 2 >= 7) {
    alert(
      `O(A) aluno(a) ${student.name} teve a média: ${averages(
        student.firstNote,
        student.secondNote
      )}
      Parabéns ${student.name}!!! Você foi aprovado(a) no concurso!!!
      `
    )
  } else {
    alert(
      `O(A) aluno(a) ${student.name} teve a média: ${averages(
        student.firstNote,
        student.secondNote
      )}
      Não foi dessa vez, ${student.name}. Tente novamente.
      `
    )
  }
}

for (let student of students) {
  showStudent(student)
}
