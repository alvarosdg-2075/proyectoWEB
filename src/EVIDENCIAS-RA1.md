# EVIDENCIAS RA1

## 1. Objeto JS y evento de prueba
- `App.jsx` pasa el objeto `conciertoPrincipal` (`artista`, `genero`, `horario`, `escenario`) y la función `manejarPruebaConcierto` a `ConciertoCard.jsx`.
- Al pulsar el botón, se dispara `onClick`, se imprime en consola y se actualiza el estado visible en pantalla.

## 2. Navegador vs. Vite y roles de HTML, CSS y JSX
- **HTML:** Estructura base y nodo raíz (`#root`).
- **CSS:** Estilos visuales y maquetación (`App.css`).
- **JSX:** Sintaxis declarativa dentro de JS para describir UI y expresiones `{...}`.
- **Vite:** Transforma JSX/CSS y sirve módulos con HMR en desarrollo; empaqueta en `dist/` en producción.
- **Navegador:** Renderiza DOM/CSSOM y ejecuta el JS ya transformado junto con React.
- **2 ventajas:** HMR rápido en desarrollo y componentes reutilizables.
- **2 limitaciones:** Requiere paso de compilación/transformación previo y depende de JS en cliente.

## 3. DevTools: Elements, Console, Sources y Network
- **Pulsar el botón:**
  - **Elements:** Cambia el texto de `.panel-estado` en el DOM.
  - **Console:** Muestra el `console.log` del evento.
  - **Sources:** Permite pausar con *breakpoint* en `manejarPruebaConcierto` y revisar la ejecución.
- **Network:** Filtrando por **JS** o **CSS** tras recargar se ven archivos como `/src/App.jsx` o `/src/App.css`.

## 4. Error de sintaxis y Prop en React DevTools vs. Elements
- **Error y corrección:** Romper una llave `{` o `}` en JSX provoca error de compilación en Vite; al cerrarla bien y guardar, vuelve a renderizar.
- **React DevTools (`Components`):** Muestra componentes y **props** reales (`concierto`, `onProbar`).
- **Elements:** Muestra solo el **HTML/DOM final** ya renderizado, sin props ni componentes de React.

## 5. Comparativa: script directo, módulo externo y evento
| Característica | Script directo | Módulo externo (`type="module"`) | Evento (`onClick`) |
| :--- | :--- | :--- | :--- |
| **Ámbito** | Global (si no se encapsula) | De módulo (`import`/`export`) | Función manejadora al ocurrir |
| **Cuándo corre** | Durante el parseo HTML | Diferido, tras resolver módulos | Ante interacción del usuario |
| **Uso** | Pruebas o ajustes puntuales | Código modular y apps React | Reaccionar a acciones/estado |