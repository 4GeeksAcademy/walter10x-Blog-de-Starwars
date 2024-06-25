import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/Nave";
import { Context } from "../store/appContext";

export const Home = () =>{
       const [starship,setStarship] = useState ({})
	   const { store, actions } = useContext(Context);

	  
	
       return (
        <div className="text-center mt-5">
            <h1>Home!</h1>
            <h1>Naves desde FLUX</h1>
            
            <div className="row flex-row flex-nowrap overflow-auto">
                {store.naves && store.naves.length > 0 ? (
                    store.naves.map((item, index) => {
                        if (item.url) {
                            // Divide la URL en segmentos y obtiene el penúltimo segmento como uid
                            const segments = item.url.split('/');
                            const uid = segments[segments.length - 2];
                            return (
                                <div className="col" key={`${item.url}-${index}`}>
                                    <Nave uid={uid} title={item.name} />
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
        </div>
    );
}