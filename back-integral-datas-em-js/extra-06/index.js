var addHours = require('date-fns/addHours')
var isAfter = require('date-fns/isAfter')
var isBefore  = require('date-fns/isBefore')

const inicioPromocao = new Date (2023,8,10,10,40);
const clienteSolicitou = new Date (2023,8,10,10,35);

const fimDaPromocao = addHours(inicioPromocao, 24);

const verificadorDeFim = isAfter (clienteSolicitou , fimDaPromocao);
const verificadorDeInicio = isBefore  (clienteSolicitou , inicioPromocao);

if (verificadorDeFim) {
    console.log('Fim da promoção');
}else{
    if (verificadorDeInicio) {
        console.log('A promoção ainda não começou');
    }else{
        console.log('Aproveita papai');
    }
}

