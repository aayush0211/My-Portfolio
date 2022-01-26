import React from "react";
import styled from "styled-components";
import github_icon from './icons/github.png'
import linkedin_icon from './icons/linkedin.png'
import twitter_icon from './icons/twitter-sign.png'
import gmail_icon from './icons/gmail.png'

const FooterWrapper = styled.div`
    background-color: aquamarine;
    font-size: 1rem;
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .icon-container{
    a{
      margin: 1rem;
        img{
            height: 2.5rem;
            width: 2.5rem;
           
        }
    }    
}
`

function Footer(){
    return(
        <FooterWrapper>
            <div className = "icon-container">
         <a href="https://github.com/aayush0211">
             <img src = {github_icon} />
         </a>
         <a href="https://www.linkedin.com/in/aayush-kumar-0a27161b8/">
             <img src = {linkedin_icon} />
         </a>
         <a href="mailto:ayushfeb2000@gmail.com">
             <img src = {gmail_icon} />
         </a>
         <a href="https://twitter.com/Aayushk01">
             <img src = {twitter_icon} />
         </a>
         </div>
         © copyright 2022
        </FooterWrapper>

    )
}

export default Footer;