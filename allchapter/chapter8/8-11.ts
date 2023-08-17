class CommercialBank {
  public address: string = "beijing";
  public name: string = "wangwu";
  static count: number;
  constructor(name: string, address: string) {
    this.address = address;
    this.name = name;
  }
  loan() {
    console.log(this.name + "贷款");
  }
}

interface ConstructorInter {
  new (...args: any): any;
}

function createFactoryConstructor(
  constructorType: new (...args: any) => CommercialBank
) {
  console.log("被创建");
  new constructorType();
}

createFactoryConstructor(CommercialBank);

export {};
