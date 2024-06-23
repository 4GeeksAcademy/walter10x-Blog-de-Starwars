import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Nave = (props) => {
    
 
    
	return (
		
        <div className="card" style={{width: "18rem"}}>
        <img src={rigoImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.uid}</p>
          
          <Link className="btn btn-primary" to={"/nave/" + props.uid}>
								<span>ver nave </span>
							</Link>
        </div>
      </div>
      
      
	);
};
