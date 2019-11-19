/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
	<div
		sx={{
			position: `relative`,
			gridRow: 2,
			gridColumn: 3,

			zIndex: -100,

			"& svg": {
				position: `absolute`,
				bottom: 0,
				right: `23px`,
				marginBottom: 0,
			},

			"@media screen and (max-width: 1100px)": {
				gridColumn: 2,
			},

			"@media screen and (max-width: 880px)": {
				display: `none`,
			},
		}}
	>
		<svg
			width="46"
			height="67"
			viewBox="0 0 46 67"
			fill="none"
            xmlns="http://www.w3.org/2000/svg"
			alt="Experience to Contact Arrow"
			sx={{
				stroke: `secondary`
			}}
		>
			<path
				d="M2 27V67M44 0V67"
				strokeWidth="4"
			/>
		</svg>
	</div>
)
