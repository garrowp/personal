/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithubSquare,
	faLinkedin,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import ToContactArrow from "./arrows/to-contact"

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: calc(960px + 2rem);
	padding-top: 5rem;
	color: #fff;
	position: relative;
	text-align: right;
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

const Contact = () => (
	<div
		id="contact"
		sx={{ variant: `gradients.contact`, backgroundBlendMode: `darken` }}
	>
		<Wrapper>
			<h2 style={{ textAlign: `right` }}>Contact</h2>
			<IconLink
				href="https://github.com/garrowp"
				target="_blank"
				aria-label="Check out my GitHub"
				rel="noopener noreferrer"
			>
				<Icon icon={faGithubSquare} />
			</IconLink>
			<IconLink
				href="https://www.linkedin.com/in/peter-garrow/"
				target="_blank"
				aria-label="Check out my LinkedIn"
				rel="noopener noreferrer"
			>
				<Icon icon={faLinkedin} />
			</IconLink>
			<IconLink
				href="https://twitter.com/PeterGarrow"
				target="_blank"
				aria-label="Check out my Twitter"
				rel="noopener noreferrer"
			>
				<Icon icon={faTwitterSquare} />
			</IconLink>
			{/* <IconLink
				href="mailto:garrow.peter@gmail.com"
				aria-label="Send me an email"
				rel="noopener noreferrer"
			>
				<Icon icon={faEnvelope} />
			</IconLink> */}
			<ToContactArrow />
		</Wrapper>
	</div>
)

export default Contact
