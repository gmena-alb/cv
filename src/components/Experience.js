import * as React from "react"
import styled from "styled-components"

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 5rem;
  }
  .experience {
    display: flex;
    width: 80%;
    border-radius: 0.5rem;
    article {
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
      width: 50%;
      border: 4px solid #23805f;
      background: #222831;
      border-radius: 5px;
      box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
      &:not(:last-child) {
        margin-right: 8rem;
      }

      .title {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: baseline;
        padding-top: 0.5rem;
        padding: 1rem 2rem 1rem;
        border-bottom: 1px solid black;
        div {
          display: flex;
          align-items: baseline;
          width: 100%;
          justify-content: space-between;
        }
        h4 {
          color: #3ad59f;
          letter-spacing: 0.2rem;
        }
        h5 {
          font-size: 1.75rem;
          margin: 0;
          color: #f8ff00;
        }
        span {
          color: white;
          font-size: 1.3rem;
        }
      }
      .duties {
        font-size: 1.5rem;
        margin: 1rem;
        padding-top: 1rem;
        padding-bottom: 2rem;
        li {
          padding: 0 1rem;
          margin-bottom: 0.5rem;
          &::marker {
            content: "»";
            font-size: 2rem;
            --hue: 0;
            color: #3ad59f;
          }
        }
      }
    }
  }
`

const Experience = () => (
  <section id="experience" className="light">
    <ExperienceWrapper>
      <h2>experience</h2>
      <div className="experience">
        <article>
          <div className="title">
            <h4>Junior Web Developer</h4>
            <div>
              <h5>Gamigo GmbH</h5>
              <span>Apr 2019 - Current</span>
            </div>
          </div>
          <ul className="duties">
            <li className="regular-text">
              Working as part of an international team to build a new platform.
            </li>
            <li className="regular-text">
              Develop new features and implement frontend design on multiple
              projects.
            </li>
            <li className="regular-text">Design and build internal tools.</li>
            <li className="regular-text">
              Improve and maintain legacy code and update deprecated systems.
            </li>
            <li className="regular-text">
              Analyze requirements and suggest approaches on how to improve
              products.
            </li>
            <li className="regular-text">Write technical documentation.</li>
            <li className="regular-text">Testing and code deployment.</li>
          </ul>
        </article>
        <article>
          <div className="title">
            <h4>Intern Web Developer</h4>
            <div>
              <h5>Gamigo GmbH</h5>
              <span>Oct 2018 - Apr 2019</span>
            </div>
          </div>
          <ul className="duties">
            <li className="regular-text">
              Learn the company structure and standards.
            </li>
            <li className="regular-text">
              Introduced to agile development process.
            </li>
            <li className="regular-text">
              Develop features across different projects.
            </li>
          </ul>
        </article>
      </div>
    </ExperienceWrapper>
  </section>
)

export default Experience
