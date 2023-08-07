class Order {
  orderId: boolean;
  orderName: string;
  static count: number;
  printOrd() {}
  static getCount() {}
}

type OrdInstanceKeys = keyof Order;

type InstanceKeys<T extends object> = keyof T;
type OrdInstancePropKeys = InstanceKeys<Order>;
