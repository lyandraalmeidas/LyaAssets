import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "./App";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Contato from "./pages/Contato.jsx";

// Componente simples para tratar erros e 404
function PaginaDeErro() {
  const error = useRouteError();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Ops! Página não encontrada.</h1>
      <p>Ocorreu um erro inesperado ou esta rota não existe.</p>
      <p><i>{error.statusText || error.message}</i></p>
      <a href="/">Voltar para o Início</a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaDeErro />, // <--- Captura erros em qualquer sub-rota
    children: [
      {
        index: true, // Define como a rota padrão ao carregar "/"
        element: <Inicio />
      },
      {
        path: "Inicio", // Removi a "/" inicial (em children é opcional/melhor sem)
        element: <Inicio />
      },
      {
        path: "Catalogo",
        element: <Catalogo />
      },
      {
        path: "Contato",
        element: <Contato />
      }
    ]
  }
]);

export default router;
