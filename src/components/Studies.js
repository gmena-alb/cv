import * as React from "react"
import styled from "styled-components"

const StudiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  p,
  span {
    font-size: 1.5rem;
  }
  article {
    width: 90%;
  }
  .studies {
    h3 {
      color: white;
    }
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 3rem;
    border-radius: 5px;
  }
  .card {
    border: 2px solid #4e535a;
    border-radius: 5px;
    display: flex;
    color: white;
    min-width: 28%;
    margin: 1.5rem;
    transition: all 0.2s;
    span {
      font-size: 1rem;
    }
    &:hover {
      transform: translateY(-0.3rem);
      box-shadow: #29956f 0px 8px 15px -8px;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 20%;
      background-color: #4e535a;
      p {
        font-size: 1rem;
      }
    }
    .content {
      padding: 1rem;
    }
  }

  .lil-card {
    .info {
      color: #f8ff00;
    }
  }

  .courses {
    padding-bottom: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Studies = () => (
  <section id="studies" className="dark">
    <StudiesWrapper>
      <h2>Education</h2>
      <article className="studies">
        <h3>Official education</h3>
        <div className="card lil-card">
          <div className="left">
            <p className="info">2016 / 2018</p>
          </div>
          <div className="content">
            <p>Higher technician in multi-platform application development</p>

            <span>IES San Clemente (Spain)</span>
          </div>
        </div>
      </article>
      <h3>Relevant Coursework</h3>
      <article className="courses">
        <div className="card lil-card">
          <div className="left">
            <p className="react">React</p>
          </div>
          <div className="content">
            <p>React Tutorial and Projects</p>
            <span>by John Smilga</span>
          </div>
        </div>
        <div className="card lil-card">
          <div className="left">
            <p className="javascript">JavaScript</p>
            <p className="css">CSS</p>
          </div>
          <div className="content">
            <p>The Complete Web Developer</p>
            <span>by Andrei Neagoie</span>
          </div>
        </div>
        <div className="card lil-card">
          <div className="left">
            <p className="javascript">JavaScript</p>
          </div>
          <div className="content">
            <p>Complete JavaScript Course</p>
            <span>by Jonas Schmedtmann</span>
          </div>
        </div>
        <div className="card lil-card">
          <div className="left">
            <p className="css">CSS</p>
            <p className="sass">Sass</p>
          </div>
          <div className="content">
            <p>Advanced CSS and Sass</p>
            <span>by Jonas Schmedtmann</span>
          </div>
        </div>
        <div className="card lil-card">
          <div className="left">
            <p className="javascript">Javascript</p>
            <p className="css">CSS</p>
          </div>
          <div className="content">
            <p>10 Responsive Sites</p>
            <span>by Code And Create</span>
          </div>
        </div>
        <div className="card lil-card">
          <div className="left">
            <p className="react">React</p>
            <p className="graphql">GraphQL</p>
          </div>
          <div className="content">
            <p>GraphQL + React</p>
            <span>by Stephen Grider</span>
          </div>
        </div>
      </article>
    </StudiesWrapper>
  </section>
)

export default Studies
