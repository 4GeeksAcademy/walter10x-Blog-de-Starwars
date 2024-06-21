import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/Nave";
import { Context } from "../store/appContext";

export const Home = () =>{
    const [starships, setStarships] = useState  ([]);
	const { store, actions } = useContext(Context);


	
	console.log(store.naves)
	return(
	(
	<div className="text-center mt-5">
		<h1>Home!</h1>

     <h1>naves desde FLUX</h1>
     {store.naves.map( (item, index)=> <Nave key={`${item.uid}-${index}`} title={item.name} />)}
	 


	</div>
	)
);
}