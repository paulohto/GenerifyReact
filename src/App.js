import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import './App.css';
import PlaylistList from './pages/playlists/PlaylistList';
import PlaylistsDetail from './pages/playlists/PlaylistsDetail';


function App() {
  return (

      <Router>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/playlists' element={<PlaylistList />}/> 
          <Route path='/playlists/:id' element={<PlaylistsDetail />}/> 
          <Route path='/faq' exact element={<Faq/>}/>
        </Routes>

        <Footer />
      </Router>

  );
}

export default App;
