const express = require('express');
const {validarCurso} = require('./intermediarios')
const {visualizarDados, obterDados, adicionarAluno, deletarAluno} = require('./controladores/controleDeAluno')



const roteador = express();

roteador.get('/',visualizarDados)

roteador.get('/:id', obterDados)

roteador.delete('/:id',deletarAluno)

roteador.use(validarCurso)

roteador.post('/', adicionarAluno)


module.exports = roteador