/* eslint-disable react/prop-types */
const Card = ({ character, handleCardClick }) => {
  return (
    <li className="card" onClick={handleCardClick}>
      <h2>{character.name}</h2>
      {character.images.map((image, index) => (
        <img key={index} src={image} alt={character.name} />
      ))}
    </li>
  );
};

export default Card;
