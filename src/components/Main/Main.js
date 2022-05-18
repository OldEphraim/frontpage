import React from 'react';
import './Main.scss';
import placeholderImage from '../assets/placeholderImage.jpg';
import image from '../assets/image.jpg';

const Main = () => {
  return (
    <div className="Main" id="Main">
      <div className="main-container">
      <div className="content">
        <div className="text">
            <p>Hey there</p>
            <h1>I am Alan Garber</h1>
            <p>FrontEnd & React Web Developer</p>
          </div>
        <div className="buttons">
          <a href="https://github.com/OldEphraim" target="_blank" rel="noreferrer"><button>See My Work</button></a>
          <a href="https://oldephraimlearnstocode.wordpress.com/contact/" target="_blank" rel="noreferrer"><button>Hire Me</button></a>
        </div></div>
        <div className="main-image">
          <img src={image} alt="This is a placeholder."></img>
        </div>
      </div>
    </div>
  )
}

export default Main;
