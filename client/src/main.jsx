import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import App from './components/App'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  }, {
    path: "/signup",
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
