import "./Register.css";

import React from "react";

const Register = () => {
  return (
    <div>
      <div className="registro-contenedor">
        <div className="registro-interno">
          <h3>Registro</h3>
          <label htmlFor="" className="label-registro">
            Ingrese sus Nombres
          </label>
          <input type="text" placeholder="Juan" />
          <label htmlFor="" className="label-registro">
            Ingrese su Apellido
          </label>
          <input type="text" placeholder="Perez" />
          <label htmlFor="" className="label-registro">
            Ingrese su D.N.I
          </label>
          <input type="number" placeholder="1234567" />
          <label htmlFor="" className="label-registro">
            Ingrese su E-mail
          </label>
          <input type="Email" placeholder="example@example.com" />
          <label htmlFor="" className="label-registro">
            Ingrese su Clave
          </label>
          <input type="password" placeholder="password" />
          <label htmlFor="" className="label-registro">
            Repita su Clave
          </label>
          <input type="password" placeholder="password" />
          <p className="p-registro">Verifique antes de Guardar</p>

          {/* configuracion de boton regsitro */}
          <button className="btn-53">
            <div className="original">Registro</div>
            <div className="letters">
              <span>R</span>
              <span>E</span>
              <span>G</span>
              <span>I</span>
              <span>S</span>
              <span>T</span>
              <span>R</span>
              <span>O</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
