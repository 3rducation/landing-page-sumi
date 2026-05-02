# 04 LP Structure

## Page Type
1ページ完結のLP。複数ページは作らない。

## Header Anchor Links
- 課題: `#problem`
- 特徴: `#features`
- 使い方: `#flow`
- 料金: `#pricing`
- FAQ: `#faq`
- お問い合わせ: `#contact`

## Section Order

### 1. Header
- ロゴ
- アンカーリンク
- 右上CTA「資料請求」または「デモ相談」
- スクロール時に邪魔にならないsticky header

### 2. Hero / First View
Purpose:
3秒で「学校向けAI自動採点サービス」だと伝える。

Content:
- Badge: 学校現場に寄り添うAI自動採点
- Headline: 採点業務を、もっと速く、もっと正確に。
- Subcopy: 生成AIを活用し、採点・集計・返却業務を効率化。先生が本来注力すべき教育活動に時間を使えるよう支援します。
- Primary CTA: 資料請求する
- Secondary CTA: デモを相談する
- Visual: ロゴ、答案、採点結果、ダッシュボード風UI、75%削減のスタッツカード

### 3. Trust / Target Badges
- 私立中学校・高等学校向け
- 定期テスト・小テスト対応
- 採点・集計・返却を効率化
- 先生による確認・修正を前提

### 4. Problem
Purpose:
教育現場の採点課題を提示する。

Cards:
- 採点業務に時間がかかる
- 従来システムでも問題数は減らない
- 表記揺れ・記述問題に対応しづらい
- 集計・返却まで含めると負担が大きい

### 5. Comparison / Why Existing Tools Are Not Enough
Purpose:
OCR中心の既存採点システムとの違いを説明する。

Message:
従来のOCR中心の採点では、読み取った文字をもとにした処理が中心となり、表記揺れ・同義表現・記述問題などに対応しづらい場合があります。「澄」は生成AIの文脈理解・意味理解を活用し、より柔軟な採点支援を目指します。

### 6. Solution
Purpose:
「澄」が何を解決するかを示す。

Points:
- 生成AIによる採点支援
- 採点時間の削減
- 採点基準の統一化
- 集計・返却業務の効率化
- 生徒への迅速なフィードバック

### 7. Features
Use 6 feature cards:
1. 生成AI採点支援
2. 採点基準の統一化
3. 答案データの集計
4. 返却業務の効率化
5. クラス平均・偏差値・得点分布
6. 採点修正後の再送

### 8. Product Image / Demo Visual
Use images and mockups:
- `public/images/proposal-page-12.png` if available: 採点デモ動画の画面
- `public/images/proposal-page-13.png` if available: 採点結果イメージ
- `public/images/proposal-page-14.png` if available: 採点返却イメージ
- If images are not available, create clean dashboard-style mockups using HTML/CSS.

### 9. How It Works
Steps:
1. 解答用紙を準備・アップロード
2. AIが採点を支援
3. 先生が結果を確認・修正
4. 集計・返却データを出力
5. 生徒へフィードバック

### 10. Results / Expected Effects
Stats and outcomes:
- 採点時間を約75%削減
- 返却までの時間を短縮
- 採点基準の平準化
- 教員の心理的・時間的負担を軽減

### 11. Data Flow / Security Considerations
Purpose:
学校向けLPなので、個人情報・データ管理への配慮を必ず入れる。

Content:
- 氏名を隠した解答用紙
- 生徒名簿は任意入力
- 弊社管理のプライベートクラウド
- 一定期間後の削除方針
- 詳細は個別に説明

Caution:
未確定のセキュリティ認証は書かない。ISMS、Pマーク、SOC2などは取得していない限り記載しない。

### 12. Pricing
- 個別見積もり
- 1学期利用
- 半年利用
- 年間利用
- 学年数・クラス数・採点枚数・利用範囲に応じて提案

### 13. FAQ
- AIの採点結果を先生が確認できますか？
- 記述式にも対応していますか？
- 一部学年だけでも利用できますか？
- 個人情報の取り扱いはどうなりますか？
- 導入までどれくらいかかりますか？
- 料金はどのように決まりますか？

### 14. Final CTA
- 採点業務の効率化について、まずはご相談ください。
- 資料請求
- デモ相談

### 15. Contact
Fields:
- 学校名
- 部署・役職
- お名前
- メールアドレス
- 電話番号
- お問い合わせ種別
- お問い合わせ内容

Implementation:
- First version can be form UI only.
- If Netlify is used, form can be Netlify Forms-ready.

### 16. Footer
- Logo
- Company name
- Copyright
- Privacy Policy placeholder
- Terms placeholder
