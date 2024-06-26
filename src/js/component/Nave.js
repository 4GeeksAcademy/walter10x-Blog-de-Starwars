import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import cr90CorvetteImage from "../../img/cr90-corvette.jpg";
import starDestroyerImage from "../../img/star-destroyer.jpg";
import sentinelImage from "../../img/sentinel-class-landing-craft.jpg";
import deathStarImage from "../../img/death-star.jpg";
import millenniumFalconImage from "../../img/millennium-falcon.jpg";
import yWingImage from "../../img/y-wing.jpg";
import xWingImage from "../../img/x-wing.jpg";
import tieAdvancedImage from "../../img/tie-advanced.jpg";
import executorImage from "../../img/executor.jpg";
import rebelTransportImage from "../../img/rebel-transport-new.jpg";
import { Character } from "./character";

const imageMap = {
  "CR90 corvette": cr90CorvetteImage,
  "Star Destroyer": starDestroyerImage,
  "Sentinel-class landing craft": sentinelImage,
  "Death Star": deathStarImage,
  "Millennium Falcon": millenniumFalconImage,
  "Y-wing": yWingImage,
  "X-wing": xWingImage,
  "TIE Advanced x1": tieAdvancedImage,
  "Executor": executorImage,
  "Rebel transport": rebelTransportImage
};

export const Nave = (props) => {
  const { actions, store } = useContext(Context);
  const imageUrl = imageMap[props.title] || "default-image-path.jpg";

  // Determinar si la nave es favorita
  const isFavorite = store.favorite.includes(props.title);

  const toggleFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(props.title);
    } else {
      actions.addFavorite(props.title);
    }
  };

  return (
    
     

    <div className="card" style={{ width: "300px", height: "600px", borderRadius:"80px" }}>
      
      <div className="card-img-top " style={{ height: "400px", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={props.title}
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
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.model}</p>
        
        <Link className="btn btn-primaryx btn-hover" to={"/nave/" + props.uid}>
          <span>Learn More!</span>
        </Link>
        
        {/* Botón de favorito */}
        <button
          className="btn favorite-btn"
          onClick={toggleFavorite}
          style={{ color: isFavorite ? "red" : "white" }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};
