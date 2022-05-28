import React from 'react';
import './Works.scss';

import imageHeader from '../assets/image-header.jpg';
import quiz from '../assets/quiz.jpg';
import streetMap from '../assets/streetmap.jpg'
import wordle from '../assets/wordle.png';

const Works = () => {
    return (
        <div className="works" id="Works">
                <div className="cards">
                    <img src={streetMap} alt="" />
                    <div className="project-explanation">
                      <li>Travel advisory website</li>
                      <li>Shows hotels, restaurants, and attractions near you</li>
                      <li>Built with React, Google Maps API, and Travel Advisor API</li>
                    </div>
                    <div className="button-container">
                    <a href="https://oldephraim.github.io/Google-Travel-Advisory" target="_blank" rel="noreferrer"><button>See Project</button></a>
                    <a href="https://github.com/OldEphraim/Google-Travel-Advisory" target="_blank" rel="noreferrer"><button>See GitHub</button></a>
                    <a href="https://oldephraimlearnstocode.wordpress.com/2022/05/25/travel-advisory-project-code-review/" target="_blank" rel="noreferrer"><button>See Blogpost</button></a>
                    </div>
                </div>
                <div className="cards">
                   <img src={quiz} alt="" />
                   <div className="project-explanation">
                    <li>Word association game</li>
                    <li>Built with React and Word Quiz API</li>
                   </div>
                   <div className="button-container">
                   <a href="https://oldephraim.github.io/Word-Quiz" target="_blank" rel="noreferrer"><button>See Project</button></a>
                   <a href="https://github.com/OldEphraim/Word-Quiz" target="_blank" rel="noreferrer"><button>See GitHub</button></a>
                   <a href="https://oldephraimlearnstocode.wordpress.com/2022/05/27/word-quiz-code-review/" target="_blank" rel="noreferrer"><button>See Blogpost</button></a>
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
                   <a href="https://oldephraim.github.io/React-Wordle" target="_blank" rel="noreferrer"><button>See Project</button></a>
                   <a href="https://github.com/OldEphraim/React-Wordle" target="_blank" rel="noreferrer"><button>See GitHub</button></a>
                   <a href="https://oldephraimlearnstocode.wordpress.com/2022/05/26/swordle-code-review/" target="_blank" rel="noreferrer"><button>See Blogpost</button></a>
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
                    <a href="https://oldephraim.github.io/Landing-Page/" target="_blank" rel="noreferrer"><button>See Project</button></a>
                    <a href="https://github.com/OldEphraim/Landing-Page/" target="_blank" rel="noreferrer"><button>See GitHub</button></a>
                    <a href="https://oldephraimlearnstocode.wordpress.com/2022/05/27/landing-page-code-review/" target="_blank" rel="noreferrer"><button>See Blogpost</button></a>
                    </div>
                </div>
            </div>
    )
}

export default Works;
