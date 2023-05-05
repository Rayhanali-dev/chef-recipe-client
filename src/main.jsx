import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Blog from './components/Blog/Blog.jsx';
import Recipe from './components/Recipe/Recipe.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/provides/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-server-rayhanali-dev.vercel.app/chef/'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-server-rayhanali-dev.vercel.app/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
