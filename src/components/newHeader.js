import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "./device"
import { FaBars } from "react-icons/fa"

const HeaderWrapper = styled.header`
  height: 90vh;
  background-color: #222831;
  display: grid;
  grid-template-rows: 67% 33%;
  grid-template-columns: 63% auto;
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .title-container {
    grid-row-start: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${device.mobileL} {
      order: 1;
      z-index: 5;
      margin-top: 14rem;
      padding: 0 1rem;
    }
    h1 {
      font-size: 7rem;
      font-weight: 900;
      color: white;
      letter-spacing: 0.25rem;
      @media ${device.mobileL} {
        font-size: 5.8rem;
      }
      span {
        font-weight: 900;
        background: linear-gradient(to right bottom, #f8ff00 0%, #3ad59f 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }
    h3 {
      align-self: flex-end;
      padding-right: 58px;
      @media ${device.mobileL} {
        font-size: 2.3rem;
      }
    }
  }
  .circle {
    height: 67%;
    width: 100%;
    background: linear-gradient(to right bottom, #f8ff00 0%, #3ad59f 100%);
    position: absolute;
    clip-path: circle(29.7% at 90% 11%);
    z-index: 1;
    @media ${device.mobileL} {
      position: absolute;
      top: 0;
      z-index: 1;
      clip-path: circle(47.7% at 90% 11%);
    }
  }
  .image-container {
    position: relative;

    @media ${device.mobileL} {
      order: 0;
      display: none;
      .gatsby-image-wrapper {
        position: relative !important;
        margin: 0 !important;
        transform: translateY(100%) !important;
      }
    }
  }
  .menu-section {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    font-family: "Abel", sans-serif;
    @media ${device.mobileL} {
      order: 3;
    }
    .menu-btn {
      display: none;
      @media ${device.mobileL} {
        display: block;
        background: none;
        outline: none;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        border: none;
        color: white;
        font-size: 3rem;
      }
    }
    .menu-title {
      background: rgba(0, 0, 0, 0.2);
      padding-top: 1rem;
      box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
      box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
        rgb(0 0 0 / 30%) 0px 3px 7px -3px;
      padding-bottom: 1rem;
      font-size: 2.5rem;
      text-align: center;
      @media ${device.mobileL} {
        display: none;
      }
    }
    .menu-icon {
      display: none;
      @media ${device.mobileL} {
        display: block;
        position: absolute;
        top: 1rem;
        color: white;
        left: 1rem;
        font-size: 3rem;
      }
    }
    .menu {
      display: flex;
      justify-content: space-evenly;
      font-weight: 900;
      letter-spacing: 3px;
      height: 100%;
      align-items: center;
      @media ${device.mobileL} {
        flex-direction: column;
        position: absolute;
        top: -0.3rem;
        left: 0;
        font-size: 0.3rem;
        align-items: flex-start;

        z-index: 1;
        transition: height 0.3s;
        &.show-menu-mobile {
          height: 50vh;
          width: 50vw;
        }
        &.hide-menu-mobile {
          height: 0;
          width: 0;
        }
      }

      .menu-item {
        color: white;
        font-size: 2rem;
        position: relative;
        @media ${device.mobileL} {
          font-size: 1.5rem;
        }

        &::before {
          content: "";
          z-index: 1;
          position: absolute;
          top: -0.5vh;
          left: -16px;
          width: 0.2rem;
          /* TIP: TO HIDE ELEMENT */
          height: 0;
          /* height: 80%; */
          background-color: #f8ff00;

          transition: height 0.5s;
        }
        &:hover:before {
          height: 120%;
        }
      }
    }
  }
`

const MenuSpanWrapper = styled.span`
  &:hover {
    font-weight: 900;
    background: linear-gradient(to right bottom, #f8ff00 0%, #3ad59f 100%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <div className="title-container">
        <h1>
          Hello, I'm <span>Grata</span>
        </h1>
        <h3>and I'm a developer</h3>
      </div>
      <div className="circle"></div>
      <div className="image-container">
        <StaticImage
          src="../images/pic.jpg"
          width={300}
          height={300}
          quality={100}
          formats={["JPG"]}
          alt="Grata"
          style={{
            borderRadius: `250px`,
            height: `250px`,
            width: `250px`,
            zIndex: `3`,
            marginLeft: `10px`,
            border: `1px ​solid rosybrow`,
            zIndex: `3`,
            position: `absolute`,
            transform: `translateY(50%)`,
            boxShadow: `box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`,
          }}
        />
      </div>
      <div className="menu-section">
        <h4 className="menu-title">What else would you like to know?</h4>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
        <ul
          className={`${
            isMenuOpen ? "menu show-menu-mobile" : "menu hide-menu-mobile"
          }`}
        >
          <li className="menu-item">
            <a href="#experience">
              <MenuSpanWrapper>Experience</MenuSpanWrapper>
            </a>
          </li>
          <li className="menu-item">
            <a href="#studies">
              <MenuSpanWrapper>Education</MenuSpanWrapper>
            </a>
          </li>
          <li className="menu-item">
            <a href="#skills">
              <MenuSpanWrapper>Skills</MenuSpanWrapper>
            </a>
          </li>
          <li className="menu-item">
            <a href="#about-me">
              <MenuSpanWrapper>About me</MenuSpanWrapper>
            </a>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  )
}

export default NewHeader
