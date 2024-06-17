import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/Nave";
import { Context } from "../store/appContext";

export const Home = () =>{
    const [starships, setStarships] = useState  ([]);
	const { store, actions } = useContext(Context);


	useEffect(()=> {
        console.log('se cargo el homeroo')
		fetch('https://www.swapi.tech/api/starships')
		.then( (response)=> response.json())
		.then( (data)=> setStarships(data.results))
      }, [])
      

	
	return(
	(
	<div className="text-center mt-5">
		<h1>Home!</h1>
		<h1>Naves Desde la API</h1>
			


{starships.map( (item)=> <Nave key={item.uid} title = {item.name}/>)}



	</div>
	)
);
}