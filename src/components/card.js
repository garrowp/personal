import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-width: 4px 0px 0px 0px;
    border-color: rgba(49, 139, 213, 1);
    border-radius: 4px;
    border-style: solid;
    box-shadow: 2px 2px 6px 0px rgba(194, 194, 205, 0.2);
    /* hover styles */
    :hover {
        border-style: solid;
        box-shadow: 0px 6px 12px 3px rgba(194, 194, 205, 0.2);
    }
`

const Card = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Card