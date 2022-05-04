import React from "react";
import "./detail.css";

const AnimalDetail = ({ animal }) => {
  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img className="detail__foto" src={animal.foto} alt={animal.nazev} />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{animal.nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{animal.nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis">{animal.popis}</p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p>{animal.domovina}</p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{animal.biotop}</p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p>{animal.potrava}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{animal.velikost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
