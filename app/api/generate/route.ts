import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sectionInstructionMap: Record<string, string> = {
  activity:
    "活動文として、保育の様子が伝わる自然な文章を150文字前後で作成してください。",
  goal:
    "ねらいとして、簡潔で実践的な文を1〜3個、箇条書きで作成してください。",
  evaluation:
    "評価・反省として、子どもの姿や活動の振り返りが伝わる文章を簡潔に作成してください。",
  newsletter:
    "おたより用として、保護者向けにやわらかく丁寧な文章を作成してください。",
  fiveAreas:
    "5領域の視点で捉えた内容を、簡潔に箇条書きで1〜5個作成してください。",
  care:
    "養護として、健康・情緒の安定・安心感に関わる内容を簡潔に箇条書きで1〜3個作成してください。",
  support:
    "援助・配慮として、保育者の関わりを具体的に箇条書きで1〜3個作成してください。",
  environment:
    "環境構成として、物的・人的環境の工夫が分かる内容を箇条書きで1〜3個作成してください。",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { age, month, content, behavior, section, label } = body;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY が設定されていません。" },
        { status: 500 }
      );
    }

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { error: "内容を入力してください。" },
        { status: 400 }
      );
    }

    const sectionInstruction =
      sectionInstructionMap[section] ||
      `${label ?? "指定項目"}として自然な日本語で作成してください。`;

    const prompt = `
あなたは保育士向けの文章作成AIです。
保育現場でそのまま使いやすい、自然で具体的な日本語で出力してください。

【対象年齢】
${age}

【月】
${month}

【活動内容】
${content}

【子どもの様子】
${behavior?.trim() ? behavior : "特になし"}

【今回の作成項目】
${label ?? section}

【出力ルール】
- 項目名は書かない
- 余計なあいさつは書かない
- 内容だけを書く
- 保育現場でそのまま使いやすい文にする
- 必要に応じて専門性は保ちつつ、読みやすくする

【指示】
${sectionInstruction}
`;

    const response = await client.responses.create({
      model: "gpt-5.4",
      input: prompt,
    });

    return NextResponse.json({
      result: response.output_text?.trim() || "生成結果が空でした。",
    });
  } catch (error: any) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        error: error?.message || "生成に失敗しました。",
      },
      { status: 500 }
    );
  }
}