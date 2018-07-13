var Currency = require('./currency');
var canadaianDollar = 0.91;
var currency  = new Currency(canadaianDollar);

// console.log(currency(50));
console.log(currency.canadianToUS(50));