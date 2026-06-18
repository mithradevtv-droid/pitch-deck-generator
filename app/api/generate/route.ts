
import { groq } from "@/lib/groq";
import { PITCH_DECK_PROMPT } from "@/lib/prompts";

export async function POST(req: Request) {
  try {
    const startupData = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: PITCH_DECK_PROMPT,
        },
        {
          role: "user",
          content: JSON.stringify(startupData),
        },
      ],
    });

    const result = JSON.parse(
      completion.choices[0].message.content || "{}"
    );

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate deck" },
      { status: 500 }
    );
  }
}
