import React from "react"
import styled from "styled-components"

import ArrowEdge from "../images/arrow-edge.svg"
import ToAbout from "../images/to-about.svg"
import ToAboutMed from "../images/to-about-med.svg"
import ToAboutSmall from "../images/to-about-small.svg"
import AboutToExperience from "../images/about-to-experience.svg"
import AboutToExperienceSmall from "../images/about-to-experience-small.svg"

import {
    ArrowCornerWrapper,
    ToAboutWrapper,
    AboutToExperienceWrapper,
} from "./arrows"

import { Wrapper } from "./common"

export const Container = styled.div`
    background: linear-gradient(
        135.93deg,
        #103973 29.06%,
        rgba(16, 57, 115, 0.78) 101.99%
    );
    background-blend-mode: darken;
`

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

    @media screen and (max-width: 880px) {
        margin-left: 2.5rem;
        column-count: 2;
    }
`

const About = () => (
    <Container id="about">
        <Wrapper about="true">
            <AboutMeHeaderWrapper>
                <h1 style={{ marginTop: `5rem` }}>About Me</h1>
            </AboutMeHeaderWrapper>
            <AboutMe>
                <p>
                    In April 2020, I will be graduating from Brigham Young
                    University with a Master's in Information Systems
                    Management.{" "}
                    <span role="img" aria-label="graduation">
                        👨‍🎓🎓
                    </span>{" "}
                    My web development experience ranges from class and personal
                    projects to jobs with BYU Athletics and Adobe Analytics'
                    Workspace UI team. Academically, I have also been involved
                    in research within the field of Information Systems. Most
                    recently, I studied how gender discrepancies in
                    technological majors within higher education can be
                    mitigated to contribute to a better gender balance in STEM.
                    {/* fields. I am currently studying at Brigham Young University
                    to get my master's degree in Information Systems Management.{" "}
                    <span role="img" aria-label="graduation hat">
                        🎓
                    </span>{" "}
                    My wife and I met in the Hill Cumorah Pageant in 2008 and
                    have been happily married since 2016. We have a beautiful
                    little girl named Kora.{" "}
                    <span role="img" aria-label="family">
                        👨👩👶
                    </span>{" "} */}
                </p>
                <p>
                    School and work aside, I have a wonderful family! My wife
                    and I met in the Hill Cumorah Pageant in 2008 and have been
                    married since 2016. We have a beautiful little girl named
                    Kora.{" "}
                    <span role="img" aria-label="family">
                        👱‍♂️👱‍♀️👶
                    </span>{" "}
                    Janessa (my wife) is currently enrolled in Lambda School's
                    web development program and is killing it!
                </p>
                <p>
                    I lived in Cambodia from 2013-2015 as a missionary for the
                    Church of Jesus Christ of Latter-day Saints.{" "}
                    <span role="img" aria-label="Cambodia Flag">
                        🇰🇭
                    </span>{" "}
                    I learned how to speak, read, and write the language, but
                    I'm getting a bit rusty. If you want to chat in ភាសារខ្មែរ,
                    reach out via my contact info below!{" "}
                    <span role="img" aria-label="Point down">
                        👇
                    </span>
                </p>
                <p>Here are a few technologies I love to use:</p>
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
                <img src={ArrowEdge} alt="Arrow to about" />
            </ArrowCornerWrapper>

            <ToAboutWrapper>
                <picture>
                    <source media="(min-width: 1368px)" srcSet={ToAbout} />
                    <source media="(min-width: 1100px)" srcSet={ToAboutMed} />
                    <source media="(min-width: 400px)" srcSet={ToAboutSmall} />
                    <img src={ToAbout} alt="About Arrow" />
                </picture>
            </ToAboutWrapper>

            <AboutToExperienceWrapper>
                <picture>
                    <source
                        media="(min-width: 1368px)"
                        srcSet={AboutToExperience}
                    />
                    <source
                        media="(min-width: 400px)"
                        srcSet={AboutToExperienceSmall}
                    />
                    <img
                        src={AboutToExperience}
                        alt="Arrow from about to experience"
                    />
                </picture>
            </AboutToExperienceWrapper>
        </Wrapper>
    </Container>
)

export default About
