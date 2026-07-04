


import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import App from './App';
import AboutPage from './pages/AboutPage';
import ProductComponent from './components/ProductComponent';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/products',
    element: <ProductPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
