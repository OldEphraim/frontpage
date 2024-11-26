import React from "react";
import "./Works.scss";

import hotAndCold from "../assets/hot-and-cold.png";
import imageHeader from "../assets/image-header.jpg";
import magicBanner from "../assets/magic-banner.jpg";
import quiz from "../assets/quiz.jpg";
import streetMap from "../assets/streetmap.jpg";
import wordle from "../assets/wordle.png";

const Works = () => {
  return (
    <div className="works" id="Works">
      <div className="cards">
        <img src={magicBanner} alt="" />
        <div className="project-explanation">
          <li>Magic: The Gathering card lookup website</li>
          <li>Built with Angular and MTG Developers API</li>
          <li>
            Showcases use of routing, state, dependency injection, and pipes in
            Angular
          </li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/Magic-The-Gathering"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/Magic-The-Gathering"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/06/06/magic-the-gathering-card-lookup-site-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <img src={streetMap} alt="" />
        <div className="project-explanation">
          <li>Travel advisory website</li>
          <li>Shows hotels, restaurants, and attractions near you</li>
          <li>Built with React, Google Maps API, and Travel Advisor API</li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/Google-Travel-Advisory"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/Google-Travel-Advisory"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/05/25/travel-advisory-project-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <img src={hotAndCold} alt="" />
        <div className="project-explanation">
          <li>Weather app</li>
          <li>Shows weather anywhere on Earth 3 hours from now</li>
          <li>Built with Angular and Open Weather API</li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/Angular-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/Angular-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/06/03/weather-app-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <img src={wordle} alt="" />
        <div className="project-explanation">
          <li>Swordle; clone of popular Internet phenomenon Wordle</li>
          <li>Built with React and CSS</li>
          <li>Showcases knowledge of React hooks</li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/React-Wordle"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/React-Wordle"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/05/26/swordle-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <img src={quiz} alt="" />
        <div className="project-explanation">
          <li>Word association game</li>
          <li>Built with React and Word Quiz API</li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/Word-Quiz"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/Word-Quiz"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/05/27/word-quiz-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <img src={imageHeader} alt="" />
        <div className="project-explanation">
          <li>Landing page for Sunnyside Agency</li>
          <li>Built with HTML, CSS, and JavaScript</li>
          <li>Responsive web design</li>
        </div>
        <div className="button-container">
          <a
            href="https://alanmgarber.com/Landing-Page/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Project</button>
          </a>
          <a
            href="https://github.com/OldEphraim/Landing-Page/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See GitHub</button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2022/05/27/landing-page-code-review/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Blogpost</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
