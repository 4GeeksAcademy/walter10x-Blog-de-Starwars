import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 px-5">
      <div className="d-flex justify-content-between align-items-center w-100">
          <span className="navbar-brand mb-0 h1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Star Wars" height="30" />
          </span>
        
        <Link to="/">
        </Link>
        <div className="d-flex justify-content-end">
          {/* Dropdown menu for favorites */}
          <div className="dropdown mr-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              style={{ backgroundColor: "#41464b"}}
              aria-expanded={showDropdown}
              onClick={toggleDropdown}
            >
              Favorites ({store.favorite.length})
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right bg-dark ${showDropdown ? "show" : ""}`}
              aria-labelledby="dropdownMenuButton"
            >
              {store.favorite.map((item, index) => (
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
