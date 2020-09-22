/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import ExperienceArrow from "./arrows/experience-arrow"
import ExperienceToContactArrow from "./arrows/experience-to-contact"

import { ExperienceCard, Card } from "./card"
import byu from "../images/byu.png"
import adobe from "../images/adobe.png"
import byuAthletics from "../images/byu_athletics.png"
import rp from "../images/rp.png"
import rpSite from "../images/rpSite.png"
import { Wrapper } from "./common"

const ExperienceHeaderWrapper = styled.div`
  grid-row: 1;
  grid-column: 2 / 4;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / 3;
  }
`

const ExperienceWrapper = styled.div`
  grid-row: 2;
  grid-column: 2 / 4;
  padding-bottom: 5rem;
  z-index: 100;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / 3;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledUl = styled.ul`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  & a {
    text-decoration: none;
    color: ${p => p.theme.colors.text};
    border-bottom: 1px dotted ${p => p.theme.colors.text};
  }
`

const Experience = () => (
  <div id="projects" sx={{ backgroundColor: `background` }}>
    <Wrapper>
      <ExperienceHeaderWrapper>
        <h1 style={{ marginTop: `4.5rem` }}>Projects</h1>
      </ExperienceHeaderWrapper>
      <ExperienceWrapper>
        <h3>Some of the things that I've done:</h3>
        <CardContainer>
          <ExperienceCard employer="Recipe Palette" image={rp}>
            <StyledUl>
              <li>
                Discover and keep track of your favorite recipes at{" "}
                <a href="https://recipepalette.com" target="_blank">
                  Recipe Palette
                </a>
              </li>
              <li>
                Automatically record any changes you make to anyone's recipes,
                think of Github for recipes
              </li>
            </StyledUl>
            <a href="https://recipepalette.com" target="_blank">
              <img
                sx={{ marginBottom: 0, padding: `1em 0` }}
                src={rpSite}
                alt="Recipe Palette website image"
              />
            </a>
          </ExperienceCard>

          <ExperienceCard employer="CSS Appa" title="Zoom out to .25x">
            <iframe
              sx={{
                width: "100%",
                height: "300px",
                marginBottom: 0,
                padding: `1em 0`,
              }}
              scrolling="no"
              title="CSS Appa"
              src="https://codepen.io/garrowp/embed/rNOQQjm?height=100&theme-id=dark&default-tab=result"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/garrowp/pen/rNOQQjm">CSS Appa</a> by
              Peter Garrow (<a href="https://codepen.io/garrowp">@garrowp</a>)
              on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </ExperienceCard>
          <ExperienceCard employer="Black Lives Matter">
            <iframe
              height="265"
              style={{
                width: `100%`,
                height: `350px`,
                marginBottom: 0,
                padding: `1em 0`,
              }}
              scrolling="no"
              title="Black Lives Matter"
              src="https://codepen.io/garrowp/embed/jOWELMw?height=100&theme-id=dark&default-tab=result"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/garrowp/pen/jOWELMw">
                Black Lives Matter
              </a>{" "}
              by Peter Garrow (<a href="https://codepen.io/garrowp">@garrowp</a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </ExperienceCard>
          <ExperienceCard employer="Smash Bros Avatar Style">
            <iframe
              height="265"
              style={{
                width: `100%`,
                height: `350px`,
                marginBottom: 0,
                padding: `1em 0`,
              }}
              scro
              scrolling="no"
              title="Smash Bros Avatar Style"
              src="https://codepen.io/garrowp/embed/PoNaGgB?height=278&theme-id=dark&default-tab=result"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{" "}
              <a href="https://codepen.io/garrowp/pen/PoNaGgB">
                Smash Bros Avatar Style
              </a>{" "}
              by Peter Garrow (<a href="https://codepen.io/garrowp">@garrowp</a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </ExperienceCard>
        </CardContainer>
      </ExperienceWrapper>
      <ExperienceArrow />
      <ExperienceToContactArrow />
    </Wrapper>
  </div>
)

export default Experience
