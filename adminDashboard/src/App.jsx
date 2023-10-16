import './App.css'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Ecommerce from './components/Ecommerce'
import { Route,Routes } from 'react-router-dom'
import Orders from './pages/Orders'
import Employes from './pages/Employes'
function App() {

  return (
    <>
    
    <Nav/>
    <Routes>
      <Route path='/' Component={Ecommerce} />
      <Route path='/ecommerce' Component={Ecommerce} />
      <Route path='/orders' Component={Orders} />
      <Route path='/employees' Component={Employes} />
    </Routes>
    </>
  )
}

export default App
