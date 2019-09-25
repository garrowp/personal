import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import ToContactImg from '../images/to-contact.svg'

const Container = styled.div`
  // margin-top: 3rem;
  background: linear-gradient(
    327.56deg,
    #103973 17.22%,
    rgba(16, 57, 115, 0.78) 113.77%
  );
  background-blend-mode: darken;
  // height: 200px;
  // padding-right: 2rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: calc(960px + 2rem);
  // padding: 0px 1.0875rem 2rem;
  padding-top: 5rem;
  color: #fff;
  position: relative;
  text-align: right;
  // padding-right: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 1100px) {
    margin-right: 2rem;
  }
`

const IconLink = styled.a`
  color: #fff;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-left: 1.5rem;
`

const ToContactArrow = styled.img`
    position: absolute;
    right: 0;
    top: 0;

    @media screen and (max-width: 880px) {
      display: none;
    }
`

const Contact = () => (
  <Container id="contact">
    <Wrapper>
      <h2 style={{ textAlign: `right` }}>Contact</h2>
      <IconLink href="https://github.com/garrowp" target="_blank">
        <Icon icon={faGithubSquare} />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/peter-garrow/"
        target="_blank"
      >
        <Icon icon={faLinkedin} />
      </IconLink>
      <IconLink href="https://twitter.com/PeterGarrow" target="_blank">
        <Icon icon={faTwitterSquare} />
      </IconLink>
      <IconLink href="mailto:garrow.peter@gmail.com">
        <Icon icon={faEnvelope} />
      </IconLink>
      <ToContactArrow
        src={ToContactImg}
        alt="To contact arrow"
      />
    </Wrapper>
  </Container>
)

export default Contact
