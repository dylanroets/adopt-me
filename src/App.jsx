import React from 'react';
import { createRoot} from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lola",
      animal: "Dog",
      breed: "Goldador",
    }),
    React.createElement(Pet, {
      name: "Skittzens",
      animal: "Cat",
      breed: "Mix Breed",
    }),
    React.createElement(Pet, {
      name: "Lambeau",
      animal: "Dog",
      breed: "Black Labrador",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
