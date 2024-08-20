import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Users from './Components/Users/Users';

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <div className="container">
              <Title subTitle='Our SERVICES' title='What We Offer' />
              <Programs />
              <About setPlayState={setPlayState} />
              <Title subTitle='Gallery' title='Popular Destination' />
              <Gallery />
              <Title subTitle='TESTIMONIALS' title='What Clients Says' />
              <Testimonials />
              <Title subTitle='Contact Us' title='Get in Touch' />
              <Contact />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
            
          </div>
        } />
        <Route path="/login" element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin" element={isAuthenticated ? <Users /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
