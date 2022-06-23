import {Link} from 'react-router-dom'
import Container from '../container/Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
      <nav className={styles.navbar}>    
        
          <Container>
                <ul className={styles.list}>
                    <li><Link to="/">Pedidos</Link></li>
                    <li><Link to="/">Entregas</Link></li>
                    <li><Link to="/">Relatórios</Link></li>
                </ul>
          </Container>
          
      </nav>
    )
}

export default Navbar