
"use client";

import { useState } from "react";

interface PitchDeck {
  coverSlide: string;
  problem: string;
  solution: string;
  marketOpportunity: string;
  businessModel: string;
  competitiveAdvantage: string;
  goToMarket: string;
  investmentAsk: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    startupName: "",
    problem: "",
    solution: "",
    targetMarket: "",
    revenueModel: "",
    competitors: "",
  });

  const [deck, setDeck] = useState<PitchDeck | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateDeck = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setDeck(data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate pitch deck");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          AI Pitch Deck Generator
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Generate investor-ready startup pitch decks using AI
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">

          <input
            type="text"
            name="startupName"
            placeholder="Startup Name"
            value={formData.startupName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="problem"
            placeholder="Problem"
            value={formData.problem}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="solution"
            placeholder="Solution"
            value={formData.solution}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="targetMarket"
            placeholder="Target Market"
            value={formData.targetMarket}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="revenueModel"
            placeholder="Revenue Model"
            value={formData.revenueModel}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="competitors"
            placeholder="Competitors"
            value={formData.competitors}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={generateDeck}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Pitch Deck"}
          </button>
        </div>

        {deck && (
          <div className="mt-10 space-y-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Cover Slide
              </h2>
              <p>{deck.coverSlide}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Problem
              </h2>
              <p>{deck.problem}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Solution
              </h2>
              <p>{deck.solution}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Market Opportunity
              </h2>
              <p>{deck.marketOpportunity}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Business Model
              </h2>
              <p>{deck.businessModel}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Competitive Advantage
              </h2>
              <p>{deck.competitiveAdvantage}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Go To Market Strategy
              </h2>
              <p>{deck.goToMarket}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">
                Investment Ask
              </h2>
              <p>{deck.investmentAsk}</p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
