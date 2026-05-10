import { createHashRouter, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import App from "./App";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Contato from "./pages/Contato.jsx";

// Componente de Erro Otimizado
function PaginaDeErro() {
  const error = useRouteError();
  console.error("Erro detectado:", error);

  // Definindo mensagens amigáveis
  let mensagemErro = "Ocorreu um erro inesperado.";
  let statusCod = "";

  if (isRouteErrorResponse(error)) {
    // Erros específicos de rotas (Ex: 404, 401, etc)
    statusCod = error.status;
    mensagemErro = error.statusText || error.data?.message || "Página não encontrada.";
  } else if (error instanceof Error) {
    // Erros de código/Javascript
    mensagemErro = error.message;
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Ops! {statusCod}</h1>
      <p>Algo deu errado no sistema.</p>
      <p style={{ color: '#666' }}>
        <i>{mensagemErro}</i>
      </p>
      <br />
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Voltar para o Início
      </Link>
    </div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaDeErro />, // Captura erros em qualquer lugar da árvore
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