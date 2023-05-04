import { mega, time, qui } from '../../styles/theme';
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";

export function Menu() {
    const current_page = useLocation().pathname;

    return (
        <Wrapper>
            <Title>
                {current_page === "/timemania" ? <Active to="/timemania">Timemania</Active> : <Page color={time.loteria} to="/timemania">Timemania</Page>}
            </Title>

            <Title>
                {current_page === "/megasena" ? <Active to="/megasena">Megasena</Active> : <Page color={mega.loteria} to="/megasena">Megasena</Page>}
            </Title>

            <Title>
                {current_page === "/quina" ? <Active to="/quina">Quina</Active> : <Page color={qui.loteria} to="/quina">Quina</Page>}
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-left: 25px;
    margin-bottom: 35px;
`
const Title = styled.text`
    font-weight: bold;
    margin-right: 20px;
    text-decoration: none;
    font-size: large;
`
const Active = styled(Link)`
    color: #ddd;
    pointer-events: none;
    text-decoration: none;
`

const Page = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
`