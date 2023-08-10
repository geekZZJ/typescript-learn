function fetchData(): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}

// 使用自定义守卫来检查 fetchResult 是否为 Promise 类型
const fetchResult = fetchData();
if (isPromise(fetchResult)) {
  fetchResult.then((data) => {
    // 在这里可以安全地访问 data
  });
}
