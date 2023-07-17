type TypStuObj = { username: string; age: number; phone: string };

function info({ username, age }: TypStuObj) {
  console.log("username", username);
  console.log("age", age);
}

export {};
