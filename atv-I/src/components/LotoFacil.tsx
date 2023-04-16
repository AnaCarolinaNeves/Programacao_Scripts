import '../styles/lotoFacil.css'
import trevoLoto from "../assets/trevo-lotofacil.png";
import { UseContexto } from '../hooks';

function LotoFacil() {

    const { lotofacil } = UseContexto();

    const arrayDezenas = lotofacil.dezenas;
    const rows = []

    for (let i = 0; i < arrayDezenas.length; i += 5) {
        rows.push(arrayDezenas.slice(i, i + 5));
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={trevoLoto}
                            alt='trevo-lotofacil'
                        />
                        <div className='text-lotofacil'>LOTOFÁCIL</div>
                    </div>

                    <p style={{ marginLeft: '45px' }}>
                        Estimativa de prêmio do próximo <br /> concurso. Sorteio em {lotofacil.dataProximoConcurso}:
                    </p>

                    <div className='text-premio-loto'>
                        R${lotofacil.valorEstimadoProximoConcurso}
                    </div>
                </div>
                <div>
                </div>
                <div className='column'>
                    {rows.map(rowLoto => (
                        <>
                            <div className='row-numbers-loto'>
                                {rowLoto.map(item => (
                                    <div className='numbers-loto'>{item}</div>
                                ))}
                            </div>
                            <hr className='line' />
                        </>
                    ))}
                    <div className='text-acc'>{lotofacil.quantidadeGanhadores} GANHADORES!</div>
                    <p>
                        Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LotoFacil;