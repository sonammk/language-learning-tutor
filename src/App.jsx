import Grammar from "./Grammar";
import Vocabulary from "./Vocabulary";
import Quiz from "./Quiz";
import Mistakes from "./Mistakes";
import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  // Learner personalization
  const [nativeLanguage, setNativeLanguage] = useState("Kannada");
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("Speaking");
  const [teachingStyle, setTeachingStyle] = useState("Kanglish");
  const [profileReady, setProfileReady] = useState(false);

  // Chat
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const menuItems = [
    { name: "Home", icon: "⌂" },
    { name: "AI Tutor", icon: "✦" },
    { name: "Grammar", icon: "▤" },
    { name: "Vocabulary", icon: "Aa" },
    { name: "Practice Quiz", icon: "◎" },
    { name: "My Mistakes", icon: "↻" },
  ];

  // Demo responses
  function getTutorResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("is, am") || q.includes("is/am") || q.includes("are")) {
      return `Let's learn "am", "is" and "are"! 😊

• I am a student.
• She is happy.
• They are friends.

Remember:
Use "am" with I.
Use "is" with he, she and it.
Use "are" with you, we and they.

Practice: They ___ playing.`;
    }

    if (q.includes("doubt") || q.includes("correct") || q.includes("sentence")) {
      return `Let's correct your sentence!

❌ Incorrect: I am having a doubt.
✅ Correct: I have a question.

Reason:
In natural English, we usually say "I have a question" when we want to ask something.

Practice:
Write a sentence starting with "I have a question about..."`;
    }

    if (q.includes("word") || q.includes("vocabulary")) {
      return `Here are 5 useful English words:

1. Confident — feeling sure about yourself.
2. Improve — to become better.
3. Curious — wanting to learn something.
4. Practice — doing something regularly to get better.
5. Opportunity — a chance to do something.

Practice:
Make one sentence using "confident".`;
    }

    if (q.includes("translate")) {
      return `Sure! 🌍

Your native language is ${nativeLanguage}.
Your explanation style is ${teachingStyle}.

Send me a sentence that you want to translate into English, and I'll help you understand it.`;
    }

    if (q.includes("hello") || q.includes("hi")) {
      return `Hello! 😊

I'm your personal English tutor.
We can practice grammar, vocabulary, sentence correction and everyday conversation.

What would you like to learn today?`;
    }

    return `Good question! ✨

I'll explain it using ${teachingStyle} and ${level}-level English.

Let's learn step by step:
1. Understand the meaning.
2. See a simple example.
3. Try making your own sentence.

You can ask me about grammar, vocabulary, translation or sentence correction.`;
  }

  function handleSendMessage(question = chatInput) {
    const text = question.trim();
    if (!text) return;

    const answer = getTutorResponse(text);

    setChatMessages((previous) => [
      ...previous,
      { role: "user", text },
      { role: "ai", text: answer },
    ]);

    setChatInput("");
  }

  function startLearning() {
    setProfileReady(true);

    setChatMessages([
      {
        role: "ai",
        text: `Hi! I'm your personal English tutor ✨

Your native language is ${nativeLanguage}.
Your English level is ${level}.
Your learning goal is ${goal}.
You prefer explanations in ${teachingStyle}.

I'll keep our lessons simple and comfortable for you.

What would you like to learn today?`,
      },
    ]);
  }

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <div>
            <h2>Lingua AI</h2>
            <p>LANGUAGE COMPANION</p>
          </div>
        </div>

        <div className="menu-label">MENU</div>

        <nav className="navigation">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✧</div>
            <h3>Your learning journey</h3>
            <p>Small steps every day lead to big progress.</p>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <span>3 of 7 day goal</span>
          </div>

          <div className="profile">
            <div className="avatar">S</div>
            <div>
              <h4>Student</h4>
              <p>{level} learner</p>
            </div>
            <span className="profile-dots">•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Learning Space <span>/</span> <strong>{activePage}</strong>
          </div>

          <div className="topbar-right">
            <span className="status">
              <i></i> AI Tutor Online
            </span>
            <div className="top-avatar">S</div>
          </div>
        </header>

        {/* VOCABULARY PAGE */}
        {/* PRACTICE QUIZ PAGE */}
        {activePage === "Practice Quiz" ? (
          <Quiz />
        ) : activePage === "My Mistakes" ? (
          <Mistakes />
        ) : activePage === "Vocabulary" ? (
          <Vocabulary />
        ) : activePage === "Grammar" ? (
          <Grammar />
        ) : activePage === "AI Tutor" ? (
          /* AI TUTOR PAGE */
          <div className="tutor-page">
            {!profileReady ? (
              <div className="setup-card">
                <div className="setup-badge">✦ PERSONALIZED LEARNING</div>

                <h1>Let's personalize your learning!</h1>

                <p className="setup-description">
                  Tell me a little about yourself so I can teach you in
                  the way that works best for you.
                </p>

                <div className="setup-form">
                  <label>What is your native language?</label>
                  <select
                    value={nativeLanguage}
                    onChange={(e) => setNativeLanguage(e.target.value)}
                  >
                    <option>Kannada</option>
                    <option>Hindi</option>
                    <option>Telugu</option>
                    <option>Tamil</option>
                    <option>Malayalam</option>
                    <option>English</option>
                  </select>

                  <label>What is your English level?</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>

                  <label>What is your learning goal?</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    <option>Speaking</option>
                    <option>Grammar</option>
                    <option>Vocabulary</option>
                    <option>Writing</option>
                    <option>Academic English</option>
                  </select>

                  <label>How should I explain things?</label>
                  <select
                    value={teachingStyle}
                    onChange={(e) => setTeachingStyle(e.target.value)}
                  >
                    <option>Kanglish</option>
                    <option>English only</option>
                    <option>Kannada</option>
                    <option>Hinglish</option>
                    <option>Hindi</option>
                    <option>Simple English</option>
                  </select>

                  <button
                    className="start-learning-button"
                    onClick={startLearning}
                  >
                    Start Learning <span>→</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="chat-container">
                <div className="chat-header">
                  <div className="chat-avatar">✦</div>

                  <div>
                    <h2>Your AI English Tutor</h2>
                    <p>
                      Personalized for {nativeLanguage} • {level}
                    </p>
                  </div>

                  <button
                    className="change-profile-button"
                    onClick={() => setProfileReady(false)}
                  >
                    Edit profile
                  </button>
                </div>

                <div className="chat-messages">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`message ${message.role}`}
                    >
                      <div className="message-avatar">
                        {message.role === "ai" ? "✦" : "S"}
                      </div>

                      <div className="message-bubble">
                        {message.text.split("\n").map((line, i) => (
                          <p key={i}>{line || "\u00A0"}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="quick-prompts">
                  <button
                    onClick={() => handleSendMessage("Explain is, am and are")}
                  >
                    Explain is/am/are
                  </button>

                  <button
                    onClick={() =>
                      handleSendMessage(
                        "Correct my sentence: I am having a doubt"
                      )
                    }
                  >
                    Correct a sentence
                  </button>

                  <button
                    onClick={() =>
                      handleSendMessage("Teach me 5 new English words")
                    }
                  >
                    Learn vocabulary
                  </button>
                </div>

                <form
                  className="chat-input-area"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask me anything about English..."
                  />

                  <button type="submit">Send ↑</button>
                </form>

                <p className="demo-note">
                  ✦ Demo version • Responses use predefined examples
                </p>
              </div>
            )}
          </div>
        ) : (
          /* HOME DASHBOARD */
          <div className="dashboard">
            <section className="welcome-section">
              <div className="welcome-text">
                <div className="eyebrow">
                  YOUR PERSONAL AI LANGUAGE TUTOR
                </div>

                <h1>
                  Hello, Learner <span>✦</span>
                </h1>

                <p>
                  Ready to improve your English? Let's make learning simple,
                  fun, and personalised for you.
                </p>
              </div>

              <div className="welcome-decoration">
                <div className="decor-circle circle-one"></div>
                <div className="decor-circle circle-two"></div>
                <div className="decor-star">✦</div>
                <div className="book-illustration">📚</div>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon purple">✦</div>
                <div className="stat-label">Learning Level</div>
                <h2>{level}</h2>
                <span className="stat-note">
                  Your learning journey starts here
                </span>
              </div>

              <div className="stat-card">
                <div className="stat-icon peach">◷</div>
                <div className="stat-label">Daily Learning</div>
                <h2>20 min</h2>
                <span className="stat-note">
                  Recommended daily practice
                </span>
              </div>

              <div className="stat-card">
                <div className="stat-icon blue">♧</div>
                <div className="stat-label">Learning Goal</div>
                <h2>{goal}</h2>
                <span className="stat-note">
                  Personalised learning goal
                </span>
              </div>
            </section>

            <section className="section-heading">
              <div>
                <h2>Start learning</h2>
                <p>Choose what you would like to practice today.</p>
              </div>

              <button
                className="view-all"
                onClick={() => setActivePage("AI Tutor")}
              >
                View all →
              </button>
            </section>

            <section className="learning-grid">
              <button
                className="learning-card grammar-card"
                onClick={() => setActivePage("Grammar")}
              >
                <div className="card-top">
                  <div className="learning-icon">Aa</div>
                  <span className="card-arrow">↗</span>
                </div>

                <h3>Grammar Made Easy</h3>
                <p>
                  Learn grammar with simple explanations and examples.
                </p>
                <span className="card-tag">10 MIN • BEGINNER</span>
              </button>

              <button
                className="learning-card vocabulary-card"
                onClick={() => setActivePage("Vocabulary")}
              >
                <div className="card-top">
                  <div className="learning-icon">✧</div>
                  <span className="card-arrow">↗</span>
                </div>

                <h3>Build Vocabulary</h3>
                <p>
                  Discover new words and use them in everyday conversations.
                </p>
                <span className="card-tag">5 MIN • 5 NEW WORDS</span>
              </button>

              <button
                className="learning-card speaking-card"
                onClick={() => setActivePage("AI Tutor")}
              >
                <div className="card-top">
                  <div className="learning-icon">☏</div>
                  <span className="card-arrow">↗</span>
                </div>

                <h3>Practice Conversation</h3>
                <p>
                  Practice English conversations in a friendly space.
                </p>
                <span className="card-tag">INTERACTIVE • AI TUTOR</span>
              </button>
            </section>

            <section className="bottom-grid">
              <div className="daily-card">
                <div className="daily-heading">
                  <div>
                    <span className="eyebrow">DAILY CHALLENGE</span>
                    <h2>Word of the day</h2>
                  </div>

                  <div className="word-icon">✎</div>
                </div>

                <h3>Confident</h3>
                <span className="pronunciation">
                  /ˈkɒnfɪdənt/ • Adjective
                </span>

                <p>Feeling sure about yourself and your abilities.</p>

                <div className="example">
                  <span>EXAMPLE</span>
                  "I feel confident when I practice English."
                </div>
              </div>

              <div className="tutor-card">
                <div className="tutor-badge">✦ AI POWERED</div>
                <h2>Need help with English?</h2>

                <p>
                  Ask questions, get corrections, and learn at your own pace
                  with your personal AI tutor.
                </p>

                <button
                  className="tutor-button"
                  onClick={() => setActivePage("AI Tutor")}
                >
                  Start chatting <span>→</span>
                </button>

                <div className="tutor-decoration">✦</div>
              </div>
            </section>

            <footer className="footer">
              <span>Lingua AI • Your personal learning companion</span>
              <span>Learn at your own pace ✦</span>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;