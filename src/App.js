import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

import dukeImage from './react-router-patterns/duke.jpg';
import perryImage from './react-router-patterns/perry.jpg';
import tubbyImage from './react-router-patterns/tubby.jpg';
import whiskeyImage from './react-router-patterns/whiskey.jpg';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskeyImage,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: dukeImage,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perryImage,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubbyImage,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
