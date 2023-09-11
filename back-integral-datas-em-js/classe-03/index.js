const { formatDistance, subDays } = require('date-fns') 
// const aberto = ((new Date(2015,1,1,12)))
const aberto = (new Date(2015,1,1,2));

if (aberto.getHours() > 18 || aberto.getHours() < 8) {
    console.log(false);
}else{
    console.log(true);
}



