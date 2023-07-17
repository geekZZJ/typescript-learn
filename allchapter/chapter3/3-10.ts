// 单例模式1
class DateUtil {
  static dateUtil = new DateUtil();
  private constructor() {}

  formatDate() {}
  diffDateByDay() {
    console.log("diffDateByDay");
  }
  diffDateByHour() {}
  timeConversion(restTime: number) {}
}

const dateUtil = DateUtil.dateUtil;
dateUtil.diffDateByDay();

// 单例模式2
class DateUtil2 {
  static dateUtil: DateUtil2;
  static getInstance() {
    if (!this.dateUtil) {
      this.dateUtil = new DateUtil2();
    }
    return this.dateUtil;
  }
  private constructor() {
    console.log("创建对象");
  }

  formatDate() {}
  diffDateByDay() {
    console.log("diffDateByDay");
  }
  diffDateByHour() {}
  timeConversion(restTime: number) {}
}

const dateUtil2 = DateUtil2.getInstance();
const dateUtil3 = DateUtil2.getInstance();
console.log(dateUtil2 === dateUtil3);

export {};
