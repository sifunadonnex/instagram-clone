import React, {useEffect,useState} from 'react'
import styled from "styled-components" 
import PostList from "../components/PostList"
import db from "../firebase/firebase"
import {collection,onSnapshot,orderBy,query} from "firebase/firestore"
function Posts() {
    const [selected,setSelected]=useState([])
    useEffect(() =>{
        return onSnapshot(
            query(collection(db,"insta"), orderBy("timestamp","desc")),
            (snapshot) =>{
                setSelected(snapshot.docs)
            }
        )
    },[])

    return (
        
        <div>
            {selected.map((post)=>(
                <PostList key={post?.id} p={post?.data().caption} 
                name={post.data().name} 
                avatar={post.data().avatar} 
                email={post.data().email} 
                id={post.id} 
                img={post.data().photo} 
                />
            ))}
        </div>
    )
}

export default Posts

const Container =styled.div``;
const Wrapper =styled.div``;
const TopSection =styled.div``;
const BottomSection =styled.div``;