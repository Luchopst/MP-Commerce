import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-contenedor">
      <div className="login-interno">
        <label htmlFor="">Ingrese Su E-mail</label>
        <input type="Email" placeholder="example@example.com" />
        <label htmlFor="">Ingrese Su Clave</label>
        <input type="password" placeholder="password" />
        <p>
          si no tenes una Cuenta <br />
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Registrate
          </a>
        </p>

        {/* configuracion de boton regsitro */}
        <button class="btn-53">
          <div class="original">Ingresar</div>
          <div class="letters">
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>A</span>
            <span>R</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
