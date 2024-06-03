import { useState, useEffect } from 'react';
import CardsContainer from './CardsContainer';
import ScoreDisplay from './ScoreDisplay';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const displayRandomCards = () => {
    shuffleCards(characters);
    const selected = characters.slice(0, 12);
    setSelectedCards(selected);
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

  const handleCardClick = () => {
    displayRandomCards();
  };

  return (
    <main>
      <div className="game-container">
        <ScoreDisplay />
        <CardsContainer
          characters={characters}
          selectedCards={selectedCards}
          handleCardClick={handleCardClick}
        />
      </div>
    </main>
  );
};

export default Main;
