import React from 'react'
import styled from 'styled-components'

import ArrowEdge from '../images/arrow-edge.svg'
import ToAbout from '../images/to-about.svg'
import AboutToExperience from '../images/about-to-experience.svg'

const Container = styled.div`
    // margin-top: 3rem;
    background: linear-gradient(135.93deg, #103973 29.06%, rgba(16, 57, 115, 0.78) 101.99%);
    background-blend-mode: darken;
    // height: 400px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 1.5rem

    margin: 0 auto;
    // max-width: 960px;
    // padding: 0px 1.0875rem 2rem;
    // padding-top: 5rem;
    color: #fff;
    position: relative;
`

const About = () => (
    <Container id='about'>
        <Wrapper>
            
            <div style={{ gridColumn: `2 / 4`, gridRow: `1 / 2`, }}>
                <h1 style={{ marginTop: `5rem` }}>About Me</h1>
            </div>

            <br />
            <div style={{ gridColumn: `2 / 4`, gridRow: `2 / 2` }}>
                <p>
                    My name is Peter Garrow. I am currently studying at Brigham Young University to get my master's degree in Information Systems Management. 🎓
                    My wife and I met in the Hill Cumorah Pageant, and we have a beautiful little girl named Kora. 👨👩👶 We are living in Utah while I finish my degree.
                </p>
                <p>
                    I served a 2-year church mission in Cambodia 🇰🇭 and would love to go back sometime. I learned the language and everything but I'm a little rusty at this point so if you want to chat in ភាសាស្មែរ sometime, hit me up via my contact info below. 👇
                    I learned how to cook Cambodian food while I was there and love to cook and eat. Espeically rice 🍚🍚
                </p>
                <p>
                    Here are a few technologies I love to use:
                    <ul style={{ columnCount: 3, marginLeft: `5rem` }}>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>AWS</li>
                    </ul>
                </p>
            </div>
            
            <div style={{ position: `relative `, gridRow: `1 / 1`, gridColumn: 4 }}>
                
                <img
                    src={ArrowEdge}
                    alt="Arrow to about"
                    style={{
                        position: `absolute`,
                        top: 0,
                        left: 0,
                    }}
                />
            </div>

            <div style={{ position: `relative`, gridRow: 1, gridColumn: `2 / 4`}}>
                <img
                    src={ToAbout}
                    alt="About ARrow"
                    style={{
                        position: `absolute`,
                        bottom: 0,
                        right: `-2rem`,
                        marginBottom: 0,
                    }}
                />
            </div>

            <div style={{ position: `relative`, gridRow: 2, gridColumn: 1 }}>
                <img
                    src={AboutToExperience}
                    alt="Arrow from about to experience"
                    style={{
                        position: `absolute`,
                        marginBottom: 0,
                        bottom: 0,
                        right: 0
                    }}
                />
            </div>
        </Wrapper>
    </Container>
)

export default About;