const express = require('express');

const {convidados,adicionarConvidado, deletarConvidado} = require('./controladores/convidados')

const roteador = express();

roteador.get('/convidados',convidados);
roteador.post('/convidados',adicionarConvidado);
roteador.delete('/convidados',deletarConvidado);


module.exports = roteador;