import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Main.scss';
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
            <p>Hey there!</p>
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

      My journey into web development began during the COVID lockdowns. While I initially pursued law at Washington University in St. Louis, my growing fascination with programming led me to explore JavaScript and Python, eventually specializing in React and Angular. This transition marked the beginning of a fulfilling career in software engineering, where I’ve been able to combine my problem-solving skills with my love for creating innovative solutions.<br/><br/>

      In my previous role, I honed my skills in frontend development within an Agile Scrum environment. This experience not only deepened my expertise in modern web technologies but also allowed me to collaborate effectively with cross-functional teams. As I continue to grow in this field, I am excited to embrace new challenges and contribute to impactful projects in the web development landscape.<br/><br/>
      </div>
    </div>
  )
}

export default Main;
