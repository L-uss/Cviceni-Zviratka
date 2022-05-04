import React from "react";
import "./animal.css";

const Animal = ({ id, foto, nazev, nazevLatinsky, onSelected }) => {
  return (
    <div className="zvire" onClick={() => onSelected(id)}>
      <div className="zvire__foto">
        <img src={foto} alt={nazev} />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{nazev}</div>
        <div className="zvire__latinsky">{nazevLatinsky}</div>
      </div>
    </div>
  );
};

export default Animal;
