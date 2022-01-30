import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import {AddCircleOutline,FavoriteBorderRounded,HomeRounded, SendRounded,Search} from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from '../firebase/firebase'
import { selectName,selectPhoto,setLogin } from '../features/User/userSlice';
function Header() {
    const username =useSelector(selectName);
    const photo=useSelector(selectPhoto);
    const dispatch= useDispatch();
    const Login=async() => {
        await signInWithPopup(auth,provider).then((result)=>{
            const user=result.user;
            dispatch(setLogin({
                name:user.displayName,
                email:user.email,
                uid:user.uid,
                photo:user.photoURL,
            })
            );
        });

    };

    return (
        <Container>
            <Wrapper>
                <HeaderLogo>
                    <img src="ig.png"></img>
                </HeaderLogo>
                <SearchContainer>
                    <Search />
                    <input type="search" placeholder="Search" />
                </SearchContainer>
                <HeaderRight>
                    {username ? (
                        <>
                            <SendRounded className="rotate" />
                            <Down>
                                <List>
                                    <HomeRounded />
                                </List>
                                <List>
                                    <AddCircleOutline />
                                </List>
                                <List>
                                    <FavoriteBorderRounded />
                                </List>
                                <List>
                                    <Avatar src={photo} />
                                </List>
                            </Down>
                        </>
                    ):(
                        <Buttons onClick={Login}>SignIn</Buttons>
                    )}
        
                    
                </HeaderRight>
            </Wrapper>
        </Container>
    );
}

export default Header;
const Container =styled.div`
    height:3.375rem;
    background:#ffffff;
    border-bottom:1px solid rgba(219,219,219,1);
    position:sticky;
    top:0;
    z-index:9999;
`;
const Wrapper =styled.div`

    @media (min-width:1024px){
        max-width:62rem;
        margin:0 auto;
    }
    margin:0 0.599rem;
    display:flex;
    height:100%;
    align-items:center;
    justify-content:space-between;
`;
const HeaderLogo =styled.div`
    display:flex;
    align-items:center;
    img{
        object-fit: contain;
        width:100%;
    }
`;
const SearchContainer =styled.div`
    
    display:none;
    @media (min-width:1024px){
        display:inline-flex;
    }
    align-items:center;
    color:rgb(219,219,219,1);
    border:1px solid rgba(219,219,219,1);
    padding:0.3125rem 0.3135rem ;
    border-radius:4px;
    svg{
        height:1.25rem;
    }
    input{
        border:none;
        height:100%;
        background-color:transparent;

    }
    :focus{
        outline:none;
    }
`;
const HeaderRight =styled.div`
    display:flex;
    align-items:center;
`;
const Down =styled.div`
@media (max-width:1024px){
    position:fixed;
    bottom:0;
    background:white;
    left:0;
    right:0;
    display:flex;
    justify-content:space-between;
    border-top:1px solid rgba(219,219,219,1);
    padding:10px 10px;

}
    display:flex;
    align-items:center;
`;
const List =styled.li`
    list-style-type:none; 
    margin:0 1rem;
    svg{
        font-size:1.5625rem;
        cursor:pointer;
        
    }
    .rotate{
        transform:rotate(-45deg);
    }
`;
const Buttons=styled.div`
    padding:10px 20px;
    border-radius:20px;
    border:none;
    font-weight:600;
    color:white;
    cursor:pointer;
    background-color:rgba(59,130,246,1);
`;