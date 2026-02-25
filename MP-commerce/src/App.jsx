import Nav from "./Components/Nav/Nav";
import Prinsipal from "./Components/Prinsipal/Prinsipal";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="contenedor-general">
      <Nav />
      <Prinsipal />
      <Footer />
    </div>
  );
}

export default App;
