interface Ref<T> {
  value: T;
}

const ref: Ref<string> = {
  value: "23",
};

type Student = { name: string; age: number };
const ref2: Ref<Student> = {
  value: {
    name: "11",
    age: 22,
  },
};

export {};
