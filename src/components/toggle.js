/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useEffect, useState } from "react"
import { TweenMax, TweenLite, Elastic, TimelineMax, Linear, Sine } from "gsap"
import { useColorMode } from "theme-ui"


// This toggle is adapted from https://codepen.io/audunvn/pen/XzNaeO by Space
export default () => {
	const [tl] = useState(new TimelineMax({ paused: true }))
	const [colorMode, setColorMode] = useColorMode()
	let allStars = useRef(null)
	let allClouds = useRef(null)

	useEffect(() => {
		TweenMax.set("svg", { visibility: "visible" })
		TweenMax.set(allStars.current.children, {
			transformOrigin: "50% 50%",
		})
		TweenLite.defaultEase = Elastic.easeOut.config(0.58, 0.8)
		tl.timeScale(2.5)
		tl.staggerTo(
			[".sun", ".moonMask", ".moon"],
			1,
			{
				cycle: {
					attr: [
						{ cx: "-=140", cy: "-=20" },
						{ cx: "-=140", cy: "-=20" },
						{ cx: "-=90", cy: "-=0" },
					],
				},
			},
			0
		)

			.staggerTo(
				[".moon", ".sun"],
				1,
				{
					cycle: {
						alpha: [1, 0],
					},
				},
				0,
				"-=1"
			)
			.to(
				".outline",
				1,
				{
					stroke: "#6172AD",
					fill: "#45568D",
				},
				"-=1"
			)

			.staggerFrom(
				allStars.current.children,
				0.9,
				{
					cycle: {
						x: [-20, 30, 40, -30, 60, -40, 80, 90, 100, 110, 120],
					},
					alpha: 0,
				},
				0.005,
				"-=1"
			)

			.staggerTo(
				allClouds.current.children,
				1,
				{
					cycle: {
						x: [40, 20],
					},
					alpha: 0,
				},
				0,
				"-=1"
			)

			.addPause()

			.staggerTo(
				[".sun", ".moonMask", ".moon"],
				1,
				{
					cycle: {
						attr: [
							{ cx: "+=140", cy: "+=20" },
							{ cx: "+=140", cy: "+=20" },
							{ cx: "+=90", cy: "+=0" },
						],
					},
				},
				0
			)
			.staggerTo(
				[".moon", ".sun"],
				1,
				{
					cycle: {
						alpha: [0, 1],
					},
				},
				0,
				"-=1"
			)
			.to(
				".outline",
				1,
				{
					stroke: "#FCFDFE",
					fill: "#85E8FE",
				},
				"-=1"
			)
			.staggerTo(
				allStars.current.children,
				1,
				{
					alpha: 0,
				},
				0,
				"-=1"
			)
			.staggerFromTo(
				allClouds.current.children,
				0.6,
				{
					cycle: {
						y: [120, 160],
						x: [0],
					},
				},
				{
					cycle: {
						y: [0],
						x: [0],
					},
					alpha: 1,
					immediateRender: false,
				},
				0.06,
				"-=1"
			)

			.from(
				[".plane", ".contrail"],
				0.7,
				{
					x: -400,
					ease: Linear.easeNone,
				},
				"-=1"
			)

			.to(".contrail", 0.5, {
				alpha: 0,
				ease: Sine.easeOut,
			})
	}, [allStars])

	useEffect(() => {
		if (colorMode === "dark") {
			tl.play()
		}
	}, [])

	return (
		<div
			sx={{
				"@media screen and (max-width: 880px)": {
					display: `inline-flex`,
					gridArea: `toggle`,
					justifyContent: `flex-end`,
				},
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="250 200 300 200"
				sx={{
					cursor: `pointer`,
					height: `1.5rem`,
					width: `4rem`,

					"@media screen and (max-width: 880px)": {
						height: `2rem`,
					},
				}}
			>
				<title>Day And Night Toggle</title>
				<description>
					A user interface toggle with two options - a sun with a
					cloud that animates to a crescent moon with stars
				</description>
				<defs>
					<filter
						id="shadow"
						x="-100%"
						y="-100%"
						width="250%"
						height="250%"
					>
						<feGaussianBlur stdDeviation="4" result="coloredBlur" />
						<feOffset dx="0" dy="0" result="offsetblur"></feOffset>
						<feFlood
							id="glowAlpha"
							floodColor="#000"
							floodOpacity="0.07"
						></feFlood>
						<feComposite
							in2="offsetblur"
							operator="in"
						></feComposite>
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic"></feMergeNode>
						</feMerge>
					</filter>
					<mask id="moonMask">
						<rect
							id="outlineFill"
							x="225"
							y="215"
							width="350"
							height="170"
							rx="86"
							ry="86"
							fill="#FFF"
							stroke="#000"
							strokeWidth="0"
						/>
						<circle
							className="moonMask"
							cx="487"
							cy="300"
							r="66"
							fill="#06070B"
						/>
					</mask>
					<clipPath id="outlineMask">
						<use href="#outlineFill" />
					</clipPath>

					<path
						id="cloud"
						d="M20.67,42.52h39c22,0,18-16.52,11.19-17.51,1.93-7.5-1.94-25-23.19-25s-24,18-24,18S12.75,13.2,5,18.83C-3.8,25.15-2.33,42.52,20.67,42.52Z"
					/>
				</defs>

				<g className="whole">
					<rect
						className="outline"
						x="220"
						y="210"
						width="360"
						height="180"
						rx="90"
						ry="90"
						fill="#85E8FE"
						stroke="#FCFDFE"
						strokeWidth="10"
					/>
					<g
						className="starGroup"
						fill="#FFF"
						clipPath="url(#outlineMask)"
						ref={allStars}
					>
						<polygon points="405 248.25 406.58 254.42 412.75 256 406.58 257.58 405 263.75 403.42 257.58 397.25 256 403.42 254.42 405 248.25" />
						<path d="M427.33,301.9a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
						<path d="M402.59,367.21a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
						<polygon points="447 325.5 450.17 337.83 462.5 341 450.17 344.17 447 356.5 443.83 344.17 431.5 341 443.83 337.83 447 325.5" />
						<path d="M464,241.53a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
						<polygon points="496 274.25 497.58 280.42 503.75 282 497.58 283.58 496 289.75 494.42 283.58 488.25 282 494.42 280.42 496 274.25" />
						<path d="M503.53,351.38a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
						<path d="M537.18,249.45a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
						<path d="M553,322.68a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" />
					</g>
					<circle
						className="sun"
						cx="486"
						cy="300"
						r="66"
						fill="#FEC100"
					/>
					<g mask="url(#moonMask)">
						<circle
							className="moon"
							cx="403"
							cy="300"
							r="66"
							fill="#FFF"
							opacity="0"
						/>
					</g>

					<g
						className="planeGroup"
						fill="#FFF"
						clipPath="url(#outlineMask)"
						opacity="1"
					>
						<path
							className="plane"
							d="M611.12,262.15l-7.16,0-6.48-5.43-1.06.58,1.93,4.88-3.67.06-3.48-3.37-.78.36,1.26,3.05h-.58a27.07,27.07,0,0,0,4.6,2.24s8.57,0,12.37,0H611c.65,0,2.19,0,2.19-1.25C613.19,262.26,612.05,262.15,611.12,262.15Z"
							fill="#fff"
						/>
						<line
							className="contrail"
							x1="590.17"
							y1="264"
							x2="246.51"
							y2="264"
							fill="none"
							stroke="#fff"
							strokeWidth="1"
						/>
					</g>
					<g
						className="cloudGroup"
						fill="#FFF"
						clipPath="url(#outlineMask)"
						ref={allClouds}
					>
						<g className="cloud" filter="url(#shadow)">
							<rect
								x="515.79"
								y="314.92"
								width="47.15"
								height="10.37"
								rx="5.19"
								ry="5.19"
							/>
							<circle cx="521.45" cy="313.98" r="11.32" />
							<circle cx="540.84" cy="305.91" r="15.61" />
							<circle cx="556.82" cy="316.34" r="8.96" />
						</g>
						<g className="cloud" filter="url(#shadow)">
							<rect
								x="397.85"
								y="349.02"
								width="92.34"
								height="10.37"
								rx="5.19"
								ry="5.19"
								transform="translate(888.03 708.41) rotate(180)"
							/>
							<circle cx="484.53" cy="348.08" r="11.32" />
							<circle cx="432.65" cy="332.46" r="24.66" />
							<circle cx="464.35" cy="338.11" r="17.51" />
							<circle cx="404.21" cy="348.19" r="11.32" />
						</g>
					</g>
				</g>
				<rect
					className="hit"
					x="220"
					y="210"
					width="360"
					height="180"
					rx="90"
					ry="90"
					fill="transparent"
					stroke="none"
					strokeWidth="0"
					onClick={e => {
						if (tl.time() > 0 && tl.time() < tl.duration()) {
							tl.play()
							setColorMode("light")
						} else {
							tl.play(0)
							setColorMode("dark")
						}
					}}
				/>
			</svg>
		</div>
	)
}
