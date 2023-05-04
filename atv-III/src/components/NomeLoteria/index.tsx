import styled from 'styled-components';

export function NomeLoteria({ trevo, alt, color, name }: any) {
    return (
        <Wrapper>
            <ImgTrvo>
                <img src={trevo} alt={alt} />
            </ImgTrvo>
            <Text style={{ color: color }}>{name}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

const ImgTrvo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

const Text = styled.div`
    margin-left: 10px;
    color: #209869;
    font-weight: bold;
    font-size: x-large;
`
