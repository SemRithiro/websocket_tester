import { extendTheme } from "@chakra-ui/react";
import "@fontsource/aileron";
import "@fontsource/allison";

export const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
	// styles,
};

const activeLabelMDStyles = {
	transform: "scale(0.85) translateY(-24px) translateX(-10px)",
};

const activeLabelSMStyles = {
	transform: "scale(0.85) translateY(-20px) translateX(-10px)",
};

export const theme = extendTheme({
	config,
	colors: {
		brand: {
			50: "#f4f4f7",
			100: "#e9e9ef",
			200: "#c8c8d8",
			300: "#a7a7c1",
			400: "#646492",
			500: "#222263",
			600: "#1f1f59",
			700: "#1a1a4a",
			800: "#14143b",
			900: "#111131",
		},
	},
	styles: {
		global: {
			"*": {
				"&::-webkit-scrollbar": {
					width: "4px",
					height: "4px",
				},
				"&::-webkit-scrollbar-track": {
					width: "6px",
					height: "4px",
					background: "#ccc",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "gray",
					borderRadius: "24px",
				},
				b: {
					color: "red",
				},
				scrollbarWidth: "thin",
				fontFamily: "Aileron",
			},
		},
	},
	components: {
		Form: {
			variants: {
				floating_md: {
					container: {
						_focusWithin: {
							label: {
								color: "black",
								...activeLabelMDStyles,
							},
						},
						"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
							...activeLabelMDStyles,
						},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							color: "gray",
							position: "absolute",
							backgroundColor: "white",
							pointerEvents: "none",
							mx: 3,
							px: 1,
							my: 2,
						},
					},
				},
				floating_sm: {
					container: {
						_focusWithin: {
							label: {
								color: "black",
								...activeLabelSMStyles,
							},
						},
						"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
							...activeLabelSMStyles,
						},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							fontSize: 14,
							color: "gray",
							position: "absolute",
							backgroundColor: "white",
							pointerEvents: "none",
							mx: 3,
							px: 1,
							my: 1.5,
						},
					},
				},
			},
		},
	},
});
