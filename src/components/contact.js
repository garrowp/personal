import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    // margin-top: 3rem;
    background: linear-gradient(135.93deg, #103973 29.06%, rgba(16, 57, 115, 0.78) 101.99%);
    background-blend-mode: darken;
    height: 200px;
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 2rem;
    padding-top: 5rem;
    color: #fff;
    position: relative;
`

const Contact = () => (
    <Container id='contact'>
        <Wrapper>
            <h2 style={{ textAlign: `right` }}>Contact</h2>
        </Wrapper>
    </Container>
)

export default Contact