import { useState } from "react";
import "./Grammar.css";

const grammarTopics = [
  {
    id: 1,
    title: "Present Simple",
    category: "Beginner",
    description: "Talk about habits, routines, and facts.",
    rule: "Use the present simple for things that happen regularly or are generally true.",
    examples: [
      { wrong: "She go to college.", correct: "She goes to college." },
      { wrong: "I eats breakfast.", correct: "I eat breakfast." },
    ],
    question: "She _____ to college every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
    explanation: "Use 'goes' with he, she, or it in the present simple.",
  },
  {
    id: 2,
    title: "Present Continuous",
    category: "Beginner",
    description: "Talk about actions happening right now.",
    rule: "Use am/is/are + verb-ing for actions happening at the moment.",
    examples: [
      { wrong: "I am study.", correct: "I am studying." },
      { wrong: "They is playing.", correct: "They are playing." },
    ],
    question: "They _____ football right now.",
    options: ["play", "plays", "are playing", "played"],
    answer: 2,
    explanation: "Use 'are + verb-ing' for an action happening right now.",
  },
  {
    id: 3,
    title: "Past Simple",
    category: "Beginner",
    description: "Talk about completed actions in the past.",
    rule: "Use the past form of a verb for completed past actions.",
    examples: [
      { wrong: "I go yesterday.", correct: "I went yesterday." },
      { wrong: "She eat lunch.", correct: "She ate lunch." },
    ],
    question: "We _____ a movie yesterday.",
    options: ["watch", "watched", "watching", "watches"],
    answer: 1,
    explanation: "'Yesterday' indicates the past, so use 'watched'.",
  },
  {
    id: 4,
    title: "Articles (A, An, The)",
    category: "Beginner",
    description: "Learn when to use a, an, and the.",
    rule: "Use 'a' before a consonant sound, 'an' before a vowel sound, and 'the' for something specific.",
    examples: [
      { wrong: "I ate a apple.", correct: "I ate an apple." },
      { wrong: "Give me book.", correct: "Give me the book." },
    ],
    question: "She bought _____ umbrella.",
    options: ["a", "an", "the", "no article"],
    answer: 1,
    explanation: "'Umbrella' begins with a vowel sound, so we use 'an'.",
  },
  {
    id: 5,
    title: "Prepositions",
    category: "Intermediate",
    description: "Show time, place, and relationships.",
    rule: "Prepositions like in, on, and at show when or where something happens.",
    examples: [
      { wrong: "I wake up in 7 AM.", correct: "I wake up at 7 AM." },
      { wrong: "The book is in the table.", correct: "The book is on the table." },
    ],
    question: "My birthday is _____ July.",
    options: ["at", "on", "in", "by"],
    answer: 2,
    explanation: "Use 'in' with months, years, and longer time periods.",
  },
  {
    id: 6,
    title: "Subject-Verb Agreement",
    category: "Intermediate",
    description: "Make sure the subject and verb match.",
    rule: "A singular subject generally takes a singular verb, and a plural subject takes a plural verb.",
    examples: [
      { wrong: "He are happy.", correct: "He is happy." },
      { wrong: "They is students.", correct: "They are students." },
    ],
    question: "The students _____ ready.",
    options: ["is", "am", "are", "was"],
    answer: 2,
    explanation: "'Students' is plural, so we use 'are'.",
  },
  {
    id: 7,
    title: "Conditionals",
    category: "Advanced",
    description: "Express possibilities and hypothetical situations.",
    rule: "The first conditional uses If + present simple, followed by will + verb.",
    examples: [
      { wrong: "If it will rain, I will stay.", correct: "If it rains, I will stay." },
      { wrong: "If I study, I pass.", correct: "If I study, I will pass." },
    ],
    question: "If it rains, we _____ at home.",
    options: ["stayed", "will stay", "stays", "stay yesterday"],
    answer: 1,
    explanation: "First conditional uses 'will + verb' in the result clause.",
  },
  {
    id: 8,
    title: "Passive Voice",
    category: "Advanced",
    description: "Focus on the action rather than the person doing it.",
    rule: "Passive voice uses a form of be + past participle.",
    examples: [
      { wrong: "The cake made by her.", correct: "The cake was made by her." },
      { wrong: "They built the house.", correct: "The house was built by them." },
    ],
    question: "The letter _____ yesterday.",
    options: ["sent", "is send", "was sent", "sending"],
    answer: 2,
    explanation: "Past passive voice uses 'was/were + past participle'.",
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Grammar() {
  const [level, setLevel] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const filteredTopics =
    level === "All"
      ? grammarTopics
      : grammarTopics.filter((topic) => topic.category === level);

  const currentTopic = grammarTopics.find(
    (topic) => topic.id === selectedTopic
  );

  function openTopic(topic) {
    setSelectedTopic(topic.id);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }

  function goBack() {
    setSelectedTopic(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }

  function markCompleted() {
    if (!completed.includes(currentTopic.id)) {
      setCompleted([...completed, currentTopic.id]);
    }
  }

  function checkAnswer() {
    if (selectedAnswer !== null) {
      setShowFeedback(true);
    }
  }

  return (
    <div className="grammar-page">
      {!currentTopic ? (
        <>
          <div className="grammar-heading">
            <div>
              <span className="grammar-eyebrow">LEARN & PRACTICE</span>
              <h1>Grammar</h1>
              <p>Build your English grammar step by step.</p>
            </div>

            <div className="grammar-progress-card">
              <span>YOUR PROGRESS</span>
              <strong>
                {completed.length} / {grammarTopics.length}
              </strong>
              <div className="grammar-progress-bar">
                <div
                  style={{
                    width: `${(completed.length / grammarTopics.length) * 100}%`,
                  }}
                />
              </div>
              <small>Topics completed</small>
            </div>
          </div>

          <div className="grammar-filters">
            {levels.map((item) => (
              <button
                key={item}
                className={`grammar-filter ${level === item ? "active" : ""}`}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grammar-topic-grid">
            {filteredTopics.map((topic) => (
              <div className="grammar-topic-card" key={topic.id}>
                <div className="grammar-card-top">
                  <span className={`grammar-level ${topic.category.toLowerCase()}`}>
                    {topic.category}
                  </span>

                  {completed.includes(topic.id) && (
                    <span className="grammar-done">✓ Completed</span>
                  )}
                </div>

                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <div className="grammar-card-bottom">
                  <span>📖 Learn & Practice</span>
                  <button onClick={() => openTopic(topic)}>
                    Start Learning →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grammar-detail">
          <button className="grammar-back" onClick={goBack}>
            ← Back to Grammar
          </button>

          <div className="grammar-detail-header">
            <span className={`grammar-level ${currentTopic.category.toLowerCase()}`}>
              {currentTopic.category}
            </span>
            <h1>{currentTopic.title}</h1>
            <p>{currentTopic.description}</p>
          </div>

          <section className="grammar-section">
            <h2>📘 Grammar Rule</h2>
            <p>{currentTopic.rule}</p>
          </section>

          <section className="grammar-section">
            <h2>💡 Examples</h2>

            {currentTopic.examples.map((example, index) => (
              <div className="grammar-example" key={index}>
                <div className="grammar-wrong">
                  <span>✗ Incorrect</span>
                  <p>{example.wrong}</p>
                </div>

                <div className="grammar-correct">
                  <span>✓ Correct</span>
                  <p>{example.correct}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="grammar-section grammar-practice">
            <h2>✍️ Practice Time</h2>
            <p className="grammar-question">{currentTopic.question}</p>

            <div className="grammar-options">
              {currentTopic.options.map((option, index) => (
                <button
                  key={index}
                  className={`grammar-option ${
                    selectedAnswer === index ? "selected" : ""
                  } ${
                    showFeedback && index === currentTopic.answer
                      ? "answer-correct"
                      : ""
                  } ${
                    showFeedback &&
                    selectedAnswer === index &&
                    index !== currentTopic.answer
                      ? "answer-wrong"
                      : ""
                  }`}
                  onClick={() => {
                    if (!showFeedback) setSelectedAnswer(index);
                  }}
                >
                  <span className="grammar-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {!showFeedback ? (
              <button
                className="grammar-check-button"
                disabled={selectedAnswer === null}
                onClick={checkAnswer}
              >
                Check Answer
              </button>
            ) : (
              <div
                className={`grammar-feedback ${
                  selectedAnswer === currentTopic.answer ? "correct" : "wrong"
                }`}
              >
                <strong>
                  {selectedAnswer === currentTopic.answer
                    ? "🎉 Correct answer!"
                    : "Not quite! Try to remember the rule."}
                </strong>
                <p>{currentTopic.explanation}</p>

                <button
                  className="grammar-check-button"
                  onClick={() => {
                    setSelectedAnswer(null);
                    setShowFeedback(false);
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </section>

          <button
            className="grammar-complete-button"
            onClick={markCompleted}
            disabled={completed.includes(currentTopic.id)}
          >
            {completed.includes(currentTopic.id)
              ? "✓ Topic Completed"
              : "Mark Topic as Completed"}
          </button>
        </div>
      )}
    </div>
  );
}