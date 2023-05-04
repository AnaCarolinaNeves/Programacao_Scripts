import '../styles/megaSena.css';
import { UseContexto } from '../hooks';
import MegaSena from '../components/MegaSena';
import Loading from '../components/Loading';

function Mega() {
    const {megasena} = UseContexto();

    return(
        <>
            {megasena.dataApuracao ? <MegaSena /> : <Loading />}
        </>
    )
}

export default Mega;