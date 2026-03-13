import React from "react";
import "./productos.css";

const Productos = () => {
  return (
    <div className="contenedor-General-productos">
      <div className="fondo-productos">
        {/* BARRA DE BUSQUEDA */}
        <div className="barra-busqueda">
          <div className="fondo-barra">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
