export type ExampleItem = {
  ageSlug: string;
  ageLabel: string;
  monthSlug: string;
  monthLabel: string;
  title: string;
  description: string;
  goal: string;
  fiveAreas: string;
  care: string;
  support: string;
  consideration: string;
  environment: string;
};

export const examples: ExampleItem[] = [
  {
    ageSlug: "5sai",
    ageLabel: "5歳児",
    monthSlug: "4gatsu",
    monthLabel: "4月",
    title: "5歳児 4月 作例",
    description: "",
    goal: `・新しいクラスでの生活に期待をもち、安心して過ごしていく。
・保育者や友達に親しみをもちながら、好きな遊びを楽しんでいく。`,
    fiveAreas: `【健康】
・新しい生活の流れに慣れ、安心して過ごしていく。

【人間関係】
・保育者や友達に親しみをもちながら関わっていく。

【環境】
・新しい環境に興味をもち、好きな遊びを見つけていく。

【言葉】
・自分の思いや気付きを言葉で伝えようとしていく。

【表現】
・遊びの中で感じたことや思いを自由に表していく。`,
    care: `・一人一人の気持ちを受け止めながら、安心して新しい環境に慣れていけるようにしていく。
・生活リズムを整えながら、落ち着いて過ごせるようにしていく。`,
    support: `・子どもの思いや不安に寄り添いながら、安心して過ごせるよう関わっていく。
・友達との関わりが広がるよう、遊びの仲立ちをしながらやり取りを支えていく。`,
    consideration: `・進級直後の気持ちの揺れに留意しながら、一人一人に合わせた関わりをしていく。
・新しい環境で無理なく過ごせるよう、安心できる保育者との関係づくりを大切にしていく。`,
    environment: `・子どもたちが安心して過ごせるよう、生活の流れがわかりやすい環境を整えていく。
・興味をもった遊びを十分に楽しめるよう、遊具や素材を取りやすく配置していく。`,
  },
  {
    ageSlug: "5sai",
    ageLabel: "5歳児",
    monthSlug: "5gatsu",
    monthLabel: "5月",
    title: "5歳児 5月 作例",
    description: "",
    goal: `・友達と関わりながら、好きな遊びを十分に楽しんでいく。
・生活に必要なことを意識しながら、見通しをもって過ごしていく。`,
    fiveAreas: `【健康】
・生活の流れを意識しながら、安心して過ごしていく。

【人間関係】
・友達との関わりを深めながら、一緒に遊ぶ楽しさを味わっていく。

【環境】
・身近な遊びや活動に興味をもち、自分なりに関わっていく。

【言葉】
・自分の思いや考えを言葉で伝え合おうとしていく。

【表現】
・遊びや活動の中で感じたことを、自分なりに表していく。`,
    care: `・一人一人の生活リズムや気持ちを受け止めながら、安定して過ごせるようにしていく。
・気温や活動量に応じて、健康に過ごせるよう配慮していく。`,
    support: `・友達と関わる楽しさを感じられるよう、必要に応じてやり取りの仲立ちをしていく。
・自分でできた喜びを感じられるよう、生活や遊びの場面で適切に支えていく。`,
    consideration: `・新しい生活に慣れてきた時期の気持ちの変化に留意しながら、安心して過ごせるようにしていく。
・一人一人のペースを大切にしながら、無理なく活動に参加できるよう配慮していく。`,
    environment: `・友達と一緒に遊びを進めやすいよう、必要な遊具や素材を使いやすく整えていく。
・安心して自分の思いを表現できるよう、落ち着いて過ごせる環境を整えていく。`,
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

export function getExampleByAgeAndMonth(ageSlug: string, monthSlug: string) {
  return examples.find(
    (item) => item.ageSlug === ageSlug && item.monthSlug === monthSlug
  );
}