import React from "react";
import { useNavigate } from "react-router-dom";
import "./Adm.css";

const Adm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Administrador
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Administrador MP-Commerce</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <p className="txt-adm">
            En esta sección solo el Administrador podrá realizar cambios tanto
            en la página como en la base de datos
          </p>

          <div className="btn-contenedor">
            <button
              className="btn btn-dark"
              onClick={() => navigate("/Usuarios")}
            >
              Agregar/Eliminar/Modificar Usuario
            </button>

            <button
              className="btn btn-dark"
              onClick={() => navigate("/productos")}
            >
              Agregar/Eliminar/Modificar Producto
            </button>

            <button className="btn btn-dark">opcion 3</button>
            <button className="btn btn-dark">opcion 4</button>
            <button className="btn btn-dark">opcion 5</button>
            <button className="btn btn-dark">opcion 6</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adm;
