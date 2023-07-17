class People {
  name: string;
  age: number;
  addr: string;
  constructor(name: string, age: number, addr: string) {
    this.name = name;
    this.addr = addr;
    this.age = age;
  }
  doEat(who: string, where: string) {
    console.log(`who:${who},where:${where}`);
  }
}

const dataProp = Object.getOwnPropertyDescriptor(People.prototype, "doEat");
const targetMethod = dataProp!.value;
dataProp!.value = function (...args: any[]) {
  console.log("前置拦截");
  targetMethod.apply(this, args);
  console.log("后置拦截");
};

Object.defineProperty(People.prototype, "doEat", dataProp!);

const p = new People("test", 23, "aaa");
p.doEat("333", "4444");

export {};
