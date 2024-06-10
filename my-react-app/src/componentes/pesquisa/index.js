import styled from 'styled-components'

const PesquisaContainer = styled.section`
    color:black;
    font-size:20;
    text-align: center;
    padding: 50px 0;
    height:100px;
    width:100%;
`

const Titulo = styled.h2`
    font-size:16px;
    font-weight:500;
    margin-bottom:10px;
`

const Input = styled.input`

`


function Pesquisa() {
    return(    
        <PesquisaContainer>
            <Titulo>Pesquisar</Titulo>
            <Input
                placeholder='Pesquise aqui'  
                          
            />
        </PesquisaContainer>    
    )
}

export default Pesquisa;