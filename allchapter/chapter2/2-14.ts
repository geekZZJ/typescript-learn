interface Product {
  name: string;
  price: number;
  account: number;
  // 可索引签名
  [x: string]: any;
}

const p: Product = {
  name: "phone",
  price: 100,
  account: 10,
  desc: "测试测试",
};

interface Pet {
  name: string;
  love: number;
  health: number;
  toHealth(): void;
}

interface Dog extends Pet {
  strain: string;
  guardHome(): void;
}

interface List {
  add(): void;
  remove(): void;
}

class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}

export {};
