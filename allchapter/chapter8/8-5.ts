import { quickSort } from "./8-4";
const chineseArr = ["武汉", "石家庄", "郑州", "太原", "济南", "沈阳", "大连"];

function sortChinese(arr: Array<string>): Array<string> {
  return arr.sort(function (preStr, curStr) {
    return preStr.localeCompare(curStr, "zh-CN");
  });
}

console.log(sortChinese(chineseArr));

// 判断是否是中文
const pattern = /[\u4e00-\u9fa5]+/g;
function isChinese(arr: Array<string>): boolean {
  return chineseArr.some(function (item) {
    return pattern.test(item);
  });
}

export {};
