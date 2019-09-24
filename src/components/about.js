import React from "react"

import ArrowEdge from "../images/arrow-edge.svg"
import ToAbout from "../images/to-about.svg"
import ToAboutMed from "../images/to-about-med.svg"
import ToAboutSmall from "../images/to-about-small.svg"
import AboutToExperience from "../images/about-to-experience.svg"
import AboutToExperienceSmall from '../images/about-to-experience-small.svg'

import {
  Container,
  Wrapper,
  AboutMeHeaderWrapper,
  AboutMe,
  Technologies,
  ArrowCornerWrapper,
  ToAboutWrapper,
  AboutToExperienceWrapper,
  ArrowCornerImg,
  ToAboutImg,
  AboutToExperienceImg,
} from "./aboutElements"

const About = () => (
  <Container id="about">
    <Wrapper>
      <AboutMeHeaderWrapper>
        <h1 style={{ marginTop: `5rem` }}>About Me</h1>
      </AboutMeHeaderWrapper>
      <AboutMe>
        <p>
          My name is Peter Garrow. I am currently studying at Brigham Young
          University to get my master's degree in Information Systems
          Management. <span role="img" aria-label="graduation hat">🎓</span> My wife and I met in the Hill Cumorah Pageant, and we
          have a beautiful little girl named Kora. <span role="img" aria-label="family">👨👩👶</span> We are living in Utah
          while I finish my degree.
        </p>
        <p>
          I served a 2-year church mission in Cambodia <span role="img" aria-label="cambodia flag">🇰🇭</span> and would love to go
          back sometime. I learned the language and everything but I'm a little
          rusty at this point so if you want to chat in ភាសាស្មែរ sometime, hit
          me up via my contact info below. <span role="img" aria-label="point down">👇</span> I learned how to cook Cambodian
          food while I was there and love to cook and eat. Espeically rice <span role='img' aria-label='rice'>🍚🍚</span>
        </p>
        <p>
          Here are a few technologies I love to use:
        </p>
        <Technologies>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>AWS</li>
        </Technologies>
      </AboutMe>

      <ArrowCornerWrapper>
        <ArrowCornerImg src={ArrowEdge} alt="Arrow to about" />
      </ArrowCornerWrapper>

      <ToAboutWrapper>
        <picture>
          <source media="(min-width: 1368px)" srcSet={ToAbout} />
          <source media="(min-width: 1050px)" srcSet={ToAboutMed} />
          <source media="(min-width: 400px)" srcSet={ToAboutSmall} />
          <ToAboutImg src={ToAbout} alt="About Arrow" />
        </picture>
      </ToAboutWrapper>

      <AboutToExperienceWrapper>
        <picture>
            <source media="(min-width: 1368px)" srcSet={AboutToExperience} />
            <source media="(min-width: 400px)" srcSet={AboutToExperienceSmall} />
            <AboutToExperienceImg src={AboutToExperience} alt="Arrow from about to experience" />
        </picture>
      </AboutToExperienceWrapper>
    </Wrapper>
  </Container>
)

export default About
