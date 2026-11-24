import { useState } from "react";
import "./Vocabulary.css";

const words = [
  {
    id: 1,
    word: "Confident",
    pronunciation: "/ˈkɒnfɪdənt/",
    type: "Adjective",
    level: "Beginner",
    meaning: "Feeling sure about yourself and your abilities.",
    example: "I feel confident when I speak English.",
    category: "Personality",
  },
  {
    id: 2,
    word: "Improve",
    pronunciation: "/ɪmˈpruːv/",
    type: "Verb",
    level: "Beginner",
    meaning: "To become better or make something better.",
    example: "I practice every day to improve my English.",
    category: "Learning",
  },
  {
    id: 3,
    word: "Curious",
    pronunciation: "/ˈkjʊəriəs/",
    type: "Adjective",
    level: "Beginner",
    meaning: "Wanting to know or learn something.",
    example: "She is curious about different cultures.",
    category: "Personality",
  },
  {
    id: 4,
    word: "Opportunity",
    pronunciation: "/ˌɒpəˈtjuːnəti/",
    type: "Noun",
    level: "Intermediate",
    meaning: "A chance to do something useful or important.",
    example: "This internship is a great opportunity for me.",
    category: "Daily Life",
  },
  {
    id: 5,
    word: "Essential",
    pronunciation: "/ɪˈsenʃəl/",
    type: "Adjective",
    level: "Intermediate",
    meaning: "Very important or necessary.",
    example: "Practice is essential for learning a language.",
    category: "Academic",
  },
  {
    id: 6,
    word: "Fluent",
    pronunciation: "/ˈfluːənt/",
    type: "Adjective",
    level: "Intermediate",
    meaning: "Able to speak a language smoothly and easily.",
    example: "She wants to become fluent in English.",
    category: "Learning",
  },
  {
    id: 7,
    word: "Persistent",
    pronunciation: "/pəˈsɪstənt/",
    type: "Adjective",
    level: "Advanced",
    meaning: "Continuing to try despite difficulties.",
    example: "A persistent learner never gives up easily.",
    category: "Personality",
  },
  {
    id: 8,
    word: "Articulate",
    pronunciation: "/ɑːˈtɪkjələt/",
    type: "Adjective",
    level: "Advanced",
    meaning: "Able to express ideas clearly using words.",
    example: "She is articulate during presentations.",
    category: "Speaking",
  },
  {
    id: 9,
    word: "Adapt",
    pronunciation: "/əˈdæpt/",
    type: "Verb",
    level: "Intermediate",
    meaning: "To change according to a new situation.",
    example: "We must adapt to new learning methods.",
    category: "Daily Life",
  },
  {
    id: 10,
    word: "Remarkable",
    pronunciation: "/rɪˈmɑːkəbəl/",
    type: "Adjective",
    level: "Advanced",
    meaning: "Very unusual or impressive.",
    example: "She made remarkable progress in English.",
    category: "General",
  },
];

const levelFilters = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Vocabulary() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [learned, setLearned] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  const filteredWords = words.filter((item) => {
    const matchesLevel = filter === "All" || item.level === filter;

    const matchesSearch =
      item.word.toLowerCase().includes(search.toLowerCase()) ||
      item.meaning.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchesLevel && matchesSearch;
  });

  function toggleLearned(id) {
    setLearned((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  return (
    <div className="vocabulary-page">
      {/* HEADER */}
      <section className="vocabulary-header">
        <div>
          <span className="vocabulary-eyebrow">WORD POWER</span>
          <h1>Build Your Vocabulary ✨</h1>
          <p>Learn new words and use them confidently in everyday English.</p>
        </div>

        <div className="vocabulary-progress-card">
          <div className="vocab-progress-icon">📚</div>
          <span>WORDS LEARNED</span>
          <h2>{learned.length} / {words.length}</h2>
          <div className="vocab-progress-track">
            <div
              className="vocab-progress-fill"
              style={{ width: `${(learned.length / words.length) * 100}%` }}
            />
          </div>
          <small>Keep learning every day!</small>
        </div>
      </section>

      {/* DAILY WORD */}
      <section className="vocabulary-daily">
        <div className="vocabulary-daily-content">
          <span>✦ WORD OF THE DAY</span>
          <h2>Curious</h2>
          <div className="daily-pronunciation">
            /ˈkjʊəriəs/ · Adjective
          </div>
          <p>Wanting to know or learn something.</p>
          <div className="daily-example">
            <strong>Example:</strong> "I am curious about how AI works."
          </div>
        </div>
        <div className="vocabulary-daily-decoration">✧</div>
      </section>

      {/* SEARCH */}
      <div className="vocabulary-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search words or meanings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button onClick={() => setSearch("")}>✕</button>
        )}
      </div>

      {/* FILTERS */}
      <div className="vocabulary-filters">
        {levelFilters.map((item) => (
          <button
            key={item}
            className={`vocabulary-filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* WORD GRID */}
      <div className="vocabulary-section-heading">
        <div>
          <h2>Your word collection</h2>
          <p>{filteredWords.length} words to explore</p>
        </div>
      </div>

      <div className="vocabulary-grid">
        {filteredWords.map((item) => (
          <div className="vocabulary-card" key={item.id}>
            <div className="vocabulary-card-top">
              <span className={`vocabulary-level ${item.level.toLowerCase()}`}>
                {item.level}
              </span>
              <span className="vocabulary-category">{item.category}</span>
            </div>

            <h3>{item.word}</h3>
            <span className="vocabulary-pronunciation">
              {item.pronunciation} · {item.type}
            </span>

            <p className="vocabulary-meaning">{item.meaning}</p>

            <div className="vocabulary-example">
              <span>EXAMPLE</span>
              <p>"{item.example}"</p>
            </div>

            <div className="vocabulary-card-actions">
              <button
                className="vocabulary-detail-button"
                onClick={() => setSelectedWord(item)}
              >
                View Details
              </button>

              <button
                className={`vocabulary-learn-button ${
                  learned.includes(item.id) ? "learned" : ""
                }`}
                onClick={() => toggleLearned(item.id)}
              >
                {learned.includes(item.id) ? "✓ Learned" : "+ Mark Learned"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredWords.length === 0 && (
        <div className="vocabulary-empty">
          <span>🔎</span>
          <h3>No words found</h3>
          <p>Try a different search or difficulty filter.</p>
        </div>
      )}

      {/* WORD DETAILS MODAL */}
      {selectedWord && (
        <div
          className="vocabulary-modal-overlay"
          onClick={() => setSelectedWord(null)}
        >
          <div
            className="vocabulary-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="vocabulary-modal-close"
              onClick={() => setSelectedWord(null)}
            >
              ✕
            </button>

            <span className={`vocabulary-level ${selectedWord.level.toLowerCase()}`}>
              {selectedWord.level}
            </span>

            <h2>{selectedWord.word}</h2>
            <span className="vocabulary-pronunciation">
              {selectedWord.pronunciation} · {selectedWord.type}
            </span>

            <h4>Meaning</h4>
            <p>{selectedWord.meaning}</p>

            <h4>Example sentence</h4>
            <div className="vocabulary-modal-example">
              "{selectedWord.example}"
            </div>

            <button
              className="vocabulary-learn-button learned"
              onClick={() => {
                toggleLearned(selectedWord.id);
                setSelectedWord(null);
              }}
            >
              {learned.includes(selectedWord.id)
                ? "Remove from learned words"
                : "✓ Mark as Learned"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}