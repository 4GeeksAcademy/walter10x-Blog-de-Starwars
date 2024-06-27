import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Importa las imágenes necesarias
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

const descriptionMap = {
  "Tatooine": "Tatooine is a harsh desert world orbiting twin suns in the galaxy's Outer Rim. It's the homeworld of Anakin and Luke Skywalker.",
  "Alderaan": "Alderaan was a Core World known for its beauty and commitment to peace. It was destroyed by the Death Star.",
  "Yavin IV": "Yavin IV is a jungle moon and the site of the Rebel Alliance's main military base during the Galactic Civil War.",
  "Hoth": "Hoth is a remote, icy planet where the Rebel Alliance set up one of their main bases of operation.",
  "Dagobah": "Dagobah is a swamp-covered planet and the home of Yoda during his exile.",
  "Bespin": "Bespin is a gas giant known for its Cloud City, a floating metropolis and gas mining colony.",
  "Endor": "Endor is a forested moon home to the Ewoks and the site of the second Death Star's shield generator.",
  "Naboo": "Naboo is a lush, green planet and the homeworld of Padmé Amidala and Emperor Palpatine.",
  "Coruscant": "Coruscant is a bustling city planet and the political hub of the galaxy, home to the Galactic Senate.",
  "Kamino": "Kamino is an ocean planet known for its advanced cloning facilities and the creation of the clone army.",
};

export const PlanetSingle = (props) => {
  const { store, actions } = useContext(Context);
  const [planet, setPlanet] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets/' + params.planet_id)
      .then((response) => response.json())
      .then((data) => {
        setPlanet({ planet: data.result.properties });
      })
      .catch((error) => console.error('Error fetching planet details:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Planeta: {planet.planet?.name}</h1>

          {planet.planet && (
            <>
              <p><strong>Clima:</strong> {planet.planet.climate}</p>
              <p><strong>Diámetro:</strong> {planet.planet.diameter}</p>
              <p><strong>Descripción:</strong> {descriptionMap[planet.planet.name]}</p>
            </>
          )}

          <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button" style={{backgroundColor:"rgb(33 37 39)", color:"yellow"}}>
              Regresar al inicio
            </span>
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src={imageMap[planet.planet?.name]}
            alt={planet.planet?.name}
            className="img-fluid"
            style={{ width: "800px", height: "600px", objectFit: "cover"}}
          />
        </div>
      </div>
    </div>
  );
};

PlanetSingle.propTypes = {
  match: PropTypes.object
};
