// never数据类型是为了写出绝对安全的代码，DataFlow未来可能增加数据类型

type DataFlow = string | number;
function dataFlowAnaly(dataFlow: DataFlow) {
  if (typeof dataFlow === "string") {
    console.log("字符串类型", dataFlow.length);
  } else if (typeof dataFlow === "number") {
    console.log("数值类型", dataFlow.toFixed(2));
  } else {
    console.log(dataFlow);
  }
}
