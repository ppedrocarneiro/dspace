import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/uniateneulogo.png'

function Navbar(){
return(
    <nav class ={styles.navbar}>
    <Container>
        <Link to="/">
            <img  class ={styles.img} src={logo} alt="Uniataneu"/>
        </Link>
   <ul class ={styles.list}>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/documentacao">Documentacao</Link>
    </li>
    <li>
    <Link to="/MinhasDocumentacoes">MinhaDocumentacoes</Link>
    </li>
   </ul>
   </Container>
  </nav>
 
)
}

    
    
    
    
export default Navbar