// Comentario de línea: Componente de cabecera con título y subtítulo del evento

/*
  Comentario de bloque:
  Recibe "titulo" y "subtitulo" mediante props y renderiza el encabezado principal.
*/
export function Cabecera({ titulo, subtitulo }) {
  return (
    <header className="cabecera">
      <p className="cabecera__etiqueta">RA1 · REACT + VITE</p>
      <h1 className="cabecera__titulo">{titulo}</h1>
      <p className="cabecera__subtitulo">{subtitulo}</p>
    </header>
  );
}