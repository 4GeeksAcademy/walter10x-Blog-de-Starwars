import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import lukeSkywalkerImage from "../../img/luke-skywalker.jpg";
import darthVaderImage from "../../img/darth-vader.jpg";
import leiaOrganaImage from "../../img/leia-organa.jpg";
import hanSoloImage from "../../img/han-solo.jpg";
import c3poImage from "../../img/c-3po.jpg";
import r2d2Image from "../../img/r2-d2.jpg";
import owenLarsImage from "../../img/owen-lars.jpg";
import beruLarsImage from "../../img/beru-lars.jpg";
import r5d4Image from "../../img/r5-d4.jpg";
import biggsDarklighterImage from "../../img/biggs-darklighter.jpg";
import obiWanKenobiImage from "../../img/obi-wan-kenobi.jpg";

const imageMap = {
  "Luke Skywalker": lukeSkywalkerImage,
  "Darth Vader": darthVaderImage,
  "Leia Organa": leiaOrganaImage,
  "Han Solo": hanSoloImage,
  "C-3PO": c3poImage,
  "R2-D2": r2d2Image,
  "Owen Lars": owenLarsImage,
  "Beru Lars": beruLarsImage,
  "R5-D4": r5d4Image,
  "Biggs Darklighter": biggsDarklighterImage,
  "Obi-Wan Kenobi": obiWanKenobiImage,
};

export const Character = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacter();
  }, []);

  return (
    <div className="container-fluid character-container">
      <h1 className="my-4">Characters</h1>
      <div className="row flex-row flex-nowrap overflow-auto">
        {store.characters.length > 0 ? (
          store.characters.map((character, index) => {
            const imageUrl = imageMap[character.name] || "default-image-path.jpg";
            const isFavorite = store.favoriteCharacter.includes(character.name);

            const toggleFavorite = () => {
              if (isFavorite) {
                actions.removeFavoriteCharacter(character.name);
              } else {
                actions.addFavoriteCharacter(character.name);
              }
            };

            return (
              <div className="col" key={index} style={{ marginRight: '-20px', marginBottom: '-10px' }}> {/* Ajusta el margen aquí */}
                <div className="card" style={{ width: "300px", height: "450px", borderRadius: "60px", marginLeft:"10px", marginRight:"28px" }}>
                  <div className="card-img-top" style={{ height: "400px", overflow: "hidden" }}>
                    <img
                      src={imageUrl}
                      alt={character.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.gender}</p>
                    <p className="card-text">{character.birth_year}</p>
                    <Link className="btn btn-primary btn-hover btnlearn" to={"/character/" + character.url.split('/')[5]}>
                      <span>Learn More!</span>
                    </Link>
                    
                    <button
                      className="btn favorite-btn btn-hover btnnew"
                      onClick={toggleFavorite}
                      style={{ color: isFavorite ? "red" : "white" }}
                    >
                      {isFavorite ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading characters...</p>
        )}
      </div>
    </div>
  );
};
