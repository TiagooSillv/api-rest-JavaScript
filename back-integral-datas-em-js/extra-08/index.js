const { format }= require('date-fns');

const date = new Date();

console.log(format(date, "dd/MMM/yyyy"));
console.log(format(date, "dd MMM"));
console.log(format(date, "dd MMM yyyy"));
console.log(format(date, "dd 'de' MMM 'de' yyyy"));
console.log(format(date, "dd/MMM"));
