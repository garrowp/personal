import React from "react"
import styled from "styled-components"

import ProfileImage from "../components/image"
import IntroArrow from "../images/intro-arrow.svg"
import IntroToAbout from "../images/intro-to-about.svg"

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  margin: 0 auto;
  // max-width: 960px;
  // padding: 0px 1.0875rem 2rem;
  padding-top: 8rem;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0.35rem;
`

const Banner = () => (
  <Container>
    <Wrapper>
      <div
        style={{
          justifySelf: `center`,
          alignSelf: `center`,
          gridColumn: `2 / 3`,
        }}
      >
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
      <div style={{ position: `relative`, gridColumn: `3 / 4` }}>
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
      <div
        style={{ gridColumn: `2 / 4`, gridRow: `2 / 2`, textAlign: `center` }}
      >
        <img
          src={IntroArrow}
          alt="arrow"
          style={{
            marginTop: `-3rem`,
          }}
        />
      </div>
      <div
        style={{ gridColumn: `4 / 4`, gridRow: `1 / 3`, position: `relative` }}
      >
        <img
          src={IntroToAbout}
          alt="Intro to about arrow"
          style={{
            position: `absolute`,
            bottom: 0,
            marginBottom: 0,
          }}
        />
      </div>
    </Wrapper>
  </Container>
)

export default Banner
