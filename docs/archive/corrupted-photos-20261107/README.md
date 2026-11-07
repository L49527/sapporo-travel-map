# 損壞照片待重新匯出（2026-11-07）

以下 6 個檔案在 2026-11 全站 PNG→WebP 優化時發現 **IDAT 截斷、缺 IEND、zlib 尾端 checksum 不符**。
瀏覽器只能顯示上半部，下半部會是黑色，不顯示好過顯示半張黑圖，因此已從
`js/food-guide.js` 的 `USER_*_PHOTOS` 移除對應 ID，卡片會改走 `verifiedRestaurantPhoto` /
`PHOTO_BY_ID` 的替代來源（或暫不顯示照片），不會把半截圖當商品實拍。

| 原檔案 | 曾對應 ID | 現況 |
|---|---|---|
| `asperges.png` | `x-biei` | 待重新匯出 |
| `donburiChayaNijo.png` | `b2` / `どんぶり茶屋` | 待重新匯出 |
| `yuigaDoxon.png` | `furanoYuiga` | 待重新匯出 |
| `furanoWineCheddarCheese.png` | `s12` | 待重新匯出 |
| `horiYubariMelonPureJelly.png` | `s13` | 待重新匯出 |
| `jagaPokkuru.png` | `s9` | 待重新匯出 |

## 重新匯出步驟

1. 用原始影像重新匯出為 WebP（長邊 ≤1100px、quality 80，例如
   `python3 -c "from PIL import Image; Image.open('x.png').convert('RGB').save('x.webp','WEBP',quality=80)"`）。
2. 放回 `assets/photos/restaurants/` 或 `assets/photos/specialties/`。
3. 在 `js/food-guide.js` 的 `USER_RESTAURANT_PHOTOS` / `USER_SPECIALTY_PHOTOS`
   填回正確檔名（`.webp`）。
4. 在 `sw.js` 的 `PHOTO_PRECACHE` 加入 `./assets/photos/.../*.webp`，
   並把 `CACHE_NAME` / `PHOTO_CACHE_NAME` 的 `v44` 往後加一。
5. 跑 `node --test tests/*.test.cjs`，確認新增的映射與快取檢查通過。
