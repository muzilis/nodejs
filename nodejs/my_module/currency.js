var canadaianDollar = 0.91;
// function roundTwoDecimals(amount) {
// 	return Math.round(amount*100);
// }
// exports.canadianToUS = function(canadian){
// 	return roundTwoDecimals(canadian*canadaianDollar);
// }
// exports.USToCanadian = function(us){
// 	return roundTwoDecimals(us/canadaianDollar);
// }
var Currency = function(canadaianDollar){
	this.canadaianDollar = canadaianDollar;
	
}
Currency.prototype.roundTwoDecimals = function(amount){
	return Math.round(amount*100);
}
Currency.prototype.canadianToUS = function(canadian){
	return this.roundTwoDecimals(canadian*this.canadaianDollar);
}
Currency.prototype.USToCanadian = function(us){
	return this.roundTwoDecimals(us/this.canadaianDollar);
}
	module.exports = Currency;