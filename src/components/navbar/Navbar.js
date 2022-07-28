import {NavLink} from 'react-router-dom'
import Container from '../container/Container'
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">    
        
          <Container>
                <ul>
                    <li><NavLink to="/home">Pedidos</NavLink></li>
                    <li><NavLink to="/entregas">Entregas</NavLink></li>
                    <li><NavLink to="/">Relatórios</NavLink></li>
                </ul>
          </Container>
          
      </nav>
    )
}

export default Navbar