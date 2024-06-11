import { useState, useEffect } from 'react';
import CardsContainer from './CardsContainer';
import ScoreDisplay from './ScoreDisplay';
import Spinner from './Spinner';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resultsMessage, setResultsMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const displayRandomCards = () => {
    shuffleCards(characters);
    const selected = characters.slice(0, 6);
    setSelectedCards(selected);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://narutodb.xyz/api/character?page=28&limit=18'
        );
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (characters.length > 0) {
      displayRandomCards();
    }
  }, [characters]);

  const handleScoreIncrease = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleUpdateHighScore = () => {
    if (score >= highScore) {
      setHighScore((prevHighScore) => prevHighScore + 1);
    }
  };

  const addClickedImages = (id) => {
    setClickedImages((prevClickedImages) => {
      if (!prevClickedImages.includes(id)) {
        const newClickedImages = [...prevClickedImages, id];
        displayRandomCards();
        handleScoreIncrease();
        handleUpdateHighScore();
        return newClickedImages;
      } else {
        setScore(0);
        setResultsMessage('You Lost');
        return [];
      }
    });
  };

  if (isLoading) {
    return (
      <main
        style={{
          flexDirection: 'column',
          backgroundColor: '#f5e1f385',
        }}
      >
        <h1>Loading...</h1>
        <Spinner />;
      </main>
    );
  } else {
    return (
      <main>
        <button onClick={handleUpdateHighScore}>click me</button>
        <div className="game-container">
          <ScoreDisplay
            score={score}
            highScore={highScore}
            resultsMessage={resultsMessage}
          />
          <CardsContainer
            selectedCards={selectedCards}
            addClickedImages={addClickedImages}
          />
        </div>
      </main>
    );
  }
};

export default Main;
