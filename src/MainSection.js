import React from "react";
import styled from 'styled-components';
import pic from './pic.jpeg';

const MainSectionWrapper = styled.div`
    display:flex;
    background-color:bisque;
    padding: 5rem;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items:center;
    

    img{
        height:10rem;
        width:10rem;
        object-fit:cover;
    }
    .about{
        .content{
            font-size: 0.7rem;
        }
        margin-left: 2rem;
        width: 10rem;
    }
    .left{
        width:10rem;
        font-size: 2rem;
        font-family: cursive;
    }

`

function MainSection(){
    return(<MainSectionWrapper>

        <div className = 'left'>
        <h4>Aayush Kumar</h4>
        <img src ={pic} />
        </div>
        
        <div className = 'about'>
        
        <h5>Software Developer</h5>

        <div className="content">Worked as a Web Developer at KIIT. Mostly
interested in Systems Engineering and backend
development. Worked at numerous technical
societies of KIIT developing, maintaining and
deploying their projects </div>
        </div>
    </MainSectionWrapper>)

}

export default MainSection;