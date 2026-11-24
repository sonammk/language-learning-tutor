import { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "Choose the correct sentence.",
    options: [
      "She go to college.",
      "She goes to college.",
      "She going college.",
      "She gone to college.",
    ],
    answer: 1,
    explanation: "We use 'goes' with he, she, and it in the simple present tense.",
  },
  {
    question: "Fill in the blank: I ___ a student.",
    options: ["is", "are", "am", "be"],
    answer: 2,
    explanation: "We use 'am' with the subject 'I'.",
  },
  {
    question: "What is the opposite of 'Happy'?",
    options: ["Excited", "Sad", "Kind", "Friendly"],
    answer: 1,
    explanation: "'Sad' is the opposite of 'Happy'.",
  },
  {
    question: "Choose the correct past tense of 'Eat'.",
    options: ["Eated", "Eating", "Eats", "Ate"],
    answer: 3,
    explanation: "The past tense of 'Eat' is 'Ate'.",
  },
  {
    question: "Fill in the blank: They ___ playing football.",
    options: ["is", "am", "are", "was"],
    answer: 2,
    explanation: "We use 'are' with 'They'.",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const score = answers.filter(
    (answer, index) => answer === questions[index].answer
  ).length;

  function handleNext() {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const finalScore = answers.filter(
      (answer, index) => answer === questions[index].answer
    ).length;

    return (
      <div className="quiz-page">
        <div className="quiz-result-card">
          <div className="quiz-result-icon">🏆</div>
          <span className="quiz-label">QUIZ COMPLETED</span>

          <h1>Great job!</h1>
          <p>You have completed your English practice quiz.</p>

          <div className="quiz-score-circle">
            <strong>{finalScore}/{questions.length}</strong>
            <span>Your Score</span>
          </div>

          <h3>
            {finalScore === questions.length
              ? "Perfect score! Amazing work!"
              : finalScore >= 3
              ? "Good work! Keep practicing!"
              : "Keep learning! You are improving!"}
          </h3>

          <button className="quiz-restart-button" onClick={restartQuiz}>
            ↻ Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-heading">
        <span className="quiz-label">LEARNING ACTIVITY</span>
        <h1>Practice Quiz</h1>
        <p>Test your English skills with these simple questions.</p>
      </div>

      <div className="quiz-card">
        <div className="quiz-card-top">
          <span className="quiz-category">English Basics</span>
          <span className="quiz-question-number">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>

        <div className="quiz-progress-track">
          <div
            className="quiz-progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <h2 className="quiz-question">{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const showFeedback = selectedOption !== null;
            const isCorrect = index === question.answer;

            let optionClass = "";

            if (showFeedback && isCorrect) {
              optionClass = "correct";
            } else if (isSelected && showFeedback && !isCorrect) {
              optionClass = "incorrect";
            } else if (isSelected) {
              optionClass = "selected";
            }

            return (
              <button
                key={index}
                className={`quiz-option ${optionClass}`}
                onClick={() => setSelectedOption(index)}
                disabled={showFeedback}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="option-text">{option}</span>

                {showFeedback && isCorrect && (
                  <span className="option-status">✓</span>
                )}

                {isSelected && showFeedback && !isCorrect && (
                  <span className="option-status">✕</span>
                )}
              </button>
            );
          })}
        </div>

        {selectedOption !== null && (
          <div
            className={`quiz-feedback ${
              selectedOption === question.answer ? "feedback-correct" : "feedback-incorrect"
            }`}
          >
            <strong>
              {selectedOption === question.answer
                ? "Correct answer! 🎉"
                : "Not quite! Keep learning."}
            </strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="quiz-footer">
          <span>✦ Take your time</span>

          <button
            className="quiz-next-button"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz →"
              : "Next Question →"}
          </button>
        </div>
      </div>

      <div className="quiz-tip">
        <span>💡</span>
        <p>
          <strong>Learning tip:</strong> Don't worry about mistakes. Every
          question is an opportunity to learn something new!
        </p>
      </div>
    </div>
  );
}

export default Quiz;