import React from "react";
import "./Summary.css"; // This line imports your styles
function Summary({
  correctCount,
  incorrectCount,
  skippedCount,
  unansweredCount,
  onRestart,
}) {
  return (
    <div id="summary">
      <div className="summary-header">
        <h2 className="summary-title">Quiz Completed!</h2>
        <button
          onClick={onRestart}
          className="restart-button"
          aria-label="Restart Quiz"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="currentColor"
          >
            <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
          </svg>
        </button>
      </div>

      <div id="summary-stats">
        <div className="stat-item">
          <span className="number">{correctCount}</span>
          <span className="text">correct</span>
        </div>
        <div className="stat-item">
          <span className="number">{incorrectCount}</span>
          <span className="text">incorrect</span>
        </div>
        <div className="stat-item">
          <span className="number">{skippedCount}</span>
          <span className="text">skipped</span>
        </div>
        <div className="stat-item">
          <span className="number">{unansweredCount}</span>
          <span className="text">unanswered</span>
        </div>
        <div className="stat-item total">
          <span className="number">
            {correctCount + incorrectCount + skippedCount + unansweredCount}
          </span>
          <span className="text">total</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
