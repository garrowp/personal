import React from 'react'
import styled from 'styled-components'

import ToExperience from '../images/to-experience.svg'

const Container = styled.div`
    // margin-top: 3rem;
    // height: 400px;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 2rem;
    padding-top: 5rem;
    position: relative;
`

const Experience = () => (
    <Container id='experience'>
        <Wrapper>
            <h1>Experience</h1>
            <h3>Some of the things that I've done:</h3>
            <img 
                src={ToExperience}
                alt="Arrow to experience"
                style={{
                    position: `absolute`
                }}
            />
        </Wrapper>
    </Container>
)

export default Experience