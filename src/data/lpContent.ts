// ============================================================
// LP Content — AI自動採点「澄」
// ここを編集するとLP全体の文言・構成が変わります
// ============================================================

export const meta = {
  title: "AI自動採点「澄」| 要確認答案に集中できる学校向け採点支援",
  description:
    "簡易問題で99%以上の採点精度を確認したAI自動採点「澄」。AIが誤答・要確認候補を絞り込み、先生の採点確認を効率化します。最終判断は先生が行えます。",
  siteUrl: "https://www.3rducation.com",
  image: "/images/hero-media/grading-execution-screen.png",
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
  { label: "料金", href: "#pricing" },
  { label: "お問い合わせ", href: "#contact" },
  { label: "3rducationについて", href: "#about" },
];

export const hero = {
  badge: "簡易問題の採点精度 99%以上 ※社内検証",
  headline: "流れるように、\n自動採点。",
  subCopy:
    "AI自動採点「澄」が正答・誤答候補を一次判定。\n先生は誤答・要確認と判断された答案に確認を集中できるため、\n精度を大切にしながら採点時間の約75%削減を目指せます。",
  companyLead:
    "3rducationは、教育現場の非効率をAIで減らし、教職員が生徒と向き合う時間を増やすことを目指す教育DXカンパニーです。",
  mediaSrc: "/images/hero-media/grading-execution-screen.png",
  mediaAlt: "AI自動採点「澄」の採点設定・実行画面",
  primaryCta: "採点精度をデモで確かめる",
  secondaryCta: "3rducationとは",
};

export const company = {
  eyebrow: "3RDUCATIONとは",
  heading: "教育現場の時間を、\n教育のために。",
  representativePhotoSrc: "/images/fujimoto-ryuta.jpg",
  representativePhotoAlt: "合同会社3rducation 代表社員 藤本隆汰",
  representativeRole: "代表社員",
  representativeName: "藤本隆汰",
  representativeBio: [
    "北海道教育大学札幌校中退。東京理科大学理学部第二部数学科卒業。",
    "AIエンジニアとして働きながら、高校非常勤講師（数学）として勤務。",
    "ブラックと言われる公教育現場を変革し、すべての教員が生徒に、家族に、趣味に向き合える時間を創出したいという思いで合同会社3rducationを創業。",
  ],
  lead:
    "合同会社3rducationは、教員として学校現場に立った経験を持つメンバーが開発する教育DXカンパニーです。日々の採点・集計・返却にかかる時間と、その負担が生徒に向き合う時間を圧迫する現実を、開発者自身が経験してきました。",
  experienceLead: "現場経験から生まれたサービスだからこそ、",
  experience:
    "技術ありきではなく、先生の判断や既存の運用を尊重しながら、現場の負担を本当に減らせることを大切にしています。学校現場の実務と声に根ざし、本当に必要とされるサービスを届けます。",
  profileTitle: "会社概要",
  profile: [
    { label: "商号", value: "合同会社3rducation" },
    { label: "設立", value: "2026年6月" },
    { label: "代表者", value: "代表社員　藤本隆汰" },
    {
      label: "事業内容",
      value: "教育現場のDX推進支援、教職員向けAI採点ツール「澄」の開発・運営",
    },
  ],
};

export const problems = [
  {
    iconSrc: "/images/icons/generated/problem-checklist.svg",
    title: "従来システムでも全問題の確認が必要",
    body: "答案をデジタル化しても、正誤判定や読み取り結果を問題ごとに確認する必要があります。",
    emphasis: "すべての問題・答案に目を通すため、",
    bodyAfter: "先生の負担は大きく残ります。",
  },
  {
    iconSrc: "/images/icons/generated/problem-writing.svg",
    title: "従来の採点ツールは表記揺れに対応しづらい",
    body: "従来の採点ツールでは、文字の一致を中心に判定するものが多く、「CO₂」と「二酸化炭素」、「①」と「1」のような同義の解答を正しく扱えない場合があります。",
  },
  {
    iconSrc: "/images/icons/generated/feature-rubric.svg",
    title: "従来の採点ツールは長文記述や図への対応が難しい",
    body: "従来の採点ツールでは、文字の一致を中心に判定するものが多く、長文記述の内容理解や、図・グラフの形状・位置関係を踏まえた判定が難しい場合があります。",
  },
  {
    iconSrc: "/images/icons/generated/problem-analytics.svg",
    title: "集計・返却まで含めると負担が大きい",
    body: "採点後の集計、成績入力、生徒への返却まで含めると、業務量はさらに増えます。",
  },
];

