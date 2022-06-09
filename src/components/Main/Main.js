import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Main.scss';
import placeholderImage from '../assets/placeholderImage.jpg';
import image from '../assets/image.jpg';

const Main = () => {
  function handleWorkClick () {
    document.getElementById("Works").scrollIntoView({behavior: "smooth"});
  }
  function handleContactClick () {
    document.getElementById("ContactForm").scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className="Main" id="Main">
      <div className="main-container">
      <div className="content">
        <div className="text">
            <p>Hey there</p>
            <h1>I am Alan Garber</h1>
            <div className="p"><TypeWriterEffect
   textStyle={{
     fontFamily: 'Poppins',
     color: 'black',
     fontWeight: 500,
     fontSize: '22px',
   }}
   startDelay={2000}
   cursorColor="black"
   multiText={[
     'Frontend Developer',
     'React Developer',
     'Angular Developer',
     'Check out my projects!',
   ]}
   multiTextDelay={1500}
   multiTextLoop={true}
   typeSpeed={45}
   hideCursorAfterText={false}
 /><div className="input-cursor"></div></div>
          </div>
        <div className="buttons">
          <div onClick={handleWorkClick} class="button"><button>See My Work</button></div>
          <div onClick={handleContactClick} class="button"><button>Hire Me</button></div>
        </div></div>
        <div className="main-image">
          <img src={image} alt="This is a placeholder."></img>
        </div>
      </div>
      <div className="about-me" id="about-me">
      Welcome to my website! My name is Alan Garber, and I'm searching for a position as a frontend web developer. I'm always open to an opportunity, so feel free to connect or send me a message.<br/><br/>

      Since I was young, I've had a passion for learning new skills. I learned English as a second language as an elementary schooler, and Spanish as a third language as a high schooler. As an undergraduate, I completed minors in 7 different subjects.<br/><br/>

      Unsure of where to go next, I attended law school at Washington University in St. Louis, Missouri from 2019 to 2022. However, during the COVID lockdowns, I found myself sitting in front of a screen more than ever before, and discovered my passion for web development. After learning to program in JavaScript and Python, I learned to build applications using React and Angular. I love software engineering, and I'm excited to begin my journey as a web developer!<br/><br/>
      </div>
    </div>
  )
}

export default Main;
