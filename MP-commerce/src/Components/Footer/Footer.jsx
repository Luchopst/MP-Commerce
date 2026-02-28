import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="card-footer text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Lo que Necesitas está Acá</h5>
          <p className="card-text">
            Para Mas Imformacion seguinos en nuestras redes
          </p>
          <a href="#" className="btn btn-primary">
            Nuestras redes
          </a>
        </div>
        <div className="card-footer text-body-secondary">MP-Commerce 2026</div>
      </div>
    </div>
  );
};

export default Footer;
