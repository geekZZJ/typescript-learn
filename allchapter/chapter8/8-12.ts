type O1 = { a: string; b: number };
type O2 = { c: number; d: string };
type O3 = O1 & O2;

const o3: O3 = { a: "ab", b: 1, c: 12, d: "333" };

type S = string[] & string;
type S2 = string & number;

export {};
