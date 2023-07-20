import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [nom, setNom] = useState("");
  const [prénom, setPrénom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNom("");
    setPrénom("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1>Besoin d'aide? Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <br />

        <label htmlFor="prénom">Prénom </label>
        <input
          type="text"
          id="prénom"
          name="prénom"
          value={prénom}
          onChange={(e) => setPrénom(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="message">Message </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br />

        <input type="submit" value="Envoyer" />
      </form>
      <Link to="/" className="custom-button">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Contact;
