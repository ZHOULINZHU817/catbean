//已预约
let appointmentTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "预约时间",
    fieldChName: "预约时间",
    fieldEnName: "createTime",
    fieldNo: "createTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢中次数",
    fieldChName: "抢中次数",
    fieldEnName: "buyNum",
    fieldNo: "buyNum",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "预约次数",
    fieldChName: "预约次数",
    fieldEnName: "cnt",
    fieldNo: "cnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "预约人姓名",
    fieldChName: "预约人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "联系方式",
    fieldChName: "联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  },
]
//抢购中
// 订单号、场次 、抢单时间、价格、抢购人联系方式、抢购人姓名、流拍次数、违约次数
let specialOfferTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },

  {
    fieldName: "价格",
    fieldChName: "价格",
    fieldEnName: "price",
    fieldNo: "price",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢单时间",
    fieldChName: "抢单时间",
    fieldEnName: "actBuyTime",
    fieldNo: "actBuyTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "抢购人姓名",
    fieldChName: "抢购人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢购人联系方式",
    fieldChName: "抢购人联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人姓名",
    fieldChName: "转卖人姓名",
    fieldEnName: "buyMemberName",
    fieldNo: "buyMemberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人联系方式",
    fieldChName: "转卖人联系方式",
    fieldEnName: "buyMemberPhone",
    fieldNo: "buyMemberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约次数",
    fieldChName: "违约次数",
    fieldEnName: "breachCnt",
    fieldNo: "breachCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "流拍次数",
    fieldChName: "流拍次数",
    fieldEnName: "missCnt",
    fieldNo: "missCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  }
]

//已支付
let paidTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },

  {
    fieldName: "价格",
    fieldChName: "价格",
    fieldEnName: "price",
    fieldNo: "price",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢单时间",
    fieldChName: "抢单时间",
    fieldEnName: "actBuyTime",
    fieldNo: "actBuyTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "抢购人姓名",
    fieldChName: "抢购人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢购人联系方式",
    fieldChName: "抢购人联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人姓名",
    fieldChName: "转卖人姓名",
    fieldEnName: "buyMemberName",
    fieldNo: "buyMemberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人联系方式",
    fieldChName: "转卖人联系方式",
    fieldEnName: "buyMemberPhone",
    fieldNo: "buyMemberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约次数",
    fieldChName: "违约次数",
    fieldEnName: "breachCnt",
    fieldNo: "breachCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "流拍次数",
    fieldChName: "流拍次数",
    fieldEnName: "missCnt",
    fieldNo: "missCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  }
]
//转卖中
let resaleTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },

  {
    fieldName: "价格",
    fieldChName: "价格",
    fieldEnName: "price",
    fieldNo: "price",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢单时间",
    fieldChName: "抢单时间",
    fieldEnName: "actBuyTime",
    fieldNo: "actBuyTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "抢购人姓名",
    fieldChName: "抢购人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢购人联系方式",
    fieldChName: "抢购人联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约次数",
    fieldChName: "违约次数",
    fieldEnName: "breachCnt",
    fieldNo: "breachCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "流拍次数",
    fieldChName: "流拍次数",
    fieldEnName: "missCnt",
    fieldNo: "missCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人手机",
    fieldChName: "转卖人手机",
    fieldEnName: "buyMemberPhone",
    fieldNo: "buyMemberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人姓名",
    fieldChName: "转卖人姓名",
    fieldEnName: "buyMemberName",
    fieldNo: "buyMemberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖时间",
    fieldChName: "转卖时间",
    fieldEnName: "actSaleTime",
    fieldNo: "actSaleTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  },
]

//已违约
let breakPromiseTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },

  {
    fieldName: "价格",
    fieldChName: "价格",
    fieldEnName: "price",
    fieldNo: "price",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢单时间",
    fieldChName: "抢单时间",
    fieldEnName: "actBuyTime",
    fieldNo: "actBuyTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "抢购人姓名",
    fieldChName: "抢购人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢购人联系方式",
    fieldChName: "抢购人联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约次数",
    fieldChName: "违约次数",
    fieldEnName: "breachCnt",
    fieldNo: "breachCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "流拍次数",
    fieldChName: "流拍次数",
    fieldEnName: "missCnt",
    fieldNo: "missCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人手机",
    fieldChName: "转卖人手机",
    fieldEnName: "buyMemberPhone",
    fieldNo: "buyMemberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人姓名",
    fieldChName: "转卖人姓名",
    fieldEnName: "buyMemberName",
    fieldNo: "buyMemberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约时间",
    fieldChName: "违约时间",
    fieldEnName: "actBreachTime",
    fieldNo: "actBreachTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  },

]

//已完成
let finishTabHead = [
  {
    fieldName: "订单编号",
    fieldChName: "订单编号",
    fieldEnName: "id",
    fieldNo: "id",
    fieldType: "input",
    width: 160,
  },
  {
    fieldName: "场次",
    fieldChName: "场次",
    fieldEnName: "type",
    fieldNo: "type",
    fieldType: "input",
    width: 120,
  },

  {
    fieldName: "价格",
    fieldChName: "价格",
    fieldEnName: "price",
    fieldNo: "price",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢单时间",
    fieldChName: "抢单时间",
    fieldEnName: "actBuyTime",
    fieldNo: "actBuyTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "抢购人姓名",
    fieldChName: "抢购人姓名",
    fieldEnName: "memberName",
    fieldNo: "memberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "抢购人联系方式",
    fieldChName: "抢购人联系方式",
    fieldEnName: "memberPhone",
    fieldNo: "memberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "违约次数",
    fieldChName: "违约次数",
    fieldEnName: "breachCnt",
    fieldNo: "breachCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "流拍次数",
    fieldChName: "流拍次数",
    fieldEnName: "missCnt",
    fieldNo: "missCnt",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人手机",
    fieldChName: "转卖人手机",
    fieldEnName: "buyMemberPhone",
    fieldNo: "buyMemberPhone",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "转卖人姓名",
    fieldChName: "转卖人姓名",
    fieldEnName: "buyMemberName",
    fieldNo: "buyMemberName",
    fieldType: "input",
    width: 120,
  },
  {
    fieldName: "完成时间",
    fieldChName: "完成时间",
    fieldEnName: "actFinishTime",
    fieldNo: "actFinishTime",
    fieldType: "input",
    width: 140,
  },
  {
    fieldName: "状态",
    fieldChName: "状态",
    fieldEnName: "state",
    fieldNo: "state",
    fieldType: "input",
    width: 120,
  },

]

export { appointmentTabHead, specialOfferTabHead, paidTabHead, resaleTabHead, breakPromiseTabHead, finishTabHead };