class BankPay {}
class MobilePay {}

// 自定义守卫
function isMobilePay(payMethod: any): payMethod is MobilePay {
  return payMethod instanceof MobilePay;
}
