import React from "react";
import styled from 'styled-components'
import logo from './logo.jpg';

const HeaderWrapper = styled.div`
    color: blue;
    font-size: 2rem;
    background-color: brown;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    `

const HeaderButton = styled.button`
    margin-left: 1rem;
    height: 3rem;
    flex-direction: column;
    justify-conent: center;
    border-radius: 1.5rem;
    font-size: 1.75rem;
    color: red;
    background-color: black;
    
    transition: background-color 1s , color 1s;

    :hover{
        background-color: white;
        color: black:
    }

`
const ButtonContainerWrapper = styled.div`
    
`

function ButtonContainer(){
    return (<ButtonContainerWrapper>
<HeaderButton>
           Home
             </HeaderButton>
             <HeaderButton>
                Projetcs
             </HeaderButton>
             <HeaderButton>
            About
             </HeaderButton>
             <HeaderButton>
          Contact
             </HeaderButton>
    </ButtonContainerWrapper>)
}

const LogoContainerWrapper = styled.div`
    img{
        height: 5rem;
        width: 5rem;
        border-radius: 2.5rem;
        border: white solid 10px
    }
    img:hover{
        cursor: pointer;
    }
`
function LogoContainer(){
    return(<LogoContainerWrapper>
         <img src ={logo} /> 
    </LogoContainerWrapper>)
}

function Header(){
    return(
    <HeaderWrapper>

<LogoContainer />
        <ButtonContainer />
    </HeaderWrapper>
    )
        
}

export default Header;