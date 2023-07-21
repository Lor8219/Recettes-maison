import React, { useEffect, useState } from "react";
import RecetteCard from "@components/RecetteCard";
import { useSearchParams, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import connexion from "../services/connexion";

function Home() {
  const [categories, setCategories] = useState([]);
  const [recettes, setRecettes] = useState([]);
  const [categorie, setCategorie] = useState("");
  const [recetteSelection, setRecetteSelection] = useState([]);
  const [search, setSearch] = useState("");
  const [displayRecettes, setDisplayRecettes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const history = useHistory();

  const getCategories = async () => {
    try {
      const AllCategories = await connexion.get(`/categories`);
      setCategories(AllCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecettes = async () => {
    try {
      const AllRecettes = await connexion.get(`/recettes`);
      setRecettes(AllRecettes);
    } catch (error) {
      console.error(error);
    }
  };

  const searchRecettes = async () => {
    try {
      const AllRecettes = await connexion.get(
        `/recettes?title=${search}&categorie=${categorie}`
      );
      setDisplayRecettes(AllRecettes);
    } catch (error) {
      console.error(error);
    }
  };

  const handlechangeCategorie = (event) => {
    setCategorie(event.target.value);
  };

  const handlechangeRecette = (event) => {
    setRecetteSelection(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const UpdateParams = () => {
    setSearchParams({ title: search });
    searchRecettes();
  };

  useEffect(() => {
    setSearchParams("");
    getCategories();
    getRecettes();
  }, []);

  useEffect(() => {
    if (categorie !== "" || search !== "") {
      searchRecettes();
    }
  }, [categorie, search]);

  return (
    <>
      <header className="App-header">
        <img
          className="App-logo"
          src="https://media.discordapp.net/attachments/1081687214460780575/1120734337323773992/Logo_recette.png"
          alt="logo recette"
        />
        <p>Mes recettes faciles</p>

        <p>
          Je vous propose quelques recettes faciles, familiales et sans
          prétention qui raviront votre famille et vos amis. Vous trouverez des
          recettes salées comme sucrées.
        </p>
        <Link to="/contact" className="contact-link">
          Contact@
        </Link>
      </header>
      <section>
        <div className="home">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Recherchez votre recette"
              onChange={handleSearch}
              value={search}
            />
            <button
              type="submit"
              onClick={UpdateParams}
              className="search-bouton"
            >
              <FaSearch id="search-icon" />
            </button>
          </div>
          <div className="filter-container">
            <div className="categorieList-container">
              <select
                className="select"
                name="Categorie"
                onChange={handlechangeCategorie}
              >
                <option value="">Categorie</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="RecetteList-container">
              <select
                className="select"
                name="Recettes"
                onChange={handlechangeRecette}
              >
                <option value="Recettes">Recettes</option>
                {recettes.map((rec) => (
                  <option key={rec.id} value={rec.title}>
                    {rec.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="recettesContainer">
        {displayRecettes.map((rec) => (
          <RecetteCard recette={rec} />
        ))}
      </section>
    </>
  );
}

export default Home;
