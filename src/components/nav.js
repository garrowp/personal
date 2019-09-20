import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
    padding: 4rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 1.5rem;
    margin: .5rem;
`;



export default () => (
    <nav>
        <StyledLink to='/#about'>About</StyledLink>
        <StyledLink to='/#experience'>Experience</StyledLink>
        <StyledLink to='/#contact'>Contact</StyledLink>
    </nav>
)