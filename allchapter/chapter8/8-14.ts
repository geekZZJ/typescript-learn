// 当要交叉的对象个数很多，不确定时，比如要把 很多对象合并交叉【比如:用户，角色，权限，菜单，审批，部门，日志对象合并】那该如何做呢
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
function combine<T extends object[]>(
  ...unionObj: T
): UnionToIntersection<T[number]>;
function combine<T extends object[]>(...unionObj: T) {
  return unionObj.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
const crossResult2 = combine(
  { count: 2, price: 4, name: { ownName: "kate" } },
  { price: 2 },
  { address: "beijing" }
);
crossResult2.address; //success crossResult2.count//success
