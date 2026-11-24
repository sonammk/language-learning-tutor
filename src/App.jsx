
import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "⌂" },
    { name: "AI Tutor", icon: "✦" },
    { name: "Grammar", icon: "▤" },
    { name: "Vocabulary", icon: "Aa" },
    { name: "Practice Quiz", icon: "◎" },
    { name: "My Mistakes", icon: "↻" },
  ];

  return (
    <div className="app">
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
              <p>Beginner learner</p>
            </div>
            <span className="profile-dots">•••</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Learning Space <span>/</span> <strong>{activePage}</strong>
          </div>
          <div className="topbar-right">
            <span className="status"><i></i> AI Tutor Online</span>
            <div className="top-avatar">S</div>
          </div>
        </header>

        <div className="dashboard">
          <section className="welcome-section">
            <div className="welcome-text">
              <div className="eyebrow">YOUR PERSONAL AI LANGUAGE TUTOR</div>
              <h1>Hello, Learner <span>✦</span></h1>
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
              <h2>Beginner</h2>
              <span className="stat-note">Your learning journey starts here</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon peach">◷</div>
              <div className="stat-label">Daily Learning</div>
              <h2>20 min</h2>
              <span className="stat-note">Recommended daily practice</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">♧</div>
              <div className="stat-label">Learning Goal</div>
              <h2>Speak confidently</h2>
              <span className="stat-note">Personalised learning goal</span>
            </div>
          </section>

          <section className="section-heading">
            <div>
              <h2>Start learning</h2>
              <p>Choose what you would like to practice today.</p>
            </div>
            <button className="view-all">View all →</button>
          </section>

          <section className="learning-grid">
            <button className="learning-card grammar-card" onClick={() => setActivePage("Grammar")}>
              <div className="card-top">
                <div className="learning-icon">Aa</div>
                <span className="card-arrow">↗</span>
              </div>
              <h3>Grammar Made Easy</h3>
              <p>Learn grammar with simple explanations and examples.</p>
              <span className="card-tag">10 MIN • BEGINNER</span>
            </button>

            <button className="learning-card vocabulary-card" onClick={() => setActivePage("Vocabulary")}>
              <div className="card-top">
                <div className="learning-icon">✧</div>
                <span className="card-arrow">↗</span>
              </div>
              <h3>Build Vocabulary</h3>
              <p>Discover new words and use them in everyday conversations.</p>
              <span className="card-tag">5 MIN • 5 NEW WORDS</span>
            </button>

            <button className="learning-card speaking-card" onClick={() => setActivePage("AI Tutor")}>
              <div className="card-top">
                <div className="learning-icon">☏</div>
                <span className="card-arrow">↗</span>
              </div>
              <h3>Practice Conversation</h3>
              <p>Practice English conversations in a friendly space.</p>
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
              <span className="pronunciation">/ˈkɒnfɪdənt/ • Adjective</span>
              <p>Feeling sure about yourself and your abilities.</p>
              <div className="example">
                <span>EXAMPLE</span>
                "I feel confident when I practice English."
              </div>
            </div>

            <div className="tutor-card">
              <div className="tutor-badge">✦ AI POWERED</div>
              <h2>Need help with English?</h2>
              <p>Ask questions, get corrections, and learn at your own pace with your personal AI tutor.</p>
              <button className="tutor-button" onClick={() => setActivePage("AI Tutor")}>
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
      </main>
    </div>
  );
}

export default App;
