import React from "react"
import styled from "styled-components"

import { IntroArrowWrapper, IntroToAboutWrapper } from "./arrows"
import { Wrapper } from "./common"

import ProfileImage from "../components/image"
import IntroArrow from "../images/intro-arrow.svg"
import IntroToAbout from "../images/intro-to-about.svg"
import IntroToAboutSmall from "../images/intro-to-about-small.svg"

export const Container = styled.div`
    position: relative;
`

export const IntroWrapper = styled.div`
    justify-self: center;
    align-self: center;
    grid-column: 2 / 3;

    @media screen and (max-width: 1100px) {
        grid-column: 1;
    }
`

export const Intro = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 0.35rem;
`

export const PicWrapper = styled.div`
    position: relative;
    grid-column: 3 / 4;

    & > div:first-child {
        width: 100%;
        background: rgba(16, 57, 115, 0.89);
        height: 100%;
        border-radius: 4px;
        position: absolute;
        top: -16px;
        left: 16px;
    }

    @media screen and (max-width: 1100px) {
        grid-column: 2;
    }

    @media screen and (max-width: 880px) {
        display: none;
    }
`

const Banner = () => (
    <Container id="banner">
        <Wrapper banner>
            <IntroWrapper>
                <h2>
                    Hi!
                    <span role="img" aria-label="wave">
                        👋
                    </span>{" "}
                    My name is Peter Garrow.
                </h2>
                <Intro>
                    <div>
                        <h3>I'm a </h3>
                    </div>
                    <div>
                        <h3>
                            husband, <br />
                            father, <br />
                            student, &<br />
                            web developer.
                        </h3>
                    </div>
                </Intro>
            </IntroWrapper>
            <PicWrapper>
                <div className="pic-bkgd" />
                <ProfileImage />
            </PicWrapper>
            <IntroArrowWrapper>
                <img
                    src={IntroArrow}
                    alt="arrow"
                    style={{
                        marginTop: `-3rem`,
                    }}
                />
            </IntroArrowWrapper>
            <IntroToAboutWrapper>
                <picture>
                    <source media="(min-width: 1368px)" srcSet={IntroToAbout} />
                    <source
                        media="(min-width: 400px)"
                        srcSet={IntroToAboutSmall}
                    />
                    <img src={IntroToAbout} alt="Intro to about arrow" />
                </picture>
            </IntroToAboutWrapper>
        </Wrapper>
    </Container>
)

export default Banner
