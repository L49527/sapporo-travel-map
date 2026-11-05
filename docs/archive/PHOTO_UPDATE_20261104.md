# Restaurant photo update

Ten user-provided PNGs are mapped one-to-one to the existing restaurant IDs. Filenames are now readable store-name slugs:

- `isezushiOtaruEkinaka.png` → `otaruIse`（伊勢鮨 小樽駅中店）
- `narutoHonten.png` → `l5`（若鶏時代 なると 本店；保留圖片可見的 `booji.com／小布少爺` 浮水印）
- `takinamiShokudo.png` → `otaruSankaku`（北のどんぶり屋 滝波食堂）
- `kumagera.png` → `l6`（くまげら）
- `asperges.png` → `x-biei`（RESTAURANT ASPERGES）
- `tomitaMelonHouse.png` → `x-tomita`（とみたメロンハウス）
- `yuigaDoxon.png` → `furanoYuiga`（唯我獨尊 Yuiga Doxon）
- `kodamaya.png` → `furanoKodamaya`（そば処 小玉家 本店）
- `naturalDiningFurano.png` → `furanoNatural`（Natural Dining 富良野）
- `fukuzushi.png` → `furanoFukuzushi`（Fukuzushi 福壽司）

The ten PNGs keep their original bytes. The existing Tabelog links remain available; corrected branch links and official sources are applied in `js/food-guide.js`. All ten assets are included in PWA cache `v34`.
