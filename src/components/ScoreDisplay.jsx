const ScoreDisplay = ({ score, highScore, resultsMessage }) => {
  return (
    <div className="score-display-container">
      <div className="scores-display">
        <p>
          Highest Score: <span className="red-text">{highScore}</span>
        </p>
        <p>
          Current Score: <span className="red-text">{score}</span>
        </p>
      </div>
      <div className="results-display">
        <h3 className="red-text">{resultsMessage}</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;
