import { useEffect } from "react";
import "./Tarjeta.css";

/*
//export default function Tarjeta({ nombrePelicula }) {
    const [pelicula, setPelicula] = useState(null);

useEffect(() => {
axios
.get("url=" + nombrePelicula).then((result) => {
    setPelicula(result.data);
});
}, [nombrePelicula]);
 if(!pelicula) {
        return <div> CARGANGO PELICULA ..</div>
    }
}

//const {Title, Year, imdbRating, Poster} = pelicula;
//let color;
//let calificacion;
//if(imbdRating >= 7.5) {
   // color = "greenn";
   //calificacion ="Excelente"
//} else {
 //   color= "red";
 //calificacion ="Mala";
//}

*/
export default function Tarjeta({ pelicula }) {
  const { nombre, publicacion, puntaje, imagenUrl } = pelicula;
  let color;
  switch (puntaje) {
    case "Excelente":
      color = "green";

      break;
    case "Regular":
      color = "orange";

      break;
    case "Malo":
      color = "rojo";

      break;

    default:
      color = "gray";
      break;
  }

  return (
    <div className="tarjeta">
      <div className="titulo">
        {nombre} ({publicacion})
      </div>
      ,
      <div className="puntaje" style={{ backgroundColor: color }}>
        {puntaje || "No la vi aún"}
      </div>
      ,
      <div>
        <img src={imagenUrl} alt={nombre} width={190} />
      </div>
    </div>
  );
}
