/* eslint-disable react/prop-types */
const Card = ({ character }) => {
  return (
    <li key={character.id}>
      <h2>{character.name}</h2>
      <p>{character.jutsu}</p>
      {character.images.map((image, index) => (
        <img key={index} src={image} alt={character.name} />
      ))}
    </li>
  );
};

export default Card;
