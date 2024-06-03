const ScoreDisplay = ({ score, highScore }) => {
  return (
    <div className="score-display-container">
      <div className="scores-display">
        <span>Highest Score: {highScore}</span>
        <span>Current Score: {score / 2}</span>
      </div>
      <div className="results-display">
        <h3>You Win!</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;
