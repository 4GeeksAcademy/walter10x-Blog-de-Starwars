import React, { useContext } from "react";
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

  return (
    <div className="card" style={{ width: "300px", height: "600px" }}>
      <div className="card-img-top" style={{ height: "400px", overflow: "hidden" }}>
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
        {/* <p className="card-text">{props.uid}</p> */}
        <p className="card-text">{props.model}</p>
        <p className="card-text">{props.manufacter}</p>
        <Link className="btn btn-primary" to={"/nave/" + props.uid}>
          <span>Ver nave</span>
        </Link>
        <button
          onClick={() => actions.changeMessage(props.title)}
          className="btn btn-primary"
        >
          Cambiar mensaje
        </button>
      </div>
    </div>
  );
};
