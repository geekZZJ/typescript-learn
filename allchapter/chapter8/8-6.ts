import { quickSort } from "./8-4";
import { isChinese, sortChinese } from "./8-5";
const chineseArr = ["武汉", "石家庄", "郑州", "太原", "济南", "沈阳", "大连"];

function strSelfSort(str: string) {
  const strArr = str.split("");
  const strSortArr = quickSort(strArr);
  return strSortArr.join("");
}

function sort<T>(data: T): Array<any> | string | undefined {
  if (Array.isArray(data)) {
    if (isChinese(data)) {
      return sortChinese(data);
    } else {
      return quickSort(data);
    }
  } else if (typeof data === "string") {
    return strSelfSort(data);
  }
  return undefined;
}

// console.log(strSelfSort("xdnlegt"));
console.log(sort("gfdsgv"));

export {};
