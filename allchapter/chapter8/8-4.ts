export function quickSort<T>(arr: Array<T>): Array<T> {
  if (arr.length < 2) {
    return arr;
  }
  var left: Array<any> = [];
  var right: Array<any> = [];
  var mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}
// const chineseArr = [3, 1, 8.3555, 9, 20, 15, 2, 7, 13, 11, 19, 18, 5, 6, 17, 4];
// const result = quickSort(chineseArr);
// result.forEach((item) => {
//   item.toFixed(2);
// });
// const strArr = ["bad", "abc", "zxy", "kkk", "cdf"];
// const strResult = quickSort(strArr);
// strResult.forEach((item) => {
//   console.log(item);
// });
export {};
