import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Title from './Title'
import Estado from './Estado'
import Menu from './Menu'
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"



function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: "/sobre",
    element: <Sobre />
  },
  ])


  return (
    <>
      {/* <Title nome="Gabriel" paragrafo cor="red"/>   
      <Title paragrafo cor="blue"/>   
      <Title nome="Maria" cor="purple"/>   
      <Title cor="green"/>    */}

    {/* <Estado cor="red"/> */}

    <Menu />
    <RouterProvider router={router} />
    </>
  )
}

export default App

