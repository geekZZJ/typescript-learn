const people: [string, number, string] = ["王者", 23, "45"];

// 可变元组
const customers: [string, number, string, ...any[]] = [
  "测试",
  23,
  "你好",
  123,
  "TEST",
];

// 可变元组
const [name, age, ...rest]: [string, number, string, ...any[]] = [
  "测试",
  23,
  "你好",
  123,
  "TEST",
];
console.log(rest);

export {};
