import styled from 'styled-components'

export const Container = styled.div`
    // margin-top: 3rem;
    // height: 400px;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    // margin: 0 auto;
    // max-width: 960px;
    // padding: 0px 1.0875rem 2rem;
    // padding-top: 5rem;
    position: relative;
    padding: 0 1rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

export const ExperienceHeaderWrapper = styled.div`
    grid-row: 1;
    grid-column: 2 / 4;

    @media screen and (max-width: 1100px) {
        grid-column: 1 / 3;
    }
`

export const ExperienceWrapper = styled.div`
    grid-row: 2;
    grid-column: 2 / 4;
    padding-bottom: 5rem;

    @media screen and (max-width: 1100px) {
        grid-column: 1 / 3;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`

export const StyledUl = styled.ul`
    font-size: .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
`

export const ToExperienceWrapper = styled.div`
    position: relative;
    grid-column: 1;
    grid-row: 1;

    @media screen and (max-width: 1368px) {
        grid-column: 2;
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }
`

export const ToExperienceImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 1368px) {
        right: unset;
    }
`