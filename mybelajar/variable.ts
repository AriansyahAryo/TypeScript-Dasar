//Ini adalah Variable
let namasaya: string = 'Aryo Prasetio';

// buata function dengan return
function getNama(): string {
  return namasaya;
}

//ini function yg no return
function getNoReturn(): void {
  console.log('function void');
}
console.log(getNama());
getNoReturn();

//function biasa
function getData(param1: string = 'default value param1'): void {
  console.log(param1);
}

getData('ini bukan default param');

//ini anonymous function
let f = function (): string {
  return namasaya;
};

let fVoid = function (): void {
  console.log('function void');
};
console.log(f());
fVoid();
