class People {
  name: string;
  _age!: number;
  addr: string;
  constructor(name: string, addr: string) {
    this.name = name;
    this.addr = addr;
  }
  set age(val: number) {
    if (val > 10 && val < 128) {
      this._age = val;
    } else {
      throw new Error("年龄不合适");
    }
  }
  get age() {
    return this._age;
  }
  doEat() {}
}

export {};
