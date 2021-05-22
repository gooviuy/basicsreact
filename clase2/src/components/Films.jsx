import axios from "axios";
import { useEffect, useState } from "react";
import "./Tarjeta.css";

export default function Tarjeta({ nombrePelicula }) {
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    axios
      .get("https://private.omdbapi.com/?apikey=bef9c583&t=" + nombrePelicula)
      .then((result) => {
        setPelicula(result.data);
      });
  }, [nombrePelicula]);

  if (!pelicula) {
    return <div>Cargando película...</div>;
  }

  const { Title, Year, imdbRating, Poster } = pelicula;
  let color;
  let calificacion;
  if (imdbRating >= 7.5) {
    color = "green";
    calificacion = "Excelente";
  } else {
    color = "red";
    calificacion = "Mala";
  }

  return (
    <div className="tarjeta">
      <div className="titulo">
        {Title} ({Year})
      </div>
      <div className="puntaje" style={{ backgroundColor: color }}>
        {calificacion}
      </div>
      <div>
        <img src={Poster} alt={Title} width={190} />
      </div>
    </div>
  );
}