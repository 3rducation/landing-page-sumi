// ============================================================
// LP Content — AI自動採点「澄」
// ここを編集するとLP全体の文言・構成が変わります
// ============================================================

export const meta = {
  title: "AI自動採点「澄」| 学校向け採点業務効率化ツール",
  description:
    "生成AIを活用し、採点・集計・返却業務を効率化する学校向けAI自動採点ツール「澄」。 教職員の負担を軽減し、生徒への迅速なフィードバックを支援します。",
  siteUrl: "https://www.3rducation.com",
  image: "/images/hero-media/hero-dashboard.png",
  keywords: [
    "AI自動採点",
    "自動採点",
    "採点支援",
    "学校向けAI",
    "教員業務効率化",
    "定期テスト 採点",
    "澄",
    "3rducation",
  ],
};

export const nav = [
  { label: "課題", href: "#problem" },
  { label: "特徴", href: "#features" },
  { label: "使い方", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
  { label: "3rducationについて", href: "#about" },
];

export const hero = {
  badge: "学校現場に寄り添う採点DX",
  headline: "採点から返却まで、\n完全自動で\nお任せください",
  subCopy:
    "AI自動採点「澄」は、生成AIを活用して採点業務を支援する\n学校向けツールです。\n先生が確認・修正できる運用を前提に、採点から返却までの時間を整えます。",
  companyLead:
    "3rducationは、教育現場の非効率をAIで減らし、教職員が生徒と向き合う時間を増やすことを目指す教育DXカンパニーです。",
  mediaSrc: "/images/hero-media/hero-dashboard.png",
  mediaAlt: "AI自動採点 澄 ダッシュボード画面",
  primaryCta: "資料請求する",
  secondaryCta: "3rducationとは",
  impactCards: [
    {
      value: "約75%",
      label: "採点時間の削減",
      note: "社内検証による目安",
    },
    {
      value: "先生確認",
      label: "最終判断を前提",
      note: "確認・修正可能",
    },
    {
      value: "一貫支援",
      label: "採点・集計・返却",
      note: "学校ごとに運用相談",
    },
  ],
};

export const trustBadges = [
  "中学校・高等学校向け",
  "定期テスト・小テスト対応",
  "採点・集計・返却を効率化",
  "先生による確認・修正も可能",
];

export const company = {
  eyebrow: "3rducationとは",
  heading: "教育現場の時間を、\nもう一度教育のために。",
  lead:
    "合同会社3rducationは、教育現場のDX推進とAI採点ツール「澄」の開発・運営を行う会社です。現場経験を持つメンバーの視点から、先生の判断を尊重しながら、採点・集計・返却にかかる負担を軽くする仕組みをつくっています。",
  missionTitle: "Mission",
  mission: "教職員の採点・集計・返却業務を効率化し、生徒一人ひとりに向き合う時間を増やす。",
  visionTitle: "Vision",
  vision: "AIの力で、教育現場に有意義な時間を創出する。",
  values: [
    "教育現場への敬意",
    "先生が最終判断できる運用",
    "現場で使いやすいDX",
  ],
  profileTitle: "会社概要",
  profile: [
    { label: "商号", value: "合同会社3rducation" },
    { label: "設立", value: "2026年6月" },
    { label: "代表者", value: "代表執行役員 CEO 藤本 隆汰" },
    {
      label: "事業内容",
      value: "教育現場のDX推進支援、教職員向けAI採点ツール「澄」の開発・運営",
    },
  ],
};

export const problems = [
  {
    iconSrc: "/images/icons/generated/problem-time.svg",
    title: "採点業務に時間がかかる",
    body: "1回のテストで採点・集計・返却まで含めると、多くの時間と集中力が必要です。",
  },
  {
    iconSrc: "/images/icons/generated/problem-checklist.svg",
    title: "従来システムでも問題数は減らない",
    body: "OCR中心の採点システムでは、読み取り結果の確認作業など別の手間が生じることがあります。",
  },
  {
    iconSrc: "/images/icons/generated/problem-writing.svg",
    title: "表記揺れ・記述問題に対応しづらい",
    body: "「CO₂」と「二酸化炭素」、「①」と「1」など、同義の解答を正確に判定するのが難しい場合があります。",
  },
  {
    iconSrc: "/images/icons/generated/problem-analytics.svg",
    title: "集計・返却まで含めると負担が大きい",
    body: "採点後の集計、成績入力、生徒への返却まで含めると、業務量はさらに増えます。",
  },
];

export const comparison = {
  eyebrow: "比較",
  heading: "なぜ既存ツールでは不十分なのか",
  body: "従来のOCR中心の採点システムでは、読み取った文字をもとにした処理が中心となり、表記揺れ・同義表現・記述問題などに対応しづらい場合があります。「澄」は生成AIの文脈理解・意味理解を活用し、より柔軟な採点支援を目指します。",
  items: [
    {
      label: "表記揺れへの対応",
      ocr: "△ 表記が一致しないと不正解になりやすい",
      sumi: "○ 同義表現・揺れを考慮した採点支援",
    },
    {
      label: "記述式問題",
      ocr: "△ 文字認識が主体で意味判定は難しい",
      sumi: "○ 生成AIの意味理解で柔軟に支援",
    },
    {
      label: "集計・返却",
      ocr: "△ 別ツールや手作業が必要なことも",
      sumi: "○ 採点後の集計・返却まで一貫して支援",
    },
    {
      label: "採点基準の統一",
      ocr: "△ 採点者ごとのブレが出やすい",
      sumi: "○ 同一基準での採点支援で平準化",
    },
  ],
};

export const solution = {
  eyebrow: "解決策",
  heading: "AI自動採点「澄」が解決すること",
  points: [
    "生成AIによる採点支援で時間を大幅削減",
    "採点基準の統一化・平準化",
    "集計・返却業務の効率化",
    "生徒への迅速なフィードバック",
    "先生が確認・修正できる安心の運用",
  ],
};

export const features = [
  {
    iconSrc: "/images/icons/generated/feature-ai.svg",
    title: "生成AI採点支援",
    body: "表記揺れや多様な解答パターンを考慮した採点支援。記述問題にも対応できるよう設計しています。",
  },
  {
    iconSrc: "/images/icons/generated/feature-rubric.svg",
    title: "採点基準の統一化",
    body: "一貫した採点基準をもとに支援することで、担当者ごとのブレを軽減します。",
  },
  {
    iconSrc: "/images/icons/generated/feature-aggregation.svg",
    title: "答案データの集計",
    body: "クラス平均点・偏差値・得点分布など、テスト後の分析を効率化します。",
  },
  {
    iconSrc: "/images/icons/generated/feature-delivery.svg",
    title: "返却業務の効率化",
    body: "採点結果をもとにした返却データ作成を支援。生徒へのフィードバックにかかる時間を短縮します。",
  },
  {
    iconSrc: "/images/icons/generated/feature-insight.svg",
    title: "クラス分析・傾向把握",
    body: "クラス全体の正答率・誤答傾向を可視化し、授業改善のヒントを提供します。",
  },
  {
    iconSrc: "/images/icons/generated/feature-refresh.svg",
    title: "修正後の再送・再集計",
    body: "先生が採点を修正した後、再集計・再送まで対応。柔軟な運用をサポートします。",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "解答用紙を準備・アップロード",
    body: "採点する解答用紙をシステムにアップロードします。氏名部分を隠した状態での利用も可能です。",
  },
  {
    step: "02",
    title: "AIが採点を支援",
    body: "生成AIが解答内容を読み取り、採点基準にもとづいて採点を支援します。",
  },
  {
    step: "03",
    title: "先生が結果を確認・修正",
    body: "AIの採点結果を先生が確認し、必要に応じて修正できます。最終判断は常に先生が行います。",
  },
  {
    step: "04",
    title: "集計・返却データを出力",
    body: "採点結果を集計し、成績データや返却用データとして出力します。",
  },
  {
    step: "05",
    title: "生徒へフィードバック",
    body: "採点済みの結果を生徒に返却。迅速なフィードバックで学習改善をサポートします。",
  },
];

export const effects = [
  { value: "約75%", label: "採点時間の削減", note: "社内検証による目安" },
  { value: "迅速化", label: "生徒への返却スピード", note: "" },
  { value: "統一化", label: "採点基準の平準化", note: "" },
  { value: "軽減", label: "教員の時間的・心理的負担", note: "" },
];

export const security = {
  eyebrow: "データ・セキュリティ",
  heading: "学校現場に合わせた、安心のデータ運用",
  items: [
    {
      iconSrc: "/images/icons/generated/security-anonymize.svg",
      title: "氏名を隠した運用が可能",
      body: "解答用紙の氏名部分を隠した状態での利用に対応。個人情報の取り扱いを最小限に抑えます。",
    },
    {
      iconSrc: "/images/icons/generated/security-cloud.svg",
      title: "プライベートクラウドで管理",
      body: "データは弊社管理のプライベートクラウドで保管します。",
    },
    {
      iconSrc: "/images/icons/generated/security-delete.svg",
      title: "一定期間後の削除",
      body: "アップロードされたデータは、一定期間後に削除する方針です。詳細は導入時に個別にご確認ください。",
    },
    {
      iconSrc: "/images/icons/generated/security-review.svg",
      title: "運用は個別に確認",
      body: "導入前に貴校の運用フローに合わせた利用方法を個別に確認します。",
    },
  ],
  note: "※ セキュリティ認証（ISMS・Pマーク等）については現在取得に向けて準備中です。詳細はお問い合わせください。",
};

export const pricing = {
  eyebrow: "料金",
  heading: "学校規模・利用範囲に応じた個別見積もり",
  subCopy:
    "利用学年数・クラス数・採点枚数・利用期間・サポート範囲に応じて、最適なプランをご提案します。",
  plans: [
    {
      name: "1学期トライアル",
      target: "まずは一部学年・一部教科で試したい学校",
      features: ["AI採点支援", "基本的な集計", "返却支援", "導入サポート"],
      cta: "トライアルについて相談する",
      highlighted: false,
    },
    {
      name: "半年利用",
      target: "定期テスト数回分で効果を検証したい学校",
      features: [
        "AI採点支援",
        "集計・返却支援",
        "クラス別分析",
        "採点基準の調整サポート",
      ],
      cta: "半年利用を相談する",
      highlighted: true,
    },
    {
      name: "年間利用",
      target: "学校全体または複数学年で継続利用したい学校",
      features: [
        "AI採点支援",
        "集計・返却支援",
        "クラス別・学年別分析",
        "運用相談",
        "優先サポート",
      ],
      cta: "年間導入を相談する",
      highlighted: false,
    },
  ],
  note: "料金は個別見積もりです。まずはお気軽にご相談ください。",
};

export const faqs = [
  {
    q: "AIの採点結果を先生が確認できますか？",
    a: "はい。AIによる採点結果を先生が確認し、必要に応じて修正できる運用を前提としています。",
  },
  {
    q: "記述式にも対応していますか？",
    a: "記述式や表記揺れのある解答にも対応できるよう、生成AIを活用した採点支援を行います。対応範囲は問題形式や運用条件によって異なるため、詳細は個別にご相談ください。",
  },
  {
    q: "従来の採点システムとは何が違いますか？",
    a: "従来のOCR中心の採点システムでは文字認識が主体となるため、表記揺れや同義表現・記述問題への対応が難しい場合があります。「澄」は生成AIの文脈理解・意味理解を活用した柔軟な採点支援を目指しています。",
  },
  {
    q: "一部学年・一部教科だけでも利用できますか？",
    a: "はい。まずは一部学年や一部教科からの導入相談も可能です。",
  },
  {
    q: "個人情報の取り扱いはどうなりますか？",
    a: "データの取り扱いについては、導入前に運用方法を個別に確認します。氏名を隠した解答用紙の利用や、一定期間後の削除など、学校現場に合わせた運用を検討します。",
  },
  {
    q: "導入までどのくらいかかりますか？",
    a: "学校の運用状況や利用範囲によって異なります。まずは現在の採点・返却フローを確認したうえで、導入方法をご提案します。",
  },
  {
    q: "料金はどのように決まりますか？",
    a: "利用学年数、クラス数、採点枚数、利用期間、サポート範囲に応じて個別にお見積もりします。",
  },
];

export const contact = {
  eyebrow: "お問い合わせ",
  heading: "採点業務の効率化について、まずはご相談ください。",
  subCopy: "資料請求・デモ相談・お見積もりなど、お気軽にお問い合わせください。",
  inquiryTypes: [
    "デモ相談（予約完了後に資料を送ります）",
    "料金・お見積もり",
    "その他",
  ],
};

export const footer = {
  company: "合同会社3rducation",
  copyright: `© ${new Date().getFullYear()} 合同会社3rducation. All rights reserved.`,
};
