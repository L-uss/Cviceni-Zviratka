import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";
import AnimalList from "./components/AnimalList/list";
import AnimalDetail from "./components/AnimalDetail/detail";

const App = () => {

  const [animalList, setAnimalList] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  
  const onSelected = (id) => {
    setSelectedAnimal(animalList.find(animal => animal.id === id));
  }

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
    .then((response) => response.json())
    .then((data) => {setAnimalList(data.zvirata)})
  },
  []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animalList={animalList} onSelected={onSelected}/>
        {selectedAnimal && <AnimalDetail animal={selectedAnimal}/>}
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
