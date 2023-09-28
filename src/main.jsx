import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Hero from './components/HeroRegister.jsx/Hero'


const router = createBrowserRouter([
  {path:'/', element:<Root/>,children:[

    {path:'/', element: <Home/> },
    {path:'/login', element: <Login/> },
    {path:'/register', element: <Register/> },
    {path:'/heroRegister', element: <Hero/> }
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
