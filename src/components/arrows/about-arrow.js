/** @jsx jsx */
import { jsx } from "theme-ui"

const Arrow = () => (
	<svg
		width="545"
		height="89"
		viewBox="0 0 545 89"
		fill="none"
        xmlns="http://www.w3.org/2000/svg"
        alt="About arrow"
		preserveAspectRatio="none"
		sx={{
			stroke: `background`,
		}}
	>
		<path
			d="M544.5 28.5H51.5002C50.3956 28.5 49.5002 27.6046 49.5002 26.5V4.63927C49.5002 3.12901 47.9044 2.18784 46.5999 2.85274C46.4828 2.91244 46.3801 2.99668 46.2851 3.08752L3.86469 43.6351C3.76966 43.7259 3.66367 43.8049 3.55989 43.8856C2.52436 44.691 2.54158 46.2785 3.59483 47.0612C3.69938 47.1389 3.80607 47.2148 3.90227 47.3026L46.3192 86.0284C46.4154 86.1162 46.5189 86.1974 46.6362 86.2542C47.9389 86.8851 49.5002 85.9419 49.5002 84.4499V66.5C49.5002 65.3954 50.3956 64.5 51.5002 64.5H544.5"
			strokeWidth="4"
		/>
	</svg>
)

export default () => {
	return (
		<div
			sx={{
				position: `relative`,
				gridRow: 1,
				gridColumn: `2 / 4`,

				"& svg": {
					position: `absolute`,
					bottom: 0,
					right: `-4rem`,
					marginBottom: 0,
					width: `800px`,
				},

				"@media screen and (max-width: 1368px)": {
					"& svg": {
						right: `3rem`,
						width: `65%`,
					},
				},

				"@media screen and (max-width: 1100px)": {
					gridColumn: `1 / 3`,

					"& svg": {
						bottom: `-1px`,
						right: `3rem`,
					},
				},

				"@media screen and (max-width: 880px)": {
					display: `none`,
				},
			}}
		>
			<Arrow />
		</div>
	)
}
