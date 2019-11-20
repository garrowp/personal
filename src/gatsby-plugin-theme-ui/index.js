export default {
	initialColorModeName: 'light',
	colors: {
		text: "#333",
		background: "#fff",
		primary: "#103973",
		primaryLight: "#103973c7",
		secondary: "rgba(49, 139, 213, .5)",
		accent: "#fff",
		card: "#fff",
		modes: {
			dark: {
				text: "#fff",
				background: "#10213C",
				primary: "#21325A",
				primaryLight: "#21325A",
				secondary: "#F7BF00",
				accent: "#14ffec",
				card: "#21325A",
			},
		},
	},
	fonts: {
		body: "system-ui, sans-serif",
		heading: "system-ui, sans-serif",
		monospace: "Menlo, monospace",
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	gradients: {
		about: {
			background: t => {
				return `linear-gradient(135deg, ${t.colors.primary} 29%, ${t.colors.primaryLight} 102%)`
			},
		},
		contact: {
			background: t =>
				`linear-gradient(325deg, ${t.colors.primary} 17%, ${t.colors.primaryLight} 114%)`,
		},
	},
}
