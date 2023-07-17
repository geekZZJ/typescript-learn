// function info(name: string, age: number): number {
//   console.log("info  age:", age);
//   console.log("info  name:", name);
//   return 3;
// }

// const info = function (name: string, age: number): number {
//   console.log("info  age:", age);
//   console.log("info  name:", name);
//   return 3;
// };

// const info: (name: string, age: number) => number = function (name, age) {
//   console.log("info  age:", age);
//   console.log("info  name:", name);
//   return 3;
// };

// type typeInfoFn = (name: string, age: number) => number;
// const info: typeInfoFn = function (name, age) {
//   console.log("info  age:", age);
//   console.log("info  name:", name);
//   return 3;
// };

// rest参数
function info(name: string, age: number, ...rest: any): number {
  console.log("info  age:", age);
  console.log("info  name:", name);
  return 3;
}

export { info };
