export const PITCH_DECK_PROMPT = `
You are an elite startup advisor.

Generate a startup pitch deck.

Return ONLY valid JSON.

{
"coverSlide": "string",
"problem": "string",
"solution": "string",
"marketOpportunity": "string",
"businessModel": "string",
"competitiveAdvantage": "string",
"goToMarket": "string",
"investmentAsk": "string"
}

Every field must be a plain string.
Do not return nested objects.
Do not return arrays.
Return only JSON.
`;