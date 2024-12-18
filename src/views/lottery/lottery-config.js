import { cardList, colCount, rowCount } from './lottery-config-users.js';

const lotteryConfig = {
  prizeList: [
    {
      count: 8, // 总数量
      countRemain: 8,
      everyTimeGet: 4,
      name: "特等奖",
      detail: "特等奖商品",
      // img: "",
      id: 0,
      cardListWin: [],
      round: 0
    },
    {
      count: 20,
      countRemain: 20,
      everyTimeGet: 10,
      name: "一等奖",
      detail: "一等奖商品",
      id: 1,
      cardListWin: [],
      round: 0
    },
    {
      count: 45,
      countRemain: 45,
      everyTimeGet: 15,
      name: "二等奖",
      detail: "二等奖商品",
      id: 2,
      cardListWin: [],
      round: 0
    },
    {
      count: 75,
      countRemain: 75,
      everyTimeGet: 25,
      name: "三等奖",
      detail: "三等奖商品",
      id: 3,
      cardListWin: [],
      round: 0
    },
    {
      count: 100,
      countRemain: 100,
      everyTimeGet: 1,
      name: "补抽",
      detail: "补抽商品",
      id: 4,
      cardListWin: [],
      round: 0
    },
    {
      count: 10,
      countRemain: 10,
      everyTimeGet: 1,
      name: "游戏",
      detail: "游戏商品",
      id: 5,
      cardListWin: [],
      round: 0
    }
  ], // 奖品列表
  headerTitle: null,//'北京邮电大学第七届信息科技国际青年学者传邮论坛',
  currentPrize: null, // 当前抽奖的奖品
  colCount, rowCount, // table模式下行列数
  cardList, // 所有卡片的数据
  cardListWinAll: [], // 已经中奖的卡片
  cardListRemainAll: cardList, // 剩余未中奖的卡片
};
lotteryConfig.getCurrentPrize = (prizeId = lotteryConfig.currentPrize) => {
  return lotteryConfig.prizeList.find(_ => {
    return _.id === prizeId;
  });
};
lotteryConfig.getUserById = (id) => {
  return cardList.find(_ => _.id === id);
}

let isInit = false;
const localStorageKey = '___lottery___';
lotteryConfig.setLocalStorage = () => {
  const _lotteryConfig = lotteryConfig;
  _lotteryConfig.headerTitle = lotteryConfig.headerTitle;
  _lotteryConfig.currentPrize = lotteryConfig.currentPrize;
  _lotteryConfig.prizeList = lotteryConfig.prizeList;
  _lotteryConfig.cardListWinAll = lotteryConfig.cardListWinAll;
  _lotteryConfig.cardListRemainAll = lotteryConfig.cardListRemainAll;
  localStorage.setItem(localStorageKey, JSON.stringify(_lotteryConfig));
}
lotteryConfig.getLocalStorage = () => {
  if (isInit !== false) {
    return void 0;
  }
  isInit = true;
  const _lotteryConfigString = localStorage.getItem(localStorageKey);
  if (!_lotteryConfigString) {
    return void 0;
  }
  let _lotteryConfig = null;
  try {
    // TODO 数据有效性判断
    _lotteryConfig = JSON.parse(_lotteryConfigString)
  } catch (e) {
    console.log(e);
  }
  lotteryConfig.headerTitle = _lotteryConfig.headerTitle && _lotteryConfig.headerTitle;
  lotteryConfig.currentPrize = _lotteryConfig.currentPrize && _lotteryConfig.currentPrize;
  lotteryConfig.prizeList = _lotteryConfig.prizeList && _lotteryConfig.prizeList;
  lotteryConfig.cardListWinAll = _lotteryConfig.cardListWinAll && _lotteryConfig.cardListWinAll;
  lotteryConfig.cardListRemainAll = _lotteryConfig.cardListRemainAll && _lotteryConfig.cardListRemainAll;
}
lotteryConfig.clearLocalStorage = () => {
  localStorage.removeItem(localStorageKey)
}
console.log('lotteryConfig', lotteryConfig);
export default lotteryConfig;
