
import Logo from '../logo'
import OpecoesHeander from '../OpcoesHeader/index'
import Icones from '../icones/index'
import styled  from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
  
  
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpecoesHeander />
            <Icones />

        </HeaderContainer>


    )
}

export default Header