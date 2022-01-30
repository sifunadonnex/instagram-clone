import React from 'react'
import {useState} from 'react'
import {FavoriteBorder,Share, MoreHorizOutlined, SendOutlined} from "@mui/icons-material"
import {Avatar} from "@mui/material"
import styled from 'styled-components'

function PostList() {
    const [shorten, setShorten]=useState(false)
    const p="alll the great awesome deeds, we are very foertunate to have a very willingg and able  young man who can easily cooperate and colaborate with anyone"
    const pars=!shorten ? p.slice("","100"):p;
    
    return (
        <Container>
            <PostHeader>
                <User>
                    <Avatar>
                        
                    </Avatar>
                    <span>sifuna</span>
                </User>
                <MoreHorizOutlined />
            </PostHeader>
            <PostContainer>
                <img loading="lazy" src="1.jpg"></img>
            </PostContainer>
            <Social>
                <FavoriteBorder />
                <SendOutlined className="plane" />
                <Share />
            </Social>
            <Caption>
                <div>
                    <span>
                    <strong>sifuna</strong>
                    <p>{pars}{!shorten ?(
                        <>
                        <Button onClick={()=>setShorten(true)}>Read More</Button>
                        </>
                    ):(
                        <>
                        <Button onClick={()=>setShorten(false)}>Read Less</Button>
                        </>
                    )}</p>
                    </span>
                </div>
            </Caption>
            <CommentDisplay>

            </CommentDisplay>
            <CommentSections>
                <Avatar />
                <InputContainer>
                    <input type="text" />
                    
	                <div class="b"></div>
                
                </InputContainer>
                <Button>Post</Button>
            </CommentSections>
        </Container>
    )
}

export default PostList
const Container =styled.div`
    max-width:600px;
    margin-top:10px;
    margin: 0 auto;
    background-color: #ffffff;
    padding:10px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border:1px solid rgba(219,219,219,1);
    box-shadow:0 1px 2px 0 rgba(0 0 0 / 0.05);

`;
const PostHeader=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:5px 5px;
    :hover{
        cursor:pointer;
    }
`;
const User=styled.div`
    display:flex;
    align-items: center;
    span{
        margin-left:10px;
        font-weight: bold;
    }
`;

const PostContainer=styled.div`
    width:100%;
    img{
        width:100%;
        object-fit: contain;
    }
`;
const Social=styled.div`
    display:flex;
    align-items:center;
    svg{
        margin:0 10px;
        font-size:25px;
        cursor:pointer;
    }
    .plane{
        transform:rotate(-45deg);
    }
`;
const Caption=styled.div`
    display:flex;
    margin:10px 0;
    div{
        display:flex;
        align-items:center;
        span{
            dispaly:flex;
            margin-left:5px;
            color:black;
        }
        p{
            font-size:14px;
            line-height:18px;
            flex-wrap:wrap;
            max-width:490px;
            margin-left:10px;
            color:rgba(75,85,99,1);
        }
    }
`;
const CommentDisplay=styled.div`
    
`;
const CommentSections=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:5px 0;
    div{
        margin:0 5px;
    }
    button{
        margin:0 5px;
        padding:15px;
        color:rgba(96,165,250,1);
        font-weight:bold;
    }
`;

const Button=styled.button`
    border-radius:20px;
    border:none;
    background-color:transparent;
    font-weight:bold;
    cursor:pointer;
    margin-left:4px;
    outline:none;
    :hover{
        text-decoration:underline;
    }
`;
const InputContainer=styled.div`
    flex:1;
    display:flex;
    align-items: center;
    display:inline-block;
    position:relative;
    input{
        width:100%;
        border:none;
        
        border-bottom:1px solid rgba(107,114,128,1);
        :focus{
            outline:none;
        }
    }
    .b{
        margin:0;
        display:absolute;
        height:3px;
        width:100%;
        top:100%;
        background:rgba(107,114,128,1);
        transform:scaleX(0);
        transition:transform 0.5s;
        transform-origin:0% 50%;
        }
        input:focus + .b, :focus .b {
        transform:scaleX(1);
        }
`;