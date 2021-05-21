import Persona from "./components/Persona.js";
import Welcome from "./components/Welcome.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome name="Gonzalo" />
      <Persona nombre="Juan" edad="21" />
      <Persona nombre="sebas" edad="15" />
    </div>
  );
}

export default App;
