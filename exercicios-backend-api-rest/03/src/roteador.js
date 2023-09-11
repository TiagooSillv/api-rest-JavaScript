const express = require('express');
const {listarLivros,selecionarLivro,adicionarLivro,substituirLivro,alterarLivro,deletarLivro} = require('./controladores/biblioteca');
const roteador = express();




roteador.get('/livros',listarLivros)
roteador.get('/livros/:id',selecionarLivro)
roteador.post('/livros',adicionarLivro)
roteador.put('/livros',substituirLivro)
roteador.patch('/livros/:id',alterarLivro)
roteador.delete('/livros/:id',deletarLivro)


module.exports = roteador;