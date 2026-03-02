import React from "react";
import producto1 from "../../assets/Productos/producto 001.jpg";
import producto2 from "../../assets/Productos/producto 002.jpg";
import producto3 from "../../assets/Productos/producto 003.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-container">
      {/* configuracion de CARD */}
      <div className="card">
        <img src={producto1} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto2} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto3} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">Iphones</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto1} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto1} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto1} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>

      <div className="card">
        <img src={producto1} alt="producto" className="img" />
        <div className="textBox">
          <p className="text head">AirPods</p>
          <span>MP-Commerce</span>
          <p className="text price">654,34€</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
