/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import { Wrapper } from "./common"
import IntroArrow from "./arrows/intro-arrow"
import IntroToAbout from "./arrows/intro-to-about-arrow"

import ProfileImage from "../components/image"

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

	& > div.pic-bkgd {
		width: 100%;
		background: rgba(16, 57, 115, 0.89);
		background: ${p => p.theme.colors.primary};
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
	<div
		id="banner"
		sx={{ position: `relative`, backgroundColor: `background` }}
	>
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
			<IntroArrow />
			<IntroToAbout />
		</Wrapper>
	</div>
)

export default Banner
