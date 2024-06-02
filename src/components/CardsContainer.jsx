/* eslint-disable react/prop-types */

import Card from './Card';

const CardsContainer = ({ characters }) => {
  return (
    <ul className="cards-list">
      {characters.map((character) => (
        // eslint-disable-next-line react/jsx-key
        <Card character={character} />
      ))}
    </ul>
  );
};

export default CardsContainer;
