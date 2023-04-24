import { Link, useLocation } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {

    const current_page = useLocation();

    return (
        <div className='container-nav'>
            <Link className={current_page.pathname === '/lotofacil' ? 'active nome-lotofacil' : 'nome-lotofacil'} to='/lotofacil'>Lotofácil</Link>
            <Link className={current_page.pathname === '/megasena' ? 'active nome-megasena' : 'nome-megasena'} to='/megasena'>Megassena</Link>
            <Link className={current_page.pathname === '/quina' ? 'active nome-quina' : 'nome-quina'} to='/quina'>Quina</Link>
        </div>
    )
}

export default NavBar;