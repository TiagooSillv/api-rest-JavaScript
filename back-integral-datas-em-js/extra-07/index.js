var addDays = require('date-fns/addDays');
var isAfter = require('date-fns/isAfter');
var isBefore = require('date-fns/isBefore');

const inicioPromocao = new Date()
const fimDapromocao = addDays(inicioPromocao,30);
const diaDaCompra = addDays (new Date (),15)

const verificadorDaPromocao = isAfter(diaDaCompra, fimDapromocao);
if (verificadorDaPromocao) {
    console.log("Dormiu no ponto papai a promo acabou");
}else{
    console.log("Aproveita ainda está na promoção");
}