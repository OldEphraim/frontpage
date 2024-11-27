import React from "react";
import "./Works.scss";

import magicBanner from "../assets/magic-banner.jpg";
import quiz from "../assets/quiz.jpg";
import streetMap from "../assets/streetmap.jpg";
import wordle from "../assets/wordle.png";

const Works = () => {
  return (
    <>
      <div className="works-header">
        <p>
          Please note that the projects in this section have not been
          consistently maintained since summer 2022, and they reflect the level
          of quality I produced before gaining professional experience. Some are
          better than others, but the Tarot Project is the best reflection of
          where my skills are right now.
        </p>
      </div>
      <div className="works" id="Works">
        <div className="cards">
          <img src={magicBanner} alt="" />
          <div className="project-explanation">
            <li>Magic: The Gathering card lookup website</li>
            <li>Built with Angular and MTG Developers API</li>
            <li>
              Showcases use of routing, state, dependency injection, and pipes
              in Angular
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
      </div>
    </>
  );
};

export default Works;
