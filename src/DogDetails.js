import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!currentDog) return <h1>Dog not found!</h1>;

  return (
    <div>
      <img src={currentDog.src} alt={currentDog.name} width="300" height="300"/>
      <h1>{currentDog.name}</h1>
      <h2>Age: {currentDog.age}</h2>
      <ul>
        {currentDog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
