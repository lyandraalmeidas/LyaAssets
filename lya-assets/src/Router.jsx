import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Inicio",
        element: <Inicio />
      },
      {
        path: "/Catalogo",
        element: <Catalogo />
      },
      {
        path: "/Sobre",
        element: <Sobre />
      },
      {
        path: "/Contato",
        element: <Contato />
      }
    ]
  }
]);

export default router;