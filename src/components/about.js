/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import AboutCornerArrow from "./arrows/about-corner-arrow"
import ToAboutArrow from "./arrows/about-arrow"
import AboutToExperienceArrow from "./arrows/about-to-experience"

import { Wrapper } from "./common"

export const AboutMeHeaderWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;

  @media screen and (max-width: 1100px) {
    grid-column: 1;
  }
`

export const AboutMe = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / 3;
  }
`

export const Technologies = styled.ul`
  column-count: 3;
  margin-left: 8rem;

  list-style: none;

  & li:before {
    content: "⇨ ";
  }

  @media screen and (max-width: 880px) {
    margin-left: 2.5rem;
    column-count: 2;
  }
`

const About = () => (
  <div
    id="about"
    sx={{
      variant: `gradients.about`,
      backgroundBlendMode: `darken`,
    }}
  >
    <Wrapper about="true">
      <AboutMeHeaderWrapper>
        <h1 style={{ marginTop: `5rem` }}>About Me</h1>
      </AboutMeHeaderWrapper>
      <AboutMe>
        <p>
          I am currently a Senior Frontend Engineer at MX in Lehi, UT. I'm
          working on the MoneyMap team, developing and maintaining a money
          management platform designed to help users become financially strong.
          I work mostly with React and Redux in JavaScript and TypeScript, with a dash of RxJS.
          {/* In April
          2020, I graduated from Brigham Young University with a Master's in
          Information Systems Management.{" "}
          <span role="img" aria-label="graduation">
            👨‍🎓🎓
          </span>{" "} */}
        </p>
        {/* <p>
          Aside from work, I have a wonderful family! My wife and I met in the
          Hill Cumorah Pageant in 2008 and have been married since 2016. We have
          a beautiful little girl named Kora.{" "}
          <span role="img" aria-label="family">
            👱‍♂️👱‍♀️👶
          </span>
          {"  "}
          <a
            href="https://janessagarrow.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            Janessa
          </a>{" "}
          (my wife) is currently enrolled in Lambda School's web development
          program and is killing it!
        </p> */}
        {/* <p>
          I lived in Cambodia from 2013-2015 as a missionary for the Church of
          Jesus Christ of Latter-day Saints.{" "}
          <span role="img" aria-label="Cambodia Flag">
            🇰🇭
          </span>{" "}
          I learned how to speak, read, and write the language, but I'm getting
          a bit rusty. If you want to chat in ភាសារខ្មែរ, reach out via my
          contact info below!{" "}
          <span role="img" aria-label="Point down">
            👇
          </span>
        </p> */}
        <p>Here are a few technologies I love to use:</p>
        <Technologies>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Remix</li>
          <li>Node</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PostgreSQL</li>
        </Technologies>
      </AboutMe>
      <AboutCornerArrow />
      <ToAboutArrow />
      <AboutToExperienceArrow />
    </Wrapper>
  </div>
)

export default About
