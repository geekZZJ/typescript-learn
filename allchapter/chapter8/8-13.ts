type O1 = { a: string; b: number };
type O2 = { c: number; d: string };

function cross<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  const combine = {} as T & U;
  union(combine, obj1);
  union(combine, obj2);
  return combine;
}

function union(combine: any, curObj: any) {
  for (let k in curObj) combine[k] = curObj[k];
}

const o1: O1 = { a: "ab", b: 333 };
const o2: O2 = { c: 1, d: "dfd" };
console.log(cross(o1, o2));

export {};
