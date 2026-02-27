import Nav from "./Components/Nav/Nav";
import Prinsipal from "./Components/Prinsipal/Prinsipal";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="contenedor-general">
      <Nav />
      <Prinsipal />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
