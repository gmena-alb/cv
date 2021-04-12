import * as React from "react"
import styled from "styled-components"
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGit,
  FaGitlab,
  FaCloud,
  FaPhp,
  FaJava,
  FaDatabase,
  FaJira,
  FaDocker,
  FaNpm,
} from "react-icons/fa"

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .skills {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
  }
  .card {
    border: 4px solid #23805f;
    display: flex;
    z-index: 3;
    justify-content: center;
    flex-direction: column;
    background: #222831;
    border-radius: 5px;
    position: relative;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
    &:hover .sub-card {
      opacity: 1;
    }
    h4 {
      margin-bottom: 0.5rem;
      padding: 1rem 2rem;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.2rem;
      background: linear-gradient(to right bottom, #f8ff00 0%, #3ad59f 100%);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    div {
      display: flex;
      justify-content: center;
      padding: 0 3rem 2rem 3rem;
      & > *:not(:last-child) {
        margin-right: 1.5rem;
      }
      & > * {
        transition: all 0.2s;
      }
      & > *:hover {
        transform: scale(1.1) translateY(-0.2rem);
      }
    }
    .sub-card {
      opacity: 0;
      color: #222831;
      transition: all 0.5s;
      position: absolute;
      font-size: 1.5rem;
      left: -118px;
      padding: 0.5rem;
      min-width: 98px;
      background: #d7d8d9;
      box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    }
  }
  .technical-skills {
    font-size: 3.5rem;
  }
  .other-skills {
    font-size: 1.5rem;
    color: white;
    .card {
      padding: 1rem 2rem;
      line-height: 2.1rem;
      h4 {
        padding: 0;
      }
    }
  }
`

const Skills = () => (
  <section id="skills" className="light">
    <SkillsWrapper>
      <h2>SKILLS</h2>
      <article className="skills">
        <div className="technical-skills">
          <div className="card">
            <h4>Technical Skills</h4>
            <div>
              <FaHtml5 className="html" />
              <FaCss3Alt className="css" />
              <FaJsSquare className="javascript" />
              <FaReact className="react" />
            </div>
            <div>
              <FaSass className="sass" />
              <FaPhp className="php" />
              <FaJava className="java" />
            </div>
            <ul className="sub-card">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Sass</li>
              <li>PHP</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="card">
            <h4>Tools</h4>
            <div>
              <FaCloud className="cloud" />
              <FaGit className="git" />
              <FaGitlab className="gitlab" />
              <FaDocker className="docker" />
            </div>
            <div>
              <FaNpm className="npm" />
              <FaDatabase className="mysql" />
              <FaJira className="jira" />
            </div>
            <ul className="sub-card">
              <li>GCP</li>
              <li>GIT</li>
              <li>GitLab</li>
              <li>Docker</li>
              <li>npm</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
        <div className="other-skills">
          <div className="card">
            <h4>Personal Skills</h4>
            <p className="regular-text">Team Player</p>
            <p>Communicative</p>
            <p>Problem Solving</p>
            <p>Creative</p>
            <p>Multitasking</p>
            <p>Goal Oriented</p>
            <p>Detail focused</p>
            <p>Good ability to work under pressure</p>
          </div>
          <div className="card">
            <h4>Languages</h4>

            <p>Spanish - Mother tongue</p>
            <p>English - Fluent</p>
            <p>German - Basic</p>
          </div>
        </div>
      </article>
    </SkillsWrapper>
  </section>
)

export default Skills
