# 🚀 AI Pitch Deck Generator

An AI-powered SaaS application that transforms startup ideas into investor-ready pitch decks within seconds.

Users provide basic startup information, and the platform generates structured pitch deck content covering problem, solution, market opportunity, business model, competitive advantage, go-to-market strategy, and funding requirements.

---

## ✨ Features

### 🤖 AI-Powered Pitch Deck Creation

Generate complete startup pitch decks using Groq and Llama 3.3.

### 📊 Investor-Focused Structure

Automatically creates:

* Cover Slide
* Problem Statement
* Solution
* Market Opportunity
* Business Model
* Competitive Advantage
* Go-To-Market Strategy
* Investment Ask

### ⚡ Real-Time Generation

Receive pitch deck content in seconds using Groq's high-speed inference.

### 🎯 Startup-Friendly

Designed for:

* Founders
* Entrepreneurs
* Students
* Startup Teams
* Hackathon Participants

---

## 🛠 Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### Backend

* Next.js Route Handlers

### AI

* Groq API
* Llama 3.3 70B Versatile

---

## 📂 Project Structure

```text
pitch-deck-generator
│
├── app
│   ├── api
│   │   └── generate
│   │       └── route.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
├── lib
│   ├── groq.ts
│   └── prompts.ts
│
├── public
├── types
│
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/pitch-deck-generator.git
```

Move into the project:

```bash
cd pitch-deck-generator
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key
```

Get your free API key from Groq Console.

---

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧠 Example Input

```text
Startup Name: MockMate

Problem:
Students struggle to prepare for technical interviews.

Solution:
AI-powered interview simulator providing mock interviews and feedback.

Target Market:
College students and job seekers.

Revenue Model:
Freemium subscriptions.

Competitors:
Pramp, Interviewing.io, LeetCode.
```

---

## 🚀 Future Improvements

* [ ] PPTX Export
* [ ] PDF Export
* [ ] Multiple Deck Templates
* [ ] YC Style Pitch Deck
* [ ] Sequoia Style Pitch Deck
* [ ] Investor Readiness Score
* [ ] Authentication
* [ ] Saved Deck History
* [ ] Deck Sharing Links

---

## 👨‍💻 Author

**Mithradev**

B.Tech CSE (Artificial Intelligence)

Passionate about building AI-powered SaaS products and startup-focused applications.

---

## 📄 License

MIT License
