import { createHashRouter, useRouteError } from "react-router-dom";
import App from "./App";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Contato from "./pages/Contato.jsx";

// Componente para tratar erros e evitar a tela branca do "Hey developer"
function PaginaDeErro() {
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Ops! 404</h1>
      <p>Página não encontrada ou erro no sistema.</p>
      <p><i>{error.statusText || error.message}</i></p>
      <a href="/">Voltar para o Início</a>
    </div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaDeErro />, 
    children: [
      {
        index: true, 
        element: <Inicio />
      },
      {
        path: "inicio", 
        element: <Inicio />
      },
      {
        path: "catalogo",
        element: <Catalogo />
      },
      {
        path: "contato",
        element: <Contato />
      }
    ]
  }
]);

export default router;
