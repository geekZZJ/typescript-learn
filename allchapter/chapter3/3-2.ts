type ResolveType = (resolve_success: any) => any;
type RejectType = (reject_fail: any) => any;
class Promise1 {
  public resolveFn: ResolveType;
  public rejectFn: RejectType;
  constructor(
    promiseParams: (resolve: ResolveType, reject: RejectType) => any
  ) {
    this.resolveFn = (resolve_success: any): any => {
      console.log(resolve_success);
    };
    this.rejectFn = (reject_fail: any): any => {
      console.log(reject_fail);
    };
    promiseParams(this.resolveFn, this.rejectFn);
  }
}

new Promise1((resolve: ResolveType, reject: RejectType): any => {
  resolve("成功啦");
});

export {};
