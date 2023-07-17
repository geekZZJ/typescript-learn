// 交叉类型
type Obj1 = { username: string };
type Obj2 = { age: number };
const obj1: Obj1 = { username: "abc" };
const obj2: Obj2 = { age: 23 };

const obj3: Obj1 & Obj2 = { username: "zz", age: 23 };

// 字面量数据类型
type num = 1 | 2 | 3;

const n: num = 3;

// type A = number | string;
// const a: A = "aaa";
// type num = number;
// const n: num = 3;
