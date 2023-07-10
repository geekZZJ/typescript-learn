class People {
  name: string;
  age: number;
  addr: string;
  static count = 0;
  constructor(name: string, age: number, addr: string) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    People.count++;
  }

  doEat() {}
}

const p = new People("test", 55, "test");
console.log(People.count);

export {};
