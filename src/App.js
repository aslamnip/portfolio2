import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import TestmonioalPage from './components/TestmonialPage/TestmonialPage';
import ContactPage from "./components/ContactPage/ContactPage"
import Error from "./components/Erorr/Error"
import Footer from './components/Footer/Footer';




function App() {
  return (
    <Router basename='/portfolio'>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route exact path='/portfolio/' element={<Home />} />
          <Route exact path='/portfolio/about' element={<AboutPage />} />
          <Route exact path='/portfolio/projects' element={<ProjectsPage />} />
          <Route exact path='/portfolio/testmonial' element={<TestmonioalPage />} />
          <Route exact path='/portfolio/contact' element={<ContactPage />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;