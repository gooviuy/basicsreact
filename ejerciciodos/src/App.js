import Titulo from "./components/Titulo.js";
import Subtitulo from "./components/Subtitulo.js";
import Descripcion from "./components/Descripcion.js";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Titulo tit="Welcome" />
      <Subtitulo sub="to the world" />
      <Descripcion nombre="Gonzalo" />
    </div>
  );
}

export default App;
