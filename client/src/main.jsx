import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import App from './pages/App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />
  }, {
    path: "/register",
    element: <Register />
  },
  {
    path: "/app",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
