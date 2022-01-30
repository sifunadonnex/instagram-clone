import {React,useEffect} from 'react';
import Post from './pages/Post'
import Home from './pages/Home'
import styled from 'styled-components'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import { onAuthStateChanged } from 'firebase/auth';
import{auth} from './firebase/firebase'
import{useDispatch} from "react-redux"
import{setLogin} from './features/User/userSlice'
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth,async (user) => {
      if(user){
        dispatch(
          setLogin({
            name: user.name,
            photo: user.photo,
            email: user.email,
            uid: user.uid
          })
        )
      }
    })
  }, []);
    return (
      <Container>
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
            <Post />
        </Router>
      </Container>
    );
}

export default App;
const Container=styled.div``;