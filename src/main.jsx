


import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import App from './App';
import AboutPage from './pages/AboutPage';
import ProductComponent from './components/ProductComponent';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import TestFormComponent from './components/form/TestFormComponent';
import LoginFormComponent from './components/form/LoginFormComponent';
import ProductDetailPage from './pages/ProductDetailPage';

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
    path: '/products/:slug',
    element: <ProductDetailPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  },
  {
    path: '/form',
    element: <TestFormComponent/>
  },
  {
    path: '/login',
    element: <LoginFormComponent/>
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
