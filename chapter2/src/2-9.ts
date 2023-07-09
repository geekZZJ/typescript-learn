enum Status {
  MANAGER_AUDIT_FAIL = -1,
  No_AUDIT = 0,
  MANAGER_AUDIT_SUCCESS = 1,
  FINAL_AUDIT_SUCCESS = 2,
}

class MyAudit {
  getAuditStatus(status: Status): void {
    if (status === Status.No_AUDIT) {
      console.log("没有审核");
    } else if (status === Status.MANAGER_AUDIT_SUCCESS) {
      console.log("经理审核通过");
    } else if (status === Status.FINAL_AUDIT_SUCCESS) {
      console.log("财务审核通过");
    }
  }
}

const audit = new MyAudit();
audit.getAuditStatus(Status.No_AUDIT);

export {};
