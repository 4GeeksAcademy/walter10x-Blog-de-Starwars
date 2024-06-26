import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Importa las imágenes necesarias
import cr90CorvetteImage from "../../img/cr90-corvette.jpg";
import starDestroyerImage from "../../img/star-destroyer.jpg";
import sentinelImage from "../../img/sentinel-class-landing-craft.jpg";
import deathStarImage from "../../img/death-star.jpg";
import millenniumFalconImage from "../../img/millennium-falcon.jpg";
import ywingImage from "../../img/y-wing.jpg";
import rebelTransportImage from "../../img/rebel-transport-new.jpg";
import xwingImage from "../../img/x-wing.jpg";
import tieAdvancedImage from "../../img/tie-advanced.jpg";
import executorImage from "../../img/executor.jpg";


const imageMap = {
  "CR90 corvette": cr90CorvetteImage,
  "Star Destroyer": starDestroyerImage,
  "Sentinel-class landing craft": sentinelImage,
  "Death Star": deathStarImage,
  "Millennium Falcon": millenniumFalconImage,
  "Y-wing": ywingImage,
  "Rebel Transport": rebelTransportImage,
  "X-wing": xwingImage,
  "TIE Advanced x1": tieAdvancedImage,
  "Executor": executorImage,
  
};

const descriptionMap = {
  "CR90 corvette": "CR90 corvette is a small, multi-purpose capital ship manufactured by Corellian Engineering Corporation. It is known for its speed and maneuverability, making it a versatile asset in space combat and reconnaissance missions.",
  "Star Destroyer": "Star Destroyer is a powerful capital ship and a symbol of the Imperial Navy's might. It is equipped with advanced weaponry and serves as the command ship for Imperial fleets across the galaxy.",
  "Sentinel-class landing craft": "Sentinel-class landing craft is used for transporting troops and cargo across the galaxy. It features a sturdy design and is often employed in planetary invasions and ground operations.",
  "Death Star": "Death Star is a moon-sized space station equipped with a superlaser capable of destroying planets. It represents the pinnacle of Imperial engineering and serves as a deterrent against rebellion and dissent.",
  "Millennium Falcon": "Millennium Falcon is a modified YT-1300 Corellian light freighter known for its speed and maneuverability. Piloted by Han Solo and Chewbacca, it became famous for its involvement in the Rebel Alliance's victory over the Galactic Empire.",
  "Y-wing": "Y-wing is a versatile starfighter used by the Rebel Alliance for bombing runs and close support. Its durable hull and powerful armaments make it ideal for attacking capital ships and ground targets.",
  "Rebel Transport": "Rebel Transport is a medium-sized transport used by the Rebel Alliance to ferry troops and supplies. It features advanced shielding and stealth technology, allowing it to evade Imperial detection and deliver crucial cargo to Rebel bases.",
  "X-wing": "X-wing is a fast and agile starfighter used by the Rebel Alliance and later the New Republic. Its iconic S-foils provide enhanced maneuverability and speed, making it effective in dogfights against Imperial TIE fighters.",
  "TIE Advanced x1": "TIE Advanced x1 is an advanced prototype starfighter used by Darth Vader and other elite Imperial pilots. It features enhanced weaponry and shields, giving it a significant advantage in space combat.",
  "Executor": "Executor is a massive Executor-class Star Dreadnought and the flagship of Darth Vader. It serves as the command center for Imperial operations and is equipped with formidable firepower and defensive capabilities.",
  
};

export const Nave = (props) => {
  const { store, actions } = useContext(Context);
  const [starship, setStarship] = useState({});
  const params = useParams();

  useEffect(() => {
    
    fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
      .then((response) => response.json())
      .then((data) => {
      
        setStarship({ naves: data.result.properties });
      })
      .catch((error) => console.error('Error fetching starship details:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Nave: {starship.naves?.name}</h1>

          {starship.naves && (
            <>
              <p><strong>Modelo:</strong> {starship.naves.model}</p>
              <p><strong>Fabricante:</strong> {starship.naves.manufacturer}</p>
              <p><strong>Descripción:</strong> {descriptionMap[starship.naves.name]}</p>
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
            src={imageMap[starship.naves?.name]}
            alt={starship.naves?.name}
            className="img-fluid"
            style={{ width: "800px", height: "600px", objectFit: "cover"}}

          />
        </div>
      </div>
    </div>
  );
};

Nave.propTypes = {
  match: PropTypes.object
};
