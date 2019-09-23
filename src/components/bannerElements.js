import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto ${960 / 2}px ${960 / 2}px auto;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 8rem;

  @media screen and (max-width: 1368px) {
    
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0.35rem;
`

export const IntroWrapper = styled.div`
  justify-self: center;
  align-self: center;
  grid-column: 2 / 3;

  @media screen and (max-width: 1100px) {
    grid-column: 1;
  }
`

export const PicWrapper = styled.div`
  position: relative;
  grid-column: 3 / 4;

  @media screen and (max-width: 1100px) {
    grid-column: 2;
  }
`

export const PicBackground = styled.div`
  width: 100%;
  background: rgba(16, 57, 115, 0.89);
  height: 100%;
  border-radius: 4px;
  position: absolute;
  top: -16px;
  left: 16px;
`

export const IntroArrowWrapper = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  text-align: center;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / 3;
  }
`

export const IntroToAboutWrapper = styled.div`
  grid-column: 4;
  grid-row: 1 / 3;
  position: relative;

  @media screen and (max-width: 1368px) {
    grid-column: 3;
    grid-row: 2;
  }

  @media screen and (max-width: 1100px) {
    grid-column: 2;
  }
`

export const IntroToAboutImg = styled.img`
  position: absolute;
  bottom: 0;
  margin-bottom: 0;

  @media screen and (max-width: 1368px) {
      right: 0;
  }
`
