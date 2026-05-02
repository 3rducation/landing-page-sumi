# 3rducation LP

このディレクトリが、今動いている LP 本体です。

## まず触る場所

- `src/pages/index.astro`
  LP のページ本体です。今は「どのセクションを並べるか」だけを書いてあります。
- `src/components/lp/`
  ヘッダー、ヒーロー、料金表、FAQ など、見た目の各ブロックです。
- `src/data/lpContent.ts`
  文言や配列データをまとめているファイルです。文章変更はここが最優先です。
- `public/images/`
  ロゴや画像です。

## ディレクトリの役割

```text
3rducation-lp/
├── public/                 # 画像や favicon
├── src/
│   ├── components/lp/      # LP の各セクション
│   ├── data/lpContent.ts   # 文言データ
│   ├── layouts/            # 共通 HTML レイアウト
│   ├── pages/index.astro   # ページの並び順
│   └── styles/global.css   # 共通スタイル
├── input/                  # 企画メモ・要件メモ
├── package.json            # 起動コマンド
└── .vscode/                # VS Code 起動補助
```

## 今後あまり触らなくてよいもの

- `node_modules/`
  依存ライブラリです。自動生成されます。
- `dist/`
  ビルド結果です。自動生成されます。
- `.astro/`
  Astro の生成キャッシュです。自動生成されます。
- `input/`
  サイト本体ではなく、制作時の参照メモです。

## リアルタイムで編集する方法

`Go Live` ではなく、Astro の開発サーバーを使います。

VS Code でこのワークスペースを開くと、自動で dev server が立ち上がり、`http://localhost:4321` を開くようにしてあります。

最初の 1 回だけ、VS Code に「このワークスペースの自動タスクを許可するか」を聞かれたら許可してください。

手動で起動したい場合:

1. `Cmd + Shift + P`
2. `Tasks: Run Task`
3. `3rducation LP: dev server`
4. ブラウザで `http://localhost:4321` を開く

ファイル保存で即時反映されます。

## コマンド

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
