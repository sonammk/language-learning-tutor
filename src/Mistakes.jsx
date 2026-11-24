
import { useState } from "react";
import "./Mistakes.css";

const mistakes = [
  {
    question: "She go to college.",
    correct: "She goes to college.",
    explanation: "Use 'goes' with he, she, and it.",
    topic: "Subject-Verb Agreement",
  },
  {
    question: "I is a student.",
    correct: "I am a student.",
    explanation: "Use 'am' with the subject 'I'.",
    topic: "Basic Grammar",
  },
  {
    question: "I have ate breakfast.",
    correct: "I have eaten breakfast.",
    explanation: "Use the past participle 'eaten' after 'have'.",
    topic: "Verb Forms",
  },
];

function Mistakes() {
  const [reviewed, setReviewed] = useState([]);

  return (
    <div className="mistakes-page">
      <div className="mistakes-heading">
        <span className="mistakes-label">YOUR LEARNING JOURNEY</span>
        <h1>My Mistakes</h1>
        <p>Learn from your mistakes and improve your English.</p>
      </div>

      <div className="mistakes-summary">
        <div>
          <strong>{mistakes.length}</strong>
          <span>Total mistakes</span>
        </div>
        <div>
          <strong>{reviewed.length}</strong>
          <span>Reviewed</span>
        </div>
        <div>
          <strong>{mistakes.length - reviewed.length}</strong>
          <span>Left to review</span>
        </div>
      </div>

      <div className="mistakes-list">
        {mistakes.map((item, index) => (
          <div className="mistake-card" key={index}>
            <div className="mistake-card-top">
              <span className="mistake-topic">{item.topic}</span>
              <span className="mistake-number">Mistake {index + 1}</span>
            </div>

            <div className="mistake-answer wrong-answer">
              <span>Your answer</span>
              <p>{item.question}</p>
            </div>

            <div className="mistake-answer correct-answer">
              <span>Correct answer</span>
              <p>{item.correct}</p>
            </div>

            <p className="mistake-explanation">{item.explanation}</p>

            <button
              className="review-button"
              onClick={() =>
                setReviewed((previous) =>
                  previous.includes(index)
                    ? previous.filter((item) => item !== index)
                    : [...previous, index]
                )
              }
            >
              {reviewed.includes(index) ? "✓ Reviewed" : "Mark as Reviewed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mistakes;
