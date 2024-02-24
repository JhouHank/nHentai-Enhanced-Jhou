// jQuery 變量，防止 Tampermonkey 出現錯誤提示
export const $ = window.$,
  // 語言設定
  translater = true,
  lang = 'zh_TW',
  data = `//raw.githubusercontent.com/JhouHank/nHentai-Enhanced-Jhou/main/locales/${lang}.json?flush_cache=True`,
  // Ajax 快取控制
  ajaxCache = false,
  // Ajax 自動翻頁
  ajaxPage = false,
  // 在新分頁中開啟本本
  newTabBook = false,
  // 隱藏黑名單
  hideBlackList = false,
  // Discord 聊天室
  enableWidgetBot = false,
  // 選單 - 名稱: '連結'
  custom = {
    menu: [
      { 正太控: '/tag/shotacon/' },
      { 百合: '/tag/yuri/' },
      { 後宮: '/tag/harem/' },
      { 中文: '/language/chinese/' },
    ],
  },
  // 開發模式
  debug = false
