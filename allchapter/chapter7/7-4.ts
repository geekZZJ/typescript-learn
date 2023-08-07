class ArrayList<T = any> {
  arr: Array<T>;
  index: number = 0;
  constructor() {
    this.arr = [];
  }
  add(ele: T) {
    this.arr[this.index++] = ele;
  }
  get(index: number) {
    return this.arr[index];
  }
}

const arr = new ArrayList();
arr.add("11");

export {};
