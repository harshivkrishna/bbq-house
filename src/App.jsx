import React from 'react'
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import MenuAC from './Pages/MenuAC/MenuAC'
import MenuNAC from './Pages/MenuNAC/MenuNAC'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/menu/ac' element={<MenuAC/>}></Route>
          <Route path='/menu/non-ac' element={<MenuNAC/>}></Route>
        </Routes>
    </div>
  )
}

export default App