import '../styles/megaSena.css';
import trevoMega from "../assets/trevo-megasena.png";
import { UseContexto } from '../hooks';

function MegaSena() {

    const {megasena} = UseContexto();

    // function acumulou() {
    //     if (megasena.acumulado == true){
    //         return <div className='text-acc'>ACUMULOU!</div>
    //     }else{
    //         return <div className='text-acc'>NÃO ACUMULOU!</div>
    //     }
    // }

    return (
        <div className="container">
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={trevoMega}
                            alt='trevo-megasena'
                        />
                        <div className='text-megasena'>MEGA-SENA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:
                    </p>

                    <div className='text-premio'>
                        {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>

                </div>
                <div className='column' style={{marginLeft:'-8rem'}}>
                    {megasena.dezenas.map(item => (
                        <div className='circle'>{item.split('')}</div>
                    ))}
                    
                    <div className='text-acc'>{megasena.quantidadeGanhadores} GANHADORES!</div>

                    <p>
                        Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default MegaSena;