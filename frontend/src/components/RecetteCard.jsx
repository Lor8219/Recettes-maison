import React from "react";

function RecetteCard({ recette }) {
  return (
    <>
      <div className="card-header">
        <div className="card-img">
          <img src={recette.image} alt="recette-img" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{recette.title}</h2>
      </div>
    </>
  );
}

export default RecetteCard;
