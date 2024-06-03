/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Card from './Card';

const CardsContainer = ({ selectedCards, addClickedImages }) => {
  return (
    <ul className="cards-list">
      {selectedCards.map((selectedCard) => (
        <Card
          key={selectedCard.id}
          selectedCard={selectedCard}
          addClickedImages={addClickedImages}
        />
      ))}
    </ul>
  );
};

export default CardsContainer;
