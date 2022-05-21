import React from 'react';
import './App.scss';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Works from './components/Works/Works.js';
import ContactForm from './components/ContactForm/ContactForm.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Works />
    <ContactForm />
    <Footer />
    </>
  );
}

export default App;
