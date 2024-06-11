const ScoreDisplay = ({ score, highScore, resultsMessage }) => {
  return (
    <div className="score-display-container">
      <div className="scores-display">
        <span>Highest Score: {highScore}</span>
        <span>Current Score: {score / 2}</span>
      </div>
      <div className="results-display">
        <h3>{resultsMessage}</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;
