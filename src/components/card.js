import React from "react"
import styled from "@emotion/styled"
import { lighten } from "@theme-ui/color"

const Container = styled.div`
    padding: 0.5rem;
    border-width: 4px 0px 0px 0px;
    border-color: ${p => p.theme.colors.secondary};
    border-radius: 4px;
    border-style: solid;
    box-shadow: 0px 2px 6px 0px ${p => lighten(p.theme.colors.primary, .5)};
    background-color: ${p => p.theme.colors.card};

    @media screen and (max-width: 950px) {
        margin-top: 1.5rem;
    }
`

const Card = ({ children }) => <Container>{children}</Container>

export const ExperienceCard = ({
    employer,
    startDate,
    endDate,
    image,
    title,
    children,
}) => (
    <Card>
        <div
            style={{
                borderBottom: `1px solid #000`,
                display: `flex`,
                alignItems: `center`,
            }}
        >
            <h4 style={{ flexGrow: 1, marginBottom: 0 }}>{employer}</h4>
            <img
                src={image}
                alt={employer}
                style={{
                    maxHeight: `2rem`,
                    marginBottom: 0,
                    paddingTop: `2px`,
                    paddingBottom: `2px`,
                }}
            />
        </div>
        <div style={{ display: `flex` }}>
            <p style={{ margin: 0, flexGrow: 1 }}>{title}</p>
            <small
                style={{
                    textAlign: `right`,
                    marginBottom: 0,
                    maxWidth: `50%`,
                    minWidth: `36%`,
                }}
            >
                {startDate} - {endDate}
            </small>
        </div>
        {children}
    </Card>
)

export default Card
