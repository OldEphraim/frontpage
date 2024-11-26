import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./Main.scss";
import image from "../assets/image.jpg";

const Main = () => {
  function handleWorkClick() {
    document
      .getElementById("TarotProject")
      .scrollIntoView({ behavior: "smooth" });
  }
  function handleContactClick() {
    document
      .getElementById("ContactForm")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="Main" id="Main">
      <div className="main-container">
        <div className="content">
          <div className="text">
            <p>Hey there!</p>
            <h1>I am Alan Garber</h1>
            <div className="p">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Poppins",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "22px",
                }}
                startDelay={2000}
                cursorColor="black"
                multiText={[
                  "Fullstack Developer",
                  "React and Angular",
                  "Typescript, Python, and Golang",
                  "Check out my projects!",
                ]}
                multiTextDelay={1500}
                multiTextLoop={true}
                typeSpeed={45}
                hideCursorAfterText={false}
              />
              <div className="input-cursor"></div>
            </div>
          </div>
          <div className="buttons">
            <div onClick={handleWorkClick} class="button">
              <button>See My Work</button>
            </div>
            <div onClick={handleContactClick} class="button">
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src={image} alt="This is a placeholder."></img>
        </div>
      </div>
      <div className="about-me" id="about-me">
        Welcome to my website! My name is Alan Garber, and I'm searching for a
        position as a web developer, open to both frontend and full-stack roles.
        While my professional experience lies in frontend development, I’ve
        expanded my skills to include backend technologies and am always eager
        to tackle new challenges. If you’re looking for a dedicated developer,
        feel free to connect or send me a message.
        <br /> <br /> My journey into web development began during the COVID
        lockdowns. While I initially pursued law at Washington University in St.
        Louis, my growing fascination with programming led me to explore
        JavaScript and Python, and eventually to specialize in React and
        TypeScript. In 2024, I took time off to pass the New York State Bar and
        deepen my backend knowledge, which culminated in building a full-stack
        tarot reading app. This project integrates Go for the backend,
        PostgreSQL for the database, and a JavaScript/React frontend. Hosted on
        an AWS EC2 instance and served by Nginx, it demonstrates my ability to
        bring together modern technologies in a functional and visually engaging
        application.
        <br /> <br /> In my previous role, I honed my skills in frontend
        development within an Agile Scrum environment, collaborating with
        cross-functional teams to deliver impactful projects. As I continue to
        grow in this field, I am excited to combine my frontend expertise with
        my newly acquired backend skills, contributing to innovative and
        meaningful software solutions.
        <br />
        <br />
      </div>
    </div>
  );
};

export default Main;
