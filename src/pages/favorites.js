import { ajaxPage } from '../config'
import { currentPageNum } from '../variable'
import { debugConsole, galleryBlank, changeNumPosition, scrollEventAjax } from '../utils'

export function favorites() {
  debugConsole('偵測到最愛頁面')

  // 將目前項目連結 改為新分頁開啟
  // galleryBlank()

  ajaxPage ? ajaxPageFunc() : debugConsole('自動翻頁 已關閉')

  function ajaxPageFunc() {
    debugConsole('自動翻頁 已開啟')

    // 移動頁數位置
    // changeNumPosition('favorites')

    // 當前頁數
    currentPageNum = 1

    // scrollEventAjax('favorites')
  }
}
