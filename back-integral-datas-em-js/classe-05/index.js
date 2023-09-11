const { formatDistance, subDays } = require('date-fns') 
// const aberto = ((new Date(2015,1,1,12)))
const aberto = (new Date(2021,3,24,9,30));

if (aberto.getHours() > 18 || aberto.getHours() < 8) {
    console.log(false);
}else{
    if (aberto.getDay() >=1 && aberto.getDay() <= 6 ) {
        if (aberto.getDay() == 6) {
            const hoarioAbrirSabado = 8;
            const hoarioFecharSabado = 12;
            if (aberto.getHours() > hoarioFecharSabado || aberto.getHours() < hoarioAbrirSabado) {
                console.log('Dia de sabado so funcionamos das 8 as 12');
            }else{
                console.log('aberto apreveite hoje e sabado');
            }

        }else{
            console.log('Esta aberto seja bem vindo');
        }
    }else{
        console.log('hoje é domingo estamos fechados');
    }
}
