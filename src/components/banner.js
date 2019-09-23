import React from "react"
import styled from "styled-components"

import {
  Container,
  Wrapper,
  Intro,
  IntroWrapper,
  PicWrapper,
  PicBackground,
  IntroArrowWrapper,
  IntroToAboutWrapper,
  IntroToAboutImg
} from "./bannerElements"

import ProfileImage from "../components/image"
import IntroArrow from "../images/intro-arrow.svg"
import IntroToAbout from "../images/intro-to-about.svg"
import IntroToAboutSmall from '../images/intro-to-about-small.svg'

const Banner = () => (
  <Container>
    <Wrapper>
      <IntroWrapper>
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
      </IntroWrapper>
      <PicWrapper >
        <PicBackground />
        <ProfileImage />
      </PicWrapper>
      <IntroArrowWrapper>
        <img
          src={IntroArrow}
          alt="arrow"
          style={{
            marginTop: `-3rem`,
          }}
        />
      </IntroArrowWrapper>
      <IntroToAboutWrapper>
        <picture>
          <source media="(min-width: 1368px)" srcset={IntroToAbout} />
          <source media="(min-width: 400px)" srcset={IntroToAboutSmall} />
          <IntroToAboutImg
            src={IntroToAbout}
            alt="Intro to about arrow"
          />
        </picture>
      </IntroToAboutWrapper>
    </Wrapper>
  </Container>
)

export default Banner
