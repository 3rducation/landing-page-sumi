# 00 Project Brief

## Project
3rducation のAI自動採点ツール「澄（すみ）」の1ページLPを制作する。

## Goal
今日中に、デプロイ一歩手前まで実装できる LP の叩き台を完成させる。

## Website Type
- One-page landing page
- ペライチLP
- 会社HPではなく、サービス紹介・問い合わせ獲得を目的としたLP
- URLは `/` のみ
- 別ページは作らない

## Source Materials
- `assets/proposal.pdf`: 3rducation ご紹介資料
- `public/images/logo-transparent.png`: 3rducation ロゴ

## Main Message
AI自動採点「澄」は、生成AIを活用して採点業務を効率化し、教職員が本来注力すべき教育活動に時間を使えるよう支援するサービス。

## Product
- Service name: AI自動採点「澄」
- Company: 合同会社3rducation
- Target: 学校、特に私立中学校・高等学校、学校法人、教職員、教務主任、ICT担当、管理職

## Primary Conversion
- 資料請求
- デモ相談
- お問い合わせ

## Current Priority
- 完璧な文言より、LPとしての構造と見た目を優先
- 文章は後から差し替えられるようにする
- 画像やモックを使って、製品内容が直感的に分かるようにする
- 日系BtoB SaaSらしい信頼感と分かりやすさを重視

## Tech Stack
- Astro
- Tailwind CSS
- TypeScript only when necessary
- Static site
- No backend for the first version

## Do Not Build
- 複数ページ構成
- CMS
- ログイン
- 管理画面
- データベース
- 本格的な問い合わせ送信バックエンド
- ブログ
- 導入事例ページ

## Definition of Done
- `src/pages/index.astro` にLP全体がある
- Headerはアンカーリンクのみ
- `npm run dev` が動く
- `npm run build` が通る
- スマホ表示で大きく崩れない
- READMEに起動・編集・ビルド・デプロイ方法がある
