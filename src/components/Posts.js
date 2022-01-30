import React from 'react'
import styled from "styled-components" 
import PostList from "../components/PostList"
function Posts() {
    return (
        // <Container>
        //     <Wrapper>
        //         <TopSection>

        //         </TopSection>
        //         <BottomSection>

        //         </BottomSection>
        //     </Wrapper>
        // </Container>
        <div>
            <PostList />
        </div>
    )
}

export default Posts

const Container =styled.div``;
const Wrapper =styled.div``;
const TopSection =styled.div``;
const BottomSection =styled.div``;