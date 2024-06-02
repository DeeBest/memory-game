import CardsContainer from './CardsContainer';
import ScoreDisplay from './ScoreDisplay';

import { useState, useEffect } from 'react';

const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://narutodb.xyz/api/character?page=5&limit=20'
        );
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="game-container">
        <ScoreDisplay />
        <CardsContainer characters={characters} />
      </div>
    </main>
  );
};

export default Main;
