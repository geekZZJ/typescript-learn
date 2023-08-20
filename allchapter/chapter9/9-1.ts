interface Custom {
  cusName: string;
  buyMoney: number;
}

type CusFn = (params: Customer) => string;
// type CustomParamsType = CusFn extends (params: infer P) => any ? P : CusFn;

type ParamsType<T> = T extends (params: any) => infer P ? P : never;
type CustomParamsType = ParamsType<CusFn>;

type EleOfArr<T> = T extends Array<infer P> ? P : never;
type EleOfArrTest = EleOfArr<Array<string>>;

export {};
