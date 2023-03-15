import {  livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CarRecomenda from '../CardRecomenda'
import styled from 'styled-components'
import imagemLivro  from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos (){
    return(
    <UltimosLancamentosContainer>
        <Titulo
         cor="#EB9B00" 
         tamanhoFonte="36px ">
            Ultimos Lançamentos
            </Titulo>
            

        <NovosLivrosContainer>
        {livros.map (livro => (
            <img src={livro.src} />
        ))}
        </NovosLivrosContainer>
       <CarRecomenda
       titulo="Talvez voce se interesse"
       subtitulo="Angular11"
       descricao="Contruindo uma aplicaçao com a plataforma google"
       img={imagemLivro}
       />
             <CarRecomenda
       titulo="Ou Talvez voce se interesse"
       subtitulo="Angular13"
       descricao="Contruindo uma aplicaçao com angular"
       img={imagemLivro}
       />
    </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos