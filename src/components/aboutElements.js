import styled from 'styled-components'

export const Container = styled.div`
    // margin-top: 3rem;
    background: linear-gradient(135.93deg, #103973 29.06%, rgba(16, 57, 115, 0.78) 101.99%);
    background-blend-mode: darken;
    // height: 400px;
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 1.5rem;

    margin: 0 auto;
    color: #fff;
    position: relative;

    padding: 0 1rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (max-width: 880px) {
        display: flex;
        flex-direction: column;
    }
`

export const AboutMeHeaderWrapper = styled.div`
    grid-column: 2;
    grid-row: 1;

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }
`

export const AboutMe = styled.div`
    grid-column: 2 / 4;
    grid-row: 2;

    @media screen and (max-width: 1100px) {
        grid-column: 1 / 3;
    }
    
`

export const Technologies = styled.ul`
    column-count: 3;
    margin-left: 8rem;

    @media screen and (max-width: 880px) {
        margin-left: 2.5rem;
        column-count: 2;
    }
`

export const ArrowCornerWrapper = styled.div`
    position: relative;
    grid-row: 1;
    grid-column: 4;

    @media screen and (max-width: 1368px) {
        grid-column: 3;
    }

    @media screen and (max-width: 1100px) {
        grid-column: 2;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const ArrowCornerImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 1368px) {
        left: unset;
        right: 0;
    }
`

export const ToAboutWrapper = styled.div`
    position: relative;
    grid-row: 1;
    grid-column: 2 / 4;

    @media screen and (max-width: 1100px) {
        grid-column: 1 / 3;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const ToAboutImg = styled.img`
    position: absolute;
    bottom: 0;
    right: -2rem;
    margin-bottom: 0;

    @media screen and (max-width: 1368px) {
        right: 3rem;
    }

    @media screen and (max-width: 1100px) {
        bottom: -1px;
    }
`

export const AboutToExperienceWrapper = styled.div`
    position: relative;
    grid-row: 2;
    grid-column: 1;

    @media screen and (max-width: 1368px) {
        grid-column: 2;
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const AboutToExperienceImg = styled.img`
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 1368px) {
        right: unset;
        left: 24px;
    }
`