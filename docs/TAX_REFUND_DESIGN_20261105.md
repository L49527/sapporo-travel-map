# 日本免稅新制圖卡美化

核對日期：2026-11-05。原始碼基準：GitHub `main`，`f7c28f94150516edf8b87464d3ab28ee6d694f19`。

## 設計與檔案

延續現有旅行手帖風格：奶油紙色、森林綠、陶土紅、古金色、襯線標題與留白。使用內建 image_gen 產生資訊插畫，並保留文字版流程、官方連結和可展開的查驗細節。

- `assets/illustrations/japan-tax-refund-2026-v1.png`：完整圖卡，可放大與下載。
- `assets/illustrations/japan-tax-refund-2026-v1.webp`：網頁用圖片。
- `css/tax-refund.css`：局部樣式，統一舊版退稅區塊配色及手機排版。
- `index.html`：整合圖卡、下載入口及手機／輔助閱讀文字版。
- `sw.js`：快取版本由 v40 更新為 v41，加入圖卡和新樣式，支援離線使用。

圖卡為 AI 生成的說明插畫，不是官方公告或實景攝影；政策內容依下列官方來源核對。

## 政策來源

1. [日本海關：旅客免稅退款制度](https://www.customs.go.jp/kaigairyoko/taxrefund.htm)：2026-11-01 起採先付含稅價、離境海關確認後退款；同店同日未稅合計 ¥5,000 以上；購買後 90 天內完成出境確認；新千歲機場可於指定 Wi-Fi 區域使用 VJW。
2. [日本觀光廳：新制旅客說明](https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html)：托運前完成確認；同一筆購買紀錄若缺少任一商品，整筆無法通過確認；食品及化妝品取消特殊密封，但在日本消耗仍不符退稅條件。
3. [日本觀光廳：旅客常見問題](https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html)：退款方式由店家／業者提供，入帳時間依業者處理；不保證機場立即現金退款。

網站為 2027 年旅行規劃，出發前仍須重新核對官方規定與機場流程。

## 更新方式

將更新包內的 `index.html`、`sw.js`、`css/tax-refund.css`、`assets/illustrations/` 及本說明依原路徑覆蓋至網站。完整網站包可直接作為 GitHub Pages 根目錄內容。

線上版本請參閱 [GitHub Pages 的免稅新制區塊](https://l49527.github.io/sapporo-travel-map/#tax-refund-2027)。

## 驗證結果

- 原有測試 76 項全部通過。
- 檢查 99 個 HTML／離線快取的本地引用，沒有缺檔。
- Service Worker 語法檢查、變更格式檢查通過。
- 實際瀏覽器檢查：1440 × 1000 桌機與 390 × 844 手機均無水平溢出。
- 最終 WebP 載入成功（1536 × 1024）；手機顯示可閱讀的四步驟與門檻。
- 查驗細節可展開；放大與下載入口指向完整 PNG。
- 圖片：PNG 2,478,168 bytes；網頁用 WebP 296,116 bytes。
- 圖卡文字已人工逐項檢視；圖像由內建 image_gen 生成及定向修正。

完整生成提示詞另見 `docs/TAX_REFUND_IMAGE_PROMPTS_20261105.txt`。
