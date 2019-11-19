/** @jsx jsx */
import { jsx } from "theme-ui"
import useWindowSize from "../../hooks/useWindowSize"

const LargeArrow = () => (
	<svg
		width="111"
		height="140"
		viewBox="0 0 111 140"
		fill="none"
        xmlns="http://www.w3.org/2000/svg"
		alt="Experience Arrow"
		sx={{
			stroke: `secondary`,
		}}
	>
		<path
			d="M44 0V87C44 88.1046 44.8954 89 46 89H67.5C68.6046 89 69.5 88.1046 69.5 87V71.1138C69.5 69.3633 71.5897 68.4575 72.8673 69.6541L107.431 102.03C108.279 102.824 108.274 104.171 107.421 104.959L72.8573 136.898C71.5764 138.081 69.5 137.173 69.5 135.429V121C69.5 119.895 68.6046 119 67.5 119H43.5H4C2.89543 119 2 118.105 2 117V0"
			strokeWidth="4"
		/>
	</svg>
)

const SmallArrow = () => (
	<svg
		width="93"
		height="76"
		viewBox="0 0 93 76"
		fill="none"
        xmlns="http://www.w3.org/2000/svg"
		alt="Experience Arrow"
		sx={{
			stroke: `secondary`,
		}}
	>
		<path
			d="M68 0V13.5V23.9776C68 25.0822 68.8954 25.9776 70 25.9776H88.2972C90.0609 25.9776 90.9612 28.0946 89.7378 29.365L48.1841 72.5122C47.4004 73.326 46.0986 73.3296 45.3105 72.52L3.30526 29.3727C2.07134 28.1053 2.9694 25.9776 4.73831 25.9776H24C25.1046 25.9776 26 25.0822 26 23.9776V0"
			strokeWidth="4"
		/>
	</svg>
)

export default () => {
    const { width } = useWindowSize()

	return (
		<div
			sx={{
				position: `relative`,
				gridColumn: 1,
				gridRow: 1,

				"& svg": {
					position: `absolute`,
					top: 0,
					right: 0,
				},

				"@media screen and (max-width: 1368px)": {
					gridColumn: 2,

					"& svg": {
						right: `unset`,
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
