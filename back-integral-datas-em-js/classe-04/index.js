const { formatDistance, subDays } = require('date-fns') 
// const aberto = ((new Date(2015,1,1,12)))
const aberto = (new Date(2021,3,26,7,59));

if (aberto.getHours() > 18 || aberto.getHours() < 8) {
    console.log(false);
}else{
    if (aberto.getDay() >=1 && aberto.getDay() <= 5 ) {
        console.log(true);
    }else{
        console.log(false);
    }
}
console.log(aberto.getDay());