/** @jsx jsx */
// import React from "react"
import { jsx } from "theme-ui"

export default () => (
	<div
		sx={{
			gridColumn: `2 / 4`,
			gridRow: 2,
			textAlign: `center`,
			"@media screen and (max-width: 1100px)": {
				gridColumn: `1 / 3`,
			},
			"@media screen and (max-width: 880px)": {
				display: `none`,
			},
		}}
	>
		<svg
			width="640"
			height="212"
			viewBox="0 0 640 212"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ marginTop: `-3rem`, marginBottom: `1.45rem` }}
			alt="Intro Arrow"
			sx={{
				stroke: `secondary`,
			}}
		>
			<path
				d="M43.5 25.5V179C43.5 180.657 44.8431 182 46.5 182H561.5C563.157 182 564.5 180.657 564.5 179V146.5C564.5 144.843 563.157 143.5 561.5 143.5H535.795C533.049 143.5 531.746 140.115 533.784 138.274L582.989 93.8171C584.131 92.7851 585.869 92.7851 587.011 93.8171L636.216 138.274C638.254 140.115 636.951 143.5 634.205 143.5H609.5C607.843 143.5 606.5 144.843 606.5 146.5V206.5C606.5 208.157 605.157 209.5 603.5 209.5H5.00001C3.34316 209.5 2 208.157 2 206.5V0"
				strokeWidth="4"
			/>
		</svg>
	</div>
)
