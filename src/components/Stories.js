import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
function Stories() {
    const suggestion=[
        {
            id: 0,
            name:"sifuna",
            image:"1.jpg",
        },
        {
            id: 1,
            name:"mendel",
            image:"2.jpg",
        },
        {
            id: 2,
            name:"shegs",
            image:"3.jpg",
        },
        {
            id: 3,
            name:"mendel",
            image:"2.jpg",
        },
        {
            id: 4,
            name:"shegs",
            image:"3.jpg",
        },
        
    ];
    const image =suggestion[Math.floor(Math.random()*suggestion.length)].image;
    const aname =suggestion[Math.floor(Math.random()*suggestion.length)].name
    if(aname.length>10){
        aname = aname.substring(0,10) + "..."
    }
    return ( 
        <Container>
            <div className="a">
            <Avatar src={image} />
            </div>
            <div className="b">
            <span>{aname}</span>
            </div>
            
        </Container>
    )
}

export default Stories

const Container =styled.div`
max-width:600px;
margin: 0 auto;
background-color: #ffffff;
padding:10px 0;
display:flex;
flex-direction: column;
justify-content: center;
box-shadow:0 1px 2px 0 rgba(0 0 0 / 0.05);
    .a{
        border:3px dashed lineargradient(to right, #7f00ff, #e100ff);
        
        border-radius:50%;
        display:flex;
        align-items:center;
        flex-direction:column;
    
    svg{
        margin:0;
        width:100%;
        font-size:25px;
        cursor:pointer;
        
    }
    }
`;
