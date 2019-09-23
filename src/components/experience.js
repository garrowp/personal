import React from 'react'
import styled from 'styled-components'

import Card, { ExperienceCard } from './card'
import ToExperience from '../images/to-experience.svg'
import byu from "../images/byu.png"
import adobe from '../images/adobe.png'
import byuAthletics from '../images/byu_athletics.png'

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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`

const StyledUl = styled.ul`
    font-size: .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
`

const Experience = () => (
    <Container id='experience'>
        <Wrapper>
            
            <div style={{ gridRow: 1, gridColumn: `2 / 4` }}>
                <h1 style={{ marginTop: `4.5rem` }}>Experience</h1>
            </div>
            <div style={{ gridRow: 2, gridColumn: `2 / 4`, paddingBottom: `5rem` }}>
                
                <h3>Some of the things that I've done:</h3>
                <CardContainer>
                    <ExperienceCard
                        employer='Brigham Young University'
                        startDate="Jan '19"
                        endDate="Present"
                        image={byu}
                        title="Research &amp; Teacher's Assistant"
                    >
                        <StyledUl>
                            <li>Analyze survey data to discover trends, correlations, and significant figures predict retention for women in technological education </li>
                            <li>Explore the effect of smart personal assistants as educational tutors to distribute the load on TAs and professors while catering to anonymity preferences of students</li>
                            <li>Collaborated with the professor to improve course curriculum by creating videos, tutorials, rubrics, and other supplemental learning material</li>
                        </StyledUl>
                    </ExperienceCard>
                    <ExperienceCard
                        employer='Adobe'
                        startDate="May '18"
                        endDate="Aug '18"
                        image={adobe}
                        title="Web UI Software Engineer Intern"
                    >
                        <StyledUl>
                            <li>Collaborated with the Adobe Analytics Web UI team of 10 in a React environment to fix bugs and add two new features to the application</li>
                            <li>Implemented new guide indicators for drag/drop actions to increase user productivity by reducing the need to undo an action</li>
                            <li>Created new models and components to allow for customized segmentation of the data being analyzed</li>
                        </StyledUl>
                    </ExperienceCard>
                    <ExperienceCard
                        employer='BYU Athletics'
                        startDate="Jun '17"
                        endDate="May '18"
                        image={byuAthletics}
                        title="Web Developer"
                    >
                        <StyledUl>
                            <li>Developed the user-interface and back-end programming of department websites which has enhanced user experience and improved traffic flow by 20%</li>
                            <li>
                                Incorporated web technologies such as Angular, Node.JS, MySQl, Drupal, and MongoDB to create and manipulate feeds that drive BYU Athletics’ websites and apps
                            </li>
                            <li>Designed a new website to enhance the professional image of BYU Athletics that has created more excitement among fans compared to the previous website as reported by a feedback form</li>
                        </StyledUl>
                    </ExperienceCard>
                    <ExperienceCard
                        employer='DuPont'
                        startDate="May '16"
                        endDate="Aug '16"
                        image="http://eidupont.scene7.com/is/image/eidupont/DPT_DuPont_Logo_Thumbnail_690x345?$Full-Width-D$"
                        title="Contracted Programmer"
                    >
                        <StyledUl>
                            <li>Designed and programmed a database to store DuPont’s Global Microbiology Group recipe and batch documentation ensuring a reliable method of storing important records </li>
                            <li>
                                Increased productivity in creating and maintaining records by improving database speeds by 25%
                            </li>
                            <li>Instructed the group on proper use of the database to ensure that the data would be safe, contained, and easily accessible as needed</li>
                        </StyledUl>
                    </ExperienceCard>
                </CardContainer>
            </div>
            <div style={{ position: `relative`, gridColumn: 1, gridRow: 1 }}>
                <img 
                    src={ToExperience}
                    alt="Arrow to experience"
                    style={{
                        position: `absolute`,
                        top: 0,
                        right: 0,
                    }}
                />
            </div>
        </Wrapper>
    </Container>
)

export default Experience