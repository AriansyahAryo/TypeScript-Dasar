//Ini adalah Variable
var namasaya = 'Aryo Prasetio';
// buata function dengan return
function getNama() {
    return namasaya;
}
//ini function yg no return
function getNoReturn() {
    console.log('function void');
}
console.log(getNama());
getNoReturn();
//function biasa
function getData(param1) {
    if (param1 === void 0) { param1 = 'default value param1'; }
    console.log(param1);
}
getData('ini bukan default param');
//ini anonymous function
var f = function () {
    return namasaya;
};
var fVoid = function () {
    console.log('function void');
};
console.log(f());
fVoid();
