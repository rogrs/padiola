const express = require('express') //importacao do pacote
const app = express() //instanciando express
const PORT = process.env.PORT || 3000


const alunos = [
  {
    nome: 'Aluno1',
    idade: 12
  },
  {
    nome: 'Aluno2',
    idade: 13
  },
  {
    nome: 'Aluno3',
    idade: 14
  },
  {
    nome: 'Aluno4',
    idade: 15
  }
]

app.get('/', (req, res) => res.send(alunos))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
