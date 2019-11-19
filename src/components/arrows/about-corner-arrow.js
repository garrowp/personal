/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
	<div
		sx={{
			position: `relative`,
			gridRow: 1,
			gridColumn: 4,

			"& svg": {
				position: `absolute`,
				top: 0,
				left: 0,
			},

			"@media screen and (max-width: 1368px)": {
				gridColumn: 3,

				"& svg": {
					left: `unset`,
					right: 0,
				},
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
			width="115"
			height="139"
			viewBox="0 0 115 139"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			alt="Corner Arrow"
			sx={{
				stroke: `background`,
			}}
		>
			<path
				d="M69 0V98.5C69 99.6046 68.1046 100.5 67 100.5H0.5M113 0V134.5C113 135.605 112.105 136.5 111 136.5H0.5"
				strokeWidth="4"
			/>
		</svg>
	</div>
)
