import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/Nave";
import { Context } from "../store/appContext";

export const Home = () =>{
       const [starship,setStarship] = useState ({})
	   const { store, actions } = useContext(Context);

	  
	
	return(
	(
	<div className="text-center mt-5">
		<h1>Home!</h1>


	 <h1>naves desde flux</h1>

	 {store.naves.map((item) => (<Nave key={item.uid} title={item.name} />))}


 	

	</div>
	)
);
}