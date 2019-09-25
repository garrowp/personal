import PropTypes from "prop-types"
import React, { useRef } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import useWindowSize from '../hooks/useWindowSize'
import Image from '../images/garrow_badge_photo.jpg'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-right: 4rem;
  width: 100%;
  background-color: #fff;
  z-index: 10000;

  @media screen and (max-width: 880px) {
    padding-right: 0;
    display: grid;
    grid-template-areas: "logo logo menu"
                         "nav nav nav";
    position: fixed;
    justify-content: unset;
    align-items: center;
    box-shadow: 0px 0px 6px 2px rgba(187, 187, 187, 0.2);
    padding-bottom: 0;
    padding-top: 1rem;
  }
`

const StyledNav = styled.nav`
  transition: all .2s ease-in-out;
  grid-area: nav;

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    max-height: 0;
    background-color: #fff;
  }
`

const StyledLink = styled(AnchorLink)`
    text-decoration: none;
    padding: 1.5rem;
    margin: .5rem;
    color: #20477D;

    @media screen and (max-width: 880px) {
      border-bottom: 1px solid #eee;
      margin: 0;
      padding: 1rem;

    }
`

const MenuLabel = styled.label`
  visibility: hidden;
  cursor: pointer;
  padding: 28px 20px;
  position: relative;
  display: flex;
  justify-self: flex-end;

  @media screen and (max-width: 880px) {
    visibility: visible;
  }

  grid-area: menu;
`

const MenuButton = styled.span`
  position: relative;
  width: 18px;
  height: 2px;
  background-color: #333;
  display: block;
  transition: background .2s ease-out;

  &::before, &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #333;
    display: block;
    transition: all .2s ease-out;
  }

  &:before {
    top: 5px;
  }
  
  &:after {
    bottom: 5px;
  }
`

const ImageIcon = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 100%;
  background-image: url(${Image});
  background-position: center center;
  background-size: cover;
`

const LogoWrapper = styled.div`
  grid-area: logo;
  padding-left: 20px;
  padding-bottom: 10px;
  visibility: hidden;
  display: flex;
  align-items: center;

  & h4 {
    padding-left: 1rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 880px) {
    visibility: visible;
  }
`

const Toggle = styled.input`
  position: absolute;
  left: -100%;
  top: -100%;

  &:checked ~ ${MenuLabel} ${MenuButton} {
    background: transparent;
  }

  &:checked ~ ${MenuLabel} ${MenuButton}:before {
    transform: rotate(-45deg);
  }

  &:checked ~ ${MenuLabel} ${MenuButton}:after {
    transform: rotate(45deg);
  }

  &:checked ~ ${MenuLabel}:not(.steps) ${MenuButton}:before, &:checked ~ ${MenuLabel}:not(.steps) ${MenuButton}:after {
    top: 0;
  }
  

  &:checked ~ ${StyledNav} {
    max-height: 250px;
    overflow: auto;
  }
`

const Logo = ({ title }) => (
  <LogoWrapper>
    <AnchorLink href="#banner">
      <ImageIcon />
    </AnchorLink>
    <h4>
      <AnchorLink href="#banner" style={{ textDecoration: `none`, color: `initial` }}>
        {title}
      </AnchorLink>
    </h4>
  </LogoWrapper>
)

const NavBar = () => {
  const size = useWindowSize();
  const labelRef = useRef(null);

  const checkSize = ( width )  =>{
    return width <= 880 ? 100 : 0;
  }

  const clickHandler = () => {
    console.log('here');
    labelRef.current.click();
  }

  return (
     // <div style={{ display: `flex`, justifyContent: `flex-end`, alignItems: `center`  }}>
      <>
      <Toggle id='toggle' type='checkbox' />
      <MenuLabel htmlFor='toggle' ref={labelRef}>
        <MenuButton onClick={() => console.log('clicking the button')}/>
      </MenuLabel>

      <StyledNav>
          <StyledLink offset={checkSize(size.width)} href='#about' onClick={clickHandler}>About</StyledLink>
          <StyledLink offset={checkSize(size.width)} href='#experience' onClick={clickHandler}>Experience</StyledLink>
          <StyledLink offset={checkSize(size.width)} href='#contact' onClick={clickHandler}>Contact</StyledLink>
      </StyledNav>
    </>
  // </div>
  )

}
 
const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Logo title={siteTitle} />
      <NavBar />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
