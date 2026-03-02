import React from "react";
import "./Adm.css";

const Adm = () => {
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
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Administrador MP-Commerce
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p className="txt-adm">
            En esta Seccion solo el Administrador podra realizar cambios tanto
            en la pagina como en la base de datos
          </p>
          <div className="btn-contenedor">
            <button type="button" className="btn btn-dark">
              Agregar/Eliminar Usuario
            </button>
            <button type="button" className="btn btn-dark">
              Agregar/Eliminar Producto
            </button>
            <button type="button" className="btn btn-dark">
              opcion 3
            </button>
            <button type="button" className="btn btn-dark">
              opcion 4
            </button>
            <button type="button" className="btn btn-dark">
              opcion 5
            </button>
            <button type="button" className="btn btn-dark">
              opcion 6
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adm;
