/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
	<div
		sx={{
			position: `absolute`,
			right: 0,
			top: 0,

			"@media screen and (max-width: 880px)": {
				display: `none`,
			},
		}}
	>
		<svg
			width="93"
			height="76"
			viewBox="0 0 93 76"
			fill="none"
            xmlns="http://www.w3.org/2000/svg"
			alt="To Contact Arrow"
			sx={{
				stroke: `accent`,
			}}
		>
			<path
				d="M68 0V13.5V23.9776C68 25.0822 68.8954 25.9776 70 25.9776H88.2972C90.0609 25.9776 90.9612 28.0946 89.7378 29.365L48.1841 72.5122C47.4004 73.326 46.0986 73.3296 45.3105 72.52L3.30526 29.3727C2.07134 28.1053 2.9694 25.9776 4.73831 25.9776H24C25.1046 25.9776 26 25.0822 26 23.9776V0"
				strokeWidth="4"
			/>
		</svg>
	</div>
)
