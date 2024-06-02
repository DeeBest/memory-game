/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Card from './Card';

const CardsContainer = ({ characters }) => {
  return (
    <ul className="cards-list">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </ul>
  );
};

export default CardsContainer;
