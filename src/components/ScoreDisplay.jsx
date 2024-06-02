const ScoreDisplay = () => {
  return (
    <div className="score-display-container">
      <div className="scores-display">
        <span>Highest Score: 10</span>
        <span>Current Score: 5</span>
      </div>
      <div className="results-display">
        <h3>You Win!</h3>
      </div>
    </div>
  );
};

export default ScoreDisplay;
