/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Card from './Card';

const CardsContainer = ({
  characters,
  selectedCards,
  handleCardClick,
  addClickedImages,
}) => {
  return (
    <ul className="cards-list">
      {selectedCards.map((character) => (
        <Card
          key={character.id}
          character={character}
          handleCardClick={handleCardClick}
          addClickedImages={addClickedImages}
        />
      ))}
    </ul>
  );
};

export default CardsContainer;
