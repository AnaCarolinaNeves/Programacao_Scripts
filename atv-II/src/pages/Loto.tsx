import '../styles/lotoFacil.css'
import { UseContexto } from '../hooks';
import LotoFacil from '../components/LotoFacil';
import Loading from '../components/Loading';

function Loto() {
    const { lotofacil } = UseContexto();

    return(
        <>
            {lotofacil.dataApuracao ? <LotoFacil/> : <Loading/>}
        </>
    )
}

export default Loto;