/** @jsx jsx */
import { jsx } from "theme-ui"

import useWindowSize from "../../hooks/useWindowSize"

const LargeArrow = () => (
	<svg
		width="115"
		height="532"
		viewBox="0 0 115 532"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		alt="Intro to About Arrow"
		sx={{
			stroke: `secondary`
		}}
	>
		<path
			d="M30.5 44H67C68.1046 44 69 44.8954 69 46V531V532M0.5 2H111C112.105 2 113 2.89543 113 4V532"
			strokeWidth="4"
		/>
	</svg>
)

const SmallArrow = () => (
	<svg
		width="48"
		height="160"
		viewBox="0 0 48 160"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		alt="Intro to About Arrow"
		sx={{
			stroke: `secondary`
		}}
	>
		<path
			d="M2 22.3188V160M46 0V160"
			strokeWidth="4"
		/>
	</svg>
)

export default () => {
	const size = useWindowSize()
    const width = size.width
    console.log(width)

	return (
		<div
			sx={{
				gridColumn: 4,
				gridRow: `1 / 3`,
				position: `relative`,

				"@media screen and (max-width: 1368px)": {
					gridColumn: 3,
					gridRow: 2,

					"& svg": {
						right: 0,
					},
				},

				"@media screen and (max-width: 1100px)": {
					gridColumn: 2,
				},

				"@media screen and (max-width: 880px)": {
					display: `none`,
				},

				"& svg": {
					position: `absolute`,
					bottom: 0,
					marginBottom: 0,
				},
			}}
		>
			{width > 1368 ? <LargeArrow /> : <SmallArrow />}
		</div>
	)
}
