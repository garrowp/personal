import React from "react"
import styled from "styled-components"

import ProfileImage from "../components/image"
import IntroArrow from "../images/intro-arrow.svg"
import IntroToAbout from "../images/intro-to-about.svg"

const Container = styled.div`

`

const Wrapper = styled.div`
  // height: 625px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 2rem;
  padding-top: 10rem;
  padding-bottom: 16rem;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0.35rem;
`

const Banner = () => (
  <Wrapper>
    <div>
      <h2>Hi!👋 My name is Peter Garrow.</h2>
      <Intro>
        <div>
          <h3>I'm a </h3>
        </div>
        <div>
          <h3>
            husband, <br />
            father, <br />
            student, &<br />
            web developer.
          </h3>
        </div>
      </Intro>
    </div>
    <div style={{ width: `50%`, position: `relative` }}>
      <div
        style={{
          width: `100%`,
          background: `rgba(16, 57, 115, 0.89)`,
          height: `100%`,
          borderRadius: `4px`,
          position: `absolute`,
          top: `-16px`,
          left: `16px`,
        }}
      />
      <ProfileImage />
    </div>
    <div>
      <img
        src={IntroArrow}
        alt="arrow"
        style={{
          position: `absolute`,
          bottom: 0,
          transform: `translate(20%, -75%)`,
          marginBottom: 0,
        }}
      />
    </div>
    <img
      src={IntroToAbout}
      alt="Intro to about arrow"
      style={{
        position: `absolute`,
        right: `-145px`,
        bottom: `-80px`,
      }}
    />
  </Wrapper>
)

export default Banner
