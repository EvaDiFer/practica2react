import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import PageButton from './components/PageButton';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <PageButton onClick={prevPage} direction='previous' />
        <PageButton onClick={nextPage} direction='next' />
      </div>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
