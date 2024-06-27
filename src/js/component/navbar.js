import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showDropdownNaves, setShowDropdownNaves] = useState(false);
  const [showDropdownCharacters, setShowDropdownCharacters] = useState(false);
  const [showDropdownPlanets, setShowDropdownPlanets] = useState(false);

  const toggleDropdownNaves = () => {
    setShowDropdownNaves(!showDropdownNaves);
  };

  const toggleDropdownCharacters = () => {
    setShowDropdownCharacters(!showDropdownCharacters);
  };

  const toggleDropdownPlanets = () => {
    setShowDropdownPlanets(!showDropdownPlanets);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 px-5">
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="navbar-brand mb-0 h1">
        <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            alt="Star Wars"
            height="30"
          />
        </span>
      </Link>
        </span>

        <div className="d-flex justify-content-end">
          {/* Dropdown menu for favorites - Naves */}
          <div className="dropdown mr-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonNaves"
              data-toggle="dropdown"
              aria-haspopup="true"
              style={{ backgroundColor: "#41464b" }}
              aria-expanded={showDropdownNaves}
              onClick={toggleDropdownNaves}
            >
              Favorites Naves ({store.favorite.length})
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right bg-dark ${
                showDropdownNaves ? "show" : ""
              }`}
              aria-labelledby="dropdownMenuButtonNaves"
            >
              {store.favorite.map((item, index) => (
                <a key={index} className="dropdown-item text-light" href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Dropdown menu for favorites - Characters */}
          <div className="dropdown mr-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonCharacters"
              data-toggle="dropdown"
              aria-haspopup="true"
              style={{ backgroundColor: "#41464b" }}
              aria-expanded={showDropdownCharacters}
              onClick={toggleDropdownCharacters}
            >
              Favorites Characters ({store.favoriteCharacter.length})
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right bg-dark ${
                showDropdownCharacters ? "show" : ""
              }`}
              aria-labelledby="dropdownMenuButtonCharacters"
            >
              {store.favoriteCharacter.map((item, index) => (
                <a key={index} className="dropdown-item text-light" href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Dropdown menu for favorites - Planets */}
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonPlanets"
              data-toggle="dropdown"
              aria-haspopup="true"
              style={{ backgroundColor: "#41464b" }}
              aria-expanded={showDropdownPlanets}
              onClick={toggleDropdownPlanets}
            >
              Favorites Planets ({store.favoritePlanets.length})
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right bg-dark ${
                showDropdownPlanets ? "show" : ""
              }`}
              aria-labelledby="dropdownMenuButtonPlanets"
            >
              {store.favoritePlanets.map((item, index) => (
                <a key={index} className="dropdown-item text-light" href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
