import '../styles/quina.css';
import trevoQuina from "../assets/trevo-quina.png";
import { UseContexto } from '../hooks';

function Quina() {

    const {quina} = UseContexto();

    return (
        <div className="container">
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={trevoQuina}
                            alt='trevo-quina'
                        />
                        <div className='text-quina'>QUINA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {quina.dataProximoConcurso}:
                    </p>

                    <div className='text-premio-quina'>
                        R${quina.valorEstimadoProximoConcurso}
                    </div>

                </div>
                <div className='column' style={{marginLeft:'-8rem'}}>
                    {quina.dezenas.map(item => (
                        <div className='circle-quina'>{item.split('')}</div>
                    ))}
                    
                    <div className='text-acc'>{quina.quantidadeGanhadores} GANHADORES!</div>

                    <p>
                        Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Quina;