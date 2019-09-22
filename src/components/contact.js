import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
    // margin-top: 3rem;
    background: linear-gradient(327.56deg, #103973 17.22%, rgba(16, 57, 115, 0.78) 113.77%);
    background-blend-mode: darken;
    // height: 200px;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 2rem;
    padding-top: 5rem;
    color: #fff;
    position: relative;
    text-align: right;
`

const IconLink = styled.a`
    color: #fff;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    margin-left: 2rem;
`

const Contact = () => (
    <Container id='contact'>
        <Wrapper>
            <h2 style={{ textAlign: `right` }}>Contact</h2>
            <IconLink href='https://github.com/garrowp' target='_blank'>
                <Icon icon={faGithubSquare} />
            </IconLink>
            <IconLink href='https://www.linkedin.com/in/peter-garrow/' target='_blank'>
                <Icon icon={faLinkedin} />
            </IconLink>
            <IconLink href='https://twitter.com/PeterGarrow' target='_blank'>
                <Icon icon={faTwitterSquare} />
            </IconLink>
            <IconLink href='mailto:garrow.peter@gmail.com'>
                <Icon icon={faEnvelope} />
            </IconLink>
            
        </Wrapper>
    </Container>
)

export default Contact