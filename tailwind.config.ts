import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				custom: '4px 4px 0px 0px rgba(254, 215, 170, 1)',
			},
			scale: {
				'101': '1.01',
			},
			flex: {
				'5': '1 0 calc(50% - 2.5rem)',
			},
		},
	},
	plugins: [],
};
export default config;
