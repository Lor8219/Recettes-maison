import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <div className="error-text">Erreur 404 Cette page est introuvable...</div>
      <img
        src="https://media.discordapp.net/attachments/1081687214460780575/1131526714644762654/gateau_404.jpg"
        alt="Error 404"
        className="error-image"
      />
      <Link to="/" className="custom-button">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Error;
