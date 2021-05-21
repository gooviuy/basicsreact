const Persona = ({ nombre, edad }) => {
  return (
    (<p>{nombre}</p>),
    (
      <p>
        {edad < 18
          ? " Lo sentimos, no tiene edad legal para beber alcohol."
          : "Bienvenido. Lo invitamos a tomar cerveza."}
      </p>
    )
  );
};

export default Persona;
