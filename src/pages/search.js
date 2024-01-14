import { ajaxPage } from '../config'
import { currentPageNum } from '../variable'
import { debugConsole, galleryBlank, changeNumPosition, scrollEventAjax } from '../utils'

export function search() {
  debugConsole('偵測到搜尋頁面')

  // 將目前項目連結 改為新分頁開啟
  // galleryBlank()

  // 翻譯
  translatePlus(['nav'], json.NewSpanPage)

  // 翻譯 標籤
  tagsTranslator($('#content > h1 > a > .name'))

  ajaxPage ? ajaxPageFunc() : debugConsole('自動翻頁 已關閉')

  function ajaxPageFunc() {
    debugConsole('自動翻頁 已開啟')

    // 移動頁數位置
    // changeNumPosition('search')

    // 當前頁數
    currentPageNum = 1

    // scrollEventAjax('search')
  }
}
