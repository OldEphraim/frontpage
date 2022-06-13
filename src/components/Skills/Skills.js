import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faAngular, faSass, faNodeJs, faPython, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';

const Skills = () => {
  return (
    <div className="Skills">
    <div className="skill-content">
      <figure className="content"><FontAwesomeIcon icon={faHtml5} size="3x" /><figcaption>HTML</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faCss3} size="3x" /><figcaption>CSS</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faJs} size="3x" /><figcaption>JavaScript</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faReact} size="3x" /><figcaption>React</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faAngular} size="3x" /><figcaption>Angular</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faSass} size="3x" /><figcaption>Sass</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faNodeJs} size="3x" /><figcaption>Node.js</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faCodeCommit} size="3x" /><figcaption>Bash</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faPython} size="3x" /><figcaption>Python</figcaption></figure>
      <figure className="content"><FontAwesomeIcon icon={faBootstrap} size="3x" /><figcaption>Bootstrap</figcaption></figure>
    </div>
    </div>
  )
};

export default Skills;
