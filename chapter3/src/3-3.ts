// interface 和 type 区别
// 1. 定义类型范围不同
// interface 只能定义对象类型或借口当名字的函数类型
// type 可以定义任何类型，包括基础类型、联合类型，交叉类型，元组

// 2. 接口可以 extends 一个或多个接口。类实现一个或者多个接口，接口也可以继承 type，但 type 类型没有继承功能
// 但一般接口继承类 和 type 的应用场景很少见

// 3. 用type 交叉类型 ＆ 可让类型中的成员合并成一个新的 type 类型，但接口不能交叉合并

// 4. 接口可合并声明 定义两个相同名称的接口会合并声明，定义两个同名的type会出现编译错误