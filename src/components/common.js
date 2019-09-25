import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 480px 480px auto;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    margin: 0 auto;
    padding: 0 1rem;

    ${props =>
        props.banner &&
        css`
            padding-top: 8rem;
        `}

    ${props =>
        props.about &&
        css`
            color: #fff;
            position: relative;
            grid-row-gap: 1.5rem;
        `}

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (max-width: 880px) {
        display: flex;
        flex-direction: column;

        ${props =>
            props.banner &&
            css`
                padding-top: 10rem;
            `}
    }
`
