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

export {};
