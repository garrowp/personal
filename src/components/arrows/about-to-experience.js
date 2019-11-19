/** @jsx jsx */
import { jsx } from "theme-ui"
import useWindowSize from "../../hooks/useWindowSize"

const LargeArrow = () => (
	<svg
		width="111"
		height="201"
		viewBox="0 0 111 201"
		fill="none"
        xmlns="http://www.w3.org/2000/svg"
		alt="About to Experience Arrow"
		sx={{
			stroke: `accent`,
		}}
	>
		<path
			d="M110.5 2H4C2.89543 2 2 2.89543 2 4V201M86.5 40H46C44.8954 40 44 40.8954 44 42V201"
			strokeWidth="4"
		/>
	</svg>
)

const SmallArrow = () => (
	<svg
		width="46"
		height="121"
		viewBox="0 0 46 121"
		fill="none"
        xmlns="http://www.w3.org/2000/svg"
		alt="About to Experience Arrow"
		sx={{
			stroke: `accent`,
		}}
	>
		<path d="M2 0V122M44 38V122" strokeWidth="4" />
	</svg>
)

export default () => {
	const { width } = useWindowSize()

	return (
		<div
			sx={{
				position: `relative`,
				gridRow: 2,
				gridColumn: 1,

				"& svg": {
					position: `absolute`,
					marginBottom: 0,
					bottom: 0,
					right: 0,
				},

				"@media screen and (max-width: 1368px)": {
					gridColumn: 2,

					"& svg": {
						right: `unset`,
						left: `24px`,
					},
				},

				"@media screen and (max-width: 1100px)": {
					gridColumn: 1,
				},

				"@media screen and (max-width: 880px)": {
					display: `none`,
				},
			}}
		>
			{width > 1368 ? <LargeArrow /> : <SmallArrow />}
		</div>
	)
}
