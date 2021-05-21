import "./App.css";
import Tarjeta from "./components/Tarjeta";

const batman = {
  nombre: "Batman",
  publicacion: 1989,
  puntaje: "Excelente",
  imagenUrl:
    "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png",
};

const spiderman = {
  nombre: "Spiderman",
  publicacion: 2019,
  puntaje: null,
  imagenUrl:
    "https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg",
};
function App() {
  return (
    <div className="App">
      <Tarjeta pelicula={batman} />
      <Tarjeta pelicula={spiderman} />
      <Tarjeta nombrePelicula={"titanic"} />
    </div>
  );
}

export default App;
