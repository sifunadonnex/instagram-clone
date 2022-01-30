import React from 'react'
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import Stories from '../components/Stories'
function Story() {
    // const [selected,setSelected] =useState([])
    // useEffect(() =>{
    //     const suggestion=[
    //         {
    //             id: 0,
    //             name:"sifuna",
    //             image:"1.jpg",
    //         },
    //         {
    //             id: 1,
    //             name:"mendel",
    //             image:"2.jpg",
    //         },
    //         {
    //             id: 2,
    //             name:"shegs",
    //             image:"3.jpg",
    //         }
    //     ];
    //     setSelected(suggestion);
    // },[]);
    return (
        <Container>
            {/* {selected.map(profile =>
                <Stories />
            )} */}
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
        </Container>
    );
}

export default Story

const Container =styled.div`
    max-width:600px;
    margin: 0 auto;
    background-color: #ffffff;
    padding:10px 0;
    display:flex;
    justify-content: center;
    border:1px solid rgba(219,219,219,1);
    box-shadow:0 1px 2px 0 rgba(0 0 0 / 0.05);
`;