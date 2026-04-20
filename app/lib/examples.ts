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