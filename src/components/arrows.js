import styled from 'styled-components'

export const IntroArrowWrapper = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  text-align: center;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }
`

export const IntroToAboutWrapper = styled.div`
  grid-column: 4;
  grid-row: 1 / 3;
  position: relative;

  @media screen and (max-width: 1368px) {
    grid-column: 3;
    grid-row: 2;

    & img {
      right: 0;
    }
  }

  @media screen and (max-width: 1100px) {
    grid-column: 2;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }

  & img {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
  }
`

export const ArrowCornerWrapper = styled.div`
    position: relative;
    grid-row: 1;
    grid-column: 4;

    & img {
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 1368px) {
        grid-column: 3;
        
        & img {
            left: unset;
            right: 0;
        }
    }

    @media screen and (max-width: 1100px) {
        grid-column: 2;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const ToAboutWrapper = styled.div`
    position: relative;
    grid-row: 1;
    grid-column: 2 / 4;

    & img {
        position: absolute;
        bottom: 0;
        right: -4rem;
        margin-bottom: 0;
    }

    @media screen and (max-width: 1368px) {
        & img {
            right: 3rem;
        }
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1 / 3;

        & img {
            bottom: -1px;
            right: 3rem;
        }
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const AboutToExperienceWrapper = styled.div`
    position: relative;
    grid-row: 2;
    grid-column: 1;

    & img {
        position: absolute;
        margin-bottom: 0;
        bottom: 0;
        right: 0;
    }

    @media screen and (max-width: 1368px) {
        grid-column: 2;

        & img {
            right: unset;
            left: 24px;
        }
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const ToExperienceWrapper = styled.div`
    position: relative;
    grid-column: 1;
    grid-row: 1;

    & img {
        position: absolute;
        top: 0;
        right: 0;
    }

    @media screen and (max-width: 1368px) {
        grid-column: 2;

        & img  {
            right: unset;
        }
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }

    @media screen and (max-width: 880px) {
        display: none;
      }
`