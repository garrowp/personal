/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "@emotion/styled"

import useOnClickOutside from "../hooks/useOnClickOutside"
import useWindowSize from "../hooks/useWindowSize"
import Image from "../images/profile-square.jpeg"
import ToggleColorMode from "./toggle"

const StyledNav = styled.nav`
	transition: all 0.2s ease-in-out;
	grid-area: nav;

	@media screen and (max-width: 880px) {
		display: flex;
		flex-direction: column;
		text-align: center;
		overflow: hidden;
		max-height: 0;
		background-color: ${p => p.theme.colors.background};
	}
`

const StyledLink = styled(AnchorLink)`
	text-decoration: none;
	padding: 1.5rem;
	margin: 0.5rem;
	color: ${p => p.theme.colors.text};

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
	background-color: ${p => p.theme.colors.text};
	display: block;
	transition: background 0.2s ease-out;

	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		background-color: ${p => p.theme.colors.text};
		display: block;
		transition: all 0.2s ease-out;
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

	&:checked
		~ ${MenuLabel}:not(.steps)
		${MenuButton}:before,
		&:checked
		~ ${MenuLabel}:not(.steps)
		${MenuButton}:after {
		top: 0;
	}

	&:checked ~ ${StyledNav} {
		max-height: 250px;
		overflow: auto;
	}
`

const Logo = ({ title }) => (
	<LogoWrapper>
		<AnchorLink href="#banner" aria-label="Profile Image">
			<ImageIcon />
		</AnchorLink>
		<h4>
			<AnchorLink
				href="#banner"
				sx={{ textDecoration: `none`, color: `text` }}
				aria-label="Site name"
			>
				{title}
			</AnchorLink>
		</h4>
	</LogoWrapper>
)

const NavBar = ({ isMenuOpen, toggleMenu }) => {
	const size = useWindowSize()

	const checkSize = width => {
		return width <= 880 ? 100 : 0
	}

	const clickHandler = () => {
		toggleMenu(false)
	}

	return (
		<>
			<Toggle
				id="toggle"
				type="checkbox"
				name="toggle"
				aria-label="Hamburger menu toggle"
				checked={isMenuOpen}
				onChange={() => toggleMenu(isMenuOpen)}
			/>
			<MenuLabel htmlFor="toggle" onClick={() => toggleMenu(!isMenuOpen)}>
				<MenuButton />
			</MenuLabel>

			<StyledNav>
				<StyledLink
					offset={checkSize(size.width)}
					href="#about"
					onClick={clickHandler}
				>
					About
				</StyledLink>
				<StyledLink
					offset={checkSize(size.width)}
					href="#projects"
					onClick={clickHandler}
				>
					Projects
				</StyledLink>
				<StyledLink
					offset={checkSize(size.width)}
					href="#contact"
					onClick={clickHandler}
				>
					Contact
				</StyledLink>
			</StyledNav>
			<ToggleColorMode sx={{ gridArea: `toggle` }} />
		</>
	)
}

const Header = ({ siteTitle }) => {
	const navRef = useRef(null)
	const [isMenuOpen, toggleMenu] = useState(false)

	useOnClickOutside(navRef, () => {
		toggleMenu(false)
	})

	return (
		<header
			sx={{
				display: `flex`,
				flexDirection: `row`,
				justifyContent: `flex-end`,
				paddingTop: `1.5rem`,
				paddingBottom: `1rem`,
				paddingRight: `4rem`,
				width: `100%`,
				backgroundColor: `background`,
				zIndex: 10000,

				"@media screen and (max-width: 880px)": {
					paddingRight: 0,
					display: `grid`,
					gridTemplateColumns: `1fr`,
					gridTemplateAreas: `"logo toggle menu"
                                        "nav nav nav"`,
					position: `fixed`,
					justifyContent: `unset`,
					alignItems: `center`,
					boxShadow: `0px 0px 6px 2px rgba(187, 187, 187, 0.2)`,
					paddingBottom: 0,
					paddingTop: `1rem`,
				},
			}}
			ref={navRef}
		>
			<Logo title={siteTitle} toggleMenu={toggleMenu} />
			<NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
