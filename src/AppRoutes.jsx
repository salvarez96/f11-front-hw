import { createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/home'
import CategoriasPage from "./pages/categorias/categorias";
import ProductosPage from "./pages/productos/productos";
import ClientesPage from "./pages/clientes/clientes";
import PedidosPage from "./pages/pedidos/pedidos";
// import LoginPage from "./pages/login/login";
import UsuariosPage from "./pages/usuarios/usuarios";
import MainLayout from "./layouts/main-layout";
import ReduxDemoPage from './pages/redux-demo/redux-demo'
import ContactoStepManualPage from "./pages/contacto/step-manual";
import ContactoStepReduxPage from "./pages/contacto/step-redux";
import VerCategoriasPage from "./pages/categorias/ver/verCategorias";
import AddCategory from "./pages/categorias/ver/agregarCategoria";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/categorias",
          element: <CategoriasPage/>,
        },
        {
          path: "/categorias/:id",
          element: <VerCategoriasPage/>,
        },
        {
          path: "/categorias/new",
          element: <AddCategory/>,
        },
        {
          path: "/productos/:categoryName?",
          element: <ProductosPage/>,
        },
        {
          path: "/pedidos",
          element: <PedidosPage/>,
        },
        {
          path: "/usuarios",
          element: <UsuariosPage/>,
        },
        {
          path: "/clientes",
          element: <ClientesPage/>,
        },
        {
          path: "/redux-demo",
          element: <ReduxDemoPage/>,
        },
        {
          path: "/contacto-manual",
          element: <ContactoStepManualPage/>,
        },
        {
          path: "/contacto-redux",
          element: <ContactoStepReduxPage/>,
        }
      ]
    },
    // {
    //   path: "/login",
    //   element: <LoginPage/>,
    // }
  ]);

export default router;