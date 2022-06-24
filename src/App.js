import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container'
import Logo from './components/logo/Logo'
import Home from './pages/home/Home';
import Adicionar from './pages/adicionar/Adicionar';
import Entregas from './pages/entregas/Entregas';



function App() {
  

  return (
    <Router>
      <Logo/>

      
      <Container>
      <div className='displayContentMain'>

          <Navbar/>

          <div className='contentMain'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/adicionar" element={<Adicionar />} />
              <Route path="/entregas" element={<Entregas />} />
            </Routes>
          </div>
          
      </div> 
      </Container>    
       

    </Router>
    
    
  )
}

export default App;
