import React, { Component } from "react";

export const Footer = () => (
  <footer
    className="footer bg-dark text-light py-3"
    style={{ position: "absolute", bottom: 0, width: "100%" }}
  >
    <div className="container text-center">
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.4geeksacademy.com" className="text-light">
          4Geeks Academy <i className="fas fa-coffee"></i>
        </a>
      </p>
      <p>Walter Rivero</p>
      <div className="social-icons">
        <a href="https://github.com/walterrivero" className="text-light mx-2">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/walterrivero" className="text-light mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/walterrivero/"
          className="text-light mx-2"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </footer>
);
