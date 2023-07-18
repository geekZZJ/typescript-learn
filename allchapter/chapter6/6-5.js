class Customer {
  custname;
  buy() {}
}

console.log(Object.prototype.toString.call(Customer));
const cust = new Customer();
console.log(Object.prototype.toString.call(cust));
