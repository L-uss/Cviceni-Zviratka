import React from "react";
import Animal from "../Animal/animal";

const AnimalList = ({ animalList, onSelected }) => {
  return (
    <div className="zvirata">
      {animalList.map((animal) => (
        <Animal
          nazev={animal.nazev}
          nazevLatinsky={animal.nazevLatinsky}
          foto={animal.foto}
          key={animal.id}
          id={animal.id}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};

export default AnimalList;