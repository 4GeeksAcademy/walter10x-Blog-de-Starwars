import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tatooineImage from "../../img/tatooine.jpg";
import alderaanImage from "../../img/alderaan.jpg";
import yavinIVImage from "../../img/yavin-iv.jpg";
import hothImage from "../../img/hoth.jpg";
import dagobahImage from "../../img/dagobah.jpg";
import bespinImage from "../../img/bespin.jpg";
import endorImage from "../../img/endor.jpg";
import nabooImage from "../../img/naboo.jpg";
import coruscantImage from "../../img/coruscant.jpg";
import kaminoImage from "../../img/kamino.jpg";

const imageMap = {
  "Tatooine": tatooineImage,
  "Alderaan": alderaanImage,
  "Yavin IV": yavinIVImage,
  "Hoth": hothImage,
  "Dagobah": dagobahImage,
  "Bespin": bespinImage,
  "Endor": endorImage,
  "Naboo": nabooImage,
  "Coruscant": coruscantImage,
  "Kamino": kaminoImage,
};

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container-fluid character-container">
      <h1 className="my-4">Planets</h1>
      <div className="row flex-row flex-nowrap overflow-auto">
        {store.planets.length > 0 ? (
          store.planets.map((planet, index) => {
            const imageUrl = imageMap[planet.name] || "default-image-path.jpg";
            const isFavorite = store.favoritePlanets.includes(planet.name);

            const toggleFavorite = () => {
              if (isFavorite) {
                actions.removeFavoritePlanet(planet.name);
              } else {
                actions.addFavoritePlanet(planet.name);
              }
            };

            return (
              <div className="col" key={index} style={{ marginRight: '-20px', marginBottom: '-10px' }}> {/* Ajusta el margen aquí */}
                <div className="card" style={{ width: "300px", height: "450px", borderRadius: "60px", marginLeft:"10px", marginRight:"28px" }}>
                  <div className="card-img-top" style={{ height: "400px", overflow: "hidden" }}>
                    <img
                      src={imageUrl}
                      alt={planet.name}
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
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">{planet.climate}</p>
                    <p className="card-text">{planet.terrain}</p>
                    <Link className="btn btn-primary btn-hover btnlearn" to={"/planet/" + planet.url.split('/')[5]}>
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
          <p>Loading planets...</p>
        )}
      </div>
    </div>
  );
};
