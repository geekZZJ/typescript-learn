// 元组
const salary: [string, number, number] = ["测试", 300, 300];

// --------------------------------

const account = [10, 40, 50, 60] as const;

// account[0] = 200;  as const 约束数组只读
