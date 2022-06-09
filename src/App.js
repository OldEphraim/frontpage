import React from 'react';
import './App.scss';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Skills from './components/Skills/Skills.js';
import Works from './components/Works/Works.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Skills />
    <Works />
    <ContactForm />
    <Footer />
    </>
  );
}

export default App;
