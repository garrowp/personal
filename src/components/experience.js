import React from 'react'
import styled from 'styled-components'

import Card from './card'
import ToExperience from '../images/to-experience.svg'

const Container = styled.div`
    // margin-top: 3rem;
    // height: 400px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    // margin: 0 auto;
    // max-width: 960px;
    // padding: 0px 1.0875rem 2rem;
    // padding-top: 5rem;
    position: relative;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);j
    grid-gap: 2rem;
`

const Experience = () => (
    <Container id='experience'>
        <Wrapper>
            
            <div style={{ gridRow: 1, gridColumn: `2 / 4` }}>
                <h1 style={{ marginTop: `4.5rem` }}>Experience</h1>
            </div>
            <div style={{ gridRow: 2, gridColumn: `2 / 4` }}>
                
                <h3>Some of the things that I've done:</h3>
                <CardContainer>
                    <Card>BYU</Card>
                    <Card>Adobe</Card>
                    <Card>BYU Athletics</Card>
                    <Card>DuPont</Card>
                </CardContainer>
            </div>
            <div style={{ position: `relative`, gridColumn: 1, gridRow: 1 }}>
                <img 
                    src={ToExperience}
                    alt="Arrow to experience"
                    style={{
                        position: `absolute`,
                        top: 0,
                        left: `-90px`
                    }}
                />
            </div>
        </Wrapper>
    </Container>
)

export default Experience