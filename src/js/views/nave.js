import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({});
    const params = useParams();

    useEffect(() => {
        console.log('El componente se ha montado o actualizado');
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setStarship({ naves: data.result.properties });
            })
            .catch((error) => console.error('Error fetching starship details:', error));
    }, []);

    return (
        <div className="jumbotron">
            <h1 className="display-4">This Nave {params.nave_id}</h1>

            {starship.naves && (
                <>
                    <p>Name: {starship.naves.name}</p>
                    <p>Model: {starship.naves.model}</p>
                    <p>Manufacturer: {starship.naves.manufacturer}</p>
                </>
            )}

            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Nave.propTypes = {
    match: PropTypes.object
};