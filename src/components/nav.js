import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 1.5rem;
    margin: 0.5rem;
    color: #20477d;
`

export default () => (
    <nav>
        <StyledLink to="/#about">About</StyledLink>
        <StyledLink to="/#experience">Experience</StyledLink>
        <StyledLink to="/#contact">Contact</StyledLink>
    </nav>
)
