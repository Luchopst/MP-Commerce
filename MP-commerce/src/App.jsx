import "./App.css";
import Nav from "./Components/Nav/Nav";
import Prinsipal from "./Components/Prinsipal/Prinsipal";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="contenedor-general">
      <Nav />
      <Prinsipal />
      <Login />
      <Register />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
