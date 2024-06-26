import React, { useEffect, useState, useContext } from "react";
import { Nave } from "../component/Nave";
import { Context } from "../store/appContext";
import { Character } from "../component/character";

export const Home = () => {
  const [starship, setStarship] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center" style={{ marginTop: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Starships</h1>
      <div className="row flex-row flex-nowrap overflow-auto" style={{ marginLeft: "2px" }}>
        {store.naves && store.naves.length > 0 ? (
          store.naves.map((item, index) => {
            if (item.url) {
              // Divide la URL en segmentos y obtiene el penúltimo segmento como uid
              const segments = item.url.split('/');
              const uid = segments[segments.length - 2];

              return (
                <div className="col" key={`${item.url}-${index}`}>
                  <Nave
                    title={item.name}
                    model={item.model}
                    manufacturer={item.manufacturer}
                    uid={uid} // Pasa el uid como propiedad a Nave
                  />
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>Cargando naves...</p>
        )}
      </div>
      <Character />
    </div>
  );
};