export const gradingExamples = [
  {
    eyebrow: "記述問題にも対応",
    heading: "文章の意味を読み取り、\n記述答案の採点を支援",
    body:
      "固定表示された模範解答と採点基準をもとに、生成AIが記述答案の内容を読み取り、正誤判定を支援します。先生は判定結果を確認し、必要に応じて修正できます。",
    badges: [],
    note: "",
    imageSrc: "/images/descriptive-grading-example.png",
    imageAlt:
      "模範解答を表示しながら、生徒の手書きによる記述答案を確認・採点している画面例",
  },
  {
    eyebrow: "図・グラフ問題にも対応",
    heading: "手書きされた図を読み取り、\n形や位置関係の判定を支援",
    body:
      "採点基準に、グラフの形状や軸との位置関係など、図のどこに着目するかを具体的に記入できます。生成AIはその着眼点をもとに、図・グラフ問題の判定を支援します。",
    badges: [],
    note: "",
    imageSrc: "/images/graph-grading-example.png",
    imageAlt:
      "模範解答のグラフと、生徒が手書きした複数のグラフ答案を比較して採点している画面例",
  },
  {
    eyebrow: "採点基準・中間点にも対応",
    heading: "評価項目ごとに基準を設定し、\n中間点の適用を支援",
    body:
      "模範解答をもとに、答案に含まれるべき要素をチェック項目として登録し、項目ごとの加点・減点を設定できます。該当した要素に応じて中間点を適用し、先生が最終的な得点を確認・調整できます。",
    badges: [],
    note: "",
    imageSrc: "/images/partial-credit-example.png",
    imageAlt:
      "記述問題のチェック項目と項目ごとの加点・減点を設定し、生徒答案に中間点2点を適用している画面例",
  },
];

export const postGradingFeatures = [
  {
    title: "採点結果をメールで一括返却",
    body: "採点済み答案と分析ファイルを、メールでまとめて返却できます。",
    imageSrc: "/images/email-bulk-return.png",
    imageAlt:
      "採点済み答案PDFと分析ファイルを添付した、採点結果の一括返却メール",
  },
  {
    title: "採点結果を自動集計・分析",
    body: "受験者数、平均点、中央値、標準偏差、得点分布などを画面で確認できます。",
    imageSrc: "/images/grading-analysis.png",
    imageAlt:
      "受験者数、平均点、中央値、標準偏差、最高点、最低点と得点分布を表示した分析画面",
  },
];

export const accuracyProof = {
  eyebrow: "採点精度",
  heading: "正答候補はAIが判定。\n先生は「要確認」に集中できます。",
  lead:
    "簡易的な問題を対象とした社内検証では、99%以上の採点精度を確認しました。生成AIが誤答・要確認候補を絞り込むことで、先生は確認が必要な答案に時間を使えます。",
  value: "99%以上",
  valueLabel: "簡易問題に対する採点精度",
  metricDefinition:
    "ここでの採点精度は、AIが「正解」と判定した答案のうち、人による確認でも実際に正解だった答案の割合です。",
  metricFormula:
    "人の確認でも正解だった答案数 ÷ AIが「正解」と判定した答案数",
  valueNote:
    "※ 社内検証による結果です。問題形式・答案の状態・運用条件により精度は異なります。",
  imageSrc: "/images/ai-first-pass-example.png",
  imageAlt:
    "模範解答と、AIが正解と判断した複数の手書き答案を並べた採点判定例",
  workflow: [
    { step: "01", title: "AIが全答案を判定" },
    { step: "02", title: "誤答・要確認候補を抽出" },
    { step: "03", title: "先生が確認・修正" },
  ],
};

export const effectComparison = {
  imageSrc: "/images/grading-time-comparison.png",
  imageAlt:
    "1クラスあたりの採点業務時間を比較した図。手採点は採点60分、集計5分、返却5分で合計70分。従来の採点ツールは採点40分、集計・返却1分で合計41分。澄は採点15分、集計・返却1分で合計16分となり、手採点から54分、約77%削減。",
  heading: "1クラスあたり70分から16分へ",
  body:
    "手採点と比べ、採点・集計・返却を含む業務全体で54分、約77%の削減を想定しています。",
};

export const security = {
  eyebrow: "データ・セキュリティ",
  heading: "学校現場に合わせた、安心のデータ運用",
  imageSrc: "/images/data-security-flow.png",
  imageAlt:
    "生徒名簿と解答用紙の保存、氏名を隠した解答用紙を使った生成AI採点、氏名部分の画像認識、プライベートクラウドでの保管と2か月後の削除を示すデータフロー図",
  note: "※ セキュリティ認証（ISMS・Pマーク等）については現在取得に向けて準備中です。詳細はお問い合わせください。",
};

export const pricing = {
  eyebrow: "料金",
  heading: "利用状況に合わせて、無駄なく使えるセット制",
  premise: {
    label: "前提",
    unit: "1セット",
    definition: "1科目 × 1クラス（40人）",
    context: "のテスト採点",
    note: "※ 小テストは0.5セット",
  },
  example: {
    label: "計算例",
    subject: "数学1",
    items: [
      { label: "小テスト", value: "20", unit: "回" },
      { label: "中間", value: "2", unit: "回" },
      { label: "期末", value: "3", unit: "回" },
      { label: "クラス数", value: "12", unit: "クラス" },
    ],
    formula: "（20 × 0.5 ＋ 2 ＋ 3）× 12",
    result: "180",
    resultUnit: "セット",
  },
  fees: {
    label: "料金形態",
    initial: {
      title: "初回費用",
      period: "年間",
      amount: "40",
      capacity: "900",
    },
    additional: {
      title: "追加購入",
      amount: "15",
      capacity: "400",
      note: "使い切りそうになった場合に随時買い足し",
    },
  },
};

export const contact = {
  eyebrow: "お問い合わせ",
  heading: "採点精度と確認フローを、まずはデモでお確かめください。",
  subCopy:
    "貴校の問題形式でどこまで確認対象を絞れるか、資料請求・デモ相談からお気軽にお問い合わせください。",
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
