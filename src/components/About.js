import * as React from "react"
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa"
import styled from "styled-components"

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .description {
    width: 52%;
    margin-bottom: 5rem;
    p:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  h3 {
  }
  .social {
    font-size: 3rem;
    color: white;
    a:not(:last-child) {
      margin-right: 3rem;
    }
    a:hover > * {
    }
  }
  .circle {
    height: 100%;
    width: 100%;
    background: linear-gradient(to right bottom, #3ad59f 0%, #f8ff00 100%);
    position: absolute;
    -webkit-clip-path: circle(18.7% at 3% 67%);
    clip-path: circle(18.7% at 3% 67%);
    z-index: 1;
  }
  .lines {
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    span {
      display: inline-block;
      position: relative;
      padding-bottom: 3rem;
      font-weight: 900;
      background: linear-gradient(to right bottom, #f8ff00 0%, #3ad59f 100%);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
    & span:before,
    & span:after {
      content: "";
      position: absolute;
      height: 12px;
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      top: 18px;
      width: 50%;
    }
    & span:before {
      right: 100%;
      margin-right: 15px;
    }
    & span:after {
      left: 100%;
      margin-left: 15px;
    }
  }
`

const About = () => (
  <section id="about-me" className="dark">
    <AboutWrapper>
      <h2 className="white">About me</h2>
      <div className="description">
        <p className="regular-text">
          I changed my career and moved to Berlin to became a software developer
          because I wanted to work in something I am passionate about.
        </p>
        <p className="regular-text">
          I love the challenge that programming offers that translates in
          constant learning and improvement.
        </p>
        <p className="regular-text">
          Besides liking it as a job, I enjoy making websites and learn more
          about new technologies and design on my free time.
        </p>
      </div>

      <h4 className="lines">
        <span>Wanna hire me?</span>
      </h4>
      <div className="social">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaEnvelope />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
      <div class="circle"></div>
    </AboutWrapper>
  </section>
)

export default About
