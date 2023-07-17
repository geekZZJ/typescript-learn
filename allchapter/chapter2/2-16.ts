const symid = Symbol("productNo");

interface Product {
  [symid]: number;
  name: string;
  price: number;
  account: number;
  buy(): void;
}

type A = Product["name"];
type B = Product["name" | "price"];
type S = Product[typeof symid];

type PKeys = keyof Product;
const pKey: PKeys = "buy";

export {};
