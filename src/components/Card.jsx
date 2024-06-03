/* eslint-disable react/prop-types */
const Card = ({ selectedCard, addClickedImages }) => {
  return (
    <li className="card">
      <h2>{selectedCard.name}</h2>
      {selectedCard.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={selectedCard.name}
          onClick={() => {
            addClickedImages(selectedCard.id);
          }}
        />
      ))}
    </li>
  );
};

export default Card;
