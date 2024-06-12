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
  const [resultsMessage, setResultsMessage] = useState(
    `Don't Click The Same Image Twice!!`
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

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
        setResultsMessage('You Lost!');
        setIsGameOver(true);
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
  } else if (isGameOver) {
    return (
      <main
        style={{
          flexDirection: 'column',
          backgroundColor: '#f5e1f385',
        }}
      >
        <h1 className="red-text">Game Over</h1>
        <ScoreDisplay
          score={score}
          highScore={highScore}
          resultsMessage={resultsMessage}
        />
        <button
          onClick={() => {
            setScore(0);
            setResultsMessage('');
            setIsGameOver(false);
            setClickedImages([]);
          }}
        >
          Restart Game
        </button>
      </main>
    );
  } else {
    return (
      <main>
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
