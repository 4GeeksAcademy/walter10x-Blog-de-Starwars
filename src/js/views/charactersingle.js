import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Importa las imágenes necesarias
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

export const CharacterSingle = (props) => {
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState({});
  const params = useParams();

  useEffect(() => {
    
    fetch(`https://swapi.dev/api/people/${params.character_id}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (data) {
          setCharacter(data); // Almacenar los datos del personaje
        } else {
         
        }
      })
      .catch((error) => console.error('Error fetching character details:', error));
  }, [params.character_id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Personaje: {character.name}</h1>
          {character.name && (
            <>
              <p><strong>Altura:</strong> {character.height}</p>
              <p><strong>Peso:</strong> {character.mass}</p>
              <p><strong>Color de Cabello:</strong> {character.hair_color}</p>
              <p><strong>Color de Piel:</strong> {character.skin_color}</p>
              <p><strong>Color de Ojos:</strong> {character.eye_color}</p>
              <p><strong>Año de Nacimiento:</strong> {character.birth_year}</p>
              <p><strong>Género:</strong> {character.gender}</p>
            </>
          )}
          <Link to="/">
            <span className="btn btn-primary btn-lg" role="button" style={{backgroundColor:"rgb(33 37 39)", color:"yellow"}}>
              Regresar al inicio
            </span>
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src={imageMap[character.name]}
            alt={character.name}
            className="img-fluid"
            style={{ width: "800px", height: "600px", objectFit: "cover"}}
          />
        </div>
      </div>
    </div>
  );
};

CharacterSingle.propTypes = {
  match: PropTypes.object
};
