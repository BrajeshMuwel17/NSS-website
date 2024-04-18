
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import Activities from './components/activities';
import Profile from './components/Profile';
import Xyz from './components/ActivityCard';
import Login from './components/LoginPage';
import Post from './components/Post';
import Member from './components/Member';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
function App() {

  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/members').then((response) => {
      setMembers(response.data);
    });
  }, []);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<NavBar posts={posts} members={members} />} />
          {/* <Route path="" element={<Activities posts={posts} />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/member" element={<Member />} />
          <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
    {/* <NavBar></NavBar>
    <Activities posts={posts}>  </Activities>
    <Xyz></Xyz>
    <Profile members={members}>  </Profile>
    <Footer></Footer> */}
    {/* <Login></Login>
    <Post></Post>
    <Member></Member> */}
    
   
    {/* <div style={{height:'1000px'}} ></div> */}
    </>
   
  );
}

export default App;
