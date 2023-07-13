import test from "./test.json";
import { info } from "@/chapter2/2-20";
const set = new Set<string>();
console.log(test);
console.log("111");

interface Test {
  name: string;
}

let str: any = undefined;

class People {
  name: string;
}

function Fn(num: number) {
  if (num > 100) {
    return 10;
  } else {
    return 1;
  }
}

export type { Test };
export {};
