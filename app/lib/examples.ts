export type ExampleItem = {
  ageSlug: string;
  ageLabel: string;
  monthSlug: string;
  monthLabel: string;
  categorySlug: string;
  categoryLabel: string;
  title: string;
  description: string;
  body: string;
};

export const examples: ExampleItem[] = [
  {
    ageSlug: "5sai",
    ageLabel: "5歳児",
    monthSlug: "4gatsu",
    monthLabel: "4月",
    categorySlug: "gekkan",
    categoryLabel: "月案",
    title: "5歳児 4月 月案 作例",
    description:
      "新しいクラスでの生活に期待をもちながら、安心して過ごせるようにするための月案作例です。",
    body: `子どもたちは進級した喜びを感じながら、新しい環境や生活の流れに少しずつ慣れていく姿が見られる。好きな遊びを楽しみながら友達や保育者と関わり、安心して過ごせるようにしていく。

ねらい
・新しいクラスでの生活に期待をもち、安心して過ごしていく。
・保育者や友達に親しみをもちながら、好きな遊びを楽しんでいく。

環境構成
・子どもたちが安心して過ごせるよう、生活の流れがわかりやすい環境を整えていく。
・興味をもった遊びを十分に楽しめるよう、遊具や素材を取りやすく配置していく。

援助・配慮
・一人一人の気持ちを受け止めながら、安心して新しい環境に慣れていけるようにしていく。
・友達との関わりが広がるよう、遊びの仲立ちをしながらやり取りを支えていく。`,
  },
  {
    ageSlug: "5sai",
    ageLabel: "5歳児",
    monthSlug: "4gatsu",
    monthLabel: "4月",
    categorySlug: "katsudoubun",
    categoryLabel: "活動文",
    title: "5歳児 4月 活動文 作例",
    description:
      "進級直後の子どもたちの様子をまとめた活動文の作例です。",
    body: `新しいクラスでの生活が始まり、子どもたちは進級したことを喜びながら意欲的に過ごしていた。好きな遊びを見つけて楽しむ中で、友達や保育者に自分の思いを伝えたり、関わりを深めたりする姿が見られた。戸外遊びでは体を十分に動かし、開放感を味わいながら元気いっぱいに遊んでいた。`,
  },
  {
    ageSlug: "5sai",
    ageLabel: "5歳児",
    monthSlug: "4gatsu",
    monthLabel: "4月",
    categorySlug: "nerai",
    categoryLabel: "ねらい",
    title: "5歳児 4月 ねらい 作例",
    description:
      "4月の園生活に向けたねらいの作例です。",
    body: `・進級した喜びを感じながら、新しい生活の流れに慣れていく。
・友達や保育者と関わりながら、安心して好きな遊びを楽しんでいく。`,
  },
];

export const ages = Array.from(
  new Map(
    examples.map((item) => [
      item.ageSlug,
      { ageSlug: item.ageSlug, ageLabel: item.ageLabel },
    ])
  ).values()
);

export function getMonthsByAge(ageSlug: string) {
  return Array.from(
    new Map(
      examples
        .filter((item) => item.ageSlug === ageSlug)
        .map((item) => [
          item.monthSlug,
          { monthSlug: item.monthSlug, monthLabel: item.monthLabel },
        ])
    ).values()
  );
}

export function getCategoriesByAgeAndMonth(ageSlug: string, monthSlug: string) {
  return Array.from(
    new Map(
      examples
        .filter(
          (item) => item.ageSlug === ageSlug && item.monthSlug === monthSlug
        )
        .map((item) => [
          item.categorySlug,
          {
            categorySlug: item.categorySlug,
            categoryLabel: item.categoryLabel,
            title: item.title,
            description: item.description,
          },
        ])
    ).values()
  );
}

export function getExample(
  ageSlug: string,
  monthSlug: string,
  categorySlug: string
) {
  return examples.find(
    (item) =>
      item.ageSlug === ageSlug &&
      item.monthSlug === monthSlug &&
      item.categorySlug === categorySlug
  );
}