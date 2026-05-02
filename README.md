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

## 公開前の確認

```bash
npm run build
npm run preview
```

`npm run preview` の表示で、以下を確認します。

- `/` にLP全体が表示される
- ヘッダーのアンカーリンクが動く
- スマートフォン幅で表示が崩れない
- お問い合わせフォームUIが表示される

## GitHub Pagesで公開する

1. GitHub Pages の公開先を `main` ブランチの `dist/`、またはGitHub Actionsのビルド成果物に設定します。
2. カスタムドメインは `www.3rducation.com` を使います。
3. 公開後、次のURLにアクセスできることを確認します。

- `https://www.3rducation.com/`
- `https://www.3rducation.com/robots.txt`
- `https://www.3rducation.com/sitemap.xml`

## 検索に出すための設定

公開しただけでは、すぐにGoogle検索へ表示されるとは限りません。公開後に次を行います。

1. Google Search Consoleで `3rducation.com` をドメインプロパティとして登録します。
2. DNSで所有権を確認します。
3. サイトマップ `https://www.3rducation.com/sitemap.xml` を送信します。
4. URL検査で `https://www.3rducation.com/` を入力し、「インデックス登録をリクエスト」を実行します。
5. 数日後に `site:3rducation.com` で検索し、インデックス状況を確認します。検索結果への表示時期や順位は保証されません。

検索結果で使われやすい文言は `src/data/lpContent.ts` の `meta`、検索エンジン向けの共通タグは `src/layouts/BaseLayout.astro` で編集できます。
