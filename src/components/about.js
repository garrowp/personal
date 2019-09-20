import React from 'react'
import styled from 'styled-components'

import ToAbout from '../images/to-about.svg'
import AboutToExperience from '../images/about-to-experience.svg'

const Container = styled.div`
    margin-top: 3rem;
    background: linear-gradient(135.93deg, #103973 29.06%, rgba(16, 57, 115, 0.78) 101.99%);
    background-blend-mode: darken;
    // height: 400px;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 2rem;
    padding-top: 5rem;
    color: #fff;
    position: relative;
`

const About = () => (
    <Container id='about'>
        <Wrapper>
            <h1>About Me</h1>
            <br />
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
                <ul style={{ columnCount: 3 }}>
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
            
            <img
                src={ToAbout}
                alt="Arrow to about"
                style={{
                    position: `absolute`,
                    right: `-145px`,
                    top: 0
                }}
            />

            <img
                src={AboutToExperience}
                alt="Arrow from about to experience"
                style={{
                    position: `absolute`,
                    left: `-90px`,
                    bottom: `-26px`,
                }}
            />
        </Wrapper>
    </Container>
)

export default About;