// Comentario de línea: Tarjeta que representa los datos de un concierto y un botón de prueba

/*
  Comentario de bloque:
  Recibe el objeto "concierto" (artista, genero, horario) y una función "onProbar"
  para ejecutar el manejador de evento al pulsar el botón.
*/
export function ConciertoCard({ concierto, onProbar }) {
  const { artista, genero, horario, escenario } = concierto;

  return (
    <article className="tarjeta-concierto">
      <div className="tarjeta-concierto__cabecera">
        <span className="tarjeta-concierto__genero">{genero}</span>
        <span className="tarjeta-concierto__horario">{horario}</span>
      </div>

      <h2 className="tarjeta-concierto__artista">{artista}</h2>
      <p className="tarjeta-concierto__escenario">Escenario: {escenario}</p>

      <button
        type="button"
        className="tarjeta-concierto__boton"
        onClick={() => onProbar(concierto)}
      >
        Probar evento del concierto
      </button>
    </article>
  );
}