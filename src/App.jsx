import { useState } from "react";
import { Cabecera } from "./Cabecera";
import { ConciertoCard } from "./ConciertoCard";
import "./App.css";

const conciertoPrincipal = {
  id: 1,
  artista: "The Midnight Echoes",
  genero: "Synthwave / Post-Punk",
  horario: "22:30 h",
  escenario: "Escenario Principal",
};


export function App() {
  const [mensajeEvento, setMensajeEvento] = useState(
    "Aún no se ha pulsado el botón de prueba."
  );

  function manejarPruebaConcierto(datosConcierto) {
    const texto = `Evento disparado -> Artista: ${datosConcierto.artista} | Género: ${datosConcierto.genero} | Horario: ${datosConcierto.horario}`;
    console.log(texto);
    setMensajeEvento(texto);
  }

  return (
    <main className="contenedor-app">
      <Cabecera
        titulo="Agenda de Conciertos"
      />

      <section className="zona-principal">
        <ConciertoCard
          concierto={conciertoPrincipal}
          onProbar={manejarPruebaConcierto}
        />

        <div className="panel-estado" role="status" aria-live="polite">
          <strong>Estado de prueba:</strong> {mensajeEvento}
        </div>
      </section>
    </main>
  );
}

export default App;