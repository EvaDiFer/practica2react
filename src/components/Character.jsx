import { useState } from 'react';
import './Character.css';
const Character = ({ character }) => {
  const [turned, setTurned] = useState(false);

  return (
    <div>
      <img
        className={turned ? 'turned' : 'image'}
        src={character.image}
        alt={character.name}
        onClick={() => setTurned(!turned)}
      />

      <h3>{character.name}</h3>
      <p>Género: {character.gender}</p>
      <p>Especie: {character.species}</p>
      <p>Origen: {character.origin.name}</p>
    </div>
  );
};

export default Character;
