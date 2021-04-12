import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  :root {
    --spacing: 0.1rem;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Abel', sans-serif;

    font-size: 62.5%;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    ul {
      list-style-type: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    h1,
    h2,
    h3 {
      font-family: 'Barlow Semi Condensed', sans-serif;
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 0;
    }

    h2 {
      font-weight: 900;
      -webkit-letter-spacing: 0.4rem;
      -moz-letter-spacing: 0.4rem;
      -ms-letter-spacing: 0.4rem;
      letter-spacing: 0.4rem;
      text-align: center;
      font-size: 4rem;
      text-transform: uppercase;
      margin: 0 0 2rem;
    }

    h3 {
      font-size: 3.5rem;
      color: white;
    }

    h4 {
      font-size: 2rem;
      color: white;
    }

    p {
      margin: 0;
    }

    section {
      padding: 4rem 0;
      &.dark {
        background-color: #222831;
        h2 {   
          background: linear-gradient(to right bottom,#f8ff00 0%,#3ad59f 100%);
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      &.light {
        background-color: #e9eaea;
        h2 {
          color: #222831;
        }
      }
    }
    .gatsby-image-wrapper {
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

    .regular-text {
      font-size: 1.5rem;
      -webkit-letter-spacing: 0.1rem;
      -moz-letter-spacing: 0.1rem;
      -ms-letter-spacing: 0.1rem;
      letter-spacing: 0.1rem;
      color: white;
    }

    .react {
      color: #61dafb;
    }
    .javascript {
      color: #f0db4f;
    }
    .css {
      color: #6993f5;
    }
    .graphql {
      color: #ea5dbc;
    }
    .sass {
      color: #cd6799;
    }
    .html {
      color: #f06529;
    }
    .php {
      color: #8993be;
    }
    .java {
      color: #f89820;
    }
    .git {
      color: #f1502f;
    }
    .cloud {
      color: #fff;
    }
    .gitlab {
      color: #fc6d27;
    }
    .mysql {
      color: #00758F;
    }
    .jira {
      color: #57afe5;
    }
    .confluence {
      color: #57afe5;
    }
    .docker {
      color:#0db7ed;
    }
    .npm {
      color: #CC3534;
    }
  }
`
