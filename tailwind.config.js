/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "#1B1B1D",
		  foreground: "var(--foreground)",
		  text_color: "#f0f0f0",
		},
		fontFamily: {
		  Inter: ["Inter", "sans-serif"],
		  Poppins: ["Poppins", "sans-serif"],
		  sans: ["ui-sans-serif", "system-ui"],
		  serif: ["ui-serif", "Georgia"],
		  mono: ["ui-monospace", "SFMono-Regular"],
		},
		keyframes: {
		  scaleUp: {
			"0%": {
			  transform: "scale(0.8)",
			  opacity: "0",
			},
			"100%": {
			  transform: "scale(1)",
			  opacity: "1",
			},
		  },
		  marquee: {
			from: {
			  transform: "translateX(0)",
			},
			to: {
			  transform: "translateX(calc(-100% - var(--gap)))",
			},
		  },
		  "marquee-vertical": {
			from: {
			  transform: "translateY(0)",
			},
			to: {
			  transform: "translateY(calc(-100% - var(--gap)))",
			},
		  },
		  "open-menu": {
			"0%": {
			  transform: "scaleY(0)",
			},
			"100%": {
			  transform: "scaleY(1)",
			},
		  },
		},
		animation: {
			spinslow: 'spin 10s linear infinite',
		  scaleUp: "scaleUp 0.4s ease-in-out forwards",
		  marquee: "marquee var(--duration) infinite linear",
		  "marquee-vertical": "marquee-vertical var(--duration) infinite linear",
		  "open-menu": "open-menu 0.4s ease-in-out forwards",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  