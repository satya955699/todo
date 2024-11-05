import { useState } from 'react'
import Header from './components/header'
import Index from './components'
import Login from './components/login'
import Sign from './components/sign'
import Error from './components/error'
import { Routes,Route } from 'react-router-dom'



function App() { 
  let [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
  <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/login' element={<Login  setIsAuthenticated={setIsAuthenticated} />} />
    <Route path='/sign'  element={<Sign setIsAuthenticated={setIsAuthenticated}/>} />
      <Route path='/header' element={isAuthenticated? <Header/>:<Login/>}/>
    <Route path='*' element={<Error/>} />
  </Routes>
    </>
  )
}

export default App
