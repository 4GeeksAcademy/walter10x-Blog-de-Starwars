import React from "react";

export const Footer = () => (
  <footer
    className="footer bg-dark text-light"
    style={{ position: "fixed", bottom: 0, width: "100%", padding: "10px 0", height:"50px" }}
  >
    <div className="container text-center">
      <p style={{ margin: "0", fontSize: "0.9rem" }}>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.4geeksacademy.com" className="text-light">
          4Geeks Academy <i className="fas fa-coffee"></i>
        </a>
      </p>
      <p style={{ margin: "0", fontSize: "0.9rem", marginTop:"-45px", marginLeft:"-100px" }}>Walter Rivero</p>
      <div className="social-icons" style={{ marginTop: "-23px", marginRight:"-80px" }}>
        <a href="https://github.com/walter10x" className="text-light mx-2">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/Walter2023Mr" className="text-light mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://es.linkedin.com/in/wrivero1403/"
          className="text-light mx-2"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </footer>
);

